/*! For license information please see mybricks_taro_grid.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("@tarojs/taro"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","@tarojs/taro","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("@tarojs/taro"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["@tarojs/taro"],e.React)}(self,((e,t,r)=>(()=>{var o={447:(e,t,r)=>{"use strict";function o(e){var t;return!(!(null==e?void 0:e.edit)&&!(null===(t=null==e?void 0:e.runtime)||void 0===t?void 0:t.debug))}r.d(t,{l:()=>o})},3078:(e,t,r)=>{var o;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=n(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var c=a.apply(null,r);c&&e.push(c)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var u in r)i.call(r,u)&&r[u]&&e.push(u)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):"object"===n(r.amdO)&&r.amdO?void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o):window.classNames=a}()},3966:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const o={grid:"grid-fe8ea",inner:"inner-fa3a8",item:"item-cff66",icon:"icon-f3d13",label:"label-d3085"}},9525:t=>{"use strict";t.exports=e},6801:e=>{"use strict";e.exports=t},359:e=>{"use strict";e.exports=r}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e](r,r.exports,i),r.exports}i.amdO={},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";i.r(a),i.d(a,{default:()=>l});var e=i(359),t=i.n(e),r=i(9525),o=i(3078),n=i.n(o),c=i(3966),u=i(6801),s=i(447);function l(o){var i=o.env,a=o.data,l=(o.inputs,o.outputs),f=(0,e.useState)(a.items),m=f[0],p=f[1];(0,e.useEffect)((function(){p(a.items)}),[a.items]);var d=(0,e.useCallback)((function(e){i.runtime&&l["".concat(e.id)](e)}),[]),y=(0,e.useMemo)((function(){return m.map((function(e,o){return t().createElement(r.View,{className:n()(c.Z.item,"mybricks-grid-item"),style:{marginBottom:a.gutter[0],marginRight:a.gutter[1],width:(0,s.l)(i)?"calc(".concat(Math.floor(10*+(100/a.columns).toFixed(2))/10,"% - ").concat(a.gutter[1],"px)"):"calc(".concat(Math.floor(10*+(100/a.columns).toFixed(2))/10,"% - ").concat(u.pxTransform(a.gutter[1]),")")},key:o,onClick:function(t){d(e)}},t().createElement(r.Image,{className:n()(c.Z.icon,"mybricks-grid-item-icon"),src:e.icon}),t().createElement(r.View,{className:n()(c.Z.label,"mybricks-grid-item-label")},e.label))}))}),[i,m,a.columns,a.gutter[0],a.gutter[1]]);return t().createElement(r.View,{className:c.Z.grid},t().createElement(r.View,{className:c.Z.inner,style:{marginBottom:-a.gutter[0],marginRight:-a.gutter[1]}},y))}})(),a})()));