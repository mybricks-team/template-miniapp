!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("@tarojs/taro"),require("brickd-mobile/es/fixed-view"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","@tarojs/taro","brickd-mobile/es/fixed-view","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("@tarojs/taro"),require("brickd-mobile/es/fixed-view"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["@tarojs/taro"],e["brickd-mobile/es/fixed-view"],e.React)}(self,((e,t,a,o)=>(()=>{"use strict";var i={6184:(e,t,a)=>{a.d(t,{Z:()=>l});var o=a(359),i=a.n(o),r=a(9525),n=a(1615);const l=function(e){var t=e.title,a=void 0===t?"暂无内容":t;return i().createElement(r.View,{className:n.Z.emptyCom},a)}},447:(e,t,a)=>{function o(e){var t;return!(!(null==e?void 0:e.edit)&&!(null===(t=null==e?void 0:e.runtime)||void 0===t?void 0:t.debug))}a.d(t,{l:()=>o})},2010:(e,t,a)=>{a.r(t)},769:(e,t,a)=>{a(3282),a(9222),a(9794)},9222:(e,t,a)=>{a(3282),a(2569)},3282:(e,t,a)=>{a(2010),a(3443)},1615:(e,t,a)=>{a.d(t,{Z:()=>o});const o={emptyCom:"emptyCom-dc7f7"}},6191:(e,t,a)=>{a.d(t,{Z:()=>o});const o={defaultNavigation:"defaultNavigation-c75ea",safearea:"safearea-cc361",main:"main-c3b8d",left:"left-db1e7",backIcon:"backIcon-f92d1",homeIcon:"homeIcon-f5970",right:"right-a6615",title:"title-ea6cd",customNavigation:"customNavigation-bbd21"}},9794:(e,t,a)=>{a.r(t)},2569:(e,t,a)=>{a.r(t)},3443:(e,t,a)=>{a.r(t)},9525:t=>{t.exports=e},6801:e=>{e.exports=t},1168:e=>{e.exports=a},359:e=>{e.exports=o}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return i[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{n.r(l),n.d(l,{default:()=>p}),n(769);var e=n(1168),t=n.n(e),a=n(359),o=n.n(a),i=n(9525),r=n(6801),s=n(6191),c=n(447),u=n(6184),m=function(){return m=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},m.apply(this,arguments)};function p(e){var n=e.env,l=e.data,p=(e.inputs,e.outputs,e.slots),g=(0,a.useState)((0,c.l)(n)?{width:87,height:32,top:48,right:368,bottom:80,left:281}:{}),d=g[0],f=g[1];(0,a.useEffect)((function(){if(!(0,c.l)(n)){var e=r.getMenuButtonBoundingClientRect();f(e)}}),[n]);var h=(0,a.useMemo)((function(){return o().createElement(i.View,{className:s.Z.defaultNavigation,style:{background:l.navigationBarBackgroundColor}},o().createElement(i.View,{className:s.Z.safearea}),o().createElement(i.View,{className:s.Z.main},o().createElement(i.View,{className:s.Z.left},o().createElement(i.Image,{className:s.Z.backIcon,src:"white"===l.navigationBarTextStyle?"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-06-20/1687262208522.13f01ec8f0684532.png":"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-06-20/1687254105433.06b1b86190102403.png"}),l.homeButton?o().createElement(i.Image,{className:s.Z.homeIcon,src:"white"===l.navigationBarTextStyle?"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-06-20/1687262311797.686a1a6e449ee856.png":"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-06-20/1687253994562.4cc60f04d0d66e5d.png"}):null),o().createElement(i.Image,{className:s.Z.right,src:"white"===l.navigationBarTextStyle?"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-06-20/1687263201632.b8758ba009e2c793.png":"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-06-20/1687253405854.f94d70182b8b21b5.png"}),o().createElement(i.View,{className:s.Z.title,style:{color:l.navigationBarTextStyle}},l.navigationBarTitleText)))}),[l.useNavigationStyle,l.navigationStyle,l.navigationBarBackgroundColor,l.navigationBarTextStyle,l.navigationBarTitleText,l.homeButton]),v=(0,a.useMemo)((function(){var e,t;return o().createElement(i.View,{className:s.Z.customNavigation,style:m({},l.custom.style)},o().createElement(i.View,{className:s.Z.safearea,style:{height:d.top-4}}),o().createElement(i.View,{className:s.Z.main,style:{height:d.height+8}},o().createElement(i.View,{className:s.Z.left,style:{height:d.height,width:d.width,top:4,left:375-d.right}},null===(e=p.leftSlot)||void 0===e?void 0:e.render()),(0,c.l)(n)&&o().createElement(i.Image,{className:s.Z.right,src:"white"===l.navigationBarTextStyle?"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-06-20/1687263201632.b8758ba009e2c793.png":"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-06-20/1687253405854.f94d70182b8b21b5.png"}),o().createElement(i.View,{className:s.Z.title},null===(t=p.mainSlot)||void 0===t?void 0:t.render())))}),[l.navigationBarTextStyle,l.custom.style,n,d]);if((0,c.l)(n))switch(!0){case"follow"===l.useNavigationStyle:return o().createElement(u.Z,{title:"页面导航跟随应用设置"});case"default"===l.useNavigationStyle:return h;case"custom"===l.useNavigationStyle:return v;case"none"===l.useNavigationStyle:return o().createElement(u.Z,{title:"页面导航隐藏"})}return"custom"!==l.useNavigationStyle?null:l.custom.useFixed?o().createElement(t(),{position:"top",placeholder:!0},v):v}})(),l})()));