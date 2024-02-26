/**
 * MyBricks Opensource
 * https://mybricks.world
 * This source code is licensed under the MIT license.
 *
 * CheMingjun @2019
 * mybricks@126.com
 */

import React, {
  useMemo,
  useCallback,
  useLayoutEffect
} from 'react';

import executor from './executor';
import RenderSlot from './RenderSlot';
import ErrorBoundary from './ErrorBoundary';
import {observable as defaultObservable} from './observable';

/** 遍历组件库，处理成comDefs所需的格式 */
const regAry = (comAray, comDefs) => {
  comAray.forEach(comDef => {
    if (comDef.comAray) {
      regAry(comDef.comAray, comDefs);
    } else {
      comDefs[`${comDef.namespace}-${comDef.version}`] = comDef;
    }
  })
}

export default function Main({json, opts, _context, style = {}}: { json, opts: { env, _env, events, comDefs, comInstance, observable, ref }, _context: any, style: any}) {
  
  const comInstance = useMemo(() => {
    return opts.comInstance || {}
  }, []);
  
  const { env, onError, logger, slot, getComDef } = useMemo(() => {
    return {
      env: opts.env,
      onError: _context.onError,
      logger: _context.logger,
      getComDef: (def: any) => _context.getComDef(def),
      slot: json.slot,
      _context
    }
  }, [])

  //根据script生成context对象
  const [context, refs, activeTriggerInput] = useMemo(() => {
    try {
      let refs
      let activeTriggerInput = true
      const context = executor({
        json,
        comInstance,
        getComDef,
        events: opts.events,
        env,
        ref(_refs: any) {
          refs = _refs
          if (typeof opts.ref === 'function') {
            opts.ref(_refs)
            // 如果被代理，那么inputs由外部处理
            activeTriggerInput = false
          }
        },
        onError,
        logger,
        scenesOperate: opts.scenesOperate,
      }, {//////TODO goon
        observable: opts.observable || defaultObservable
      })

      return [context, refs, activeTriggerInput]
    } catch (ex: any) {
      console.error(ex);
      throw new Error(`导出的JSON.script执行异常.`)
    }
  }, [])

  useLayoutEffect(() => {
    if (!opts.disableAutoRun) {
      if (activeTriggerInput) {
        const { inputs } = refs
        const jsonInputs = json.inputs
        if (inputs && Array.isArray(jsonInputs)) {
          jsonInputs.forEach((input) => {
            const { id, mockData } = input
            let value = void 0
            // if (options.debug && typeof mockData !== 'undefined') {
            //   try {
            //     value = JSON.parse(decodeURIComponent(mockData))
            //   } catch {
            //     value = mockData
            //   }
            // }
            inputs[id](value)
          })
        }
      }
      refs.run()
    }
  }, [])

  return (
    <ErrorBoundary errorTip={`页面渲染错误`}>
      <RenderSlot
        env={env}
        _env={opts._env}
        slot={slot}
        style={style}
        getComDef={getComDef}
        context={context}
        __rxui_child__={!opts.observable}
        onError={onError}
        logger={logger}
      />
    </ErrorBoundary>
  )
}

