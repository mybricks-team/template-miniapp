!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@tarojs/components"),require("brickd-mobile/es/list"),require("brickd-mobile/es/loading"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","brickd-mobile/es/list","brickd-mobile/es/loading","react"],r):"object"==typeof exports?exports.fangzhouComDef=r(require("@tarojs/components"),require("brickd-mobile/es/list"),require("brickd-mobile/es/loading"),require("react")):e.fangzhouComDef=r(e["@tarojs/components"],e["brickd-mobile/es/list"],e["brickd-mobile/es/loading"],e.React)}(self,((e,r,t,n)=>(()=>{"use strict";var o={9775:(e,r,t)=>{t(247),t(5665),t(5858),t(9098),t(2515),t(6750)},2515:(e,r,t)=>{t(359)},6750:(e,r,t)=>{t(359)},5665:(e,r,t)=>{t(359)},5858:(e,r,t)=>{t(359)},9098:(e,r,t)=>{t(359)},247:(e,r,t)=>{t(359)},6178:(e,r,t)=>{function n(e,r){void 0===e&&(e="u_"),void 0===r&&(r=6);for(var t="",n=0;n<r;n++)t+="abcdefhijkmnprstwxyz0123456789".charAt(Math.floor(30*Math.random()));return e+t}function o(e,r,t){var n;return void 0===t&&(t=!1),function(){for(var o=this,l=[],i=0;i<arguments.length;i++)l[i]=arguments[i];if(n&&clearTimeout(n),t){if(!n)return e.apply(this,l);n=setTimeout((function(){return n=null}),r)}else n=setTimeout((function(){return e.apply(o,l)}),r)}}t.d(r,{Ds:()=>o,Vj:()=>n}),t(9775)},9586:(e,r,t)=>{t(5330),t(7792),t(6629)},7792:(e,r,t)=>{t(5330),t(7765)},5330:(e,r,t)=>{t(5010),t(3218)},5010:(e,r,t)=>{t.r(r)},4963:(e,r,t)=>{t.d(r,{Z:()=>n});const n={list:"list-d9006",placeholder:"placeholder-a480e",scroll:"scroll-a0d79",normal:"normal-b7f27"}},6629:(e,r,t)=>{t.r(r)},7765:(e,r,t)=>{t.r(r)},3218:(e,r,t)=>{t.r(r)},9525:r=>{r.exports=e},7116:e=>{e.exports=r},4886:e=>{e.exports=t},359:e=>{e.exports=n}},l={};function i(e){var r=l[e];if(void 0!==r)return r.exports;var t=l[e]={exports:{}};return o[e](t,t.exports,i),t.exports}i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{i.r(a),i.d(a,{ContainerList:()=>y,default:()=>h}),i(7792);var e,r,t,n,o=i(4886),l=i.n(o),u=(i(9586),i(7116)),c=i.n(u),d=i(359),s=i.n(d),f=i(9525),m=i(4963),v=i(6178),p="_itemKey",b=[(e={},e[p]=1,e.index=1,e),(r={},r[p]=2,r.index=2,r),(t={},t[p]=3,t.index=3,t)];!function(e){e.IDLE="idle",e.LOADING="loading",e.ERROR="error",e.NOMORE="noMore"}(n||(n={}));var y=function(e){var r,t,o,i,a,u,y=e.env,h=e.data,g=e.inputs,E=e.outputs,x=e.slots,R=(0,d.useState)(y.edit?b:[]),O=R[0],j=R[1],D=(0,d.useState)(n.IDLE),M=D[0],S=D[1];!function(e,r){var t=r.env,o=r.enable,l=void 0!==o&&o,i=(0,d.useRef)({clientHeight:0}),a=(0,d.useRef)((function(){S((function(e){var r;return e===n.IDLE?(null===(r=E.onScrollLoad)||void 0===r||r.call(E),n.LOADING):e}))})),u=(0,d.useCallback)((0,v.Ds)((function(){var e,r;null===(r=null==t?void 0:(e=t.rootScroll).getBoundingClientRect)||void 0===r||r.call(e).then((function(e){var r=e.height;i.current.clientHeight=r}))}),300,!0),[]);(0,d.useEffect)((function(){var e,r;l&&(null===(r=null===(e=null==t?void 0:t.rootScroll)||void 0===e?void 0:e.onScroll)||void 0===r||r.call(e,(function(e){var r,t,n=null!==(r=e.detail)&&void 0!==r?r:{},o=n.scrollTop,l=n.scrollHeight;u(),i.current.clientHeight&&o+i.current.clientHeight+400>l&&(null===(t=a.current)||void 0===t||t.call(a))})))}),[l])}(0,{env:y,enable:!!h.scrollRefresh}),(0,d.useEffect)((function(){var e,r,t;g.addDataSource((function(e){if(Array.isArray(e)){var r=e.map((function(e,r){var t;return(t={item:e})[p]=""===h.rowKey?(0,v.Vj)():e[h.rowKey]||(0,v.Vj)(),t.index=r,t}));j((function(e){return e.concat(r)})),S(n.IDLE)}})),g.refreshDataSource((function(e){if(Array.isArray(e)){var r=e.map((function(e,r){var t;return(t={item:e})[p]=""===h.rowKey?(0,v.Vj)():e[h.rowKey]||(0,v.Vj)(),t.index=r,t}));j(r),S(n.IDLE)}})),null===(e=g.loading)||void 0===e||e.call(g,(function(e){S(n.LOADING)})),null===(r=g.noMore)||void 0===r||r.call(g,(function(e){S(n.NOMORE)})),null===(t=g.error)||void 0===t||t.call(g,(function(e){S(n.ERROR)}))}),[]);var k=(0,d.useMemo)((function(){return y.edit&&!x.item.size?s().createElement(f.View,{className:m.Z.placeholder},x.item.render()):null}),[y.edit,O,x.item]),L=(0,d.useMemo)((function(){return n.NOMORE!==M}),[M]),T=(0,d.useMemo)((function(){return n.LOADING===M}),[M]),I=(0,d.useMemo)((function(){return n.ERROR===M}),[M]);return s().createElement(f.View,{className:"".concat(h.scrollRefresh?"".concat(m.Z.list," ").concat(m.Z.scroll):"".concat(m.Z.list," ").concat(m.Z.normal))},k||s().createElement(s().Fragment,null,O.map((function(e,r){var t=e[p],n=e.index,o=e.item;return s().createElement(f.View,{className:y.edit&&r>0?"disabled-area":m.Z.item,key:t},x.item.render({inputValues:{itemData:o,index:n},key:t}))})),(null==h?void 0:h.scrollRefresh)?s().createElement(c().Placeholder,null,T&&s().createElement(l(),null,null!==(r=h.loadingTip)&&void 0!==r?r:"..."),I&&(null!==(t=h.errorTip)&&void 0!==t?t:"加载失败，请重试"),!L&&(null!==(o=h.emptyTip)&&void 0!==o?o:"没有更多了")):M!==n.IDLE&&s().createElement(c().Placeholder,null,T&&s().createElement(l(),null,null!==(i=h.loadingTip)&&void 0!==i?i:"..."),I&&(null!==(a=h.errorTip)&&void 0!==a?a:"加载失败，请重试"),!L&&(null!==(u=h.emptyTip)&&void 0!==u?u:"没有更多了"))))};const h=y})(),a})()));