/*! For license information please see mybricks_taro_sidebar.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("brickd-mobile/es/tree-select"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","brickd-mobile/es/tree-select","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("brickd-mobile/es/tree-select"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["brickd-mobile/es/tree-select"],e.React)}(self,((e,t,r)=>(()=>{var o={447:(e,t,r)=>{"use strict";function o(e){var t;return!(!(null==e?void 0:e.edit)&&!(null===(t=null==e?void 0:e.runtime)||void 0===t?void 0:t.debug))}r.d(t,{l:()=>o})},4735:(e,t,r)=>{"use strict";r(5330),r(505)},7641:(e,t,r)=>{"use strict";r(5330),r(4735),r(4298)},5330:(e,t,r)=>{"use strict";r(5010),r(3218)},4366:(e,t,r)=>{"use strict";r(5330),r(7641),r(6756)},5010:(e,t,r)=>{"use strict";r.r(t)},3078:(e,t,r)=>{var o;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}!function(){"use strict";var i={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=n(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var u=s.apply(null,r);u&&e.push(u)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)i.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):"object"===n(r.amdO)&&r.amdO?void 0===(o=function(){return s}.apply(t,[]))||(e.exports=o):window.classNames=s}()},6538:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const o={treeSelect:"treeSelect-cc510",edit:"edit-ab189"}},505:(e,t,r)=>{"use strict";r.r(t)},4298:(e,t,r)=>{"use strict";r.r(t)},3218:(e,t,r)=>{"use strict";r.r(t)},6756:(e,t,r)=>{"use strict";r.r(t)},9525:t=>{"use strict";t.exports=e},5785:e=>{"use strict";e.exports=t},359:e=>{"use strict";e.exports=r}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e](r,r.exports,i),r.exports}i.amdO={},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";i.r(s),i.d(s,{default:()=>d}),i(4366);var e=i(5785),t=i.n(e),r=i(359),o=i.n(r),n=i(9525),u=i(6538),a=i(3078),c=i.n(a),l=i(447);function d(e){var i,s=e.data,a=(e.inputs,e.outputs),d=(e.title,e.slots),f=e.env,p=(0,r.useState)((i=s.tabs).length>0&&i[0]._id||""),b=p[0],m=p[1],v=(0,r.useCallback)((function(e){var t;m(e);var r=s.tabs.findIndex((function(t){return t._id==e}));if(-1!==r){var o=s.tabs[r];null===(t=a.changeTab)||void 0===t||t.call(a,{id:o._id,title:o.tabName,index:r})}}),[]),y=(0,r.useMemo)((function(){return f.edit&&0===s.tabs.length?o().createElement(n.View,{className:u.Z.empty},"暂无内容，请配置标签项"):null}),[f.edit,s.tabs]),g=(0,r.useMemo)((function(){var e;return c()(((e={})[u.Z.treeSelect]=!0,e[u.Z.edit]=(0,l.l)(f),e))}),[f]);return y||o().createElement(t(),{className:g,tabValue:b,onTabChange:v},s.tabs.map((function(e){var r,i;return o().createElement(t().Tab,{key:e._id,title:e.tabName,value:e._id},o().createElement(n.View,{key:"slot_".concat(e._id)},s.hideContent?null:null===(i=null===(r=d.content)||void 0===r?void 0:r.render)||void 0===i?void 0:i.call(r)))})))}})(),s})()));