!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("@tarojs/taro"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","@tarojs/taro","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("@tarojs/taro"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["@tarojs/taro"],e.React)}(self,((e,t,r)=>(()=>{"use strict";var o={1286:(e,t,r)=>{r.d(t,{k:()=>p,t:()=>i.SwiperItem});var o=r(359),n=r.n(o),i=r(9525),a=r(6801),c=r.n(a),l=r(8560),u=function(){return u=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},u.apply(this,arguments)},d=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};if(c().getEnv()===c().ENV_TYPE.WEB||"Unknown"===c().getEnv()){var s=document.querySelectorAll;document.querySelectorAll=function(e){var t,r;return document.getElementById("_mybricks-geo-webview_")&&e.indexOf(".taro-swiper-")>-1?null===(r=null===(t=document.getElementById("_mybricks-geo-webview_"))||void 0===t?void 0:t.shadowRoot)||void 0===r?void 0:r.querySelectorAll(e):s.call(document,e)}}function p(e){var t=e.current,r=e.style,o=e.children,a=e.className,c=e.indicator,s=d(e,["current","style","children","className","indicator"]);return n().createElement(i.View,{className:"".concat(l.Z.wrapper," mybricks-swiper-wrapper ").concat(a)},n().createElement(i.Swiper,u({},s,{style:r,current:t,indicatorDots:!1}),o),c&&n().createElement(i.View,{className:"indicators"},Array.from(o).map((function(e,r){return n().createElement(i.View,{key:r,className:t===r?"indicator indicator-active":"indicator"})}))))}},8560:(e,t,r)=>{r.d(t,{Z:()=>o});const o={wrapper:"wrapper-c290b"}},4492:(e,t,r)=>{r.d(t,{Z:()=>o});const o={swiper:"swiper-e3921",swiperItem:"swiperItem-bcdf7"}},9525:t=>{t.exports=e},6801:e=>{e.exports=t},359:e=>{e.exports=r}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{i.r(a),i.d(a,{default:()=>n});var e=i(359),t=i.n(e),r=i(1286),o=i(4492);function n(n){var i,a,c,l,u=n.env,d=n.data,s=(n.inputs,n.outputs,n.style),p=n.slots,f=(0,e.useState)((l=d.items).length>0&&l[0]._id||""),m=f[0],v=f[1];(0,e.useEffect)((function(){var e;u.edit&&(null===(e=null==d?void 0:d.edit)||void 0===e?void 0:e.currentTabId)&&v(d.edit.currentTabId)}),[u.edit,null===(i=null==d?void 0:d.edit)||void 0===i?void 0:i.currentTabId]);var y=(0,e.useMemo)((function(){return d.items.findIndex((function(e){return e._id===m}))}),[m,d.items]),b=(0,e.useCallback)((function(e){var t;if(!(null==u?void 0:u.edit)){var r=d.items[null===(t=e.detail)||void 0===t?void 0:t.current];v(r._id)}}),[d.items]);return t().createElement(r.k,{style:{height:s.height},current:y,onChange:b,indicator:null===(a=d.showIndicator)||void 0===a||a,circular:null!==(c=d.circular)&&void 0!==c&&c},d.items.map((function(e,n){var i,a;return t().createElement(r.t,{key:e._id,className:o.Z.swiperItem},null===(a=null===(i=p[e._id])||void 0===i?void 0:i.render)||void 0===a?void 0:a.call(i))})))}})(),a})()));