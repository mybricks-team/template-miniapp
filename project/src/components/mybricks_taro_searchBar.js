!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("brickd-mobile/es/search"),require("react")):"function"==typeof define&&define.amd?define(["brickd-mobile/es/search","react"],r):"object"==typeof exports?exports.fangzhouComDef=r(require("brickd-mobile/es/search"),require("react")):e.fangzhouComDef=r(e["brickd-mobile/es/search"],e.React)}(self,((e,r)=>(()=>{"use strict";var o={1632:(e,r,o)=>{o.d(r,{Z:()=>a});const a={searchBar:"searchBar-e619f"}},2410:(e,r,o)=>{o.r(r)},1302:(e,r,o)=>{o.r(r)},3378:(e,r,o)=>{o.r(r)},2406:(e,r,o)=>{o.r(r)},7315:(e,r,o)=>{o.r(r)},6080:(e,r,o)=>{o(7514),o(2410)},2809:(e,r,o)=>{o(9213)},9213:(e,r,o)=>{o(7514),o(6080),o(8540),o(1302)},8540:(e,r,o)=>{o(3378)},2822:(e,r,o)=>{o(7514),o(2809),o(2406)},7514:(e,r,o)=>{o(9235),o(7315)},9235:(e,r,o)=>{o.r(r)},4860:r=>{r.exports=e},359:e=>{e.exports=r}},a={};function t(e){var r=a[e];if(void 0!==r)return r.exports;var n=a[e]={exports:{}};return o[e](n,n.exports,t),n.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{t.r(n),t.d(n,{default:()=>c}),t(2822);var e=t(4860),r=t.n(e),o=t(359),a=t.n(o),l=t(1632);function c(e){e.env,e.data,e.inputs;var t=e.outputs,n=(0,o.useState)(""),c=n[0],u=n[1],i=(0,o.useCallback)((function(){var e;null===(e=t.onSearch)||void 0===e||e.call(t,c)}),[c]),s=(0,o.useCallback)((function(e){var r;u(e.detail.value),null===(r=t.onChange)||void 0===r||r.call(t,e.detail.value)}),[]),d=(0,o.useCallback)((function(e){var r;null===(r=t.onCancel)||void 0===r||r.call(t,!0)}),[]);return a().createElement(r(),{className:l.Z.searchBar,value:c,placeholder:"请输入搜索关键词",onChange:s,action:!0,onCancel:d,onSearch:i})}})(),n})()));