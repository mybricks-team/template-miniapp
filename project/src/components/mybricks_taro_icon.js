!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("@taroify/icons"),require("@tarojs/components"),require("brickd-mobile/es/badge"),require("react")):"function"==typeof define&&define.amd?define(["@taroify/icons","@tarojs/components","brickd-mobile/es/badge","react"],o):"object"==typeof exports?exports.fangzhouComDef=o(require("@taroify/icons"),require("@tarojs/components"),require("brickd-mobile/es/badge"),require("react")):e.fangzhouComDef=o(e["@taroify/icons"],e["@tarojs/components"],e["brickd-mobile/es/badge"],e.React)}(self,((e,o,t,r)=>(()=>{"use strict";var n={4735:(e,o,t)=>{t(5330),t(505)},5330:(e,o,t)=>{t(5010),t(3218)},5010:(e,o,t)=>{t.r(o)},2512:(e,o,t)=>{t.d(o,{Z:()=>r});const r={icon:"icon-feca7"}},505:(e,o,t)=>{t.r(o)},3218:(e,o,t)=>{t.r(o)},7106:o=>{o.exports=e},9525:e=>{e.exports=o},3222:e=>{e.exports=t},359:e=>{e.exports=r}},a={};function i(e){var o=a[e];if(void 0!==o)return o.exports;var t=a[e]={exports:{}};return n[e](t,t.exports,i),t.exports}i.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return i.d(o,{a:o}),o},i.d=(e,o)=>{for(var t in o)i.o(o,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},i.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{i.r(c),i.d(c,{default:()=>u}),i(4735);var e=i(3222),o=i.n(e),t=i(359),r=i.n(t),n=i(2512),a=i(9525),s=i(7106);function u(e){var i=e.env,c=e.data,u=(e.logger,e.slots,e.inputs),l=e.outputs,f=(e.title,(0,t.useState)(c.badgeContent)),d=f[0],p=f[1];(0,t.useEffect)((function(){u.setBadgeContent((function(e){p(e)}))}),[]),(0,t.useEffect)((function(){p(c.badgeContent)}),[c.badgeContent]);var b=(0,t.useCallback)((function(e){i.runtime&&(e.stopPropagation(),l.onClick(!0),c.autoClearBadgeWhenClick&&p(""))}),[c.autoClearBadgeWhenClick]),m=(0,t.useMemo)((function(){var e=s&&s[c.icon]({size:c.iconSize,color:c.iconColor});return r().createElement(r().Fragment,null,e)}),[s,c.icon,c.iconColor,c.iconSize]);return r().createElement(a.View,{className:n.Z.icon,onClick:b},r().createElement(o(),{content:d},m),c.useLabel?r().createElement(a.View,{className:n.Z.label},c.labelContent):null)}})(),c})()));