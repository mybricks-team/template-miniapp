!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("@tarojs/taro")):"function"==typeof define&&define.amd?define(["@tarojs/taro"],e):"object"==typeof exports?exports.fangzhouComDef=e(require("@tarojs/taro")):o.fangzhouComDef=e(o["@tarojs/taro"])}(self,(o=>(()=>{"use strict";var e={6801:e=>{e.exports=o}},t={};function l(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,l),n.exports}l.n=o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return l.d(e,{a:e}),e},l.d=(o,e)=>{for(var t in e)l.o(e,t)&&!l.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:e[t]})},l.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),l.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var r={};return(()=>{l.r(r),l.d(r,{default:()=>e});var o=l(6801);function e(e){var t=e.env,l=(e.data,e.inputs),r=e.outputs;t.runtime&&l.getWithPos((function(e){var l,n,i,a,u,d;if((null==e?void 0:e.from)&&(null==e?void 0:e.to)){var s="https://apis.map.qq.com/ws/direction/v1/driving/?key=".concat(null!==(n=null==t?void 0:t.apiKey)&&void 0!==n?n:"WDOBZ-7WZWL-NFJPE-EKBHS-PBEEK-U4FA5","&from=").concat(null===(i=null==e?void 0:e.from)||void 0===i?void 0:i.latitude,",").concat(null===(a=null==e?void 0:e.from)||void 0===a?void 0:a.longitude,"&to=").concat(null===(u=null==e?void 0:e.to)||void 0===u?void 0:u.latitude,",").concat(null===(d=null==e?void 0:e.to)||void 0===d?void 0:d.longitude,"&policy=TRIP,AVOID_HIGHWAY,NAV_POINT_FIRST");o.request({url:s,success:function(o){var e,t,l,n,i,a;if(200===o.statusCode&&0===o.data.status){var u=(null!==(e=o.data)&&void 0!==e?e:{}).result;if(Array.isArray(u.routes)){var d=u.routes.map((function(o){for(var e=[],t=2;t<o.polyline.length;t++)o.polyline[t]=o.polyline[t-2]+o.polyline[t]/1e6;for(var l=0;l<o.polyline.length/2;l++)e[l]={latitude:o.polyline[2*l],longitude:o.polyline[2*l+1]};return{points:e}}));null===(t=r.onSuccess)||void 0===t||t.call(r,d)}}else null===(l=r.onFail)||void 0===l||l.call(r,{errMsg:null!==(a=null!==(i=null===(n=o.data)||void 0===n?void 0:n.message)&&void 0!==i?i:o.errMsg)&&void 0!==a?a:"网络错误"})},fail:function(o){var e,t=o.errMsg;null===(e=r.onFail)||void 0===e||e.call(r,{errMsg:t})}})}else null===(l=r.onFail)||void 0===l||l.call(r,{errMsg:"不合法的起点和终点"})}))}})(),r})()));