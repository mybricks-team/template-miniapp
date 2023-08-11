/*! For license information please see mybricks_taro_formContainer.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("@tarojs/taro"),require("brickd-mobile/es/cell"),require("brickd-mobile/es/field"),require("brickd-mobile/es/form"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","@tarojs/taro","brickd-mobile/es/cell","brickd-mobile/es/field","brickd-mobile/es/form","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("@tarojs/taro"),require("brickd-mobile/es/cell"),require("brickd-mobile/es/field"),require("brickd-mobile/es/form"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["@tarojs/taro"],e["brickd-mobile/es/cell"],e["brickd-mobile/es/field"],e["brickd-mobile/es/form"],e.React)}(self,((e,t,r,n,o,i)=>(()=>{var u={5717:(e,t,r)=>{"use strict";var n;r.d(t,{C:()=>n}),function(e){e.REQUIRED="required",e.MIN="min",e.MAX="max",e.MIN_LENGTH="minLength",e.MAX_LENGTH="maxLength",e.REG_EXP="regExp",e.CODE_VALIDATOR="codeValidator",e.Email_VALIDATOR="emailValidator",e.PHONE_NUMBER_VALIDATOR="phoneNumberValidator"}(n||(n={}))},9876:(e,t,r)=>{"use strict";r.d(t,{A:()=>o,y:()=>n});var n=function(e,t){return(null!=e?e:[]).find((function(e){return e.comName?e.comName===t.name:e.id===t.id}))},o=function(e,t){return e.findIndex((function(e){return e.comName?e.comName===t.name:e.id===t.id}))}},7234:(e,t,r)=>{"use strict";function n(e){return null==e||""===e}function o(e){return(t="Object",function(e){return Object.prototype.toString.call(e)==="[object ".concat(t,"]")})(e);var t}r.d(t,{Kn:()=>o,xb:()=>n})},2010:(e,t,r)=>{"use strict";r.r(t)},4556:(e,t,r)=>{"use strict";r(3282),r(3637)},7223:(e,t,r)=>{"use strict";r(2461)},2461:(e,t,r)=>{"use strict";r(3282),r(4556),r(2606),r(3767)},2606:(e,t,r)=>{"use strict";r(8150)},3282:(e,t,r)=>{"use strict";r(2010),r(5755)},3078:(e,t,r)=>{var n;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(){"use strict";var i={}.hasOwnProperty;function u(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=o(r);if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var s=u.apply(null,r);s&&e.push(s)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)i.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(u.default=u,e.exports=u):"object"===o(r.amdO)&&r.amdO?void 0===(n=function(){return u}.apply(t,[]))||(e.exports=n):window.classNames=u}()},7072:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n={form:"form-a1d4d",foot:"foot-b0f21",hidden:"hidden-e1eab",h5:"h5-f05c1"}},3637:(e,t,r)=>{"use strict";r.r(t)},3767:(e,t,r)=>{"use strict";r.r(t)},8150:(e,t,r)=>{"use strict";r.r(t)},5755:(e,t,r)=>{"use strict";r.r(t)},9525:t=>{"use strict";t.exports=e},6801:e=>{"use strict";e.exports=t},6696:e=>{"use strict";e.exports=r},2973:e=>{"use strict";e.exports=n},268:e=>{"use strict";e.exports=o},359:e=>{"use strict";e.exports=i}},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return u[e](r,r.exports,c),r.exports}c.amdO={},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";c.r(a),c.d(a,{default:()=>O}),c(4556);var e=c(6696),t=c.n(e),r=(c(2461),c(268)),n=c.n(r),o=(c(7223),c(2973)),i=c.n(o),u=c(359),s=c.n(u),l=c(9525),m=c(6801),f=c.n(m),d=c(7072),b=c(3078),p=c.n(b),v=c(7234),y=c(9876),h=c(5717),g=function(){return g=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},g.apply(this,arguments)},x=f().getEnv()===f().ENV_TYPE.WEB||"Unknown"===f().getEnv(),j=function(e){var t;return(null!==(t=null==e?void 0:e.rules)&&void 0!==t?t:[]).filter((function(e){return e.status})).map((function(e){return e.key,h.C.REQUIRED,{required:!0,message:e.message}}))},E=function(e,t,r){var n=e.childrenInputs,o=e.formItems,i=e.name,u=o.find((function(e){return(e.name||e.label)===i}));if(u){var s=S(u,n);(0,v.Kn)(r[i])?s[t]&&s[t](g({},r[i])):s[t]&&s[t](r[i])}},S=function(e,t){return e.comName?t[e.comName]:t[e.id]};function O(e){var r,o=e.env,c=e.data,a=e.inputs,m=e.outputs,f=e.slots,b=(0,u.useRef)(null),h=(0,u.useRef)({}),S=(0,u.useState)({}),O=S[0],k=S[1],N=(0,u.useCallback)((function(e){e&&Object.keys(e).forEach((function(t){E({childrenInputs:h.current,formItems:c.items,name:t},"setValue",e)}))}),[]);(0,u.useEffect)((function(){a.setFieldsValue((function(e){!(0,v.xb)(e)&&(0,v.Kn)(e)&&(N(e),k(e))})),a.getFieldsValue((function(e,t){var r,n=null===(r=null==b?void 0:b.current)||void 0===r?void 0:r.getValues();t.returnValues(n)})),f.content._inputs.onChange((function(e){var t,r=e.id,n=e.name,o=e.value,i=(0,y.y)(c.items,{id:r,name:n});if(i){var u=((t={})[i.name||i.label]=o,t);k((function(e){return g(g({},e),u)}))}}))}),[]);var q=(0,u.useMemo)((function(){return s().createElement(l.View,null,f.content.render({itemWrap:function(e){var t,r,n,u,a=(0,y.A)(c.items,e),l=null!==(u=c.items[a])&&void 0!==u?u:{},m=j(l),f=m.findIndex((function(e){return e.required}))>-1,b=c.items.length-1===l.index;return s().createElement(i(),{className:p()("mybricks-field",(t={},t["border-bottom"]=!b,t),(r={},r["border-none"]=b,r),(n={},n[d.Z.hidden]=!(null==o?void 0:o.edit)&&l.hidden,n)),required:f,rules:m,label:l.label,name:l.name},e.jsx)},wrap:function(e){var t,r=null!==(t=c.items)&&void 0!==t?t:[];return null==e?void 0:e.map((function(t,n){if(t){var o=(0,y.y)(c.items,t);return o.index=n,o?(o.comName?h.current[t.name]=t.inputs:h.current[t.id]=t.inputs,t.jsx):void(r.length===e.length&&console.warn("formItem comId ".concat(t.id," formItem not found")))}}))}}))}),[]);(0,u.useEffect)((function(){var e;null===(e=null==b?void 0:b.current)||void 0===e||e.setValues(O)}),[O]);var I=(0,u.useCallback)((function(){var e;console.error("onCustomSubmit",O),console.error("onCustomSubmit",O),console.error("onCustomSubmit",O),o.runtime&&(null===(e=null==b?void 0:b.current)||void 0===e||e.validate().then((function(e){m.onSubmit(e)})).catch((function(e){console.error("validate",e)})))}),[O]);return s().createElement(n(),{className:p()(d.Z.form,(r={},r[d.Z.h5]=x,r)),ref:b},s().createElement(t().Group,{bordered:!1},q),c.useSubmitButton?s().createElement(l.View,{className:p()(d.Z.foot,"mybricks-submit")},s().createElement(l.Button,{className:"taroify-button",onClick:I},c.submitButtonText)):null)}})(),a})()));