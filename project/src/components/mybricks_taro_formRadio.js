/*! For license information please see mybricks_taro_formRadio.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("brickd-mobile/es/image"),require("brickd-mobile/es/radio"),require("react")):"function"==typeof define&&define.amd?define(["brickd-mobile/es/image","brickd-mobile/es/radio","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("brickd-mobile/es/image"),require("brickd-mobile/es/radio"),require("react")):e.fangzhouComDef=t(e["brickd-mobile/es/image"],e["brickd-mobile/es/radio"],e.React)}(self,((e,t,r)=>(()=>{var o={7234:(e,t,r)=>{"use strict";function o(e){return function(t){return Object.prototype.toString.call(t)==="[object ".concat(e,"]")}}function n(e){return o("String")(e)}function i(e){return o("Object")(e)}r.d(t,{HD:()=>n,Kn:()=>i})},2010:(e,t,r)=>{"use strict";r.r(t)},9977:(e,t,r)=>{"use strict";r(3282),r(5642)},9238:(e,t,r)=>{"use strict";r(3282),r(337)},3282:(e,t,r)=>{"use strict";r(2010),r(5755)},3078:(e,t,r)=>{var o;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}!function(){"use strict";var i={}.hasOwnProperty;function u(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=n(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=u.apply(null,r);a&&e.push(a)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)i.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(u.default=u,e.exports=u):"object"===n(r.amdO)&&r.amdO?void 0===(o=function(){return u}.apply(t,[]))||(e.exports=o):window.classNames=u}()},5642:(e,t,r)=>{"use strict";r.r(t)},337:(e,t,r)=>{"use strict";r.r(t)},5755:(e,t,r)=>{"use strict";r.r(t)},36:t=>{"use strict";t.exports=e},3884:e=>{"use strict";e.exports=t},359:e=>{"use strict";e.exports=r}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e](r,r.exports,i),r.exports}i.amdO={},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};return(()=>{"use strict";i.r(u),i.d(u,{default:()=>p}),i(9977);var e=i(36),t=i.n(e),r=(i(9238),i(3884)),o=i.n(r),n=i(359),a=i.n(n),c=i(3078),s=i.n(c),l=i(7234),f=function(){return f=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},f.apply(this,arguments)};function p(e){var r,i=e.env,u=e.data,c=e.inputs,p=e.outputs,d=(e.slots,e.parentSlot),b=(0,n.useState)(i.edit?null===(r=u.options[0])||void 0===r?void 0:r.value:u.value),m=b[0],v=b[1];(0,n.useEffect)((function(){c.setValue((function(e){switch(!0){case(0,l.HD)(e):v(e);break;case(0,l.Kn)(e):v(e[u.name])}}))}),[]);var y=(0,n.useCallback)((function(t){var r,o;i.runtime&&(v(t),null===(o=null==d?void 0:(r=d._inputs).onChange)||void 0===o||o.call(r,{id:e.id,name:e.name,value:t}),p.onChange(t))}),[]);return a().createElement(o().Group,{direction:u.direction,value:m,onChange:y},u.options.map((function(e){var r,n={};return e.icon&&(n.icon=a().createElement(t(),{src:e.icon})),a().createElement(o(),f({className:s()((r={},r["mybricks-inactive"]=m!==e.value,r["mybricks-active"]=m===e.value,r)),name:e.value},n),e.label)})))}})(),u})()));