!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("brickd-mobile/es/field"),require("brickd-mobile/es/rate"),require("react")):"function"==typeof define&&define.amd?define(["brickd-mobile/es/field","brickd-mobile/es/rate","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("brickd-mobile/es/field"),require("brickd-mobile/es/rate"),require("react")):e.fangzhouComDef=t(e["brickd-mobile/es/field"],e["brickd-mobile/es/rate"],e.React)}(self,((e,t,r)=>(()=>{var o={2010:(e,t,r)=>{"use strict";r.r(t)},4556:(e,t,r)=>{"use strict";r(3282),r(5636)},7223:(e,t,r)=>{"use strict";r(7279)},7279:(e,t,r)=>{"use strict";r(3282),r(4556),r(2606),r(8760)},2606:(e,t,r)=>{"use strict";r(7966)},3448:(e,t,r)=>{"use strict";r(3282),r(6482)},3282:(e,t,r)=>{"use strict";r(2010),r(3443)},238:e=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}e.exports=function(e){var r=t(e);return null!=e&&("object"==r||"function"==r)}},5636:(e,t,r)=>{"use strict";r.r(t)},8760:(e,t,r)=>{"use strict";r.r(t)},7966:(e,t,r)=>{"use strict";r.r(t)},6482:(e,t,r)=>{"use strict";r.r(t)},3443:(e,t,r)=>{"use strict";r.r(t)},2973:t=>{"use strict";t.exports=e},8527:e=>{"use strict";e.exports=t},359:e=>{"use strict";e.exports=r}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";i.r(s),i.d(s,{default:()=>l}),i(3448);var e=i(8527),t=i.n(e),r=(i(7223),i(2973)),o=i.n(r),n=i(359),u=i.n(n),c=i(238),a=i.n(c);function l(e){e.env;var r=e.data,i=e.inputs,s=e.outputs,c=(e.slots,(0,n.useState)("")),l=c[0],f=c[1];(0,n.useEffect)((function(){i.setValue((function(e){switch(!0){case"string"==typeof e:f(e);break;case a()(e):f(e[r.name])}}))}),[]);var b=(0,n.useCallback)((function(e){f(e),s.onChange({name:r.name,value:e})}),[]);return u().createElement(o(),{label:r.label,name:r.name},u().createElement(t(),{value:l,onChange:b}))}})(),s})()));