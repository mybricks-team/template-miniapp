import Taro from "@tarojs/taro";

import React from "react";

const oriCreateElement = React.createElement;

const matchKeys = [
  "marginTop",
  "marginBottom",
  "marginLeft",
  "marginRight",
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
  /** 都需要复制新对象，防止响应式对象造成无限循环 */
  const newArgs = Array.from(args);
  if (newArgs[1]?.style) {
    const newStyle = { ...(newArgs[1]?.style ?? {}) };
    Object.keys(newStyle).forEach((key) => {
      if (
        /[\d.]+(px)$/.test(newStyle[key]) ||
        (matchKeys.includes(key) && !isNaN(parseFloat(newStyle[key])) && newStyle[key] !== '100%')
      ) {
        newStyle[key] = Taro.pxTransform(
          parseFloat(newStyle[key].replace("px", ""))
        );
      }
    });
    newArgs[1].style = newStyle;
  }
  return oriCreateElement.apply(React, newArgs);
};
