/*! For license information please see mybricks_taro_formStepper.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/taro"),require("brickd-mobile/es/field"),require("brickd-mobile/es/stepper"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/taro","brickd-mobile/es/field","brickd-mobile/es/stepper","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/taro"),require("brickd-mobile/es/field"),require("brickd-mobile/es/stepper"),require("react")):e.fangzhouComDef=t(e["@tarojs/taro"],e["brickd-mobile/es/field"],e["brickd-mobile/es/stepper"],e.React)}(self,((e,t,r,o)=>(()=>{var n={2010:(e,t,r)=>{"use strict";r.r(t)},4556:(e,t,r)=>{"use strict";r(3282),r(5636)},7223:(e,t,r)=>{"use strict";r(7279)},7279:(e,t,r)=>{"use strict";r(3282),r(4556),r(2606),r(8760)},2606:(e,t,r)=>{"use strict";r(7966)},4790:(e,t,r)=>{"use strict";r(3282),r(8594)},3282:(e,t,r)=>{"use strict";r(2010),r(3443)},3078:(e,t,r)=>{var o;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}!function(){"use strict";var i={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=n(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var u=s.apply(null,r);u&&e.push(u)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)i.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):"object"===n(r.amdO)&&r.amdO?void 0===(o=function(){return s}.apply(t,[]))||(e.exports=o):window.classNames=s}()},238:e=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}e.exports=function(e){var r=t(e);return null!=e&&("object"==r||"function"==r)}},3703:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const o={hidden:"hidden-ea5ef",h5Reset:"h5Reset-aeb7c",stepper:"stepper-bb4b1"}},5636:(e,t,r)=>{"use strict";r.r(t)},8760:(e,t,r)=>{"use strict";r.r(t)},7966:(e,t,r)=>{"use strict";r.r(t)},8594:(e,t,r)=>{"use strict";r.r(t)},3443:(e,t,r)=>{"use strict";r.r(t)},6801:t=>{"use strict";t.exports=e},2973:e=>{"use strict";e.exports=t},1590:e=>{"use strict";e.exports=r},359:e=>{"use strict";e.exports=o}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return n[e](r,r.exports,s),r.exports}s.amdO={},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};return(()=>{"use strict";s.r(u),s.d(u,{default:()=>m}),s(4790);var e=s(1590),t=s.n(e),r=(s(7223),s(2973)),o=s.n(r),n=s(359),i=s.n(n),a=s(6801),c=s.n(a),l=s(238),p=s.n(l),f=s(3078),d=s.n(f),b=s(3703);function m(e){e.env;var r,s,u,a,l=e.data,f=e.inputs,m=e.outputs;e.slots,(0,n.useEffect)((function(){f.setValue((function(e){switch(!0){case"string"==typeof e:l.value=e,m.onChange({name:l.name,value:e});break;case p()(e):l.value=e[l.name],m.onChange({name:l.name,value:e[l.name]})}}))}),[]);var y=(0,n.useCallback)((function(e){l.value=e,m.onChange({name:l.name,value:e})}),[]);return i().createElement(o(),{className:d()("mybricks-field",(r={},r[b.Z.hidden]=l.hidden,r[b.Z.h5Reset]=c().ENV_TYPE.WEB===c().getEnv(),r)),required:l.required,rules:[{required:l.required,message:"请填写".concat(l.label)}],label:l.label,name:l.name},i().createElement(t(),{className:b.Z.stepper,step:null!==(s=l.step)&&void 0!==s?s:1,min:null!==(u=l.min)&&void 0!==u?u:0,max:null!==(a=l.max)&&void 0!==a?a:1/0,disabled:l.disabled,shape:"circular",size:24,value:l.value,onChange:y}))}})(),u})()));