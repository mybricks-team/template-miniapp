/*! For license information please see mybricks_taro_treeSelect.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("brickd-mobile/es/tree-select"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","brickd-mobile/es/tree-select","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("brickd-mobile/es/tree-select"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["brickd-mobile/es/tree-select"],e.React)}(self,((e,t,r)=>(()=>{var o={2010:(e,t,r)=>{"use strict";r.r(t)},8536:(e,t,r)=>{"use strict";r(3282),r(2999)},202:(e,t,r)=>{"use strict";r(3282),r(8536),r(9587)},3282:(e,t,r)=>{"use strict";r(2010),r(5755)},811:(e,t,r)=>{"use strict";r(3282),r(202),r(5905)},3078:(e,t,r)=>{var o;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}!function(){"use strict";var i={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=n(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var u=s.apply(null,r);u&&e.push(u)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)i.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):"object"===n(r.amdO)&&r.amdO?void 0===(o=function(){return s}.apply(t,[]))||(e.exports=o):window.classNames=s}()},5466:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const o={treeSelect:"treeSelect-a808d",edit:"edit-cfd25"}},2999:(e,t,r)=>{"use strict";r.r(t)},9587:(e,t,r)=>{"use strict";r.r(t)},5755:(e,t,r)=>{"use strict";r.r(t)},5905:(e,t,r)=>{"use strict";r.r(t)},9525:t=>{"use strict";t.exports=e},5785:e=>{"use strict";e.exports=t},359:e=>{"use strict";e.exports=r}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e](r,r.exports,i),r.exports}i.amdO={},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";i.r(s),i.d(s,{default:()=>l}),i(811);var e=i(5785),t=i.n(e),r=i(359),o=i.n(r),n=i(9525),u=i(5466),a=i(3078),c=i.n(a);function l(e){var i,s=e.data,a=(e.inputs,e.outputs),l=(e.title,e.slots),d=e.env,f=(0,r.useState)((i=s.tabs).length>0&&i[0]._id||""),p=f[0],b=f[1],m=(0,r.useCallback)((function(e){var t;b(e),null===(t=a.changeTab)||void 0===t||t.call(a,e)}),[]);(0,r.useEffect)((function(){d.edit&&s.edit.currentTabId&&b(s.edit.currentTabId)}),[d.edit,s.edit.currentTabId]);var y=(0,r.useMemo)((function(){return d.edit&&0===s.tabs.length?o().createElement(n.View,{className:u.Z.empty},"暂无内容，请配置标签项"):null}),[d.edit,s.tabs]),v=(0,r.useMemo)((function(){var e;return c()(((e={})[u.Z.treeSelect]=!0,e[u.Z.edit]=d.edit,e))}),[d.edit]);return y||o().createElement(t(),{className:v,tabValue:p,onTabChange:m},s.tabs.map((function(e){var r,n;return o().createElement(t().Tab,{key:e._id,title:e.tabName,value:e._id},s.hideContent?null:null===(n=null===(r=l[e._id])||void 0===r?void 0:r.render)||void 0===n?void 0:n.call(r))})))}})(),s})()));