!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("@tarojs/taro")):"function"==typeof define&&define.amd?define(["@tarojs/taro"],o):"object"==typeof exports?exports.fangzhouComDef=o(require("@tarojs/taro")):e.fangzhouComDef=o(e["@tarojs/taro"])}(self,(e=>(()=>{"use strict";var o={6801:o=>{o.exports=e}},r={};function t(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return o[e](a,a.exports,t),a.exports}t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{t.r(n),t.d(n,{default:()=>o});var e=t(6801);function o(o){var r=o.env,t=o.data,n=o.inputs,a=o.outputs;r.runtime&&n.scan((function(){e.scanCode({onlyFromCamera:t.onlyFromCamera,success:function(e){var o,r,t=e.result,n=e.scanType;e.errMsg,t?null===(o=a.onSuccess)||void 0===o||o.call(a,{result:t,scanType:n}):null===(r=a.onFail)||void 0===r||r.call(a,{})},fail:function(e){var o,r=e.errMsg;null===(o=a.onFail)||void 0===o||o.call(a,{errMsg:r})}})}))}})(),n})()));