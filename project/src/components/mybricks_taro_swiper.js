!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("brickd-mobile/es/swiper"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","brickd-mobile/es/swiper","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("brickd-mobile/es/swiper"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["brickd-mobile/es/swiper"],e.React)}(self,((e,t,r)=>(()=>{"use strict";var o={6184:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(359),n=r.n(o),i=r(9525),a=r(1343);const s=function(e){var t=e.title,r=void 0===t?"暂无内容":t;return n().createElement(i.View,{className:a.Z.emptyCom},r)}},2010:(e,t,r)=>{r.r(t)},3282:(e,t,r)=>{r(2010),r(5755)},1046:(e,t,r)=>{r(3282),r(2336)},1343:(e,t,r)=>{r.d(t,{Z:()=>o});const o={emptyCom:"emptyCom-dc7f7"}},8539:(e,t,r)=>{r.d(t,{Z:()=>o});const o={swiper:"swiper-dcf10",thumbnail:"thumbnail-b822d"}},5755:(e,t,r)=>{r.r(t)},2336:(e,t,r)=>{r.r(t)},9525:t=>{t.exports=e},5698:e=>{e.exports=t},359:e=>{e.exports=r}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{i.r(a),i.d(a,{default:()=>l}),i(1046);var e=i(5698),t=i.n(e),r=i(359),o=i.n(r),n=i(9525),s=i(6184),c=i(8539);function l(e){var i=e.env,a=e.data,l=e.inputs,u=e.outputs,m=e.style;(0,r.useEffect)((function(){l.setItems((function(e){a.items=e}))}),[]);var d=(0,r.useCallback)((function(e){var t=e.item,r=e.index;u.onClick({index:r,item:t})}),[]);return i.runtime&&!a.items.length?null:i.edit&&!a.items.length?o().createElement(s.Z,{title:"请配置幻灯片"}):o().createElement(t(),{className:c.Z.swiper,width:m.width,height:m.height,autoplay:!i.edit&&a.autoplay&&4e3,lazyRender:!0},a.items.map((function(e,r){return o().createElement(t().Item,{onClick:function(){d({item:e,index:r})}},o().createElement(n.Image,{className:c.Z.thumbnail,mode:"aspectFill",src:e.thumbnail}))})),o().createElement(t().Indicator,null))}})(),a})()));