/*! For license information please see mybricks_taro_popup.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e.React)}(self,((e,t)=>(()=>{var o={447:(e,t,o)=>{"use strict";function n(e){return!!(null==e?void 0:e.edit)}o.d(t,{m:()=>n})},3078:(e,t,o)=>{var n;function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=r(o);if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)){if(o.length){var l=a.apply(null,o);l&&e.push(l)}}else if("object"===n){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var s in o)i.call(o,s)&&o[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):"object"===r(o.amdO)&&o.amdO?void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n):window.classNames=a}()},9067:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n={popup:"popup-f75c1",overlay:"overlay-b0322",main:"main-c0904",center:"center-f613f",top:"top-d0d00",bottom:"bottom-c35d2",left:"left-a08e8",right:"right-ad556",content:"content-f14cd",empty:"empty-dbfbe",show:"show-f8ac5",fadeIn:"fadeIn-b6dca",scaleIn:"scaleIn-f1e99",slideInTop:"slideInTop-b5acc",slideInBottom:"slideInBottom-f2e1c",slideInLeft:"slideInLeft-d235d",slideInRight:"slideInRight-d4817"}},9525:t=>{"use strict";t.exports=e},359:e=>{"use strict";e.exports=t}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return o[e](i,i.exports,r),i.exports}r.amdO={},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.r(i),r.d(i,{default:()=>c});var e=r(359),t=r.n(e),o=r(9525),n=r(3078),a=r.n(n),l=r(9067),s=r(447);function c(n){var r,i,c,u,f=n.env,p=n.data,d=n.inputs,m=n.outputs,v=n.slots,y=n.createPortal,b=(0,e.useState)(!!f.edit),g=b[0],h=b[1];(0,e.useEffect)((function(){var e,t;null===(e=d.onShow)||void 0===e||e.call(d,(function(){h(!0)})),null===(t=d.onHide)||void 0===t||t.call(d,(function(){h(!1)}))}),[]);var S=(0,e.useMemo)((function(){var e;return a()(((e={})[l.Z.popup]=!0,e[l.Z.show]=g,e))}),[g,f.edit]),j=(0,e.useMemo)((function(){var e;return a()(((e={})[l.Z.main]=!0,e[l.Z.center]="center"===p.position,e[l.Z.top]="top"===p.position,e[l.Z.bottom]="bottom"===p.position,e[l.Z.left]="left"===p.position,e[l.Z.right]="right"===p.position,e))}),[p.position]),x=(0,e.useCallback)((function(){var e;null===(e=null==m?void 0:m.onClickOverlay)||void 0===e||e.call(m,!0)}),[]),w=t().createElement(o.View,{className:S},t().createElement(o.View,{className:l.Z.overlay,onClick:x}),t().createElement(o.View,{className:j},t().createElement(o.View,{className:a()((r={},r[l.Z.content]=!0,r[l.Z.empty]=0===(null===(i=v.content)||void 0===i?void 0:i.size),r)),style:p.contentStyle},null===(u=null===(c=v.content)||void 0===c?void 0:c.render)||void 0===u?void 0:u.call(c))));return(0,s.m)(f)?y(w):w}})(),i})()));