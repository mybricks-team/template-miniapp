!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("brickd-mobile/es/field"),require("brickd-mobile/es/textarea"),require("react")):"function"==typeof define&&define.amd?define(["brickd-mobile/es/field","brickd-mobile/es/textarea","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("brickd-mobile/es/field"),require("brickd-mobile/es/textarea"),require("react")):e.fangzhouComDef=t(e["brickd-mobile/es/field"],e["brickd-mobile/es/textarea"],e.React)}(self,((e,t,r)=>(()=>{var o={2410:(e,t,r)=>{"use strict";r.r(t)},1302:(e,t,r)=>{"use strict";r.r(t)},3378:(e,t,r)=>{"use strict";r.r(t)},7315:(e,t,r)=>{"use strict";r.r(t)},6122:(e,t,r)=>{"use strict";r.r(t)},6080:(e,t,r)=>{"use strict";r(7514),r(2410)},2809:(e,t,r)=>{"use strict";r(9213)},9213:(e,t,r)=>{"use strict";r(7514),r(6080),r(8540),r(1302)},8540:(e,t,r)=>{"use strict";r(3378)},7514:(e,t,r)=>{"use strict";r(9235),r(7315)},5436:(e,t,r)=>{"use strict";r(7514),r(6122)},9235:(e,t,r)=>{"use strict";r.r(t)},966:e=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}e.exports=function(e){var r=t(e);return null!=e&&("object"==r||"function"==r)}},2973:t=>{"use strict";t.exports=e},9226:e=>{"use strict";e.exports=t},359:e=>{"use strict";e.exports=r}},i={};function n(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return o[e](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};return(()=>{"use strict";n.r(u),n.d(u,{default:()=>l}),n(5436);var e=n(9226),t=n.n(e),r=(n(2809),n(2973)),o=n.n(r),i=n(359),s=n.n(i),a=n(966),c=n.n(a);function l(e){e.env;var r=e.data,n=e.inputs,u=e.outputs,a=(e.slots,(0,i.useState)(r.value)),l=a[0],f=a[1];(0,i.useEffect)((function(){n.setValue((function(e){switch(!0){case"string"==typeof e:f(e);break;case c()(e):f(e[r.name])}}))}),[]);var b=(0,i.useCallback)((function(e){var t=e.detail.value;f(t),u.onChange({name:r.name,value:t})}),[]);return s().createElement(o(),{label:r.label,name:r.name},s().createElement(t(),{value:l,autoHeight:!0,limit:140,placeholder:r.placeholder,onChange:b}))}})(),u})()));