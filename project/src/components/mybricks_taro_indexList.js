/*! For license information please see mybricks_taro_indexList.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("@tarojs/taro"),require("brickd-mobile/es/cell"),require("brickd-mobile/es/index-list"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","@tarojs/taro","brickd-mobile/es/cell","brickd-mobile/es/index-list","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("@tarojs/taro"),require("brickd-mobile/es/cell"),require("brickd-mobile/es/index-list"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["@tarojs/taro"],e["brickd-mobile/es/cell"],e["brickd-mobile/es/index-list"],e.React)}(self,((e,t,r,o,i)=>(()=>{var n={2603:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const o=[{anchor:"A",list:[{title:"阿里巴巴",value:"600000"},{title:"安徽水利",value:"600001"}]},{anchor:"B",list:[{title:"白云机场",value:"600002"},{title:"北京银行",value:"600003"}]},{anchor:"Z",list:[{title:"中国建筑",value:"600004"},{title:"中国联通",value:"600005"},{title:"中国移动",value:"600006"}]}]},447:(e,t,r)=>{"use strict";function o(e){var t;return!(!(null==e?void 0:e.edit)&&!(null===(t=null==e?void 0:e.runtime)||void 0===t?void 0:t.debug))}r.d(t,{l:()=>o})},2010:(e,t,r)=>{"use strict";r.r(t)},4556:(e,t,r)=>{"use strict";r(3282),r(3637)},3141:(e,t,r)=>{"use strict";r(3282),r(1515)},3282:(e,t,r)=>{"use strict";r(2010),r(5755)},3078:(e,t,r)=>{var o;function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=i(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var u=s.apply(null,r);u&&e.push(u)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):"object"===i(r.amdO)&&r.amdO?void 0===(o=function(){return s}.apply(t,[]))||(e.exports=o):window.classNames=s}()},4642:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const o={indexList:"indexList-ba1bb",edit:"edit-d3084",h5:"h5-ae8e0"}},3637:(e,t,r)=>{"use strict";r.r(t)},1515:(e,t,r)=>{"use strict";r.r(t)},5755:(e,t,r)=>{"use strict";r.r(t)},9525:t=>{"use strict";t.exports=e},6801:e=>{"use strict";e.exports=t},6696:e=>{"use strict";e.exports=r},9592:e=>{"use strict";e.exports=o},359:e=>{"use strict";e.exports=i}},s={};function u(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return n[e](r,r.exports,u),r.exports}u.amdO={},u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},u.d=(e,t)=>{for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{"use strict";u.r(l),u.d(l,{IndexList:()=>y,default:()=>x}),u(3141);var e=u(9592),t=u.n(e),r=(u(4556),u(6696)),o=u.n(r),i=u(359),n=u.n(i),s=u(9525),a=u(3078),c=u.n(a),d=u(4642),f=u(2603),p=u(6801),m=u.n(p),b=u(447),v=m().getEnv()===m().ENV_TYPE.WEB||"Unknown"===m().getEnv(),y=function(e){var r,u=e.env,l=e.data,a=e.inputs,p=e.outputs,m=e.slots,y=(0,i.useState)(u.runtime?[]:f.Z),x=y[0],h=y[1];(0,i.useEffect)((function(){a.setDataSource((function(e){h(e)}))}),[]);var g=(0,i.useCallback)((function(e){p.onClick(e)}),[]),j=(0,i.useCallback)((function(e){var t=e.key,r=e.title,o=e.value;return n().createElement(s.View,{onClick:function(){g(o)}},m.item.render({inputValues:{itemData:{title:r,value:o},index:t},key:t}))}),[m.item]),k=(0,i.useMemo)((function(){return l.useCustomizeCell?j:o()}),[l.useCustomizeCell]);return n().createElement(t(),{className:c()(d.Z.indexList,(r={},r[d.Z.edit]=(0,b.l)(u),r[d.Z.h5]=v,r))},x.map((function(e,r){return n().createElement(n().Fragment,{key:r},e.anchor?n().createElement(t().Anchor,{index:e.anchor},e.anchor):null,n().createElement(s.View,null,e.list.map((function(e,t){return k({key:t,title:e.title,value:e.value,onClick:function(){g(e.value)}})}))))})))};const x=y})(),l})()));