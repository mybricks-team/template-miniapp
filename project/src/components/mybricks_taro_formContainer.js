/*! For license information please see mybricks_taro_formContainer.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("brickd-mobile/es/button"),require("brickd-mobile/es/cell"),require("brickd-mobile/es/form"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","brickd-mobile/es/button","brickd-mobile/es/cell","brickd-mobile/es/form","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("brickd-mobile/es/button"),require("brickd-mobile/es/cell"),require("brickd-mobile/es/form"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["brickd-mobile/es/button"],e["brickd-mobile/es/cell"],e["brickd-mobile/es/form"],e.React)}(self,((e,t,r,o,n)=>(()=>{var u={2010:(e,t,r)=>{"use strict";r.r(t)},6880:(e,t,r)=>{"use strict";r(4888)},5966:(e,t,r)=>{"use strict";r(3282),r(7151),r(6880),r(3799)},4556:(e,t,r)=>{"use strict";r(3282),r(3637)},2461:(e,t,r)=>{"use strict";r(3282),r(4556),r(2606),r(3767)},2606:(e,t,r)=>{"use strict";r(8150)},7151:(e,t,r)=>{"use strict";r(3282),r(7)},3282:(e,t,r)=>{"use strict";r(2010),r(5755)},3078:(e,t,r)=>{var o;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}!function(){"use strict";var u={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=n(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=s.apply(null,r);i&&e.push(i)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)u.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):"object"===n(r.amdO)&&r.amdO?void 0===(o=function(){return s}.apply(t,[]))||(e.exports=o):window.classNames=s}()},7072:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const o={form:"form-a1d4d",foot:"foot-b0f21"}},4888:(e,t,r)=>{"use strict";r.r(t)},3799:(e,t,r)=>{"use strict";r.r(t)},3637:(e,t,r)=>{"use strict";r.r(t)},3767:(e,t,r)=>{"use strict";r.r(t)},8150:(e,t,r)=>{"use strict";r.r(t)},7:(e,t,r)=>{"use strict";r.r(t)},5755:(e,t,r)=>{"use strict";r.r(t)},9525:t=>{"use strict";t.exports=e},8917:e=>{"use strict";e.exports=t},6696:e=>{"use strict";e.exports=r},268:e=>{"use strict";e.exports=o},359:e=>{"use strict";e.exports=n}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return u[e](r,r.exports,i),r.exports}i.amdO={},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{"use strict";i.r(c),i.d(c,{default:()=>d}),i(5966);var e=i(8917),t=i.n(e),r=(i(4556),i(6696)),o=i.n(r),n=(i(2461),i(268)),u=i.n(n),s=i(359),l=i.n(s),a=i(9525),f=i(7072),m=i(3078),b=i.n(m),p=function(){return p=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},p.apply(this,arguments)};function d(e){var r=e.env,n=e.data,i=e.inputs,c=e.outputs,m=e.slots,d=(0,s.useRef)(null),v=(0,s.useState)({}),y=v[0],g=v[1],S=(0,s.useState)({}),h=S[0],j=S[1];(0,s.useEffect)((function(){i.setFieldsValue((function(e){g(e),setTimeout((function(){var t;null===(t=null==d?void 0:d.current)||void 0===t||t.setValues(e)}),10)})),i.getFieldsValue((function(e,t){var r,o=null===(r=null==d?void 0:d.current)||void 0===r?void 0:r.getValues();t.returnValues(o)}))}),[d]);var k=(0,s.useMemo)((function(){return l().createElement(a.View,{key:Math.random()},m.content.render({inputs:{setValue:function(e){e&&e(y)}},outputs:{onChange:function(e){var t,r=e.name,o=e.value;j((function(e){var t;return p(p({},e),((t={})[r]=o,t))}));var n={};n[r]=o,null===(t=null==d?void 0:d.current)||void 0===t||t.setValues(n)}}}))}),[y]),x=(0,s.useCallback)((function(){r.runtime&&(null==d||d.current.validate().then((function(e){var t;console.error("res",e),console.error("submitValue",h);var r=null===(t=null==d?void 0:d.current)||void 0===t?void 0:t.getValues();console.error("values",r),c.onSubmit(e)})).catch((function(e){})))}),[d,h]);return l().createElement(u(),{className:f.Z.form,ref:d},l().createElement(o().Group,null,k),n.useSubmitButton?l().createElement(a.View,{className:b()(f.Z.foot,"mybricks-submit")},l().createElement(t(),{shape:"round",block:!0,color:"primary",formType:"submit",onClick:x},n.submitButtonText)):null)}})(),c})()));