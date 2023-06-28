/*! For license information please see mybricks_taro_formInput.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("brickd-mobile/es/field"),require("brickd-mobile/es/input"),require("react")):"function"==typeof define&&define.amd?define(["brickd-mobile/es/field","brickd-mobile/es/input","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("brickd-mobile/es/field"),require("brickd-mobile/es/input"),require("react")):e.fangzhouComDef=t(e["brickd-mobile/es/field"],e["brickd-mobile/es/input"],e.React)}(self,((e,t,r)=>(()=>{var o={7007:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const o={hidden:"hidden-ef10c"}},2410:(e,t,r)=>{"use strict";r.r(t)},1302:(e,t,r)=>{"use strict";r.r(t)},3378:(e,t,r)=>{"use strict";r.r(t)},7315:(e,t,r)=>{"use strict";r.r(t)},6080:(e,t,r)=>{"use strict";r(7514),r(2410)},2809:(e,t,r)=>{"use strict";r(9213)},9213:(e,t,r)=>{"use strict";r(7514),r(6080),r(8540),r(1302)},8540:(e,t,r)=>{"use strict";r(3378)},7514:(e,t,r)=>{"use strict";r(9235),r(7315)},9235:(e,t,r)=>{"use strict";r.r(t)},7064:(e,t,r)=>{var o;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}!function(){"use strict";var i={}.hasOwnProperty;function u(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=n(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=u.apply(null,r);s&&e.push(s)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)i.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(u.default=u,e.exports=u):"object"===n(r.amdO)&&r.amdO?void 0===(o=function(){return u}.apply(t,[]))||(e.exports=o):window.classNames=u}()},966:e=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}e.exports=function(e){var r=t(e);return null!=e&&("object"==r||"function"==r)}},2973:t=>{"use strict";t.exports=e},5402:e=>{"use strict";e.exports=t},359:e=>{"use strict";e.exports=r}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e](r,r.exports,i),r.exports}i.amdO={},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};return(()=>{"use strict";i.r(u),i.d(u,{default:()=>p}),i(8540);var e=i(5402),t=i.n(e),r=(i(2809),i(2973)),o=i.n(r),n=i(359),s=i.n(n),a=i(966),l=i.n(a),c=i(7064),f=i.n(c),d=i(7007);function p(e){e.env;var r,i=e.data,u=e.inputs,a=e.outputs;e.slots,(0,n.useEffect)((function(){u.setValue((function(e){switch(!0){case"string"==typeof e:i.value=e,a.onChange({name:i.name,value:e});break;case l()(e):i.value=e[i.name],a.onChange({name:i.name,value:e[i.name]})}}))}),[]);var c=(0,n.useCallback)((function(e){var t=e.detail.value;i.value=t,a.onChange({name:i.name,value:t})}),[]);return s().createElement(o(),{className:f()("mybricks-field",(r={},r[d.Z.hidden]=i.hidden,r)),required:i.required,rules:[{required:i.required,message:"请填写".concat(i.label)}],label:i.label,name:i.name},s().createElement(t(),{value:i.value,type:i.type,placeholder:i.placeholder,onChange:c,disabled:i.disabled}))}})(),u})()));