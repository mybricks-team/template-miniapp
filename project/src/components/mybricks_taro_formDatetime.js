!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("@taroify/icons"),require("@tarojs/components"),require("brickd-mobile/es/datetime-picker"),require("brickd-mobile/es/input"),require("brickd-mobile/es/popup"),require("react")):"function"==typeof define&&define.amd?define(["@taroify/icons","@tarojs/components","brickd-mobile/es/datetime-picker","brickd-mobile/es/input","brickd-mobile/es/popup","react"],e):"object"==typeof exports?exports.fangzhouComDef=e(require("@taroify/icons"),require("@tarojs/components"),require("brickd-mobile/es/datetime-picker"),require("brickd-mobile/es/input"),require("brickd-mobile/es/popup"),require("react")):t.fangzhouComDef=e(t["@taroify/icons"],t["@tarojs/components"],t["brickd-mobile/es/datetime-picker"],t["brickd-mobile/es/input"],t["brickd-mobile/es/popup"],t.React)}(self,((t,e,n,r,i,s)=>(()=>{var u={7234:(t,e,n)=>{"use strict";function r(t){return function(e){return Object.prototype.toString.call(e)==="[object ".concat(t,"]")}}function i(t){return null==t||""===t}function s(t){return r("Number")(t)}function u(t){return r("String")(t)}function o(t){return r("Object")(t)}n.d(e,{HD:()=>u,Kn:()=>o,hj:()=>s,xb:()=>i})},2010:(t,e,n)=>{"use strict";n.r(e)},7977:(t,e,n)=>{"use strict";n(3282),n(8018),n(8434)},7325:(t,e,n)=>{"use strict";n(3282),n(9664)},2606:(t,e,n)=>{"use strict";n(8150)},7151:(t,e,n)=>{"use strict";n(3282),n(7)},9664:(t,e,n)=>{"use strict";n(3282),n(7151),n(8531)},7278:(t,e,n)=>{"use strict";n(3282),n(8018),n(7977),n(3685)},3282:(t,e,n)=>{"use strict";n(2010),n(5755)},8018:(t,e,n)=>{"use strict";n(3282),n(5980)},1849:function(t,e,n){var r,i,s;function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}s=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",o="day",a="week",c="month",l="quarter",f="year",d="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:a,d:o,D:d,h:s,m:i,s:r,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",D={};D[b]=y;var M=function(t){return t instanceof x},g=function t(e,n,r){var i;if(!e)return b;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var o=e.name;D[o]=e,i=o}return!r&&i&&(b=i),i||!r&&b},S=function(t,e){if(M(t))return t.clone();var n="object"==u(e)?e:{};return n.date=t,n.args=arguments,new x(n)},w=v;w.l=g,w.i=M,w.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function u(t){this.$L=g(t.locale,null,!0),this.parse(t)}var y=u.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return S(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<S(t)},y.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,u=!!w.u(e)||e,l=w.p(t),h=function(t,e){var r=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?r:r.endOf(o)},m=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,y=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case f:return u?h(1,0):h(31,11);case c:return u?h(1,y):h(0,y+1);case a:var b=this.$locale().weekStart||0,D=(p<b?p+7:p)-b;return h(u?$-D:$+(6-D),y);case o:case d:return m(v+"Hours",0);case s:return m(v+"Minutes",1);case i:return m(v+"Seconds",2);case r:return m(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var u,a=w.p(t),l="set"+(this.$u?"UTC":""),h=(u={},u[o]=l+"Date",u[d]=l+"Date",u[c]=l+"Month",u[f]=l+"FullYear",u[s]=l+"Hours",u[i]=l+"Minutes",u[r]=l+"Seconds",u[n]=l+"Milliseconds",u)[a],m=a===o?this.$D+(e-this.$W):e;if(a===c||a===f){var p=this.clone().set(d,1);p.$d[h](m),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[w.p(t)]()},y.add=function(n,u){var l,d=this;n=Number(n);var h=w.p(u),m=function(t){var e=S(d);return w.w(e.date(e.date()+Math.round(t*n)),d)};if(h===c)return this.set(c,this.$M+n);if(h===f)return this.set(f,this.$y+n);if(h===o)return m(1);if(h===a)return m(7);var p=(l={},l[i]=t,l[s]=e,l[r]=1e3,l)[h]||1,y=this.$d.getTime()+n*p;return w.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),s=this.$H,u=this.$m,o=this.$M,a=n.weekdays,c=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},f=function(t){return w.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:w.s(this.$y,4,"0"),M:o+1,MM:w.s(o+1,2,"0"),MMM:l(n.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,a,2),ddd:l(n.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:w.s(s,2,"0"),h:f(1),hh:f(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:w.s(u,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||m[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,u,d){var h,m=w.p(u),p=S(n),y=(p.utcOffset()-this.utcOffset())*t,$=this-p,v=w.m(this,p);return v=(h={},h[f]=v/12,h[c]=v,h[l]=v/3,h[a]=($-y)/6048e5,h[o]=($-y)/864e5,h[s]=$/e,h[i]=$/t,h[r]=$/1e3,h)[m]||$,d?v:w.a(v)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return D[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=g(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},u}(),O=x.prototype;return S.prototype=O,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",o],["$M",c],["$y",f],["$D",d]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,x,S),t.$i=!0),S},S.locale=g,S.isDayjs=M,S.unix=function(t){return S(1e3*t)},S.en=D[b],S.Ls=D,S.p={},S},"object"==u(e)?t.exports=s():void 0===(i="function"==typeof(r=s)?r.call(e,n,e,t):r)||(t.exports=i)},4200:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r={select:"select-bbc5f"}},8434:(t,e,n)=>{"use strict";n.r(e)},8150:(t,e,n)=>{"use strict";n.r(e)},7:(t,e,n)=>{"use strict";n.r(e)},8531:(t,e,n)=>{"use strict";n.r(e)},3685:(t,e,n)=>{"use strict";n.r(e)},5755:(t,e,n)=>{"use strict";n.r(e)},5980:(t,e,n)=>{"use strict";n.r(e)},7106:e=>{"use strict";e.exports=t},9525:t=>{"use strict";t.exports=e},1121:t=>{"use strict";t.exports=n},5402:t=>{"use strict";t.exports=r},4529:t=>{"use strict";t.exports=i},359:t=>{"use strict";t.exports=s}},o={};function a(t){var e=o[t];if(void 0!==e)return e.exports;var n=o[t]={exports:{}};return u[t].call(n.exports,n,n.exports,a),n.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var c={};return(()=>{"use strict";a.r(c),a.d(c,{default:()=>b}),a(7325);var t=a(1121),e=a.n(t),n=(a(7278),a(4529)),r=a.n(n),i=(a(2606),a(5402)),s=a.n(i),u=a(359),o=a.n(u),l=a(9525),f=a(7106),d=a(7234),h=a(1849),m=a.n(h),p=a(4200),y={date:"YYYY-MM-DD",time:"HH:mm:ss","year-month":"YYYY-MM","month-day":"MM-DD","date-hour":"YYYY-MM-DD HH","date-minute":"YYYY-MM-DD HH:mm","hour-minute":"HH:mm"},$=new Date((new Date).setFullYear((new Date).getFullYear()-10)),v=new Date((new Date).setFullYear((new Date).getFullYear()+10));function b(t){var n=t.env,i=t.data,a=t.inputs,c=t.outputs,h=(t.slots,t.parentSlot),b=(0,u.useState)(new Date),D=b[0],M=b[1],g=(0,u.useState)(!1),S=g[0],w=g[1];(0,u.useEffect)((function(){a.setValue((function(t){switch(!0){case(0,d.HD)(t):i.value=m()(t).valueOf();break;case(0,d.hj)(t):i.value=t;break;case t instanceof Date:i.value=t.valueOf();break;case(0,d.Kn)(t):var e=t[i.name];switch(!0){case"string"==typeof e:e=m()(e).valueOf();break;case"number"==typeof e:break;case e instanceof Date:e=e.valueOf()}i.value=e}}))}),[]);var x=(0,u.useMemo)((function(){return i.value?m()(i.value).format(y[i.type]):""}),[i.value,i.type]),O=(0,u.useCallback)((function(){n.runtime&&(M(i.value?new Date(i.value):new Date),w(!0))}),[n.runtime,i.value]),Y=(0,u.useCallback)((function(){w(!1)}),[]),k=(0,u.useCallback)((function(e){var n,r,s=e.valueOf();i.value=s,w(!1),null===(r=null==h?void 0:(n=h._inputs).onChange)||void 0===r||r.call(n,{id:t.id,name:t.name,value:s}),c.onChange(s)}),[]),_=(0,u.useMemo)((function(){return{min:(0,d.xb)(i.min)?$:new Date(i.min),max:(0,d.xb)(i.max)?v:new Date(i.max)}}),[i.min,i.max]);return o().createElement(o().Fragment,null,o().createElement(l.View,{className:p.Z.select,onClick:O},o().createElement(s(),{align:"right",readonly:!0,placeholder:i.placeholder,value:x,style:{flex:1}}),o().createElement(f.ArrowRight,null)),o().createElement(r(),{open:S,rounded:!0,placement:"bottom",onClose:Y},o().createElement(e(),{type:i.type,value:D,min:_.min,max:_.max,onCancel:Y,onConfirm:k},o().createElement(e().Toolbar,null,o().createElement(e().Button,null,"取消"),o().createElement(e().Button,null,"确认")))))}})(),c})()));