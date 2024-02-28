import React, {
  useMemo,
  useState,
  useCallback
} from 'react'
import Main from './Main'

export default function MultiScene ({json, options, _context, scenesContext}) {
  const [count, setCount] = useState(0)
  const [popupIds, setPopupIds] = useState<any>([])

  const {mainPageJson} = useMemo(() => {
    return {
      mainPageJson: json.scenes.filter(t => t.type !== 'popup')?.[0],
    }
  }, [])

  const scenesMap = useMemo(() => {
    if (Array.isArray(json.scenes)) {
      json.scenes.forEach(scene => {
        scenesContext.scenesMap[scene.id].json = scene;
        scenesContext.scenesMap[scene.id].type = scene.slot?.showType || scene.type;
      })
    }
    return scenesContext.scenesMap
  }, [])


  useMemo(() => {
    if (options.ref) {
      const ref = options.ref
      options.ref = (cb) => (_refs) => {
        cb(_refs)
        return ref.call(options, _refs)
      }
    } else {
      options.ref = (cb) => (_refs) => {
        cb(_refs)
      }
    }
  }, [])


  const getOptions = useCallback((id) => {
    const scenes = scenesMap[id]
    const { env } = options
    

    env.canvas.open = async (sceneId, params, openType) => {
      // console.log(`打开场景 -> ${sceneId}`)
      let scenes = scenesMap[sceneId]

      // 说明是打开弹窗
      if (scenes.type === 'popup') {
        setPopupIds((popupIds) => {
          return popupIds.indexOf(sceneId) > -1 ? popupIds : [...popupIds, sceneId]
        })
      } else { // 说明是打开页面
        await env.canvas._open(sceneId, params, openType)
        return
      }
    }
 

    env.scenesOperate = scenesContext.scenesOperate

    return {
      ...options,
      env,
      get disableAutoRun() {
        return scenes.disableAutoRun
      },
      ref: options.ref((_refs) => {
        // console.log(`场景注册_refs -> ${id}`)
        scenes._refs = _refs
        const todo = scenes.todo
        const { inputs, outputs } = _refs
        const disableAutoRun = scenes.disableAutoRun

        scenes.json.outputs.forEach((output) => {
          outputs(output.id, (value) => {
            // TODO: 临时，后续应该给场景一个回调
            if (output.id === 'apply') {
              scenes.parentScope?.outputs[output.id](value)
            } else {
              if (scenes.type !== 'module') {
                scenes.show = false
                scenes.todo = []
                scenes._refs = null
                scenes.parentScope?.outputs[output.id](value)
                scenes.parentScope = null
                if (scenes.type === 'popup') {
                  setPopupIds((popupIds) => {
                    return popupIds.filter((id) => id !== scenes.json.id)
                  })
                } else {
                  setCount((count) => count+1)
                }
              } else {
                scenes.parentScope?.outputs[output.id](value)
              }
            }
          })
        })

        if (todo.length) {
          todo.forEach(({type, todo}) => {
            if (type === 'inputs') {
              Promise.resolve().then(() => {
                inputs[todo.pinId](todo.value,id)
              })
            } else if (type === 'globalVar') {
              const { comId, value, bindings } = todo
              _notifyBindings(_refs, comId, bindings, value)
            }
          })
  
          scenes.todo = []
        } else if (!disableAutoRun) {
          scenes.disableAutoRun = true
          Promise.resolve().then(() => {
            scenes.json.inputs?.forEach?.((input) => {
              const { id, mockData } = input
              let value = void 0
              if (options.debug && typeof mockData !== 'undefined') {
                try {
                  value = JSON.parse(decodeURIComponent(mockData))
                } catch {
                  value = mockData
                }
              }
              inputs[id](value)
            })
          })
        }

        if (disableAutoRun) {
          Promise.resolve().then(() => {
            _refs.run()
          })
        }
      }),
      _env: {
        loadCSSLazy() {},
        currentScenes: {
          close() {
            scenes.show = false
            scenes.todo = []
            scenes._refs = null
            // scenes.parentScope = null
            if (scenes.type === 'popup') {
              setPopupIds((popupIds) => {
                return popupIds.filter((id) => id !== scenes.json.id)
              })
            } else {
              setCount((count) => count+1)
            }
          }
        }
      },
      scenesOperate: scenesContext.scenesOperate
    }
  }, [])

  const popups = useMemo(() => {
    if (popupIds.length) {
      return popupIds.map((sceneId) => {
        const scene = scenesMap[sceneId]
        const json = scene.json
        const { id } = json
        
        return <Main key={json.id} json={{...json}} opts={getOptions(id)} style={{position: 'absolute', top: 0, left: 0, backgroundColor: '#ffffff00'}} _context={_context} />
      })
    }
   
    return null
  }, [popupIds])

  return (
    <React.Fragment>
      <Main key={mainPageJson.id} json={mainPageJson} opts={getOptions(mainPageJson.id)} _context={_context} />
      {popups}
    </React.Fragment>
  )
}


function _notifyBindings(_refs, comId, bindings, value) {
  const com = _refs.get(comId)
  if (com) {
    if (Array.isArray(bindings)) {
      bindings.forEach((binding) => {
        let nowObj = com
        const ary = binding.split('.')
        ary.forEach((nkey, idx) => {
          if (idx !== ary.length - 1) {
            nowObj = nowObj[nkey]
          } else {
            nowObj[nkey] = value
          }
        })
      })
    }
  }
}
