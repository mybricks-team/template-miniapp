/*! For license information please see mybricks_taro_image.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e.React)}(self,((e,t)=>(()=>{var o={7592:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var n=o(359),r=o.n(n),c=o(5207),l=o(9525),a=function(){return a=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a.apply(this,arguments)},i=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};function s(e){var t=e.skeleton,o=void 0!==t&&t,s=e.onLoad,u=e.onClick,f=e.onError,p=e.className,m=e.src,d=e.mode,y=i(e,["skeleton","onLoad","onClick","onError","className","src","mode"]),b=(0,n.useState)(!!o),v=b[0],h=b[1];(0,n.useEffect)((function(){m&&o&&h(!0)}),[m,o]);var g=(0,n.useCallback)((function(e){h(!1),null==s||s(e)}),[s]),O=(0,n.useCallback)((function(e){null==u||u(e)}),[u]),j=(0,n.useCallback)((function(e){h(!1),null==f||f(e)}),[f]);return r().createElement(l.View,{className:c.Z.com},r().createElement(l.View,{className:v?"".concat(c.Z.place):"".concat(c.Z.place," ").concat(c.Z.none)}),r().createElement(l.Image,a({},y,{className:p,src:m,mode:d,onClick:O,onLoad:g,onError:j})))}},3078:(e,t,o)=>{var n;function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}!function(){"use strict";var c={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=r(o);if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)){if(o.length){var a=l.apply(null,o);a&&e.push(a)}}else if("object"===n){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var i in o)c.call(o,i)&&o[i]&&e.push(i)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):"object"===r(o.amdO)&&o.amdO?void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n):window.classNames=l}()},5207:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n={com:"com-fe1c1",place:"place-f8f60",none:"none-e996f"}},6966:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n={com:"com-b0ef8","h5-polyfill-aspectfill-height":"h5-polyfill-aspectfill-height-b3ca0",image:"image-cfc3a"}},9525:t=>{"use strict";t.exports=e},359:e=>{"use strict";e.exports=t}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var c=n[e]={exports:{}};return o[e](c,c.exports,r),c.exports}r.amdO={},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{"use strict";r.r(c),r.d(c,{default:()=>s});var e=r(359),t=r.n(e),o=r(6966),n=r(3078),l=r.n(n),a=r(9525),i=r(7592);function s(n){var r,c=n.env,s=n.data,u=n.inputs,f=n.outputs,p=(n.title,n.style),m=(0,e.useRef)(null),d=(0,e.useState)(o.Z["h5-polyfill-aspectfill-width"]),y=d[0],b=d[1];(0,e.useEffect)((function(){var e,t,n;if("aspectFill"===s.mode&&(m.current||m.current.getBoundingClientRect)){var r=null!==(n=null===(t=(e=m.current).getBoundingClientRect)||void 0===t?void 0:t.call(e))&&void 0!==n?n:{},c=r.width,l=r.height;b(c>l?o.Z["h5-polyfill-aspectfill-width"]:o.Z["h5-polyfill-aspectfill-height"])}}),[p.width,p.height,s.mode]),(0,e.useMemo)((function(){u.setSrc((function(e){s.src=e}))}),[]);var v=(0,e.useCallback)((function(){c.runtim&&f.onLoad()}),[]),h=(0,e.useCallback)((function(){c.runtime&&f.onClick()}),[]),g=(0,e.useCallback)((function(){c.runtime&&f.onError()}),[]);return t().createElement(a.View,{className:o.Z.com,ref:m},t().createElement(i.Z,{skeleton:!c.edit&&!!(null==s?void 0:s.loadSmooth),className:l()(o.Z.image,y,"mybricks-image"),src:s.src,mode:s.mode,onClick:h,onLoad:v,onError:g,showMenuByLongpress:null!==(r=s.showMenuByLongpress)&&void 0!==r&&r}))}})(),c})()));