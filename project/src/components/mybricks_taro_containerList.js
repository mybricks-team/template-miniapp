!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@tarojs/components"),require("@tarojs/taro"),require("brickd-mobile/es/list"),require("brickd-mobile/es/loading"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","@tarojs/taro","brickd-mobile/es/list","brickd-mobile/es/loading","react"],r):"object"==typeof exports?exports.fangzhouComDef=r(require("@tarojs/components"),require("@tarojs/taro"),require("brickd-mobile/es/list"),require("brickd-mobile/es/loading"),require("react")):e.fangzhouComDef=r(e["@tarojs/components"],e["@tarojs/taro"],e["brickd-mobile/es/list"],e["brickd-mobile/es/loading"],e.React)}(self,((e,r,o,t,n)=>(()=>{"use strict";var i={9775:(e,r,o)=>{o(247),o(5665),o(5858),o(9098),o(2515),o(6750)},2515:(e,r,o)=>{o(359)},6750:(e,r,o)=>{o(359)},5665:(e,r,o)=>{o(359)},5858:(e,r,o)=>{o(359)},9098:(e,r,o)=>{o(359)},247:(e,r,o)=>{o(359)},6178:(e,r,o)=>{function t(e,r){void 0===e&&(e="u_"),void 0===r&&(r=6);for(var o="",t=0;t<r;t++)o+="abcdefhijkmnprstwxyz0123456789".charAt(Math.floor(30*Math.random()));return e+o}o.d(r,{Vj:()=>t}),o(9775)},9586:(e,r,o)=>{o(5330),o(7792),o(6629)},7792:(e,r,o)=>{o(5330),o(7765)},5330:(e,r,o)=>{o(5010),o(3218)},5010:(e,r,o)=>{o.r(r)},4963:(e,r,o)=>{o.d(r,{Z:()=>t});const t={list:"list-d9006",placeholder:"placeholder-a480e",normal:"normal-b7f27"}},6629:(e,r,o)=>{o.r(r)},7765:(e,r,o)=>{o.r(r)},3218:(e,r,o)=>{o.r(r)},9525:r=>{r.exports=e},6801:e=>{e.exports=r},7116:e=>{e.exports=o},4886:e=>{e.exports=t},359:e=>{e.exports=n}},a={};function l(e){var r=a[e];if(void 0!==r)return r.exports;var o=a[e]={exports:{}};return i[e](o,o.exports,l),o.exports}l.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return l.d(r,{a:r}),r},l.d=(e,r)=>{for(var o in r)l.o(r,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{l.r(c),l.d(c,{ContainerList:()=>j,default:()=>x}),l(7792);var e,r,o,t,n=l(4886),i=l.n(n),a=(l(9586),l(7116)),s=l.n(a),u=l(359),d=l.n(u),f=l(9525),m=l(6801),p=l(4963),v=l(6178),b="_itemKey",y=[(e={},e[b]=1,e.index=1,e),(r={},r[b]=2,r.index=2,r),(o={},o[b]=3,o.index=3,o)];!function(e){e.IDLE="idle",e.LOADING="loading",e.ERROR="error",e.NOMORE="noMore"}(t||(t={}));var j=function(e){var r,o,n,a=e.env,l=e.data,c=e.inputs,j=e.outputs,x=e.slots,E=(0,u.useRef)(!1),R=(0,u.useState)(a.edit?y:[]),h=R[0],O=R[1],g=(0,u.useState)(0),M=g[0],D=g[1],k=(0,u.useState)(!0),L=(k[0],k[1]),S=(0,u.useState)(t.IDLE),q=S[0],I=S[1];(0,m.usePageScroll)((function(e){var r=e.scrollTop;D(r),L(0===r)})),(0,u.useEffect)((function(){var e,r,o;c.addDataSource((function(e){if(Array.isArray(e)){var r=e.map((function(e,r){var o;return(o={item:e})[b]=""===l.rowKey?(0,v.Vj)():e[l.rowKey]||(0,v.Vj)(),o.index=r,o}));O((function(e){return e.concat(r)})),I(t.IDLE)}})),c.refreshDataSource((function(e){if(Array.isArray(e)){var r=e.map((function(e,r){var o;return(o={item:e})[b]=""===l.rowKey?(0,v.Vj)():e[l.rowKey]||(0,v.Vj)(),o.index=r,o}));O(r),I(t.IDLE)}})),null===(e=c.loading)||void 0===e||e.call(c,(function(e){I(t.LOADING)})),null===(r=c.noMore)||void 0===r||r.call(c,(function(e){I(t.NOMORE)})),null===(o=c.error)||void 0===o||o.call(c,(function(e){I(t.ERROR)}))}),[]);var N=(0,u.useMemo)((function(){return a.edit&&!x.item.size?d().createElement(f.View,{className:p.Z.placeholder},x.item.render()):null}),[a.edit,h,x.item]),w=(0,u.useMemo)((function(){return t.NOMORE!==q}),[q]),A=(0,u.useMemo)((function(){return t.LOADING===q}),[q]),V=(0,u.useMemo)((function(){return t.ERROR===q}),[q]);(0,u.useEffect)((function(){setTimeout((function(){E.current=!0}),1500)}),[]);var T=(0,u.useCallback)((function(){var e;l.scrollRefresh&&E.current&&(I(t.LOADING),null===(e=j.onScrollLoad)||void 0===e||e.call(j))}),[l.scrollRefresh]),Z=(0,u.useMemo)((function(){return!!l.scrollRefresh||q===t.IDLE}),[l.scrollRefresh,q]);return d().createElement(f.View,{className:"".concat(l.scrollRefresh?"".concat(p.Z.list," ").concat(p.Z.scroll):"".concat(p.Z.list," ").concat(p.Z.normal))},N||d().createElement(s(),{loading:A,hasMore:w,scrollTop:M,offset:50,onLoad:T},h.map((function(e,r){var o=e[b],t=e.index,n=e.item;return d().createElement(f.View,{className:a.edit&&r>0?"disabled-area":p.Z.item,key:o,style:{display:Z?"block":"none"}},x.item.render({inputValues:{itemData:n,index:t},key:o}))})),q!==t.IDLE&&d().createElement(s().Placeholder,null,A&&d().createElement(i(),null,null!==(r=l.loadingTip)&&void 0!==r?r:"..."),V&&(null!==(o=l.errorTip)&&void 0!==o?o:"加载失败，请重试"),!w&&(null!==(n=l.emptyTip)&&void 0!==n?n:"没有更多了"))))};const x=j})(),c})()));