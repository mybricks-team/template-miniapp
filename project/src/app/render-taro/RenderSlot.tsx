/**
 * MyBricks Opensource
 * https://mybricks.world
 * This source code is licensed under the MIT license.
 *
 * CheMingjun @2019
 * mybricks@126.com
 */

import React, { memo, useMemo } from "react";

import { isNumber, uuid } from "./utils";

import ErrorBoundary from "./ErrorBoundary";
import { observer } from "./observable";
import "./RenderSlot.css";
const css = {
  slot: "mybricks_slot",
  error: "error",
};

function renderRstTraverseCom2({com, index, env, getComDef, context, scope, inputs, outputs, _inputs, _outputs, _env, template, onError, logger, createPortal}) {
  // const { type } = com

  // if (type) {
  //   const { items, style } = com
  //   if (type === 'row') {
  //     return (
  //       <div key={index} style={{display: 'flex', flexDirection: 'row', ...style}}>
  //         {items.map((com, index) => renderRstTraverseCom2({com, index, env, getComDef, context, scope, inputs, outputs, _inputs, _outputs, _env, template, onError, logger, createPortal}))}
  //       </div>
  //     )
  //   } else if (type === 'column') {
  //     return (
  //       <div key={index} style={{display: 'flex', flexDirection: 'column', ...style}}>
  //         {items.map((com, index) => renderRstTraverseCom2({com, index, env, getComDef, context, scope, inputs, outputs, _inputs, _outputs, _env, template, onError, logger, createPortal}))}
  //       </div>
  //     )
  //   }
  // } else {
  //   const jsx = getRenderComJSX({ com, env, getComDef, context, scope, inputs, outputs, _inputs, _outputs, index: index, _env, template, onError, logger, createPortal })

  //   return jsx.jsx
  // }

  const { id, elements, style } = com

  if (elements) {
    return (
      <view
        key={id}
        style={style}
        // style={{
        //   display: 'flex',
        //   // width: com.width,
        //   // height: com.height,
        //   marginLeft: com.marginLeft,
        //   marginRight: com.marginRight,
        //   marginTop: com.marginTop,
        //   flexDirection: com.flexDirection
        // }}
      >
        {elements.map((com: any) => {
          return renderRstTraverseCom2({com, index, env, getComDef, context, scope, inputs, outputs, _inputs, _outputs, _env, template, onError, logger, createPortal})
        })}
        {/* {com.isContainer ? (
          <div style={{display: style.display, flexDirection: style.flexDirection, width: 'fit-content'}}>
            {elements.map((com: any) => {
              return renderRstTraverseCom2({com, index, env, getComDef, context, scope, inputs, outputs, _inputs, _outputs, _env, template, onError, logger, createPortal})
            })}
          </div>
        ) : elements.map((com: any) => {
          return renderRstTraverseCom2({com, index, env, getComDef, context, scope, inputs, outputs, _inputs, _outputs, _env, template, onError, logger, createPortal})
        })} */}
      </view>
    )
  } else {
    const jsx: any = getRenderComJSX({ com, env, getComDef, context, scope, inputs, outputs, _inputs, _outputs, index: index, _env, template, onError, logger, createPortal })

    return jsx?.jsx
  }

}

export default function RenderSlot({
  scope,
  root,
  slot,
  style: propsStyle = {},
  createPortal,
  className,
  params,
  inputs,
  outputs,
  _inputs,
  _outputs,
  wrapper,
  template,
  env,
  _env,
  getComDef,
  context,
  __rxui_child__,
  onError,
  logger,
}) {
  const { style, comAry, comAry2} = slot;

  if (style.layout === "smart" && comAry2) {
    const paramsStyle = params?.style;
    const slotStyle = paramsStyle || style;
    return (
      <view data-isslot='1' className={`${calSlotClasses(slotStyle)}${root && className ? ` ${className}` : ''}`} style={{...calSlotStyles(slotStyle, !!paramsStyle, root), ...propsStyle, display: 'inline-block'}}>
        {/* {comAry2.map((rstTraverseElement: any, index: any) => {
          return renderRstTraverseCom({com: rstTraverseElement, index, env, getComDef, context, scope, inputs, outputs, _inputs, _outputs, _env, template, onError, logger, createPortal})
        })} */}
        {comAry2.map((rstTraverseElement: any, index: any) => {
          return renderRstTraverseCom2({com: rstTraverseElement, index, env, getComDef, context, scope, inputs, outputs, _inputs, _outputs, _env, template, onError, logger, createPortal})
        })}
      </view>
    )
  }

  const itemAry: any = [];
  comAry.forEach((com, idx) => {
    //组件逐个渲染
    const { id, def, name }: Com = com;
    const comDef = getComDef(def);

    if (comDef) {
      const props = context.get({comId: id, scope, _ioProxy: {
        inputs, outputs, _inputs, _outputs
      }})

      const comKey = (scope ? scope.id : "") + idx; //考虑到scope变化的情况，驱动组件强制刷新
      itemAry.push({
        id,
        jsx: (
          <RenderCom
            key={comKey}
            com={com}
            getComDef={getComDef}
            context={context}
            scope={scope}
            props={props}
            env={env}
            _env={_env}
            template={template}
            onError={onError}
            logger={logger}
            __rxui_child__={__rxui_child__}
          />
        ),
        name,
        inputs: props.inputsCallable,
        style: props.style,
      });
    } else {
      const jsx = (
        <view className={css.error}>
          组件 (namespace = {def.namespace}）未找到.
        </view>
      );

      itemAry.push({
        id,
        jsx,
        name,
      });
    }
  });

  if (typeof wrapper === "function") {
    return wrapper(itemAry);
  } else {
    const paramsStyle = params?.style;
    const slotStyle = paramsStyle || style;
    return (
      <view
        className={calSlotClasses(slotStyle)}
        style={{ ...calSlotStyles(slotStyle, !!paramsStyle), ...propsStyle }}
      >
        {itemAry.map((item) => item.jsx)}
      </view>
    );
  }
}

function getRenderComJSX({ com, env, getComDef, context, scope, inputs, outputs, _inputs, _outputs, index, _env, template, onError, logger, createPortal }) {
  const {id, def, name, children, brother} = com
  // const comInfo = context.getComInfo(id)
  // const { hasPermission, permissions: envPermissions } = env
  // const permissions = comInfo?.model?.permissions

  // if (permissions && typeof hasPermission === 'function' && !hasPermission(permissions.id)) {
  //   return
  // }
  // const permissionsId = comInfo?.model?.permissions?.id
  // if (permissionsId && typeof hasPermission === 'function') {
  //   if (!hasPermission(permissionsId)) {
  //     const permission = envPermissions.find((p: any) => p.id === permissionsId)
  //     if (permission?.register.noPrivilege === 'hintLink') {
  //       return {
  //         id,
  //         name,
  //         jsx: (
  //           <div>
  //             <a
  //               href={permission.hintLink}
  //               target="_blank"
  //               style={{textDecoration: 'underline'}}
  //             >{permission.register.title}</a>
  //           </div>
  //         ),
  //         style: {}
  //       }
  //     }
  //     return
  //   }
  // }
  const comDef = getComDef(def)

  if (comDef) {
    const props = context.get({comId: id, scope, _ioProxy: {
      inputs, outputs, _inputs, _outputs
    }})

    if (props) {
      const comKey = id + (scope ? scope.id : '') + index//考虑到scope变化的情况，驱动组件强制刷新
      // let childrenJSX = []
      // let brotherJSX = []
      // if (children?.length) {
      //   {children.forEach((child: any, index: any) => {
      //     const jsx = renderRstTraverseCom({ com: child, env, getComDef, context, scope, inputs, outputs, _inputs, _outputs, index, _env, template, onError, logger, createPortal })
      //     childrenJSX.push(jsx)
      //   })}
      // }
      // if (brother?.length) {
      //   {brother.forEach((bro: any, index: any) => {
      //     const jsx = renderRstTraverseCom({ com: bro, env, getComDef, context, scope, inputs, outputs, _inputs, _outputs, index, _env, template, onError, logger, createPortal })
      //     brotherJSX.push(jsx)
      //   })}
      // }
      return {
        id,
        jsx: <RenderCom key={comKey} com={com}
                        getComDef={getComDef}
                        context={context}
                        scope={scope}
                        props={props}
                        env={env}
                        _env={_env}
                        template={template}
                        onError={onError}
                        logger={logger}
                        createPortal={createPortal}>
                          {/* {childrenJSX}
                          {brotherJSX} */}
                          </RenderCom>,
        name,
        inputs: props.inputsCallable,
        style: props.style
      }
    } else {
      return {
        id, jsx: (
          <view className={css.error}>
            未找到组件({def.namespace}@{def.version} - {id})定义.
          </view>
        ), name, style: {}
      }
    }
  } else {
    return {
      id, jsx: (
        <view className={css.error}>
          未找到组件({def.namespace}@{def.version})定义.
        </view>
      ), name, style: {}
    }
  }
}

const RenderCom = observer(function ({
  com,
  props,
  scope,
  template,
  env,
  _env,
  getComDef,
  context,
  __rxui_child__,
  onError,
  logger,
}) {
  const { id, def, name, slots = {} }: Com = com;
  const {
    data,
    title,
    style,
    inputs: myInputs,
    outputs: myOutputs,
    _inputs: _myInputs,
    _outputs: _myOutputs,
    _notifyBindings: _myNotifyBindings,
  } = props;

  const comDef = getComDef(def);

  const slotsProxy = new Proxy(slots, {
    get(target, slotId: string) {
      // const props = context.get({comId: id, slotId, scope: null})

      let currentScope;

      // const slot = slots[slotId]

      // if (slot?.type === 'scope') {
        if (scope) {
          currentScope = {
            id: scope.id + '-' + scope.frameId,
            frameId: slotId,
            parentComId: id,
            parent: scope
          }
        }
      // }

      const props = context.get({comId: id, slotId, scope: currentScope})

      const errorStringPrefix = `组件(namespace=${def.namespace}）的插槽(id=${slotId})`;

      if (!props) {
        throw new Error(`${errorStringPrefix} 获取context失败.`);
      }

      return {
        render(params: {
          key;
          inputValues;
          inputs;
          outputs;
          _inputs;
          _outputs;
          wrap;
          itemWrap;
          style;
        }) {
          const slot = slots[slotId];
          const paramsScope = params?.scope
          if (paramsScope) {
            currentScope = {
              id: paramsScope.id + '-' + paramsScope.frameId,
              frameId: slotId,
              parentComId: id,
              parent: paramsScope
            }
          }
          if (slot) {
            return (
              <SlotRender
                slotId={slotId}
                slot={slot}
                props={props}
                currentScope={currentScope}
                params={params}
                style={style}
                onError={onError}
                logger={logger}
                env={env}
                _env={_env}
                scope={scope}
                getComDef={getComDef}
                context={context}
                __rxui_child__={__rxui_child__}
              />
            );
          } else {
            return (
              <view className={css.error}>{errorStringPrefix} 未找到.</view>
            );
          }
        },
        get size() {
          return !!slots[slotId]?.comAry?.length;
        },
        _inputs: props._inputs,
        inputs: props.inputs,
        outputs: props.outputs,
      };
    },
  });

  const parentSlot = useMemo(() => {
    if (props.frameId && props.parentComId) {
      const slotProps = context.get(
        props.parentComId,
        props.frameId,
        scope?.parent
      );
      if (slotProps) {
        return {
          get _inputs() {
            return new Proxy(
              {},
              {
                get(target, name) {
                  const fn = slotProps._inputRegs[name];
                  return fn;
                },
              }
            );
          },
        };
      }
    }
  }, []);

  const classes = getClasses({ style });
  const sizeStyle = getSizeStyle({ style });
  const marginStyle = getMarginStyle({ style });

  let otherStyle: any = {};

  if (["fixed", "absolute"].includes(style.position)) {
    if (style.position === "fixed" && style.fixedY === "bottom") {
      otherStyle.bottom = isNumber(style.bottom)
        ? style.bottom + "px"
        : style.bottom;
    } else if (isNumber(style.top)) {
      otherStyle.top = isNumber(style.top) ? style.top + "px" : style.top;
    }
    if (style.position === "fixed" && style.fixedX === "right") {
      otherStyle.right = isNumber(style.right)
        ? style.right + "px"
        : style.right;
    } else if (isNumber(style.left)) {
      otherStyle.left = isNumber(style.left) ? style.left + "px" : style.left;
    }
    if (style.position === "fixed") {
      // [TODO] --- 2023.3.22 只有固定布局才需要通过设置zIndex达到置顶效果，自由布局不需要设置zIndex，否则永远在最上层
      otherStyle.zIndex = 1000;
    }

    // // [TODO] --- 2023.7.11 小程序不支持createPortal, 所以需要把displate 设置为block
    // if (style.position === 'fixed' && style.display === 'none' && def.namespace === 'mybricks.taro.popup') {
    //   otherStyle = { display: 'block', position: 'relative' }
    //   delete sizeStyle.width;
    //   delete sizeStyle.height;
    // }
  }

  // [TODO] --- 2023.12.11 小程序不支持createPortal, 所以需要把displate 设置为block
  const createPortal = (child) => {
    if (style.display === 'none') {
      otherStyle = { display: 'block', position: 'relative' }
      delete sizeStyle.width;
      delete sizeStyle.height;
    }
    return child
  }

  // --- [TODO] 2023.2.21 兼容小程序

  // let jsx = (
  //   <comDef.runtime
  //     id={id}
  //     env={env}
  //     data={data}
  //     style={style}
  //     inputs={myInputs}
  //     outputs={myOutputs}
  //     _inputs={_myInputs}
  //     _outputs={_myOutputs}
  //     slots={slotsProxy}
  //     createPortal={e => {

  //     }}
  //     parentSlot={parentSlot}
  //     __rxui_child__={__rxui_child__}
  //     onError={onError}
  //     logger={logger}
  //   />
  // )

  let jsx = comDef.runtime({
    id,
    env,
    _env,
    data,
    name,
    title,
    style,
    inputs: myInputs,
    outputs: myOutputs,
    _inputs: _myInputs,
    _outputs: _myOutputs,
    _notifyBindings: _myNotifyBindings,
    slots: slotsProxy,
    createPortal,
    parentSlot,
    __rxui_child__,
    onError,
    logger,
  });

  // --- end

  if (typeof template === "function") {
    jsx = template({ id, jsx, name });
  }

  // --- 2023.2.21 兼容小程序
  jsx = jsx ? React.createElement('view', {
    id,
    className: id,
    key: id,
    style: {
      display: style.display,
      // overflow: "hidden",
      position: style.position || "relative",
      ...otherStyle,
      ...sizeStyle,
      ...marginStyle,
      ...(style.ext || {}),
      className: classes
    }
  }, (<ErrorBoundary
    errorTip={`组件 (namespace = ${def.namespace}@${def.version}）渲染错误`}
  >
    {jsx}
  </ErrorBoundary>)) : null;
  // jsx = jsx ? (
  //   <view
  //     id={id}
  //     key={id}
  //     style={{
  //       display: style.display,
  //       // overflow: "hidden",
  //       position: style.position || "relative",
  //       ...otherStyle,
  //       ...sizeStyle,
  //       ...marginStyle,
  //       ...(style.ext || {}),
  //     }}
  //     className={classes}
  //   >
  //     <ErrorBoundary
  //       errorTip={`组件 (namespace = ${def.namespace}@${def.version}）渲染错误`}
  //     >
  //       {jsx}
  //     </ErrorBoundary>
  //   </view>
  // ) : null;

  // --- end

  return jsx;
});

const SlotRender = memo(
  ({
    slotId,
    props,
    slot,
    params,
    scope,
    env,
    style,
    getComDef,
    context,
    onError,
    logger,
    __rxui_child__,
  }) => {
    // let curScope
    // //if (params) {
    // if (props.type==='scope') {//作用域插槽
    //
    //   let nowScopeId = uuid()
    //   //console.log(nowScopeId)
    //   // if (params.key) {
    //   //   nowScopeId = params.key + (scope ? ('-' + scope.id) : '')//考虑父级scope
    //   // }
    //   //
    //   // if (typeof params.wrap === 'function' && !params.key) {
    //   //   if (scope) {//存在父作用域，例如 List中嵌套FormContainer
    //   //     nowScopeId = scope.id
    //   //   }
    //   // }
    //
    //   curScope = {
    //     id: nowScopeId,
    //     frameId: slotId
    //   }
    //
    //   if (scope) {
    //     curScope.parent = scope
    //   }
    // } else {
    //   curScope = scope
    // }

    let curScope;
    if (params && slot?.type === "scope") {
      let nowScopeId = uuid();
      //console.log(nowScopeId)
      // if (params.key) {
      //   nowScopeId = params.key + (scope ? ('-' + scope.id) : '')//考虑父级scope
      // }
      //
      // if (typeof params.wrap === 'function' && !params.key) {
      //   if (scope) {//存在父作用域，例如 List中嵌套FormContainer
      //     nowScopeId = scope.id
      //   }
      // }

      curScope = {
        id: nowScopeId,
        frameId: slotId,
      };

      if (scope) {
        curScope.parent = scope;
      }
    } else {
      curScope = scope;
    }

    props.run(curScope); //传递scope

    let wrapFn;
    if (params) {
      const ivs = params.inputValues;
      if (typeof ivs === "object") {
        //requestAnimationFrame(() => {
        for (let pro in ivs) {
          props.inputs[pro](ivs[pro], curScope);
        }
        //})
      }

      if (typeof params.wrap === "function") {
        wrapFn = params.wrap;
      }
      //})
    }

    return (
      // <view className={calSlotClasses(style)} style={calSlotStyles(style)}>
      <RenderSlot
        scope={curScope}
        env={env}
        slot={slot}
        params={params}
        wrapper={wrapFn}
        template={params?.itemWrap}
        getComDef={getComDef}
        context={context}
        inputs={params?.inputs}
        outputs={params?.outputs}
        _inputs={params?._inputs}
        _outputs={params?._outputs}
        onError={onError}
        logger={logger}
        __rxui_child__={__rxui_child__}
      />
      // </view>
    );
  },
  (prevProps, nextProps) => {
    const preKey = prevProps.params?.key,
      nextKey = nextProps?.params?.key;
    if (preKey === void 0 && nextKey === void 0) {
      //对于没有key的情况，统一做刷新处理
      return true;
    }

    if (preKey !== nextKey) {
      //key 不同刷新
      return false;
    }

    // TODO
    if (preKey !== void 0 && nextKey !== void 0 && preKey === nextKey) {
      try {
        if (
          JSON.stringify(prevProps.params?.inputValues) !==
          JSON.stringify(nextProps.params?.inputValues)
        ) {
          return false;
        }
      } catch {}
    }

    return true;
  }
);

//-----------------------------------------------------------------------

function calSlotStyles(style, hasParamsStyle, root?) {
  // 兼容旧的style
  const {
    paddingLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    background,
    backgroundColor,
    backgroundImage,
    backgroundRepeat,
    backgroundPosition,
    backgroundSize,
    ...otherStyle
  } = style;
  let slotStyle = {
    paddingLeft: paddingLeft || 0,
    paddingTop: paddingTop || 0,
    paddingRight: paddingRight || 0,
    paddingBottom: paddingBottom || 0,
    //height: style.customHeight || '100%'
    backgroundColor: backgroundColor || (root ? '#ffffff' : void 0),
    backgroundImage,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
  } as any
  // 兼容旧的style
  if (background) {
    const isOldBackground = typeof background === 'object'
    if (isOldBackground) {
      const {
        background: bg,
        backgroundImage,
        backgroundColor,
        backgroundRepeat,
        backgroundSize
      } = background;
  
      slotStyle.backgroundRepeat = backgroundRepeat
      slotStyle.backgroundSize = backgroundSize
  
      if (bg) {
        slotStyle.background = bg
      } else {
        slotStyle.backgroundImage = backgroundImage
        slotStyle.backgroundColor = backgroundColor
      }
    } else {
      slotStyle.background = background
    }
  }

  if (hasParamsStyle) {
    slotStyle = Object.assign(slotStyle, otherStyle)
  }

  return slotStyle;
}

function calSlotClasses(slotStyle) {
  const rtn = [css.slot];

  const style = slotStyle;
  if (style) {
    if (style.layout?.toLowerCase() == "flex-column") {
      rtn.push(css.lyFlexColumn);
    } else if (style.layout?.toLowerCase() == "flex-row") {
      rtn.push(css.lyFlexRow);
    }

    const justifyContent = style.justifyContent;
    if (justifyContent) {
      if (justifyContent.toUpperCase() === "FLEX-START") {
        rtn.push(css.justifyContentFlexStart);
      } else if (justifyContent.toUpperCase() === "CENTER") {
        rtn.push(css.justifyContentFlexCenter);
      } else if (justifyContent.toUpperCase() === "FLEX-END") {
        rtn.push(css.justifyContentFlexFlexEnd);
      } else if (justifyContent.toUpperCase() === "SPACE-AROUND") {
        rtn.push(css.justifyContentFlexSpaceAround);
      } else if (justifyContent.toUpperCase() === "SPACE-BETWEEN") {
        rtn.push(css.justifyContentFlexSpaceBetween);
      }
    }

    const alignItems = style.alignItems;
    if (alignItems) {
      if (alignItems.toUpperCase() === "FLEX-START") {
        rtn.push(css.alignItemsFlexStart);
      } else if (alignItems.toUpperCase() === "CENTER") {
        rtn.push(css.alignItemsFlexCenter);
      } else if (alignItems.toUpperCase() === "FLEX-END") {
        rtn.push(css.alignItemsFlexFlexEnd);
      }
    }
  }

  return rtn.join(" ");
}

function getClasses({ style }) {
  const classes = [css.com];

  if (style.flex === 1) {
    classes.push(css.flex);
  }

  return classes.join(" ");
}

function getSizeStyle({ style }) {
  const sizeStyle: any = {};
  const { width, height } = style;

  if (!width) {
    sizeStyle.width = "100%";
  } else if (isNumber(width)) {
    sizeStyle.width = width + "px";
  } else if (width) {
    sizeStyle.width = width;
  }

  if (isNumber(height)) {
    sizeStyle.height = height + "px";
  } else if (height) {
    sizeStyle.height = height;
  }

  return sizeStyle;
}

function getMarginStyle({ style }) {
  const marginStyle: any = {};
  const { width, marginTop, marginLeft, marginRight, marginBottom } = style;

  if (isNumber(marginTop)) {
    marginStyle.marginTop = marginTop + "px";
  }
  if (isNumber(marginLeft)) {
    if (typeof width === "number" || marginLeft < 0) {
      marginStyle.marginLeft = marginLeft + "px";
    } else {
      marginStyle.paddingLeft = marginLeft + "px";
    }
  }
  if (isNumber(marginRight)) {
    if (typeof width === "number" || marginRight < 0) {
      marginStyle.marginRight = marginRight + "px";
    } else {
      marginStyle.paddingRight = marginRight + "px";
    }
  }
  if (isNumber(marginBottom)) {
    marginStyle.marginBottom = marginBottom + "px";
  }

  return marginStyle;
}
