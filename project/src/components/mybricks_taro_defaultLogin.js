/*! For license information please see mybricks_taro_defaultLogin.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("@tarojs/taro"),require("brickd-mobile/es/button"),require("brickd-mobile/es/field"),require("brickd-mobile/es/form"),require("brickd-mobile/es/input"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","@tarojs/taro","brickd-mobile/es/button","brickd-mobile/es/field","brickd-mobile/es/form","brickd-mobile/es/input","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("@tarojs/taro"),require("brickd-mobile/es/button"),require("brickd-mobile/es/field"),require("brickd-mobile/es/form"),require("brickd-mobile/es/input"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["@tarojs/taro"],e["brickd-mobile/es/button"],e["brickd-mobile/es/field"],e["brickd-mobile/es/form"],e["brickd-mobile/es/input"],e.React)}(self,((e,t,r,o,s,i,n)=>(()=>{var a={6874:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const o={container:"container-fa3a6",form:"form-fc1b0",content:"content-eecb6",field:"field-be405",foot:"foot-d62d4",submit:"submit-cd830",password:"password-e205f",hide:"hide-bfec5",show:"show-afd95",toggleButton:"toggleButton-ceca9"}},7979:(e,t,r)=>{"use strict";r.r(t)},1277:(e,t,r)=>{"use strict";r.r(t)},2410:(e,t,r)=>{"use strict";r.r(t)},1302:(e,t,r)=>{"use strict";r.r(t)},3378:(e,t,r)=>{"use strict";r.r(t)},379:(e,t,r)=>{"use strict";r.r(t)},7315:(e,t,r)=>{"use strict";r.r(t)},4859:(e,t,r)=>{"use strict";r(7979)},1844:(e,t,r)=>{"use strict";r(7514),r(6055),r(4859),r(1277)},6080:(e,t,r)=>{"use strict";r(7514),r(2410)},2809:(e,t,r)=>{"use strict";r(9213)},9213:(e,t,r)=>{"use strict";r(7514),r(6080),r(8540),r(1302)},8540:(e,t,r)=>{"use strict";r(3378)},6055:(e,t,r)=>{"use strict";r(7514),r(379)},7514:(e,t,r)=>{"use strict";r(9235),r(7315)},9235:(e,t,r)=>{"use strict";r.r(t)},7064:(e,t,r)=>{var o;function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}!function(){"use strict";var i={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=s(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&e.push(a)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)i.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):"object"===s(r.amdO)&&r.amdO?void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o):window.classNames=n}()},9525:t=>{"use strict";t.exports=e},6801:e=>{"use strict";e.exports=t},8917:e=>{"use strict";e.exports=r},2973:e=>{"use strict";e.exports=o},268:e=>{"use strict";e.exports=s},5402:e=>{"use strict";e.exports=i},359:e=>{"use strict";e.exports=n}},c={};function u(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={exports:{}};return a[e](r,r.exports,u),r.exports}u.amdO={},u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},u.d=(e,t)=>{for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{"use strict";u.r(l),u.d(l,{default:()=>v}),u(1844);var e=u(8917),t=u.n(e),r=(u(8540),u(5402)),o=u.n(r),s=(u(2809),u(2973)),i=u.n(s),n=(u(9213),u(268)),a=u.n(n),c=u(359),d=u.n(c),m=u(9525),f=u(6874),b=u(7064),p=u.n(b),y=u(6801);function v(e){e.env;var r=e.data,s=(e.inputs,e.outputs,e.slots,(0,c.useState)("login")),n=s[0],u=s[1],l=(0,c.useState)(""),b=l[0],v=l[1],g=(0,c.useState)(!0),h=g[0],k=g[1],S=(0,c.useState)(""),w=S[0],j=S[1],x=(0,c.useCallback)((function(e){var t=e.detail.value;v(t)}),[]),q=(0,c.useCallback)((function(e){var t=e.detail.value;j(t)}),[]),Z=(0,c.useCallback)((function(){k(!h)}),[h]),C=(0,c.useMemo)((function(){var e;return p()(((e={})[f.Z.paasword]=!0,e[f.Z.show]=!h,e[f.Z.hide]=h,e))}),[h]),E=(0,c.useCallback)((function(e){e.detail.value,console.warn("onSubmit",e);var t="".concat(r.domain,"/runtime/api/auth/").concat(n);y.request({url:t,method:"POST",data:{projectId:r.projectId,username:b,password:w},success:function(e){var t;console.warn("success",e);var r="login"===n?"登录":"注册";1===(null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.code)?(y.setStorageSync("userInfo",e.data.data),y.showToast({title:"".concat(r,"成功"),icon:"none",duration:1e3}),setTimeout((function(){y.navigateBack({delta:1})}),1e3)):y.showToast({title:"".concat(r,"失败，请重试"),icon:"none",duration:1e3})}})}),[n,b,w]),O=(0,c.useMemo)((function(){return"login"===n?"登录":"注册"}),[n]),N=(0,c.useCallback)((function(){switch(!0){case"login"===n:u("register");break;case"register"===n:u("login")}}),[n]),T=(0,c.useMemo)((function(){return n?"没有账号，立即注册":"已有账号，立即登录"}),[n]);return d().createElement(m.View,{className:f.Z.container},d().createElement(a(),{className:f.Z.form,onSubmit:E},d().createElement(m.View,{className:f.Z.content},d().createElement(i(),{className:f.Z.field,label:"用户名",name:"用户名"},d().createElement(o(),{value:b,type:"text",placeholder:"请输入用户名",onChange:x})),d().createElement(i(),{className:f.Z.field,label:"密码",name:"密码"},d().createElement(o(),{value:w,password:h,type:"text",placeholder:"请输入密码",onChange:q}),d().createElement(m.View,{className:C,onClick:Z}))),d().createElement(m.View,{className:f.Z.foot},d().createElement(t(),{className:f.Z.submit,shape:"round",block:!0,color:"primary",formType:"submit"},O))),d().createElement(m.View,{className:f.Z.toggleButton,onClick:N},T))}})(),l})()));