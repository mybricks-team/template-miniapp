!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@tarojs/components"),require("@tarojs/taro"),require("brickd-mobile/es/list"),require("brickd-mobile/es/loading"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","@tarojs/taro","brickd-mobile/es/list","brickd-mobile/es/loading","react"],r):"object"==typeof exports?exports.fangzhouComDef=r(require("@tarojs/components"),require("@tarojs/taro"),require("brickd-mobile/es/list"),require("brickd-mobile/es/loading"),require("react")):e.fangzhouComDef=r(e["@tarojs/components"],e["@tarojs/taro"],e["brickd-mobile/es/list"],e["brickd-mobile/es/loading"],e.React)}(self,((e,r,t,o,n)=>(()=>{"use strict";var i={9775:(e,r,t)=>{t(247),t(5665),t(5858),t(9098),t(2515),t(6750)},2515:(e,r,t)=>{t(359)},6750:(e,r,t)=>{t(359)},5665:(e,r,t)=>{t(359)},5858:(e,r,t)=>{t(359)},9098:(e,r,t)=>{t(359)},247:(e,r,t)=>{t(359)},6178:(e,r,t)=>{function o(e,r){void 0===e&&(e="u_"),void 0===r&&(r=6);for(var t="",o=0;o<r;o++)t+="abcdefhijkmnprstwxyz0123456789".charAt(Math.floor(30*Math.random()));return e+t}t.d(r,{Vj:()=>o}),t(9775)},2010:(e,r,t)=>{t.r(r)},4740:(e,r,t)=>{t(3282),t(7151),t(5583)},7151:(e,r,t)=>{t(3282),t(8165)},3282:(e,r,t)=>{t(2010),t(3443)},9021:(e,r,t)=>{t.d(r,{Z:()=>o});const o={list:"list-d9006",placeholder:"placeholder-a480e"}},5583:(e,r,t)=>{t.r(r)},8165:(e,r,t)=>{t.r(r)},3443:(e,r,t)=>{t.r(r)},9525:r=>{r.exports=e},6801:e=>{e.exports=r},7116:e=>{e.exports=t},4886:e=>{e.exports=o},359:e=>{e.exports=n}},a={};function l(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={exports:{}};return i[e](t,t.exports,l),t.exports}l.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return l.d(r,{a:r}),r},l.d=(e,r)=>{for(var t in r)l.o(r,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};return(()=>{l.r(u),l.d(u,{default:()=>v}),l(7151);var e,r=l(4886),t=l.n(r),o=(l(4740),l(7116)),n=l.n(o),i=l(359),a=l.n(i),c=l(9525),s=l(6801),d=l(9021),f=l(6178),m=[{index:1},{index:2},{index:3}],p="_itemKey";function v(r){var o,l,u=r.env,v=r.data,b=r.inputs,y=r.outputs,j=r.slots,x=(0,i.useRef)(!1),E=(0,i.useState)(u.edit?m:[]),O=E[0],g=E[1],M=(0,i.useState)(0),R=M[0],h=M[1],D=(0,i.useState)(!0),S=(D[0],D[1]),k=(0,i.useState)(e.IDLE),q=k[0],L=k[1];(0,s.usePageScroll)((function(e){var r=e.scrollTop;h(r),S(0===r)})),(0,i.useEffect)((function(){var r,t,o;b.addDataSource((function(r){if(Array.isArray(r)){var t=r.map((function(e,r){var t;return(t={item:e})[p]=""===v.rowKey?(0,f.Vj)():e[v.rowKey]||(0,f.Vj)(),t.index=r,t}));g((function(e){return e.concat(t)})),L(e.IDLE)}})),b.refreshDataSource((function(r){if(Array.isArray(r)){var t=r.map((function(e,r){var t;return(t={item:e})[p]=""===v.rowKey?(0,f.Vj)():e[v.rowKey]||(0,f.Vj)(),t.index=r,t}));g(t),L(e.IDLE)}})),null===(r=b.loading)||void 0===r||r.call(b,(function(r){L(e.LOADING)})),null===(t=b.noMore)||void 0===t||t.call(b,(function(r){L(e.NOMORE)})),null===(o=b.error)||void 0===o||o.call(b,(function(r){L(e.ERROR)}))}),[]);var N=(0,i.useMemo)((function(){return u.edit&&!j.item.size?a().createElement(c.View,{className:d.Z.placeholder},j.item.render()):null}),[u.edit,O,j.item]),w=(0,i.useMemo)((function(){return e.NOMORE!==q}),[q]),A=(0,i.useMemo)((function(){return e.LOADING===q}),[q]),V=(0,i.useMemo)((function(){return e.ERROR===q}),[q]);return(0,i.useEffect)((function(){setTimeout((function(){x.current=!0}),1500)}),[]),a().createElement(c.View,{className:d.Z.list},N||a().createElement(n(),{loading:A,hasMore:w,scrollTop:R,offset:50,onLoad:function(){var r;v.scrollRefresh&&x.current&&(L(e.LOADING),null===(r=y.onScrollLoad)||void 0===r||r.call(y))}},O.map((function(e){var r=e[p],t=e.index,o=e.item;return a().createElement(c.View,{className:d.Z.item,key:r},j.item.render({inputValues:{itemData:o,index:t},key:r}))})),a().createElement(n().Placeholder,null,A&&a().createElement(t(),null,null!==(o=v.loadingTip)&&void 0!==o?o:"..."),V&&(null!==(l=v.errorTip)&&void 0!==l?l:"加载失败，请重试"),!w&&"没有更多了")))}!function(e){e.IDLE="idle",e.LOADING="loading",e.ERROR="error",e.NOMORE="noMore"}(e||(e={}))})(),u})()));