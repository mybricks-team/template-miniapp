!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("@tarojs/taro")):"function"==typeof define&&define.amd?define(["@tarojs/taro"],o):"object"==typeof exports?exports.fangzhouComDef=o(require("@tarojs/taro")):e.fangzhouComDef=o(e["@tarojs/taro"])}(self,(e=>(()=>{"use strict";var o={6801:o=>{o.exports=e}},t={};function r(e){var n=t[e];if(void 0!==n)return n.exports;var a=t[e]={exports:{}};return o[e](a,a.exports,r),a.exports}r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{default:()=>t});var e=r(6801),o=function(){return o=Object.assign||function(e){for(var o,t=1,r=arguments.length;t<r;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e},o.apply(this,arguments)};function t(t){var r=t.env,n=t.data,a=t.inputs,u=t.outputs;r.runtime&&a.show((function(t){e.showModal(o(o({},n),{success:function(e){e.confirm?u.onConfirm(t):u.onCancel(t)}}))}))}})(),n})()));