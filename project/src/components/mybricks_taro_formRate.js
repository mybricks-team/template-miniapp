!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("brickd-mobile/es/field"),require("brickd-mobile/es/rate"),require("react")):"function"==typeof define&&define.amd?define(["brickd-mobile/es/field","brickd-mobile/es/rate","react"],r):"object"==typeof exports?exports.fangzhouComDef=r(require("brickd-mobile/es/field"),require("brickd-mobile/es/rate"),require("react")):e.fangzhouComDef=r(e["brickd-mobile/es/field"],e["brickd-mobile/es/rate"],e.React)}(self,((e,r,t)=>(()=>{"use strict";var o={7234:(e,r,t)=>{function o(e){return function(r){return Object.prototype.toString.call(r)==="[object ".concat(e,"]")}}function n(e){return o("String")(e)}function a(e){return o("Object")(e)}t.d(r,{HD:()=>n,Kn:()=>a})},2010:(e,r,t)=>{t.r(r)},4556:(e,r,t)=>{t(3282),t(3637)},7223:(e,r,t)=>{t(2461)},2461:(e,r,t)=>{t(3282),t(4556),t(2606),t(3767)},2606:(e,r,t)=>{t(8150)},3448:(e,r,t)=>{t(3282),t(9143)},3282:(e,r,t)=>{t(2010),t(5755)},3637:(e,r,t)=>{t.r(r)},3767:(e,r,t)=>{t.r(r)},8150:(e,r,t)=>{t.r(r)},9143:(e,r,t)=>{t.r(r)},5755:(e,r,t)=>{t.r(r)},2973:r=>{r.exports=e},8527:e=>{e.exports=r},359:e=>{e.exports=t}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={exports:{}};return o[e](t,t.exports,a),t.exports}a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{a.r(i),a.d(i,{default:()=>l}),a(3448);var e=a(8527),r=a.n(e),t=(a(7223),a(2973)),o=a.n(t),n=a(359),u=a.n(n),c=a(7234);function l(e){e.env;var t=e.data,a=e.inputs,i=e.outputs,l=(e.slots,(0,n.useState)("")),f=l[0],s=l[1];(0,n.useEffect)((function(){a.setValue((function(e){switch(!0){case(0,c.HD)(e):s(e);break;case(0,c.Kn)(e):s(e[t.name])}}))}),[]);var b=(0,n.useCallback)((function(e){s(e),i.onChange({name:t.name,value:e})}),[]);return u().createElement(o(),{label:t.label,name:t.name},u().createElement(r(),{value:f,onChange:b}))}})(),i})()));