!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("brickd-mobile/es/rate"),require("react")):"function"==typeof define&&define.amd?define(["brickd-mobile/es/rate","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("brickd-mobile/es/rate"),require("react")):e.fangzhouComDef=t(e["brickd-mobile/es/rate"],e.React)}(self,((e,t)=>(()=>{"use strict";var r={7234:(e,t,r)=>{function o(e){return function(t){return Object.prototype.toString.call(t)==="[object ".concat(e,"]")}}function n(e){return o("Number")(e)}function a(e){return o("String")(e)}function u(e){return o("Object")(e)}r.d(t,{HD:()=>a,Kn:()=>u,hj:()=>n})},8465:(e,t,r)=>{r(5330),r(5227)},5330:(e,t,r)=>{r(5010),r(3218)},5010:(e,t,r)=>{r.r(t)},5227:(e,t,r)=>{r.r(t)},3218:(e,t,r)=>{r.r(t)},8527:t=>{t.exports=e},359:e=>{e.exports=t}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{n.r(a),n.d(a,{default:()=>i}),n(8465);var e=n(8527),t=n.n(e),r=n(359),o=n.n(r),u=n(7234);function i(e){e.env;var n=e.data,a=e.inputs,i=e.outputs,c=(e.slots,e.parentSlot),l=(0,r.useState)(""),f=l[0],s=l[1];(0,r.useEffect)((function(){a.setValue((function(e){switch(!0){case(0,u.HD)(e)||(0,u.hj)(e):s(e);break;case(0,u.Kn)(e):s(e[n.name])}}))}),[]);var d=(0,r.useCallback)((function(t){var r,o;s(t),null===(o=null==c?void 0:(r=c._inputs).onChange)||void 0===o||o.call(r,{id:e.id,name:e.name,value:t}),i.onChange(t)}),[]);return o().createElement(t(),{value:f,onChange:d,count:n.count,allowHalf:n.allowHalf})}})(),a})()));