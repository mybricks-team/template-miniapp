/*! For license information please see mybricks_taro_systemConfig.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("@tarojs/taro"),require("brickd-mobile/es/fixed-view"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","@tarojs/taro","brickd-mobile/es/fixed-view","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("@tarojs/taro"),require("brickd-mobile/es/fixed-view"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["@tarojs/taro"],e["brickd-mobile/es/fixed-view"],e.React)}(self,((e,t,a,n)=>(()=>{var o={6184:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(359),o=a.n(n),r=a(9525),i=a(1343);const s=function(e){var t=e.title,a=void 0===t?"暂无内容":t;return o().createElement(r.View,{className:i.Z.emptyCom},a)}},3313:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(359),o=a.n(n),r=a(9525),i=a(3078),s=a.n(i),c=a(9722),l=function(){return l=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)};function u(e){var t=e.env,a=e.data,i=(e.inputs,e.outputs,e.slots,(0,n.useCallback)((function(e){var a;t.runtime&&(null===(a=null==e?void 0:e.scene)||void 0===a?void 0:a.id)&&t.openScene(e.scene.id,{})}),[t])),u=(0,n.useMemo)((function(){return a.tabBar.map((function(e,n){var u,m=a.selectedTabItemIndex===n;m&&(m="激活样式"===a.selectedTabItemCatelog);var d=s()(((u={}).tabItem=t.edit,u[c.Z.item]=!0,u[c.Z.selected]=m,u)),p=m?e.selectedIconPath:e.normalIconPath,g=m?e.selectedIconStyle:e.normalIconStyle,f=m?e.selectedTextStyle:e.normalTextStyle;return o().createElement(r.View,{className:d,onClick:function(t){i(e)}},o().createElement(r.Image,{className:c.Z.icon,style:l({},g),src:p}),o().createElement(r.View,{className:c.Z.text,style:l({},f)},e.text))}))}),[t.edit,a.tabBar,a.selectedTabItemIndex,a.selectedTabItemCatelog]);return o().createElement(r.View,{className:"mybricks-tabbar"},a.useTabBar&&a.tabBar.length>=2?o().createElement(r.View,{className:c.Z.tabBar},o().createElement(r.View,{className:c.Z.background,style:l({},a.backgroundStyle)}),u):null)}},6251:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p}),a(769);var n=a(1168),o=a.n(n),r=a(359),i=a.n(r),s=a(9525),c=a(6801),l=a(1403),u=a(447),m=a(6184),d=function(){return d=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d.apply(this,arguments)};function p(e){var t=e.env,a=e.data,n=(e.inputs,e.outputs,e.slots),p=(0,r.useState)((0,u.l)(t)?{width:87,height:32,top:48,right:368,bottom:80,left:281}:{}),g=p[0],f=p[1];(0,r.useEffect)((function(){if(!(0,u.l)(t)){var e=c.getMenuButtonBoundingClientRect();f(e)}}),[t]);var v=(0,r.useMemo)((function(){return i().createElement(s.View,{className:l.Z.defaultNavigation,style:{background:a.navigationBarBackgroundColor}},i().createElement(s.View,{className:l.Z.safearea}),i().createElement(s.View,{className:l.Z.main},i().createElement(s.View,{className:l.Z.left},i().createElement(s.Image,{className:l.Z.backIcon,src:"white"===a.navigationBarTextStyle?"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-06-20/1687262208522.13f01ec8f0684532.png":"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-06-20/1687254105433.06b1b86190102403.png"}),a.homeButton?i().createElement(s.Image,{className:l.Z.homeIcon,src:"white"===a.navigationBarTextStyle?"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-06-20/1687262311797.686a1a6e449ee856.png":"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-06-20/1687253994562.4cc60f04d0d66e5d.png"}):null),i().createElement(s.Image,{className:l.Z.right,src:"white"===a.navigationBarTextStyle?"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-06-20/1687263201632.b8758ba009e2c793.png":"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-06-20/1687253405854.f94d70182b8b21b5.png"}),i().createElement(s.View,{className:l.Z.title,style:{color:a.navigationBarTextStyle}},a.navigationBarTitleText)))}),[a.useNavigationStyle,a.navigationStyle,a.navigationBarBackgroundColor,a.navigationBarTextStyle,a.navigationBarTitleText,a.homeButton]),b=(0,r.useMemo)((function(){var e,o;return i().createElement(s.View,{className:l.Z.customNavigation,style:d({},a.custom.style)},i().createElement(s.View,{className:l.Z.safearea,style:{height:g.top-4}}),i().createElement(s.View,{className:l.Z.main,style:{height:g.height+8}},i().createElement(s.View,{className:l.Z.left,style:{height:g.height,width:g.width,top:4,left:7}},null===(e=n.leftSlot)||void 0===e?void 0:e.render({style:t.edit?{background:"transparent",minHeight:"auto",overflow:"hidden"}:{}})),(0,u.l)(t)&&i().createElement(s.Image,{className:l.Z.right,src:"white"===a.navigationBarTextStyle?"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-06-20/1687263201632.b8758ba009e2c793.png":"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-06-20/1687253405854.f94d70182b8b21b5.png"}),i().createElement(s.View,{className:l.Z.title},null===(o=n.mainSlot)||void 0===o?void 0:o.render({style:t.edit?{background:"transparent",minHeight:"auto",overflow:"hidden"}:{}}))))}),[a.navigationBarTextStyle,a.custom.style,t,g]);if((0,u.l)(t))switch(!0){case"default"===a.useNavigationStyle:return i().createElement(s.View,{className:"mybricks-navigation"},v);case"custom"===a.useNavigationStyle:return i().createElement(s.View,{className:"mybricks-navigation"},b);case"none"===a.useNavigationStyle:return i().createElement(s.View,{className:"mybricks-navigation"},i().createElement(m.Z,{title:"页面导航隐藏"}))}return"custom"!==a.useNavigationStyle?null:a.custom.useFixed?i().createElement(i().Fragment,null,i().createElement(s.View,{className:l.Z.placeholder}),i().createElement(o(),{position:"top",placeholder:!1,style:{zIndex:100}},b)):b}},447:(e,t,a)=>{"use strict";function n(e){var t;return!(!(null==e?void 0:e.edit)&&!(null===(t=null==e?void 0:e.runtime)||void 0===t?void 0:t.debug))}a.d(t,{l:()=>n})},2010:(e,t,a)=>{"use strict";a.r(t)},769:(e,t,a)=>{"use strict";a(3282),a(9222),a(937)},9222:(e,t,a)=>{"use strict";a(3282),a(1233)},3282:(e,t,a)=>{"use strict";a(2010),a(5755)},3078:(e,t,a)=>{var n;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=o(a);if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)){if(a.length){var s=i.apply(null,a);s&&e.push(s)}}else if("object"===n){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var c in a)r.call(a,c)&&a[c]&&e.push(c)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):"object"===o(a.amdO)&&a.amdO?void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n):window.classNames=i}()},1343:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n={emptyCom:"emptyCom-dc7f7"}},9722:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n={tabBar:"tabBar-f7d3d",background:"background-babeb",item:"item-c1680",icon:"icon-fd1a1",text:"text-a36aa",selected:"selected-ac2a7"}},1403:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n={defaultNavigation:"defaultNavigation-cac70",safearea:"safearea-bc3b3",main:"main-dce7e",left:"left-c9096",backIcon:"backIcon-cbbdf",homeIcon:"homeIcon-f8b9f",right:"right-eca75",title:"title-d17f8",customNavigation:"customNavigation-a2860",placeholder:"placeholder-da422"}},8797:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n={page:"page-b38f2",navigationBar:"navigationBar-c797f",content:"content-d17e4",placeholder:"placeholder-b299a"}},937:(e,t,a)=>{"use strict";a.r(t)},1233:(e,t,a)=>{"use strict";a.r(t)},5755:(e,t,a)=>{"use strict";a.r(t)},9525:t=>{"use strict";t.exports=e},6801:e=>{"use strict";e.exports=t},1168:e=>{"use strict";e.exports=a},359:e=>{"use strict";e.exports=n}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return o[e](a,a.exports,i),a.exports}i.amdO={},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";i.r(s),i.d(s,{default:()=>m});var e=i(359),t=i.n(e),a=i(9525),n=i(8797),o=i(3078),r=i.n(o),c=i(447),l=i(6251),u=i(3313);function m(o){var i,s,m,d,p=o.env,g=o.data,f=o.inputs,v=o.outputs,b=o.slots;return(0,e.useEffect)((function(){g.selectedTabItemIndex=0,g.selectedTabItemCatelog="激活样式"}),[]),t().createElement(a.View,{className:n.Z.page,style:{height:(null===(s=b.content)||void 0===s?void 0:s.size)?"auto":667}},t().createElement(l.Z,{env:p,data:g,inputs:f,outputs:v,slots:b}),t().createElement(a.View,{className:r()(n.Z.content,(i={},i[n.Z.edit]=null==p?void 0:p.edit,i)),style:{}},null===(d=null===(m=b.content)||void 0===m?void 0:m.render)||void 0===d?void 0:d.call(m)),(0,c.l)(p)?t().createElement(u.Z,{env:p,data:g,inputs:f,outputs:v,slots:b}):null)}})(),s})()));