!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("brickd-mobile/es/image"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","brickd-mobile/es/image","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("brickd-mobile/es/image"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["brickd-mobile/es/image"],e.React)}(self,((e,t,a)=>(()=>{"use strict";var o={9896:(e,t,a)=>{a.d(t,{Z:()=>o});const o={card:"card-d9810",head:"head-c9090",tag:"tag-aa3b2",main:"main-c30dd",logo:"logo-e896e",meta:"meta-f19d5",title:"title-ed587",condition:"condition-ad4a7",button:"button-d91a4",body:"body-c0209"}},3904:(e,t,a)=>{a.r(t)},7315:(e,t,a)=>{a.r(t)},9536:(e,t,a)=>{a(7514),a(3904)},7514:(e,t,a)=>{a(9235),a(7315)},9235:(e,t,a)=>{a.r(t)},9525:t=>{t.exports=e},36:e=>{e.exports=t},359:e=>{e.exports=a}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return o[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{n.r(i),n.d(i,{default:()=>l}),n(9536);var e=n(36),t=n.n(e),a=n(359),o=n.n(a),r=n(9525),c=n(9896),s={id:445381637587013,组织名称:"Mybricks Team",组织简介:"Mybricks Team 是一个专注于低代码开发的团队。",_管理员:1686137057507,管理员:{id:1686137057507,昵称:"昵称21aaaa"},入群条件:"不限制",组织图标:"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-05-30/1685451722186.3a6d5fa5deb9456f.png"};function l(e){var n=e.env,i=(e.data,e.inputs),l=e.outputs,d=(e.slots,(0,a.useState)(n.edit?s:{})),m=d[0],u=d[1];(0,a.useEffect)((function(){i.setDatasource((function(e){n.runtime&&u(e)}))}),[]);var p=(0,a.useCallback)((function(){l.onClick(m)}),[m]);return o().createElement(r.View,{className:c.Z.card,onClick:p},o().createElement(r.View,{className:c.Z.head},o().createElement(r.View,{className:c.Z.main},m["组织图标"]?o().createElement(t(),{className:c.Z.logo,mode:"scaleToFill",src:m["组织图标"]}):null,o().createElement(r.View,{className:c.Z.meta},o().createElement(r.View,{className:c.Z.title},m["组织名称"]))),o().createElement(r.View,{className:c.Z.button},"审核通过"===m["我的状态"]?"已加入":"加入")),m["组织简介"]?o().createElement(r.View,{className:c.Z.body},o().createElement(r.Text,{className:c.Z.text},m["组织简介"])):null)}})(),i})()));