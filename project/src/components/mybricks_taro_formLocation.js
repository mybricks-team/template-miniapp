!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@taroify/icons"),require("@tarojs/components"),require("brickd-mobile/es/area-picker"),require("brickd-mobile/es/input"),require("react")):"function"==typeof define&&define.amd?define(["@taroify/icons","@tarojs/components","brickd-mobile/es/area-picker","brickd-mobile/es/input","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@taroify/icons"),require("@tarojs/components"),require("brickd-mobile/es/area-picker"),require("brickd-mobile/es/input"),require("react")):e.fangzhouComDef=t(e["@taroify/icons"],e["@tarojs/components"],e["brickd-mobile/es/area-picker"],e["brickd-mobile/es/input"],e.React)}(self,((e,t,r,n,o)=>(()=>{"use strict";var a={7234:(e,t,r)=>{function n(e){return(t="Object",function(e){return Object.prototype.toString.call(e)==="[object ".concat(t,"]")})(e);var t}r.d(t,{Kn:()=>n})},3634:(e,t,r)=>{r(6485)},8501:(e,t,r)=>{r(7196)},7131:(e,t,r)=>{r.d(t,{Z:()=>n});const n={wrap:"wrap-a4cf0",select:"select-c334f"}},6485:(e,t,r)=>{r.r(t)},7196:(e,t,r)=>{r.r(t)},7106:t=>{t.exports=e},9525:e=>{e.exports=t},5790:e=>{e.exports=r},5402:e=>{e.exports=n},359:e=>{e.exports=o}},l={};function i(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return a[e](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};return(()=>{i.r(u),i.d(u,{default:()=>d}),i(3634);var e=i(5790),t=i.n(e),r=(i(8501),i(5402)),n=i.n(r),o=i(359),a=i.n(o),l=i(9525),c=i(7106),s=i(7234),p=i(7131);function d(e){e.env;var r=e.data,i=e.inputs,u=e.outputs,d=(e.slots,e.parentSlot);(0,o.useEffect)((function(){i.setValue((function(e){switch(!0){case"string"==typeof e:r.value=e;break;case(0,s.Kn)(e):r.value=e[r.name]}})),i.changeType((function(e){r.type=e}))}),[]);var f=(0,o.useCallback)((function(t){var n,o,a=t.detail.value;r.value=a,null===(o=null==d?void 0:(n=d._inputs).onChange)||void 0===o||o.call(n,{id:e.id,name:e.name,value:a}),u.onChange(a)}),[]),m=(0,o.useCallback)((function(t){var n,o;r.value=t.join("/"),null===(o=null==d?void 0:(n=d._inputs).onChange)||void 0===o||o.call(n,{id:e.id,name:e.name,value:r.value}),u.onChange(r.value)}),[]),v=(0,o.useMemo)((function(){return r.value.split("/")}),[r.value]);return a().createElement(a().Fragment,null,a().createElement(l.View,{className:p.Z.wrap},"text"===r.type?a().createElement(n(),{placeholder:r.placeholder,value:r.value,onChange:f}):null,"select"===r.type?a().createElement(t(),{value:v,onChange:m},a().createElement(l.View,{className:p.Z.select},a().createElement(n(),{readonly:!0,disabled:!r.value,placeholder:r.placeholder,value:r.value,style:{flex:1}}),a().createElement(c.ArrowRight,null))):null))}})(),u})()));