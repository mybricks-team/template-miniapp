!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@taroify/icons"),require("brickd-mobile/es/cell"),require("react")):"function"==typeof define&&define.amd?define(["@taroify/icons","brickd-mobile/es/cell","react"],r):"object"==typeof exports?exports.fangzhouComDef=r(require("@taroify/icons"),require("brickd-mobile/es/cell"),require("react")):e.fangzhouComDef=r(e["@taroify/icons"],e["brickd-mobile/es/cell"],e.React)}(self,((e,r,t)=>(()=>{"use strict";var o={2010:(e,r,t)=>{t.r(r)},4556:(e,r,t)=>{t(3282),t(3637)},3282:(e,r,t)=>{t(2010),t(5755)},5231:(e,r,t)=>{t.d(r,{Z:()=>o});const o={cell:"cell-a48d6"}},3637:(e,r,t)=>{t.r(r)},5755:(e,r,t)=>{t.r(r)},7106:r=>{r.exports=e},6696:e=>{e.exports=r},359:e=>{e.exports=t}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={exports:{}};return o[e](t,t.exports,i),t.exports}i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{i.r(l),i.d(l,{default:()=>a}),i(4556);var e=i(6696),r=i.n(e),t=i(359),o=i.n(t),n=i(7106),c=i(5231),u=function(){return u=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},u.apply(this,arguments)};function a(e){var i,l,a=e.env,s=e.data,f=e.slots,d=e.inputs,p=e.outputs;d.value((function(e){s=u(u({},s),e)}));var b=(0,t.useCallback)((function(e){a.runtime&&p.onClick(e)}),[]),y=(0,t.useMemo)((function(){return s.useArrowIcon?o().createElement(n.Arrow,null):null}),[s.useArrowIcon]);return o().createElement(r(),{className:c.Z.cell,title:s.title,brief:s.brief,rightIcon:y,clickable:!0,align:"center",onClick:function(){return b({title:s.title})}},s.useChildren?null===(l=null===(i=f.children)||void 0===i?void 0:i.render)||void 0===l?void 0:l.call(i,{style:{minHeight:"12"}}):s.content)}})(),l})()));