!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("brickd-mobile/es/field"),require("brickd-mobile/es/switch"),require("react")):"function"==typeof define&&define.amd?define(["brickd-mobile/es/field","brickd-mobile/es/switch","react"],r):"object"==typeof exports?exports.fangzhouComDef=r(require("brickd-mobile/es/field"),require("brickd-mobile/es/switch"),require("react")):e.fangzhouComDef=r(e["brickd-mobile/es/field"],e["brickd-mobile/es/switch"],e.React)}(self,((e,r,t)=>(()=>{"use strict";var o={2010:(e,r,t)=>{t.r(r)},4556:(e,r,t)=>{t(3282),t(5636)},7223:(e,r,t)=>{t(7279)},7279:(e,r,t)=>{t(3282),t(4556),t(2606),t(8760)},2606:(e,r,t)=>{t(7966)},7151:(e,r,t)=>{t(3282),t(8165)},3282:(e,r,t)=>{t(2010),t(3443)},5472:(e,r,t)=>{t(3282),t(7151),t(8564)},5636:(e,r,t)=>{t.r(r)},8760:(e,r,t)=>{t.r(r)},7966:(e,r,t)=>{t.r(r)},8165:(e,r,t)=>{t.r(r)},3443:(e,r,t)=>{t.r(r)},8564:(e,r,t)=>{t.r(r)},2973:r=>{r.exports=e},3977:e=>{e.exports=r},359:e=>{e.exports=t}},i={};function n(e){var r=i[e];if(void 0!==r)return r.exports;var t=i[e]={exports:{}};return o[e](t,t.exports,n),t.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{n.r(a),n.d(a,{default:()=>u}),n(5472);var e=n(3977),r=n.n(e),t=(n(7223),n(2973)),o=n.n(t),i=n(359),l=n.n(i);function u(e){var t=e.env,n=e.data,a=(e.inputs,e.outputs),u=(e.slots,(0,i.useState)(n.value)),s=u[0],c=u[1],d=(0,i.useCallback)((function(e){t.runtime&&(c(e),a.onChange({name:n.name,value:e}))}),[]);return l().createElement(o(),{label:!n.hideLabel&&n.label,name:n.name},l().createElement(r(),{style:{marginLeft:"auto"},value:s,size:24,checked:s,onChange:d}))}})(),a})()));