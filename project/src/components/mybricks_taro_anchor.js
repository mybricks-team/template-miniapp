/*! For license information please see mybricks_taro_anchor.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("@tarojs/taro"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","@tarojs/taro","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("@tarojs/taro"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["@tarojs/taro"],e.React)}(self,((e,t,o)=>(()=>{var r={3078:(e,t,o)=>{var r;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}!function(){"use strict";var a={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=n(o);if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)){if(o.length){var i=c.apply(null,o);i&&e.push(i)}}else if("object"===r){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var s in o)a.call(o,s)&&o[s]&&e.push(s)}}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):"object"===n(o.amdO)&&o.amdO?void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r):window.classNames=c}()},3805:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});const r={anchor:"anchor-a927b"}},9525:t=>{"use strict";t.exports=e},6801:e=>{"use strict";e.exports=t},359:e=>{"use strict";e.exports=o}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,a),o.exports}a.amdO={},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{"use strict";a.r(c),a.d(c,{default:()=>u});var e=a(359),t=a.n(e),o=a(9525),r=a(6801),n=a(3805),i=a(3078),s=a.n(i);function u(a){var c=a.id,i=(a.env,a.data,a.inputs),u=a.outputs,f=r.createIntersectionObserver(r.getCurrentInstance().page),l=(0,e.useCallback)((function(){f.relativeToViewport().observe("#".concat(c," .mybricks-anchor"),(function(e){var t,o;e.intersectionRatio>0?null===(t=u.onExposure)||void 0===t||t.call(u,e):null===(o=u.onUnexposure)||void 0===o||o.call(u,e)}))}),[]);return(0,e.useEffect)((function(){return r.nextTick((function(){l()})),i.scrollTo((function(){r.pageScrollTo({selector:"#".concat(c," .mybricks-anchor"),duration:0})})),function(){f.disconnect()}})),t().createElement(o.View,{className:s()(n.Z.anchor,"mybricks-anchor")})}})(),c})()));