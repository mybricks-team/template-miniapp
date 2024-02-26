import React, { useMemo } from "react";
import coreLib from '@mybricks/comlib-core';
import {setLoggerSilent} from './logger';
import {observable as defaultObservable} from './observable';
import executor from './executor';
import {compareVersion} from './utils';


interface RenderOptions {
  env: any;
  // TODO: 改造完成后在透出的类型里隐藏
  _isNestedRender?: boolean;
  [key: string]: any;
}

export class PageContext {
  onCompleteCallBacks: Array<() => void> = []

  /**
   * - development - 引擎环境
   * - production - 生产环境
   */
  mode: 'development' | 'production'
  
  // 组件信息 namespace-version => {runtime}
  comDefs: {
    [key: string]: {
      namespace: string;
      version: string;
      runtime: React.FC<any>
    }
  } = {}
  // 组件runtime入参
  onError: (error: Error | string) => void = (e) => {
    console.error(e);
  }
  // onError: (params: Error | string) => null
  // 组件runtime入参
  logger: any

  // 将对象转换为响应式对象的方法
  observable = defaultObservable

  // 传入的配置项
  constructor(public options: RenderOptions) {
    const { env, debug, observable, onError, plugins = [] } = options
    this.mode = debug ? 'development' : 'production'
    if (!observable) {
      /** 未传入observable，使用内置observable配合对React.createElement的劫持 */
      // hijackReactcreateElement({pxToRem: env.pxToRem, pxToVw: env.pxToVw});
    } else {
      this.observable = observable
    }


    const { onCompleteCallBacks } = this
    /** 一些默认值 */
    // 运行时，默认为runtime模式
    if (!env.runtime) {
      env.runtime = {
        // debug: {
        //   onComplete(fn: any) {
        //     onCompleteCallBacks.push(fn)
        //   }
        // },
        onComplete(fn: any) {
          onCompleteCallBacks.push(fn)
        }
      }
    }
    // 国际化，是否可以去除？？，PC通用组件库内使用
    // TODO: 去除
    if (!env.i18n) {
      env.i18n = (text: unknown) => text
    }
    // 渲染模块，提供的默认能力，引擎环境内引擎提供
    if (!env.renderModule) {
      // 模块组件内调用
      env.renderModule = (json: any, options: any) => {
        // 最终还是调render-wen提供的render函数，渲染toJSON
        // return render(json, { ...options, env, _isNestedRender: true })
      }
    } else {
      const renderModule = env.renderModule
      env.renderModule = (json: any, options: any) => {
        // 最终还是调render-wen提供的render函数，渲染toJSON
        return renderModule(json, { ...options, env, _isNestedRender: true })
      }
    }
    if (!env.renderCom) {
      env.renderCom = (json: any, options: any) => {
        // 最终还是调render-wen提供的render函数，渲染toJSON
        // return render(json, { ...options, _isNestedRender: true })
      }
    } else {
      const renderCom = env.renderCom
      env.renderCom = (json: any, options: any) => {
        // 最终还是调render-wen提供的render函数，渲染toJSON
        return renderCom(json, { ...options, _isNestedRender: true })
      }
    }
    // const body = document.body
    // 用于判断是mobile或pc，组件响应式，目前通用pc组件库内有使用
    // if (!env.canvas) {
    //   // 引擎环境内引擎提供，非引擎环境默认body的clientWidth与414对比
    //   env.canvas = {
    //     get type() {
    //       return body.clientWidth <= 414 ? 'mobile' : 'pc'
    //     }
    //   }
    // }
    // 用于调试时弹窗类挂载
    // if (!('canvasElement' in env)) {
    //   // 引擎环境内引擎提供，非引擎环境默认body
    //   env.canvasElement = body
    // }

    /** 函数劫持 */
    // // render-web知道一定存在env.callConnector，用于“服务接口”组件
    // const callConnector = env.callConnector
    // // TODO: 性能面板，作为插件注入
    // if (typeof callConnector === 'function') {
    //   // 劫持callConnector获取执行时间和执行信息，写入性能面板
    //   env.callConnector = (connector: any, params: any, connectorConfig: any) => {
    //     const start = new Date().getTime()
    //     let end: any = null
    //     const connectorTime: any = {
    //       basicInformation: {
    //         connector, params, connectorConfig
    //       },
    //       start,
    //       type: 'success'
    //     }
    //     return new Promise((resolve, reject) => {
    //       callConnector(connector, params, connectorConfig).then((res: any) => {
    //         end = new Date().getTime()
    //         resolve(res)
    //       }).catch((err: any) => {
    //         end = new Date().getTime()
    //         connectorTime.type = 'error'
    //         reject(err)
    //       }).finally(() => {
    //         connectorTime.end = end
    //         connectorTime.time = end - start
    //         this.setPerformanceCallConnectorTimes(connectorTime)
    //       })
    //     })
    //   }
    // }
    const that = this

    // 初始化其它信息
    this.initOther()
    // 收集页面组件信息
    this.initComdefs()

    // 执行安装的插件
    // 暂时内置前面的插件
    const arr = []
    arr.concat(plugins).forEach((plugin) => {
      plugin.apply(this)
    })
  }

  // 初始化其它信息
  initOther() {
    const { env } = this.options
    // 是否打印IO输入输出的数据信息
    // TODO: 通过options传入，而非env
    if (!!env.silent) {
      // 调试模式下有debugger，所以无论silent设置，都没有影响
      setLoggerSilent();
    }

    // 这里看看怎么做成插件的形式
    this.logger = {
      info: console.info,
      trace: console.trace,
      warn: console.warn,
      error: (e: any) => {
        console.error(e);
      }
    }
  }

  // 初始化组件信息
  initComdefs() {
    const regAry = (comAray: any, comDefs: any) => {
      comAray.forEach((comDef: any) => {
        if (comDef.comAray) {
          regAry(comDef.comAray, comDefs);
        } else {
          comDefs[`${comDef.namespace}-${comDef.version}`] = comDef;
        }
      })
    }
    const { comDefs: defaultComdefs } = this.options;
    const { comDefs } = this;

    /** 外部传入组件信息 */
    if (defaultComdefs) {
      Object.assign(comDefs, defaultComdefs);
    }

    /** 默认从window上查找组件库，是否考虑如果传入了comDefs就不去window上再找一遍了 */
    let comLibs = [...((window as any)["__comlibs_edit_"] || []), ...((window as any)["__comlibs_rt_"] || [])];

    /** 插入核心组件库(fn,var等) */
    comLibs.push(coreLib)
    comLibs.forEach(lib => {
      const comAray = lib.comAray;
      if (comAray && Array.isArray(comAray)) {
        regAry(comAray, comDefs);
      }
    })
  }

  /** 
   * 通过namespace-version查找组件
   * 
   * TODO: 优化查询方式，目前每个找不到的组件都重复全量查，找不到的组件在第一次使用最新版本后做好记录，后面不会重复查找
   */
  getComDef(def: { namespace: string, version: string }) {
    const { comDefs } = this
    const rtn = comDefs[def.namespace + '-' + def.version]
    if (!rtn) {
      const ary = []
      for (let ns in comDefs) {
        if (ns.startsWith(def.namespace + '-')) {
          ary.push(comDefs[ns])
        }
      }

      if (ary && ary.length > 0) {
        ary.sort((a, b) => {
          return compareVersion(a.version, b.version)
        })

        const rtn0 = ary[0]
        console.warn(`【Mybricks】组件${def.namespace + '@' + def.version}未找到，使用${rtn0.namespace}@${rtn0.version}代替.`)

        return rtn0
      } else {
        console.error(`组件${def.namespace + '@' + def.version}未找到，请确定是否存在该组件以及对应的版本号.`)
        return null
      }
    }
    return rtn
  }
}

/** 处理多场景间交互和全局Fx、变量等逻辑 */
export class ScenesContext {

  json: any = {}

  scenesMap: any = {}
  scenesOperateInputsTodo = {}

  globalVarMap = {}

  fxToJsonMap = {}
  currentFxFrameIdsMap = {}

  scenesOperate: any = {}

  constructor(json, options = { disableAutoRun: false }) {

    this.json = json

    this.scenesMap = json.scenes.reduce((acc, json, index) => {
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
    }, {});

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
    this.fxToJsonMap = fxToJsonMap


    this.scenesOperate = this.getScenesOperate();

  }


  contextMap = {}
  createPageContext = (jsonId, options) => {
    if (!this.contextMap[jsonId]) {
      this.contextMap[jsonId] = new PageContext(options)
    }
    return this.contextMap[jsonId]
  }

  getPageContext = (pageJsonId) => {
    return this.contextMap[pageJsonId];
  }

  getScenesOperate = () => {
    const { scenesMap, currentFxFrameIdsMap, fxToJsonMap, scenesOperateInputsTodo, globalVarMap, json } = this;

    const _this = this;

    return {
      open({ todo, frameId, parentScope, comProps }) {
        // 小程序这里只有 fx 的执行，随便拿一个页面的context来执行即可，目前用第一个页面的
        const _context = _this.getPageContext(json.scenes[0].id)
        const { options } = _context

        console.warn(frameId, fxToJsonMap)
  
        const fxtojson = fxToJsonMap[frameId]
        if (fxtojson) {
          if (!currentFxFrameIdsMap[parentScope.id]) {
            currentFxFrameIdsMap[parentScope.id] = {}
            const { env } = options
            const scenesOperate = _this.getScenesOperate();
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
              comInstance: options.comInstance,
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
  }

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
