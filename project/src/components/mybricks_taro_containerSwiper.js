!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("brickd-mobile/es/swiper"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","brickd-mobile/es/swiper","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("brickd-mobile/es/swiper"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["brickd-mobile/es/swiper"],e.React)}(self,((e,t,r)=>(()=>{"use strict";var o={7884:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(359),n=r.n(o),i=r(9525),a=r(2391);const s=function(e){e.title;var t=e.slot;return n().createElement(i.View,{className:a.Z.emptySlot},t.render())}},9775:(e,t,r)=>{r(247),r(5665),r(5858),r(9098),r(2515),r(6750)},2515:(e,t,r)=>{r(359)},6750:(e,t,r)=>{r(359)},5665:(e,t,r)=>{r(359)},5858:(e,t,r)=>{r(359)},9098:(e,t,r)=>{r(359)},247:(e,t,r)=>{r(359)},6178:(e,t,r)=>{function o(e,t){void 0===e&&(e="u_"),void 0===t&&(t=6);for(var r="",o=0;o<t;o++)r+="abcdefhijkmnprstwxyz0123456789".charAt(Math.floor(30*Math.random()));return e+r}r.d(t,{Vj:()=>o}),r(9775)},5330:(e,t,r)=>{r(5010),r(3218)},3526:(e,t,r)=>{r(5330),r(687)},5010:(e,t,r)=>{r.r(t)},2391:(e,t,r)=>{r.d(t,{Z:()=>o});const o={emptySlot:"emptySlot-bd246"}},4492:(e,t,r)=>{r.d(t,{Z:()=>o});const o={wrapper:"wrapper-e297e",swiper:"swiper-e3921",mock:"mock-cc500",swiperItem:"swiperItem-bcdf7",thumbnail:"thumbnail-ac7cd"}},3218:(e,t,r)=>{r.r(t)},687:(e,t,r)=>{r.r(t)},9525:t=>{t.exports=e},5698:e=>{e.exports=t},359:e=>{e.exports=r}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{i.r(a),i.d(a,{default:()=>l}),i(3526);var e=i(5698),t=i.n(e),r=i(359),o=i.n(r),n=i(9525),s=i(4492),c=i(7884),u=i(6178),p=[{index:1},{index:2},{index:3}],d="_itemKey";function l(e){var i=e.env,a=e.data,l=e.inputs,m=(e.outputs,e.style),f=e.slots,y=(0,r.useState)(i.edit?p:[]),b=y[0],v=y[1];return(0,r.useEffect)((function(){l.setDataSource((function(e){if(Array.isArray(e)){var t=e.map((function(e,t){var r;return(r={item:e})[d]=""===a.rowKey?(0,u.Vj)():e[a.rowKey]||(0,u.Vj)(),r.index=t,r}));v((function(e){return e.concat(t)}))}}))}),[]),i.runtime&&!b.length?null:i.edit&&!f.item.size?o().createElement(c.Z,{slot:f.item}):o().createElement(n.View,{className:s.Z.wrapper},o().createElement(t(),{className:s.Z.swiper,width:m.width,height:m.height,autoplay:!i.edit&&a.autoplay&&4e3},b.map((function(e,r){var n,i;return o().createElement(t().Item,{key:(0,u.Vj)(),className:s.Z.swiperItem},null===(i=null===(n=f.item)||void 0===n?void 0:n.render)||void 0===i?void 0:i.call(n,{inputValues:{itemData:e.item,index:r}}))}))))}})(),a})()));