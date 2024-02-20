/**
 * MyBricks Opensource
 * https://mybricks.world
 * This source code is licensed under the MIT license.
 *
 * CheMingjun @2019
 * mybricks@126.com
 */

import React, { useMemo } from "react";
import coreLib from '@mybricks/comlib-core';
import {setLoggerSilent} from './logger';
import {observable as defaultObservable} from './observable';
import {compareVersion} from './utils';

import Main from "./Main";
// import pkg from "../package.json";
import MultiScene from "./MultiScene";

interface RenderOptions {
  env: any;
  // TODO: 改造完成后在透出的类型里隐藏
  _isNestedRender?: boolean;
  [key: string]: any;
}

class Context {
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
        return render(json, { ...options, env, _isNestedRender: true })
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
        return render(json, { ...options, _isNestedRender: true })
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

// console.log(`%c ${pkg.name} %c@${pkg.version}`, `color:#FFF;background:#fa6400`, ``, ``);

export function render(json, opts: { events?, env?, comDefs?, comInstance?, observable?, ref?, scenesOperate? } = {}) {
  const _context = useMemo(() => {
    return new Context(opts)
  }, [opts])

  if (Array.isArray(json.scenes)) {
    return <MultiScene json={json} options={opts as any} _context={_context}/>
  }
  return (
    <Main json={json} opts={opts as any} _context={_context}/>
  )
}
