/*! For license information please see mybricks_taro_formContainer.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("brickd-mobile/es/button"),require("brickd-mobile/es/form"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","brickd-mobile/es/button","brickd-mobile/es/form","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("brickd-mobile/es/button"),require("brickd-mobile/es/form"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["brickd-mobile/es/button"],e["brickd-mobile/es/form"],e.React)}(self,((e,t,r,o)=>(()=>{var n={2010:(e,t,r)=>{"use strict";r.r(t)},6880:(e,t,r)=>{"use strict";r(4888)},5966:(e,t,r)=>{"use strict";r(3282),r(7151),r(6880),r(3799)},4556:(e,t,r)=>{"use strict";r(3282),r(3637)},2461:(e,t,r)=>{"use strict";r(3282),r(4556),r(2606),r(3767)},2606:(e,t,r)=>{"use strict";r(8150)},7151:(e,t,r)=>{"use strict";r(3282),r(7)},3282:(e,t,r)=>{"use strict";r(2010),r(5755)},3078:(e,t,r)=>{var o;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}!function(){"use strict";var s={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=n(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var u=i.apply(null,r);u&&e.push(u)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)s.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):"object"===n(r.amdO)&&r.amdO?void 0===(o=function(){return i}.apply(t,[]))||(e.exports=o):window.classNames=i}()},7072:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const o={form:"form-a1d4d",content:"content-e386c",empty:"empty-f3e0e",foot:"foot-b0f21"}},4888:(e,t,r)=>{"use strict";r.r(t)},3799:(e,t,r)=>{"use strict";r.r(t)},3637:(e,t,r)=>{"use strict";r.r(t)},3767:(e,t,r)=>{"use strict";r.r(t)},8150:(e,t,r)=>{"use strict";r.r(t)},7:(e,t,r)=>{"use strict";r.r(t)},5755:(e,t,r)=>{"use strict";r.r(t)},9525:t=>{"use strict";t.exports=e},8917:e=>{"use strict";e.exports=t},268:e=>{"use strict";e.exports=r},359:e=>{"use strict";e.exports=o}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.amdO={},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};return(()=>{"use strict";i.r(u),i.d(u,{default:()=>p}),i(5966);var e=i(8917),t=i.n(e),r=(i(2461),i(268)),o=i.n(r),n=i(359),s=i.n(n),c=i(9525),a=i(7072),f=i(3078),l=i.n(f),m=function(){return m=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},m.apply(this,arguments)};function p(e){var r=e.env,i=e.data,u=e.inputs,f=e.outputs,p=e.slots,b=(0,n.useState)({}),d=b[0],y=b[1],v=(0,n.useState)({}),S=v[0],g=v[1];(0,n.useEffect)((function(){u.setFieldsValue((function(e){y(e)}))}),[]);var h=(0,n.useMemo)((function(){return s().createElement(c.View,{style:{height:"100%"},key:Math.random()},p.content.render({inputs:{setValue:function(e){e&&e(d)},onChange:function(e){var t=e.name,r=e.value;g((function(e){var o;return m(m({},e),((o={})[t]=r,o))}))}}}))}),[d]),j=(0,n.useCallback)((function(){console.warn("onCustomSubmit",S),f.onSubmit(S)}),[S]),x=(0,n.useCallback)((function(e){var t=e.detail.value;console.warn("onSubmit",e,t),f.onSubmit(t)}),[]),O=(0,n.useMemo)((function(){var e;return l()(((e={})[a.Z.content]=!0,e[a.Z.empty]=r.edit&&!p.content.size,e))}),[p.content.size]);return s().createElement(o(),{className:a.Z.form,onSubmit:x},s().createElement(c.View,{className:O},h),s().createElement(c.View,{className:a.Z.foot},i.customSubmit?s().createElement(t(),{className:a.Z.submit,onTap:j,"data-submit":!0},i.submitText):s().createElement(t(),{shape:"round",block:!0,color:"primary",formType:"submit"},i.submitText)))}})(),u})()));