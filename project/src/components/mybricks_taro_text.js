/*! For license information please see mybricks_taro_text.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e.React)}(self,((e,t)=>(()=>{var o={3078:(e,t,o)=>{var r;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}!function(){"use strict";var i={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=n(o);if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)){if(o.length){var u=s.apply(null,o);u&&e.push(u)}}else if("object"===r){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var a in o)i.call(o,a)&&o[a]&&e.push(a)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):"object"===n(o.amdO)&&o.amdO?void 0===(r=function(){return s}.apply(t,[]))||(e.exports=r):window.classNames=s}()},4721:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});const r={text:"text-cb441","ellipsis-line":"ellipsis-line-c35b2"}},9525:t=>{"use strict";t.exports=e},359:e=>{"use strict";e.exports=t}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,n),i.exports}n.amdO={},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";n.r(i),n.d(i,{default:()=>a});var e=n(359),t=n.n(e),o=n(9525),r=n(3078),s=n.n(r),u=n(4721);function a(r){var n=r.env,i=r.data,a=r.inputs,l=r.outputs;(0,e.useEffect)((function(){a.value((function(e){i.text=e}))}),[]);var c=(0,e.useMemo)((function(){var e;return s()(((e={})[u.Z.text]=!0,e[u.Z["ellipsis-line"]]=!!i.ellipsis,e))}),[i.ellipsis]),f=(0,e.useCallback)((function(){n.runtime&&l.onClick({text:i.text})}),[]);return t().createElement(o.Text,{className:c,style:i.style,onClick:f},i.text)}})(),i})()));