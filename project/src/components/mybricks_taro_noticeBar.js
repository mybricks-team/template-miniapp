!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("brickd-mobile/es/notice-bar"),require("react")):"function"==typeof define&&define.amd?define(["brickd-mobile/es/notice-bar","react"],r):"object"==typeof exports?exports.fangzhouComDef=r(require("brickd-mobile/es/notice-bar"),require("react")):e.fangzhouComDef=r(e["brickd-mobile/es/notice-bar"],e.React)}(self,((e,r)=>(()=>{"use strict";var t={1462:(e,r,t)=>{t.r(r)},7315:(e,r,t)=>{t.r(r)},6940:(e,r,t)=>{t(7514),t(1462)},7514:(e,r,t)=>{t(9235),t(7315)},9235:(e,r,t)=>{t.r(r)},4504:r=>{r.exports=e},359:e=>{e.exports=r}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{n.r(i),n.d(i,{default:()=>a}),n(6940);var e=n(4504),r=n.n(e),t=n(359),o=n.n(t);function a(e){var n=e.env,i=e.data,a=(e.inputs,e.outputs),l=(0,t.useCallback)((function(){var e;null===(e=a.onClick)||void 0===e||e.call(a)}),[]),u=(0,t.useMemo)((function(){return Math.random()}),[!!n.edit]),c=(0,t.useMemo)((function(){return i.scrollable&&!(null==n?void 0:n.edit)}),[!!n.edit,i.scrollable]);return o().createElement(r(),{key:u,wordwrap:i.wordwrap,scrollable:c,onClick:l,style:i.style},i.noticeText)}})(),i})()));