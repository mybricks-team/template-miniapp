!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@taroify/icons"),require("@tarojs/taro"),require("brickd-mobile/es/area-picker"),require("brickd-mobile/es/field"),require("brickd-mobile/es/input"),require("brickd-mobile/es/popup"),require("react")):"function"==typeof define&&define.amd?define(["@taroify/icons","@tarojs/taro","brickd-mobile/es/area-picker","brickd-mobile/es/field","brickd-mobile/es/input","brickd-mobile/es/popup","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@taroify/icons"),require("@tarojs/taro"),require("brickd-mobile/es/area-picker"),require("brickd-mobile/es/field"),require("brickd-mobile/es/input"),require("brickd-mobile/es/popup"),require("react")):e.fangzhouComDef=t(e["@taroify/icons"],e["@tarojs/taro"],e["brickd-mobile/es/area-picker"],e["brickd-mobile/es/field"],e["brickd-mobile/es/input"],e["brickd-mobile/es/popup"],e.React)}(self,((e,t,r,i,o,n,u)=>(()=>{var a={447:(e,t,r)=>{"use strict";function i(e){var t;return!(!(null==e?void 0:e.edit)&&!(null===(t=null==e?void 0:e.runtime)||void 0===t?void 0:t.debug))}r.d(t,{l:()=>i})},2010:(e,t,r)=>{"use strict";r.r(t)},8023:(e,t,r)=>{"use strict";r(9664)},7977:(e,t,r)=>{"use strict";r(3282),r(8018),r(8434)},4556:(e,t,r)=>{"use strict";r(3282),r(3637)},7223:(e,t,r)=>{"use strict";r(2461)},2461:(e,t,r)=>{"use strict";r(3282),r(4556),r(2606),r(3767)},2606:(e,t,r)=>{"use strict";r(8150)},7151:(e,t,r)=>{"use strict";r(3282),r(7)},9664:(e,t,r)=>{"use strict";r(3282),r(7151),r(8531)},7278:(e,t,r)=>{"use strict";r(3282),r(8018),r(7977),r(3685)},3282:(e,t,r)=>{"use strict";r(2010),r(5755)},8018:(e,t,r)=>{"use strict";r(3282),r(5980)},238:e=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}e.exports=function(e){var r=t(e);return null!=e&&("object"==r||"function"==r)}},8434:(e,t,r)=>{"use strict";r.r(t)},3637:(e,t,r)=>{"use strict";r.r(t)},3767:(e,t,r)=>{"use strict";r.r(t)},8150:(e,t,r)=>{"use strict";r.r(t)},7:(e,t,r)=>{"use strict";r.r(t)},8531:(e,t,r)=>{"use strict";r.r(t)},3685:(e,t,r)=>{"use strict";r.r(t)},5755:(e,t,r)=>{"use strict";r.r(t)},5980:(e,t,r)=>{"use strict";r.r(t)},7106:t=>{"use strict";t.exports=e},6801:e=>{"use strict";e.exports=t},5790:e=>{"use strict";e.exports=r},2973:e=>{"use strict";e.exports=i},5402:e=>{"use strict";e.exports=o},4529:e=>{"use strict";e.exports=n},359:e=>{"use strict";e.exports=u}},s={};function l(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return a[e](r,r.exports,l),r.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{"use strict";l.r(c),l.d(c,{default:()=>y}),l(8023);var e=l(5790),t=l.n(e),r=(l(7278),l(4529)),i=l.n(r),o=(l(2606),l(5402)),n=l.n(o),u=(l(7223),l(2973)),a=l.n(u),s=l(359),p=l.n(s),d=l(7106),m=l(238),b=l.n(m),f=l(6801),v=l(447);function y(e){var r=e.env,o=e.data,u=e.inputs,l=e.outputs,c=(e.slots,(0,s.useState)([])),m=c[0],y=c[1],k=(0,s.useState)(!1),h=k[0],g=k[1],C=(0,s.useState)({province_list:[],city_list:[],county_list:[]}),j=C[0],x=C[1];(0,s.useEffect)((function(){var e,t,i,n,a,s,c=f.getApp(),p=(0,v.l)(r)?"/mybricks-app-mpsite/api/mock/getAreaData":"".concat(null===(t=null===(e=null==c?void 0:c.mybricks)||void 0===e?void 0:e.status)||void 0===t?void 0:t.callServiceHost,"/runtime/api/domain/service/run");f.request({url:p,method:"POST",data:{projectId:null===(n=null===(i=null==c?void 0:c.mybricks)||void 0===i?void 0:i.status)||void 0===n?void 0:n.projectId,fileId:null===(s=null===(a=null==c?void 0:c.mybricks)||void 0===a?void 0:a.status)||void 0===s?void 0:s.projectId,serviceId:"getAreaData"},success:function(e){console.error(e.data.data),x(e.data.data)}}),u.setValue((function(e){switch(!0){case"string"==typeof e:o.value=e,l.onChange({name:o.name,value:e});break;case b()(e):o.value=e[o.name],l.onChange({name:o.name,value:e[o.name]})}})),u.changeType((function(e){o.type=e}))}),[]);var q=(0,s.useCallback)((function(e){return(e=e||"").split("/").map((function(e,t){var r={};switch(t){case 0:r=j.province_list;break;case 1:r=j.city_list;break;case 2:r=j.county_list}return Object.keys(r).forEach((function(t){if(r[t]===e)return t})),""})).filter((function(e){return!!e}))}),[j]),S=(0,s.useCallback)((function(e){for(var t=[],r=0;r<e.length;r++)switch(r){case 0:t.push(j.province_list[e[r]]);break;case 1:t.push(j.city_list[e[r]]);break;case 2:t.push(j.county_list[e[r]])}return t.join("/")}),[j]),E=(0,s.useCallback)((function(){if(r.runtime&&"select"===o.type){var e=q(o.value);y(e),g(!0)}}),[r.runtime,o.value,o.type,q]),_=(0,s.useCallback)((function(){g(!1)}),[]),O=(0,s.useCallback)((function(e){o.value=S(e),console.error(o.value),g(!1),l.onChange({name:o.name,value:o.value})}),[S]),I=(0,s.useCallback)((function(e){var t=e.detail.value;o.value=t,l.onChange({name:o.name,value:o.value})}),[]);return p().createElement(p().Fragment,null,p().createElement(a(),{readonly:!0,label:o.label,name:o.name,rightIcon:"select"===o.type&&p().createElement(d.ArrowRight,null),onClick:E},"text"===o.type?p().createElement(n(),{placeholder:o.placeholder,value:o.value,onChange:I}):null,"select"===o.type?p().createElement(n(),{readonly:!0,placeholder:o.placeholder,value:o.value}):null),p().createElement(i(),{open:h,rounded:!0,placement:"bottom",onClose:_},p().createElement(t(),{value:m,onCancel:_,onConfirm:O},p().createElement(t().Toolbar,null,p().createElement(t().Button,null,"取消"),p().createElement(t().Button,null,"确认")),p().createElement(t().Columns,{children:j}))))}})(),c})()));