!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/taro")):"function"==typeof define&&define.amd?define(["@tarojs/taro"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/taro")):e.fangzhouComDef=t(e["@tarojs/taro"])}(self,(e=>(()=>{"use strict";var t={6801:t=>{t.exports=e}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{default:()=>t});var e=r(6801);function t(t){var o=t.env,r=(t.data,t.inputs),n=t.outputs;o.runtime&&r.hideToast((function(t){e.hideToast({noConflict:!0,complete:function(){n.afterHideToast(t)}})}))}})(),n})()));