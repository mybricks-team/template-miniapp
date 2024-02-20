import React, {
  useMemo,
  useState,
  useCallback
} from 'react'
import executor from './executor'
import Main from './Main'

export default function MultiScene ({json, options, _context}) {
  const [count, setCount] = useState(0)
  const [popupIds, setPopupIds] = useState<any>([])

  const {mainPageJson, scenesMap, scenesOperateInputsTodo, themes, permissions, globalVarMap} = useMemo(() => {
    return {
      scenesMap: json.scenes.reduce((acc, json, index) => {
        return {
          ...acc,
          [json.id]: {
            show: index === 0,
            todo: [],
            json,
            disableAutoRun: !!(options.disableAutoRun || index),
            useEntryAnimation: false,
            type: json.slot?.showType || json.type
          }
        }
      }, {}),
      mainPageJson: json.scenes.filter(t => t.type !== 'popup')?.[0],
      scenesOperateInputsTodo: {},
      themes: json.themes,
      permissions: json.permissions || [],
      globalVarMap: {},
    }
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

  const { fxToJsonMap, currentFxFrameIdsMap } = useMemo<any>(() => {
    const fxToJsonMap: any = {}
    const { global } = json
    if (global) {
      const { fxFrames } = global
      if (Array.isArray(fxFrames)) {
        fxFrames.forEach((fxFrame) => {
          fxToJsonMap[fxFrame.id] = fxFrame
        })
      }
    }

    return {
      fxToJsonMap,
      currentFxFrameIdsMap: {}
    }
  }, [])

  const getOptions = useCallback((id) => {
    const scenes = scenesMap[id]
    const { env } = options
    

    env.canvas.open = async (sceneId, params, openType) => {
      // console.log(`打开场景 -> ${sceneId}`)
      let scenes = scenesMap[sceneId]


      // 说明是打开页面
      if (!scenes) {
        await env.canvas._open(sceneId, params, openType)
        return
      }

      // 说明是打开弹窗
      if (scenes.type === 'popup') {
        setPopupIds((popupIds) => {
          return popupIds.indexOf(sceneId) > -1 ? popupIds : [...popupIds, sceneId]
        })
      }

      // if (!scenes) {
      //   if (typeof options.scenesLoader !== 'function') {
      //     console.error(`缺少场景信息: ${sceneId}`)
      //     return
      //   }
      //   const json = await options.scenesLoader({id: sceneId})

      //   scenes = {
      //     disableAutoRun: false,
      //     json,
      //     show: false,
      //     parentScope: null,
      //     todo: [],
      //     type: json.slot?.showType || json.type,
      //     useEntryAnimation: false
      //   }

      //   scenesMap[sceneId] = scenes
      //   if (json.type === 'popup') {
      //   } else {
      //     setPageScenes((pageScenes) => {
      //       return [...pageScenes, json]
      //     })
      //   }
      //   if (scenesOperateInputsTodo[sceneId]) {
      //     const { parentScope, todo } = scenesOperateInputsTodo[sceneId]
      //     scenes.parentScope = parentScope
      //     todo.forEach(({value, pinId, parentScope}) => {
      //       scenes.todo = scenes.todo.concat({type: 'inputs', todo: {
      //         pinId,
      //         value
      //       }})
      //     })
      //   }
      // }

      // if (openType) {
      //   Object.entries(scenesMap).forEach(([key, scenes]: any) => {
      //     if (key === sceneId) {
      //       if (openType === 'blank') {
      //         scenes.useEntryAnimation = true
      //       } else {
      //         scenes.useEntryAnimation = false
      //       }
      //       scenes.show = true
      //       if (scenes.type === 'popup') {
      //         setPopupIds((popupIds) => {
      //           return [...popupIds, sceneId]
      //         })
      //       } else {
      //         setCount((count) => count+1)
      //       }
      //     } else {
      //       scenes.show = false
      //       scenes._refs = null
      //       if (scenes.type === 'popup') {
      //         setPopupIds((popupIds) => {
      //           return popupIds.filter((id) => id !== scenes.json.id)
      //         })
      //       } else {
      //         setCount((count) => count+1)
      //       }
      //     }
      //   })
      // } else {
      //   if (!scenes.show) {
      //     if (openType === 'blank') {
      //       scenes.useEntryAnimation = true
      //     } else {
      //       scenes.useEntryAnimation = false
      //     }
      //     scenes.show = true
      //     if (scenes.type === 'popup') {
      //       setPopupIds((popupIds) => {
      //         return [...popupIds, sceneId]
      //       })
      //     } else {
      //       setCount((count) => count+1)
      //     }
      //   }
      // }
    }

    // TODO:挪出去，优化一下
    const scenesOperate = {
      open({todo, frameId, parentScope, comProps}) {
        const scenes = scenesMap[frameId]

        if (scenes) {
          if (!scenes.show) {
            scenes.show = true
            scenes.todo = scenes.todo.concat({type: 'inputs', todo})
            scenes.parentScope = parentScope
  
            if (scenes.type === 'popup') {
              setPopupIds((popupIds) => {
                return [...popupIds, frameId]
              })
            } else {
              setCount((count) => count+1)
            }
          }
        } else {
          const fxtojson = fxToJsonMap[frameId]
          if (fxtojson) {
            if (!currentFxFrameIdsMap[parentScope.id]) {
              currentFxFrameIdsMap[parentScope.id] = {}
              const { id } = fxtojson
              const { env } = options
              const scenesOperate = {
                open({todo, frameId, parentScope, comProps}) {
                  // console.log('fx scenesOperate.open', {
                  //   todo,
                  //   frameId,
                  //   parentScope
                  // })
                  const fxtojson = fxToJsonMap[frameId]
                  if (fxtojson) {
                    if (!currentFxFrameIdsMap[parentScope.id]) {
                      currentFxFrameIdsMap[parentScope.id] = {}
                      // const { id } = fxtojson
                      const { env } = options
                      const scenesOperate = {
                        open({todo, frameId, parentScope, comProps}) {
                          // console.log('fx scenesOperate.open', {
                          //   todo,
                          //   frameId,
                          //   parentScope
                          // })

                          const fxFrame = currentFxFrameIdsMap[parentScope.id]
                          
                          if (fxFrame?._refs) {
                            currentFxFrameIdsMap[parentScope.id].parentScope = parentScope
                            const configs = comProps?.data?.configs
                            if (configs) {
                              Object.entries(configs).forEach(([key, value]) => {
                                fxFrame._refs.inputs[key](value, void 0, false)
                              })
                            }
                            fxFrame._refs.inputs[todo.pinId](todo.value, void 0, false)
                            fxFrame._refs.run()
                          }
                        },
                        inputs({frameId, parentScope, value, pinId}) {
                          // console.log('fx 场景触发inputs: ', {
                          //   frameId, parentScope, value, pinId
                          // })
                          const scenes = scenesMap[frameId]
                          if (!scenes) {
                            if (!scenesOperateInputsTodo[frameId]) {
                              scenesOperateInputsTodo[frameId] = {
                                parentScope,
                                todo: [{value, pinId}]
                              }
                            } else {
                              scenesOperateInputsTodo[frameId].todo.push({frameId, parentScope, value, pinId})
                            }
                          } else {
                            scenes.parentScope = parentScope
                
                            if (scenes._refs) {
                              scenes._refs.inputs[pinId](value)
                            } else {
                              scenes.todo = scenes.todo.concat({type: 'inputs', todo: {
                                pinId,
                                value
                              }})
                            }
                          }
                        },
                        _notifyBindings(val, com) {
                          const { bindingsTo } = com.model
                          if (bindingsTo) {
                            for (let comId in bindingsTo) {
                              for (let i in scenesMap) {
                                const scenes = scenesMap[i]
                                const com = scenes.json.coms[comId]
                                
                                if (com) {
                                  if (scenes._refs) {
                                    _notifyBindings(scenes._refs, comId, bindingsTo[comId], val)
                                  } else {
                                    const bindings = bindingsTo[comId]
                                    scenes.todo = scenes.todo.concat({type: 'globalVar', todo: {comId, bindings, value: val}})
                                  }
                                }
                              }
                            }
                          }
                        },
                        getGlobalComProps(comId) {
                          // 从主场景获取真实数据
                          return scenesMap[json.scenes[0].id]._refs?.get({comId})
                        },
                        exeGlobalCom({ com, value, pinId }) {
                          const globalComId = com.id
                          globalVarMap[globalComId] = value
                          Object.keys(scenesMap).forEach((key) => {
                            const scenes = scenesMap[key]
                            if (scenes.show && scenes._refs) {
                              const globalCom = scenes._refs.get({comId: globalComId})
                              if (globalCom) {
                                globalCom.outputs[pinId](value, true, null, true)
                              }
                            }
                          })
                          // const refsMap = _context.getRefsMap()
                          // Object.entries(refsMap).forEach(([id, refs]: any) => {
                          //   const globalCom = refs.get({comId: globalComId})
                          //     if (globalCom) {
                          //       globalCom.outputs[pinId](value, true, null, true)
                          //     }
                          // })
                        }
                      }
                      executor({
                        json: fxtojson,
                        getComDef: (def) => _context.getComDef(def),
                        events: options.events,
                        env,
                        ref(_refs) {
                          currentFxFrameIdsMap[parentScope.id]._refs = _refs
                          currentFxFrameIdsMap[parentScope.id].parentScope = parentScope
                          const { inputs, outputs } = _refs
          
                          fxtojson.outputs.forEach((output) => {
                            outputs(output.id, (value) => {
                              currentFxFrameIdsMap[parentScope.id].parentScope?.outputs[output.id](value)
                            })
                          })

                          const configs = comProps?.data?.configs
                          if (configs) {
                            Object.entries(configs).forEach(([key, value]) => {
                              _refs.inputs[key](value, void 0, false)
                            })
                          }
                          _refs.inputs[todo.pinId](todo.value, void 0, false)
                          _refs.run()
                        },
                        onError: _context.onError,
                        debug: options.debug,
                        debugLogger: options.debugLogger,
                        logger: _context.logger,
                        scenesOperate,
                        _context
                      }, {//////TODO goon
                        observable: _context.observable//传递获取响应式的方法
                      })
                    } else {
                      const { _refs } = currentFxFrameIdsMap[parentScope.id]
                      currentFxFrameIdsMap[parentScope.id].parentScope = parentScope
                      const configs = comProps?.data?.configs
                      if (configs) {
                        Object.entries(configs).forEach(([key, value]) => {
                          _refs.inputs[key](value, void 0, false)
                        })
                      }
                      _refs.inputs[todo.pinId](todo.value, void 0, false)
                      _refs.run()
                    }
                  }
                },
                inputs({frameId, parentScope, value, pinId}) {
                  // console.log('fx 场景触发inputs: ', {
                  //   frameId, parentScope, value, pinId
                  // })
                  const scenes = scenesMap[frameId]
                  if (!scenes) {
                    if (!scenesOperateInputsTodo[frameId]) {
                      scenesOperateInputsTodo[frameId] = {
                        parentScope,
                        todo: [{value, pinId}]
                      }
                    } else {
                      scenesOperateInputsTodo[frameId].todo.push({frameId, parentScope, value, pinId})
                    }
                  } else {
                    scenes.parentScope = parentScope
        
                    if (scenes._refs) {
                      scenes._refs.inputs[pinId](value)
                    } else {
                      scenes.todo = scenes.todo.concat({type: 'inputs', todo: {
                        pinId,
                        value
                      }})
                    }
                  }
                },
                _notifyBindings(val, com) {
                  const { bindingsTo } = com.model
                  if (bindingsTo) {
                    for (let comId in bindingsTo) {
                      for (let i in scenesMap) {
                        const scenes = scenesMap[i]
                        const com = scenes.json.coms[comId]
                        
                        if (com) {
                          if (scenes._refs) {
                            _notifyBindings(scenes._refs, comId, bindingsTo[comId], val)
                          } else {
                            const bindings = bindingsTo[comId]
                            scenes.todo = scenes.todo.concat({type: 'globalVar', todo: {comId, bindings, value: val}})
                          }
                        }
                      }
                    }
                  }
                },
                getGlobalComProps(comId) {
                  // 从主场景获取真实数据
                  return scenesMap[json.scenes[0].id]._refs?.get({comId})
                },
                exeGlobalCom({ com, value, pinId }) {
                  const globalComId = com.id
                  globalVarMap[globalComId] = value
                  Object.keys(scenesMap).forEach((key) => {
                    const scenes = scenesMap[key]
                    if (scenes.show && scenes._refs) {
                      const globalCom = scenes._refs.get({comId: globalComId})
                      if (globalCom) {
                        globalCom.outputs[pinId](value, true, null, true)
                      }
                    }
                  })
                  // const refsMap = _context.getRefsMap()
                  // Object.entries(refsMap).forEach(([id, refs]: any) => {
                  //   const globalCom = refs.get({comId: globalComId})
                  //     if (globalCom) {
                  //       globalCom.outputs[pinId](value, true, null, true)
                  //     }
                  // })
                }
              }
              executor({
                json: fxtojson,
                getComDef: (def) => _context.getComDef(def),
                events: options.events,
                env,
                ref(_refs) {
                  currentFxFrameIdsMap[parentScope.id]._refs = _refs
                  currentFxFrameIdsMap[parentScope.id].parentScope = parentScope
                  const { inputs, outputs } = _refs
  
                  fxtojson.outputs.forEach((output) => {
                    outputs(output.id, (value) => {
                      currentFxFrameIdsMap[parentScope.id].parentScope?.outputs[output.id](value)
                    })
                  })

                  const configs = comProps?.data?.configs
                  if (configs) {
                    Object.entries(configs).forEach(([key, value]) => {
                      _refs.inputs[key](value, void 0, false)
                    })
                  }
                  _refs.inputs[todo.pinId](todo.value, void 0, false)
                  _refs.run()
                },
                onError: _context.onError,
                debug: options.debug,
                debugLogger: options.debugLogger,
                logger: _context.logger,
                scenesOperate,
                _context
              }, {//////TODO goon
                observable: _context.observable//传递获取响应式的方法
              })
              // fxFramesJsx.push({key: parentScope.id, json: fxtojson, options: options})
              // setCount((count) => count+1)
            } else {
              const { _refs } = currentFxFrameIdsMap[parentScope.id]
              currentFxFrameIdsMap[parentScope.id].parentScope = parentScope
              const configs = comProps?.data?.configs
              if (configs) {
                Object.entries(configs).forEach(([key, value]) => {
                  _refs.inputs[key](value, void 0, false)
                })
              }
              _refs.inputs[todo.pinId](todo.value, void 0, false)
              _refs.run()
            }
          }
        }
      },
      inputs({frameId, parentScope, value, pinId}) {
        // console.log('场景触发inputs: ', {
        //   frameId, parentScope, value, pinId
        // })
        const scenes = scenesMap[frameId]
        if (!scenes) {
          if (!scenesOperateInputsTodo[frameId]) {
            scenesOperateInputsTodo[frameId] = {
              parentScope,
              todo: [{value, pinId}]
            }
          } else {
            scenesOperateInputsTodo[frameId].todo.push({frameId, parentScope, value, pinId})
          }
        } else {
          scenes.parentScope = parentScope

          if (scenes._refs) {
            scenes._refs.inputs[pinId](value)
          } else {
            scenes.todo = scenes.todo.concat({type: 'inputs', todo: {
              pinId,
              value
            }})
          }
        }
      },
      _notifyBindings(val, com) {
        const { bindingsTo } = com.model
        if (bindingsTo) {
          for (let comId in bindingsTo) {
            for (let i in scenesMap) {
              const scenes = scenesMap[i]
              const com = scenes.json.coms[comId]
              
              if (com) {
                if (scenes._refs) {
                  _notifyBindings(scenes._refs, comId, bindingsTo[comId], val)
                } else {
                  const bindings = bindingsTo[comId]
                  scenes.todo = scenes.todo.concat({type: 'globalVar', todo: {comId, bindings, value: val}})
                }
              }
            }
          }
        }
      },
      getGlobalComProps(comId) {
        // 从主场景获取真实数据
        return scenesMap[json.scenes[0].id]._refs?.get({comId})
      },
      exeGlobalCom({ com, value, pinId }) {
        const globalComId = com.id
        globalVarMap[globalComId] = value
        Object.keys(scenesMap).forEach((key) => {
          const scenes = scenesMap[key]
          if (scenes.show && scenes._refs) {
            const globalCom = scenes._refs.get({comId: globalComId})
            if (globalCom) {
              globalCom.outputs[pinId](value, true, null, true)
            }
          }
        })
        // const refsMap = _context.getRefsMap()
        // Object.entries(refsMap).forEach(([id, refs]: any) => {
        //   const globalCom = refs.get({comId: globalComId})
        //     if (globalCom) {
        //       globalCom.outputs[pinId](value, true, null, true)
        //     }
        // })
      }
    }

    env.scenesOperate = scenesOperate

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
      scenesOperate
    }
  }, [])

  const popups = useMemo(() => {
    if (popupIds.length) {
      return popupIds.map((sceneId) => {
        const scene = scenesMap[sceneId]
        const json = scene.json
        const { id } = json
        
        return <Main key={json.id} json={{...json, scenesMap}} opts={getOptions(id)} style={{position: 'absolute', top: 0, left: 0, backgroundColor: '#ffffff00'}} _context={_context} />
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
