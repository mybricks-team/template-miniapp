!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("brickd-mobile/es/input"),require("react")):"function"==typeof define&&define.amd?define(["brickd-mobile/es/input","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("brickd-mobile/es/input"),require("react")):e.fangzhouComDef=t(e["brickd-mobile/es/input"],e.React)}(self,((e,t)=>(()=>{"use strict";var r={7234:(e,t,r)=>{function n(e){return function(t){return Object.prototype.toString.call(t)==="[object ".concat(e,"]")}}function o(e){return n("Number")(e)}function a(e){return n("String")(e)}function u(e){return n("Object")(e)}r.d(t,{HD:()=>a,Kn:()=>u,hj:()=>o})},8501:(e,t,r)=>{r(7196)},7196:(e,t,r)=>{r.r(t)},5402:t=>{t.exports=e},359:e=>{e.exports=t}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{o.r(a),o.d(a,{default:()=>i}),o(8501);var e=o(5402),t=o.n(e),r=o(359),n=o.n(r),u=o(7234);function i(e){e.env;var o=e.data,a=e.inputs,i=e.outputs,l=(e.slots,e.parentSlot);(0,r.useEffect)((function(){a.setValue((function(e){switch(!0){case(0,u.HD)(e)||(0,u.hj)(e):o.value=e;break;case(0,u.Kn)(e):o.value=e[o.name]}}))}),[]);var c=(0,r.useCallback)((function(t){var r,n,a=t.detail.value;o.value=a,null===(n=null==l?void 0:(r=l._inputs).onChange)||void 0===n||n.call(r,{id:e.id,name:e.name,value:a}),i.onChange(a)}),[]);return n().createElement(t(),{value:o.value,type:o.type,placeholder:o.placeholder,onChange:c,disabled:o.disabled,clearable:o.clearable})}})(),a})()));