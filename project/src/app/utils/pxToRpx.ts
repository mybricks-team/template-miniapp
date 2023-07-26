import Taro from "@tarojs/taro";

import React from "react";

const oriCreateElement = React.createElement;

const matchKeys = [
  "marginTop",
  "marginBottom",
  "marginLeft",
  "marginRight",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "width",
  "height",
  "fontSize",
  "left",
  "right",
  "top",
  "bottom",
];

React.createElement = function (...args) {
  /** 都需要复制新对象，防止响应式对象修改造成无限循环 */
  const newArgs = [...args];
  if (newArgs[1]?.style && !newArgs[1]?.style?._transformed_) {
    const newStyle = { ...(newArgs[1]?.style ?? {}) };
    
    Object.keys(newStyle).forEach((key) => {
      if (
        /[\d.]+(px)$/.test(newStyle[key]) ||
        (matchKeys.includes(key) && !isNaN(parseFloat(newStyle[key])) && newStyle[key] !== '100%')
      ) {
        newStyle[key] = Taro.pxTransform(
          parseFloat(String(newStyle[key]).replace("px", ""))
        );
      }
    });

    /** 标记对象已经转换过，不要再转换，有一些未知case会导致对象被多次转换 */
    newStyle._transformed_ = true;
    newArgs[1].style = newStyle;
  }
  return oriCreateElement.apply(React, newArgs);
};
