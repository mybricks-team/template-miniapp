!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e.React)}(self,((e,t)=>(()=>{"use strict";var o={7945:(e,t,o)=>{o.d(t,{Z:()=>r});const r={richtext:"richtext-f057f"}},9525:t=>{t.exports=e},359:e=>{e.exports=t}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return o[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{n.r(a),n.d(a,{default:()=>c});var e=n(359),t=n.n(e),o=n(9525),r=n(7945);function c(n){n.env;var a=n.data,c=(n.inputs,n.outputs,n.slots,(0,e.useState)(decodeURIComponent(a.content))),s=c[0],u=c[1];return(0,e.useEffect)((function(){u(decodeURIComponent(a.content))}),[a.content]),t().createElement(o.View,{className:r.Z.richtext},t().createElement(o.RichText,{nodes:s}))}})(),a})()));