/*! For license information please see mybricks_taro_cell.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("brickd-mobile/es/cell"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","brickd-mobile/es/cell","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("brickd-mobile/es/cell"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["brickd-mobile/es/cell"],e.React)}(self,((e,t,r)=>(()=>{var n={1344:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(8586).E)("arrow")},6588:(e,t,r)=>{"use strict";r.d(t,{Y:()=>o,e1:()=>n,pR:()=>i});var n=Symbol("__iconType__"),o=["inherit","mini","small","medium","large"],i=["inherit","default","primary","info","success","warning","danger"]},2010:(e,t,r)=>{"use strict";r.r(t)},1341:(e,t,r)=>{"use strict";function n(e){return void 0===e?"":"".concat(function(e){return"number"==typeof e?e:e.includes("px")?function(e){return+(e=e.replace(/px/g,""))}(e):e.includes("rem")?function(e){return+(e=e.replace(/rem/g,""))*function(){if(!o){var e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;o=parseFloat(t)}return o}()}(e):e.includes("vw")?function(e){return+(e=e.replace(/vw/g,""))*window.innerWidth/100}(e):e.includes("vh")?function(e){return+(e=e.replace(/vh/g,""))*window.innerHeight/100}(e):parseFloat(e)}(e),"px")}var o;r.d(t,{S:()=>n})},5840:(e,t,r)=>{"use strict";r.d(t,{E:()=>d});var n=r(9525),o=r(3078),i=r.n(o),c=r(359),u=r(6588),l=r(1341);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===s(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=["className","style","name","size","color"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){var t,r=e.className,o=e.style,s=e.name,p=e.size,b=void 0===p?"inherit":p,m=e.color,d=void 0===m?"inherit":m,v=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,f),g=u.pR.includes(d),O=u.Y.includes(b);return c.createElement(n.View,y({className:i()("van-icon","van-icon-".concat(s),"taroify-icon",(t={},a(t,"taroify-icon--".concat(d),g),a(t,"taroify-icon--".concat(b),O),t),r),style:y({color:g?"":d,fontSize:O?"":(0,l.S)(b)},o)},v))}function d(e){function t(t){return c.createElement(m,y({name:e},t))}return t[u.e1]=u.e1,t}},8586:(e,t,r)=>{"use strict";r.d(t,{E:()=>n.E});var n=r(5840)},4556:(e,t,r)=>{"use strict";r(3282),r(3637)},3282:(e,t,r)=>{"use strict";r(2010),r(5755)},3078:(e,t,r)=>{var n;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(){"use strict";var i={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=o(r);if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var u=c.apply(null,r);u&&e.push(u)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)i.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):"object"===o(r.amdO)&&r.amdO?void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n):window.classNames=c}()},3637:(e,t,r)=>{"use strict";r.r(t)},5755:(e,t,r)=>{"use strict";r.r(t)},9525:t=>{"use strict";t.exports=e},6696:e=>{"use strict";e.exports=t},359:e=>{"use strict";e.exports=r}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.amdO={},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{"use strict";i.r(c),i.d(c,{default:()=>u}),i(4556);var e=i(6696),t=i.n(e),r=i(1344),n=i(359),o=i.n(n);function u(e){var i,c,u=e.env,l=e.data,s=e.slots,a=(e.inputs,e.outputs),f=(0,n.useCallback)((function(e){u.runtime&&a.onClick(e)}),[]),p=(0,n.useMemo)((function(){return l.useArrowIcon?o().createElement(r.Z,null):null}),[l.useArrowIcon]);return o().createElement(t(),{title:l.title,brief:l.brief,rightIcon:p,clickable:!0,align:"center",onClick:function(){return f({title:l.title})}},null===(c=null===(i=s.children)||void 0===i?void 0:i.render)||void 0===c?void 0:c.call(i))}})(),c})()));