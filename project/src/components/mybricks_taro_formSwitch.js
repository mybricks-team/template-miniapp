!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("brickd-mobile/es/switch"),require("react")):"function"==typeof define&&define.amd?define(["brickd-mobile/es/switch","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("brickd-mobile/es/switch"),require("react")):e.fangzhouComDef=t(e["brickd-mobile/es/switch"],e.React)}(self,((e,t)=>(()=>{"use strict";var r={7234:(e,t,r)=>{function o(e){return function(t){return Object.prototype.toString.call(t)==="[object ".concat(e,"]")}}function n(e){return o("Boolean")(e)}function a(e){return o("Object")(e)}r.d(t,{Kn:()=>a,jn:()=>n})},2010:(e,t,r)=>{r.r(t)},7151:(e,t,r)=>{r(3282),r(7)},3282:(e,t,r)=>{r(2010),r(5755)},5472:(e,t,r)=>{r(3282),r(7151),r(7374)},7:(e,t,r)=>{r.r(t)},5755:(e,t,r)=>{r.r(t)},7374:(e,t,r)=>{r.r(t)},3977:t=>{t.exports=e},359:e=>{e.exports=t}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{n.r(a),n.d(a,{default:()=>i}),n(5472);var e=n(3977),t=n.n(e),r=n(359),o=n.n(r),u=n(7234);function i(e){e.env;var n=e.data,a=e.inputs,i=e.outputs,c=(e.slots,e.parentSlot);(0,r.useEffect)((function(){a.setValue((function(e){switch(!0){case(0,u.jn)(e):n.value=e;break;case(0,u.Kn)(e):n.value=e[n.name]}}))}),[]);var l=(0,r.useCallback)((function(t){var r,o;n.value=t,null===(o=null==c?void 0:(r=c._inputs).onChange)||void 0===o||o.call(r,{id:e.id,name:e.name,value:t}),i.onChange(t)}),[]);return o().createElement(t(),{style:{marginLeft:"auto"},value:n.value,size:24,checked:n.value,onChange:l})}})(),a})()));