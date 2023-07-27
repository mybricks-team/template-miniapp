/*! For license information please see mybricks_taro_activityDetail.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@tarojs/components"),require("@tarojs/taro"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","@tarojs/taro","react"],t):"object"==typeof exports?exports.fangzhouComDef=t(require("@tarojs/components"),require("@tarojs/taro"),require("react")):e.fangzhouComDef=t(e["@tarojs/components"],e["@tarojs/taro"],e.React)}(self,((e,t,a)=>(()=>{var r={7592:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(359),n=a.n(r),o=a(5207),h=a(9525),c=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function l(e){var t=e.skeleton,a=void 0!==t&&t,l=e.onLoad,s=e.onClick,i=e.onError,d=e.className,m=e.src,u=c(e,["skeleton","onLoad","onClick","onError","className","src"]),f=(0,r.useState)(!!a),p=f[0],b=f[1];(0,r.useEffect)((function(){m&&a&&b(!0)}),[m,a]);var g=(0,r.useCallback)((function(){b(!1),null==l||l()}),[l]),y=(0,r.useCallback)((function(){null==s||s()}),[s]),v=(0,r.useCallback)((function(){b(!1),null==i||i()}),[i]);return n().createElement(h.View,{className:o.Z.com},n().createElement(h.View,{className:p?"".concat(o.Z.place):"".concat(o.Z.place," ").concat(o.Z.none)}),n().createElement(h.Image,{className:d,src:m,mode:u.mode,onClick:y,onLoad:g,onError:v}))}},3078:(e,t,a)=>{var r;function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}!function(){"use strict";var o={}.hasOwnProperty;function h(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=n(a);if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var c=h.apply(null,a);c&&e.push(c)}}else if("object"===r){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var l in a)o.call(a,l)&&a[l]&&e.push(l)}}}return e.join(" ")}e.exports?(h.default=h,e.exports=h):"object"===n(a.amdO)&&a.amdO?void 0===(r=function(){return h}.apply(t,[]))||(e.exports=r):window.classNames=h}()},3035:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r={"h5-html":"h5-html-f8ddf","h5-head":"h5-head-eba3e","h5-meta":"h5-meta-c47a1","h5-title":"h5-title-d8c15","h5-link":"h5-link-ea383","h5-style":"h5-style-b0aba","h5-script":"h5-script-f0e4d","h5-body":"h5-body-edd38","h5-p":"h5-p-a04b4","h5-div":"h5-div-a6bda","h5-layer":"h5-layer-a0351","h5-article":"h5-article-f4099","h5-aside":"h5-aside-cfd9e","h5-footer":"h5-footer-c9199","h5-header":"h5-header-c4c78","h5-hgroup":"h5-hgroup-d630d","h5-main":"h5-main-a5c7d","h5-nav":"h5-nav-f6759","h5-section":"h5-section-a1a19","h5-marquee":"h5-marquee-b928c","h5-address":"h5-address-aa78a","h5-blockquote":"h5-blockquote-a5357","h5-figcaption":"h5-figcaption-c259b","h5-figure":"h5-figure-bca7c","h5-q":"h5-q-bfb12","h5-center":"h5-center-bf9f9","h5-hr":"h5-hr-e32e2","h5-map":"h5-map-a2b1d","h5-video":"h5-video-ad5c8","h5-h1":"h5-h1-aab18","h5-h2":"h5-h2-fc11a","h5-h3":"h5-h3-ed5fa","h5-h4":"h5-h4-ed405","h5-h5":"h5-h5-bb7f0","h5-h6":"h5-h6-d8985","h5-table":"h5-table-b07ce","h5-thead":"h5-thead-ce2ff","h5-tbody":"h5-tbody-f92b2","h5-tfoot":"h5-tfoot-dfc79","h5-tr":"h5-tr-ba524","h5-col":"h5-col-ef4b5","h5-colgroup":"h5-colgroup-d7906","h5-td":"h5-td-d818e","h5-th":"h5-th-c0fef","h5-caption":"h5-caption-d50ac","h5-ul":"h5-ul-dfe34","h5-menu":"h5-menu-b4175","h5-dir":"h5-dir-aa88a","h5-ol":"h5-ol-c49e3","h5-li":"h5-li-b08ce","h5-dd":"h5-dd-c846b","h5-dl":"h5-dl-b3e9e","h5-dt":"h5-dt-cb911","h5-form":"h5-form-e33d4","h5-label":"h5-label-b635c","h5-legend":"h5-legend-f70a8","h5-fieldset":"h5-fieldset-a5360","h5-button":"h5-button-e5591","h5-input":"h5-input-ab26c","h5-textarea":"h5-textarea-a434b","h5-select":"h5-select-b82a8","h5-meter":"h5-meter-c0298","h5-progress":"h5-progress-ea215","h5-option":"h5-option-f367e","h5-datalist":"h5-datalist-c46a4","h5-area":"h5-area-d9202","h5-param":"h5-param-f38ee","h5-optgroup":"h5-optgroup-cd82d","h5-selectmenu":"h5-selectmenu-bfa57","h5-output":"h5-output-e6f46","h5-u":"h5-u-b7ec1","h5-ins":"h5-ins-d1468","h5-strong":"h5-strong-f03b4","h5-b":"h5-b-edd1f","h5-i":"h5-i-af441","h5-cite":"h5-cite-c8d6e","h5-em":"h5-em-f9d83","h5-var":"h5-var-f2330","h5-dfn":"h5-dfn-c8a06","h5-tt":"h5-tt-ec52e","h5-code":"h5-code-bcb79","h5-kbd":"h5-kbd-a7cce","h5-samp":"h5-samp-a7d92","h5-pre":"h5-pre-d77fa","h5-xmp":"h5-xmp-c746d","h5-plaintext":"h5-plaintext-b984f","h5-listing":"h5-listing-c5bc9","h5-mark":"h5-mark-a0ca5","h5-big":"h5-big-d7444","h5-small":"h5-small-e69cc","h5-s":"h5-s-d7200","h5-strike":"h5-strike-facf0","h5-del":"h5-del-bde60","h5-sub":"h5-sub-b70ad","h5-sup":"h5-sup-aca16","h5-nobr":"h5-nobr-d5349","h5-ruby":"h5-ruby-d5c14","h5-rt":"h5-rt-f299c","h5-rp":"h5-rp-a132b","h5-noframes":"h5-noframes-e3c38","h5-frameset":"h5-frameset-e13bb","h5-frame":"h5-frame-f9efc","h5-iframe":"h5-iframe-b35d7","h5-details":"h5-details-a35ce","h5-summary":"h5-summary-e6ddb","h5-template":"h5-template-dfaa5","h5-bdi":"h5-bdi-a950d","h5-bdo":"h5-bdo-efa2a","h5-dialog":"h5-dialog-ad863","h5-slot":"h5-slot-e921f"}},4763:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r={detail:"detail-c9948",head:"head-be1f9",thumbnailSlot:"thumbnailSlot-b132d",thumbnail:"thumbnail-bd5e7",meta:"meta-b1f9d",title:"title-d9af4",datetime:"datetime-ac889",text:"text-b8cfa",address:"address-dd9cb",content:"content-a43eb",bannerSlot:"bannerSlot-a8966",footerSlot:"footerSlot-ec9f6",empty:"empty-ba0ab",placeholder:"placeholder-d384c",signupBar:"signupBar-b4ab3",share:"share-af1f8",shareText:"shareText-ddedd",shareButton:"shareButton-d2491",signupButton:"signupButton-e6610",disabled:"disabled-ecfd8",userList:"userList-f4ce9",item:"item-cbc20",avatar:"avatar-d3894",nickname:"nickname-f3ca4",card:"card-e50e0",label:"label-f5819"}},5207:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r={com:"com-fe1c1",place:"place-f8f60",none:"none-e996f"}},9525:t=>{"use strict";t.exports=e},6801:e=>{"use strict";e.exports=t},359:e=>{"use strict";e.exports=a}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.amdO={},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var h={};return(()=>{"use strict";o.r(h),o.d(h,{default:()=>m});var e=o(359),t=o.n(e),a=o(6801),r=o(9525),n=o(7592),c=o(4763),l=o(3078),s=o.n(l),i=function(){return i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)};o(3035),a.options.html.transformElement=function(e){return"image"===e.nodeName&&e.setAttribute("mode","widthFix"),e};var d={id:1686135679296,活动名称:"52小时设计冲刺数字人AIGC专场",活动海报:"http://wimg.huodongxing.com/logo/202305/7702263230900/734896686487204_v2large.jpg",活动开始时间:"2023-06-07 15:11:57",活动结束时间:"2023-06-07 15:11:57",活动形式:"线下活动",活动城市:"合肥",活动地址:"黄山路602号合肥国家大学科技园路演中心",活动简介:null,活动详情:'<img src="http://cdn.huodongxing.com/file/ue/20230117/1187A09DBDF53D072B02233B51EAEFB36D/30314877413446919.jpeg" />',活动报名表:[{id:1686140424708,用户:{id:1686137057507,头像:"https://admin.alialumni.com/mfs/imgs/1686752688764/t9Uae6d5hce6xrqGUtZeNQo9WxRR4tfP-1686752688931.png",昵称:"昵称21aaaa",用户名:"用户1"},_用户:1686137057507,审核状态:null},{id:444015803838533,用户:{id:1686137057507,头像:"https://admin.alialumni.com/mfs/imgs/1686752688764/t9Uae6d5hce6xrqGUtZeNQo9WxRR4tfP-1686752688931.png",昵称:"昵称21aaaa",用户名:"用户1"},_用户:1686137057507,审核状态:"审核中"}],_活动分类:1686139623743,活动分类:{id:1686139623743,分类名称:"AIGC",分类图标:"http://cdn.huodongxing.com/Content/app/appom/202305/581170169463/294875664239464.jpg",分类简介:null},_活动开始时间:1686121917987,_活动结束时间:1686121917987,我的状态:"审核通过"};function m(a){var o,h=a.env,l=(a.data,a.inputs),m=a.outputs,u=(a.slots,(0,e.useState)(h.edit?d:{})),f=u[0],p=u[1];(0,e.useMemo)((function(){l.status((function(e){p((function(t){var a;return i(i({},t),((a={})["我的状态"]=e,a))}))})),l.value((function(e){p(e)}))}),[]);var b=(0,e.useMemo)((function(){return f["活动开始时间"]&&f["活动结束时间"]?"".concat(f["活动开始时间"]," - ").concat(f["活动结束时间"]):""}),[f]),g=(0,e.useMemo)((function(){return f["活动详情"]?decodeURIComponent(f["活动详情"]):""}),[f]),y=(0,e.useMemo)((function(){var e;return s()(((e={})[c.Z.content]=!0,e.taro_html=!0,e))}),[]),v=(0,e.useCallback)((function(){f["我的状态"]||m.onSignup({id:f.id})}),[f]),x=(0,e.useMemo)((function(){var e=f["活动报名表"]||[];return e.filter((function(e){return"审核未通过"!==e.审核状态}))}),[f["活动报名表"]]);return t().createElement(r.View,{className:c.Z.detail},t().createElement(r.View,{className:c.Z.head},t().createElement(r.View,{className:c.Z.thumbnailSlot},t().createElement(n.Z,{className:c.Z.thumbnail,skeleton:!0,mode:"aspectFill",src:f["活动海报"]})),t().createElement(r.View,{className:c.Z.meta},t().createElement(r.View,{className:c.Z.title},f["活动名称"]),t().createElement(r.View,{className:c.Z.datetime},t().createElement(r.Text,{className:c.Z.text},b)),t().createElement(r.View,{className:c.Z.address},t().createElement(r.Text,{className:c.Z.text},"".concat((f["活动城市"]||"")+(f["活动地址"]||"")))))),(null==x?void 0:x.length)?t().createElement(r.View,{className:c.Z.card},t().createElement(r.View,{className:c.Z.label},"已报名（",x.length,"）"),t().createElement(r.View,{className:c.Z.content},t().createElement(r.View,{className:c.Z.userList},x.map((function(e,a){var o,h;return t().createElement(r.View,{className:c.Z.item,key:a},t().createElement(n.Z,{skeleton:!0,className:c.Z.avatar,src:(null===(o=e["用户"])||void 0===o?void 0:o["头像"])||"https://ali-ec.static.yximgs.com/udata/pkg/eshop/chrome-plugin-upload/2023-05-30/1685451722186.3a6d5fa5deb9456f.png"}),t().createElement(r.View,{className:c.Z.nickname},(null===(h=e["用户"])||void 0===h?void 0:h["昵称"])||""))}))))):null,t().createElement(r.View,{className:c.Z.card},t().createElement(r.View,{className:c.Z.label},"活动详情"),t().createElement(r.View,{className:c.Z.content},t().createElement(r.View,{className:y,dangerouslySetInnerHTML:{__html:g}}))),t().createElement(r.View,{className:c.Z.placeholder}),t().createElement(r.View,{className:c.Z.signupBar},t().createElement(r.View,{className:c.Z.share},t().createElement(r.Button,{className:c.Z.shareButton,"open-type":"share"}),t().createElement(r.Text,{className:c.Z.shareText},"分享到微信")),t().createElement(r.View,{className:s()(c.Z.signupButton,(o={},o[c.Z.disabled]=f["我的状态"],o)),onClick:v},f["我的状态"]||"我要报名")))}})(),h})()));