!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("@tarojs/components"),require("@tarojs/taro"),require("brickd-mobile/es/field"),require("react")):"function"==typeof define&&define.amd?define(["@tarojs/components","@tarojs/taro","brickd-mobile/es/field","react"],e):"object"==typeof exports?exports.fangzhouComDef=e(require("@tarojs/components"),require("@tarojs/taro"),require("brickd-mobile/es/field"),require("react")):t.fangzhouComDef=e(t["@tarojs/components"],t["@tarojs/taro"],t["brickd-mobile/es/field"],t.React)}(self,((t,e,r,o)=>(()=>{var n={1593:(t,e,r)=>{"use strict";r(5330),r(9828)},9665:(t,e,r)=>{"use strict";r(8794)},8794:(t,e,r)=>{"use strict";r(5330),r(1593),r(8501),r(5609)},8501:(t,e,r)=>{"use strict";r(7196)},5330:(t,e,r)=>{"use strict";r(5010),r(3218)},5010:(t,e,r)=>{"use strict";r.r(e)},7112:(t,e,r)=>{var o=r(768)(r(236),"DataView");t.exports=o},4077:(t,e,r)=>{var o=r(482),n=r(6175),a=r(5359),c=r(7169),u=r(8979);function i(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}i.prototype.clear=o,i.prototype.delete=n,i.prototype.get=a,i.prototype.has=c,i.prototype.set=u,t.exports=i},6581:(t,e,r)=>{var o=r(6014),n=r(3692),a=r(1331),c=r(6046),u=r(2869);function i(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}i.prototype.clear=o,i.prototype.delete=n,i.prototype.get=a,i.prototype.has=c,i.prototype.set=u,t.exports=i},7426:(t,e,r)=>{var o=r(768)(r(236),"Map");t.exports=o},9843:(t,e,r)=>{var o=r(4824),n=r(8261),a=r(2647),c=r(4107),u=r(7692);function i(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}i.prototype.clear=o,i.prototype.delete=n,i.prototype.get=a,i.prototype.has=c,i.prototype.set=u,t.exports=i},2240:(t,e,r)=>{var o=r(768)(r(236),"Promise");t.exports=o},3138:(t,e,r)=>{var o=r(768)(r(236),"Set");t.exports=o},7850:(t,e,r)=>{var o=r(6581),n=r(9175),a=r(3253),c=r(7406),u=r(4460),i=r(8556);function s(t){var e=this.__data__=new o(t);this.size=e.size}s.prototype.clear=n,s.prototype.delete=a,s.prototype.get=c,s.prototype.has=u,s.prototype.set=i,t.exports=s},2717:(t,e,r)=>{var o=r(236).Symbol;t.exports=o},8987:(t,e,r)=>{var o=r(236).Uint8Array;t.exports=o},9182:(t,e,r)=>{var o=r(768)(r(236),"WeakMap");t.exports=o},4586:t=>{t.exports=function(t,e){for(var r=-1,o=null==t?0:t.length;++r<o&&!1!==e(t[r],r,t););return t}},1043:t=>{t.exports=function(t,e){for(var r=-1,o=null==t?0:t.length,n=0,a=[];++r<o;){var c=t[r];e(c,r,t)&&(a[n++]=c)}return a}},3005:(t,e,r)=>{var o=r(7875),n=r(2864),a=r(1389),c=r(7049),u=r(3570),i=r(6302),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=a(t),p=!r&&n(t),l=!r&&!p&&c(t),f=!r&&!p&&!l&&i(t),y=r||p||l||f,b=y?o(t.length,String):[],v=b.length;for(var m in t)!e&&!s.call(t,m)||y&&("length"==m||l&&("offset"==m||"parent"==m)||f&&("buffer"==m||"byteLength"==m||"byteOffset"==m)||u(m,v))||b.push(m);return b}},2589:t=>{t.exports=function(t,e){for(var r=-1,o=e.length,n=t.length;++r<o;)t[n+r]=e[r];return t}},4694:(t,e,r)=>{var o=r(3546),n=r(9971),a=Object.prototype.hasOwnProperty;t.exports=function(t,e,r){var c=t[e];a.call(t,e)&&n(c,r)&&(void 0!==r||e in t)||o(t,e,r)}},6001:(t,e,r)=>{var o=r(9971);t.exports=function(t,e){for(var r=t.length;r--;)if(o(t[r][0],e))return r;return-1}},3930:(t,e,r)=>{var o=r(5459),n=r(8341);t.exports=function(t,e){return t&&o(e,n(e),t)}},4396:(t,e,r)=>{var o=r(5459),n=r(6520);t.exports=function(t,e){return t&&o(e,n(e),t)}},3546:(t,e,r)=>{var o=r(4406);t.exports=function(t,e,r){"__proto__"==e&&o?o(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}},5639:(t,e,r)=>{var o=r(7850),n=r(4586),a=r(4694),c=r(3930),u=r(4396),i=r(8395),s=r(923),p=r(3777),l=r(5870),f=r(7032),y=r(8526),b=r(9744),v=r(4950),m=r(9052),h=r(3536),d=r(1389),x=r(7049),j=r(5815),_=r(238),g=r(2777),S=r(8341),w=r(6520),O="[object Arguments]",A="[object Function]",P="[object Object]",k={};k[O]=k["[object Array]"]=k["[object ArrayBuffer]"]=k["[object DataView]"]=k["[object Boolean]"]=k["[object Date]"]=k["[object Float32Array]"]=k["[object Float64Array]"]=k["[object Int8Array]"]=k["[object Int16Array]"]=k["[object Int32Array]"]=k["[object Map]"]=k["[object Number]"]=k[P]=k["[object RegExp]"]=k["[object Set]"]=k["[object String]"]=k["[object Symbol]"]=k["[object Uint8Array]"]=k["[object Uint8ClampedArray]"]=k["[object Uint16Array]"]=k["[object Uint32Array]"]=!0,k["[object Error]"]=k[A]=k["[object WeakMap]"]=!1,t.exports=function t(e,r,z,C,E,F){var I,M=1&r,T=2&r,U=4&r;if(z&&(I=E?z(e,C,E,F):z(e)),void 0!==I)return I;if(!_(e))return e;var q=d(e);if(q){if(I=v(e),!M)return s(e,I)}else{var V=b(e),N=V==A||"[object GeneratorFunction]"==V;if(x(e))return i(e,M);if(V==P||V==O||N&&!E){if(I=T||N?{}:h(e),!M)return T?l(e,u(I,e)):p(e,c(I,e))}else{if(!k[V])return E?e:{};I=m(e,V,M)}}F||(F=new o);var B=F.get(e);if(B)return B;F.set(e,I),g(e)?e.forEach((function(o){I.add(t(o,r,z,o,e,F))})):j(e)&&e.forEach((function(o,n){I.set(n,t(o,r,z,n,e,F))}));var D=q?void 0:(U?T?y:f:T?w:S)(e);return n(D||e,(function(o,n){D&&(o=e[n=o]),a(I,n,t(o,r,z,n,e,F))})),I}},3230:(t,e,r)=>{var o=r(238),n=Object.create,a=function(){function t(){}return function(e){if(!o(e))return{};if(n)return n(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();t.exports=a},7413:(t,e,r)=>{var o=r(2589),n=r(1389);t.exports=function(t,e,r){var a=e(t);return n(t)?a:o(a,r(t))}},7556:(t,e,r)=>{var o=r(2717),n=r(3267),a=r(8592),c=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?n(t):a(t)}},1538:(t,e,r)=>{var o=r(7556),n=r(5126);t.exports=function(t){return n(t)&&"[object Arguments]"==o(t)}},9763:(t,e,r)=>{var o=r(9744),n=r(5126);t.exports=function(t){return n(t)&&"[object Map]"==o(t)}},9187:(t,e,r)=>{var o=r(6525),n=r(4453),a=r(238),c=r(2671),u=/^\[object .+?Constructor\]$/,i=Function.prototype,s=Object.prototype,p=i.toString,l=s.hasOwnProperty,f=RegExp("^"+p.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||n(t))&&(o(t)?f:u).test(c(t))}},5043:(t,e,r)=>{var o=r(9744),n=r(5126);t.exports=function(t){return n(t)&&"[object Set]"==o(t)}},7638:(t,e,r)=>{var o=r(7556),n=r(3229),a=r(5126),c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&n(t.length)&&!!c[o(t)]}},1502:(t,e,r)=>{var o=r(1393),n=r(7696),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!o(t))return n(t);var e=[];for(var r in Object(t))a.call(t,r)&&"constructor"!=r&&e.push(r);return e}},803:(t,e,r)=>{var o=r(238),n=r(1393),a=r(6044),c=Object.prototype.hasOwnProperty;t.exports=function(t){if(!o(t))return a(t);var e=n(t),r=[];for(var u in t)("constructor"!=u||!e&&c.call(t,u))&&r.push(u);return r}},7875:t=>{t.exports=function(t,e){for(var r=-1,o=Array(t);++r<t;)o[r]=e(r);return o}},6741:t=>{t.exports=function(t){return function(e){return t(e)}}},6631:(t,e,r)=>{var o=r(8987);t.exports=function(t){var e=new t.constructor(t.byteLength);return new o(e).set(new o(t)),e}},8395:(t,e,r)=>{function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}t=r.nmd(t);var n=r(236),a="object"==o(e)&&e&&!e.nodeType&&e,c=a&&"object"==o(t)&&t&&!t.nodeType&&t,u=c&&c.exports===a?n.Buffer:void 0,i=u?u.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,o=i?i(r):new t.constructor(r);return t.copy(o),o}},4806:(t,e,r)=>{var o=r(6631);t.exports=function(t,e){var r=e?o(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}},787:t=>{var e=/\w*$/;t.exports=function(t){var r=new t.constructor(t.source,e.exec(t));return r.lastIndex=t.lastIndex,r}},4707:(t,e,r)=>{var o=r(2717),n=o?o.prototype:void 0,a=n?n.valueOf:void 0;t.exports=function(t){return a?Object(a.call(t)):{}}},3254:(t,e,r)=>{var o=r(6631);t.exports=function(t,e){var r=e?o(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}},923:t=>{t.exports=function(t,e){var r=-1,o=t.length;for(e||(e=Array(o));++r<o;)e[r]=t[r];return e}},5459:(t,e,r)=>{var o=r(4694),n=r(3546);t.exports=function(t,e,r,a){var c=!r;r||(r={});for(var u=-1,i=e.length;++u<i;){var s=e[u],p=a?a(r[s],t[s],s,r,t):void 0;void 0===p&&(p=t[s]),c?n(r,s,p):o(r,s,p)}return r}},3777:(t,e,r)=>{var o=r(5459),n=r(9796);t.exports=function(t,e){return o(t,n(t),e)}},5870:(t,e,r)=>{var o=r(5459),n=r(1775);t.exports=function(t,e){return o(t,n(t),e)}},8536:(t,e,r)=>{var o=r(236)["__core-js_shared__"];t.exports=o},4406:(t,e,r)=>{var o=r(768),n=function(){try{var t=o(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=n},4222:(t,e,r)=>{function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var n="object"==(void 0===r.g?"undefined":o(r.g))&&r.g&&r.g.Object===Object&&r.g;t.exports=n},7032:(t,e,r)=>{var o=r(7413),n=r(9796),a=r(8341);t.exports=function(t){return o(t,a,n)}},8526:(t,e,r)=>{var o=r(7413),n=r(1775),a=r(6520);t.exports=function(t){return o(t,a,n)}},9554:(t,e,r)=>{var o=r(2421);t.exports=function(t,e){var r=t.__data__;return o(e)?r["string"==typeof e?"string":"hash"]:r.map}},768:(t,e,r)=>{var o=r(9187),n=r(6177);t.exports=function(t,e){var r=n(t,e);return o(r)?r:void 0}},6279:(t,e,r)=>{var o=r(3731)(Object.getPrototypeOf,Object);t.exports=o},3267:(t,e,r)=>{var o=r(2717),n=Object.prototype,a=n.hasOwnProperty,c=n.toString,u=o?o.toStringTag:void 0;t.exports=function(t){var e=a.call(t,u),r=t[u];try{t[u]=void 0;var o=!0}catch(t){}var n=c.call(t);return o&&(e?t[u]=r:delete t[u]),n}},9796:(t,e,r)=>{var o=r(1043),n=r(8142),a=Object.prototype.propertyIsEnumerable,c=Object.getOwnPropertySymbols,u=c?function(t){return null==t?[]:(t=Object(t),o(c(t),(function(e){return a.call(t,e)})))}:n;t.exports=u},1775:(t,e,r)=>{var o=r(2589),n=r(6279),a=r(9796),c=r(8142),u=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)o(e,a(t)),t=n(t);return e}:c;t.exports=u},9744:(t,e,r)=>{var o=r(7112),n=r(7426),a=r(2240),c=r(3138),u=r(9182),i=r(7556),s=r(2671),p="[object Map]",l="[object Promise]",f="[object Set]",y="[object WeakMap]",b="[object DataView]",v=s(o),m=s(n),h=s(a),d=s(c),x=s(u),j=i;(o&&j(new o(new ArrayBuffer(1)))!=b||n&&j(new n)!=p||a&&j(a.resolve())!=l||c&&j(new c)!=f||u&&j(new u)!=y)&&(j=function(t){var e=i(t),r="[object Object]"==e?t.constructor:void 0,o=r?s(r):"";if(o)switch(o){case v:return b;case m:return p;case h:return l;case d:return f;case x:return y}return e}),t.exports=j},6177:t=>{t.exports=function(t,e){return null==t?void 0:t[e]}},482:(t,e,r)=>{var o=r(8414);t.exports=function(){this.__data__=o?o(null):{},this.size=0}},6175:t=>{t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},5359:(t,e,r)=>{var o=r(8414),n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(o){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return n.call(e,t)?e[t]:void 0}},7169:(t,e,r)=>{var o=r(8414),n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return o?void 0!==e[t]:n.call(e,t)}},8979:(t,e,r)=>{var o=r(8414);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=o&&void 0===e?"__lodash_hash_undefined__":e,this}},4950:t=>{var e=Object.prototype.hasOwnProperty;t.exports=function(t){var r=t.length,o=new t.constructor(r);return r&&"string"==typeof t[0]&&e.call(t,"index")&&(o.index=t.index,o.input=t.input),o}},9052:(t,e,r)=>{var o=r(6631),n=r(4806),a=r(787),c=r(4707),u=r(3254);t.exports=function(t,e,r){var i=t.constructor;switch(e){case"[object ArrayBuffer]":return o(t);case"[object Boolean]":case"[object Date]":return new i(+t);case"[object DataView]":return n(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return u(t,r);case"[object Map]":case"[object Set]":return new i;case"[object Number]":case"[object String]":return new i(t);case"[object RegExp]":return a(t);case"[object Symbol]":return c(t)}}},3536:(t,e,r)=>{var o=r(3230),n=r(6279),a=r(1393);t.exports=function(t){return"function"!=typeof t.constructor||a(t)?{}:o(n(t))}},3570:t=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,o){var n=e(t);return!!(o=null==o?9007199254740991:o)&&("number"==n||"symbol"!=n&&r.test(t))&&t>-1&&t%1==0&&t<o}},2421:t=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}t.exports=function(t){var r=e(t);return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}},4453:(t,e,r)=>{var o,n=r(8536),a=(o=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";t.exports=function(t){return!!a&&a in t}},1393:t=>{var e=Object.prototype;t.exports=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||e)}},6014:t=>{t.exports=function(){this.__data__=[],this.size=0}},3692:(t,e,r)=>{var o=r(6001),n=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=o(e,t);return!(r<0||(r==e.length-1?e.pop():n.call(e,r,1),--this.size,0))}},1331:(t,e,r)=>{var o=r(6001);t.exports=function(t){var e=this.__data__,r=o(e,t);return r<0?void 0:e[r][1]}},6046:(t,e,r)=>{var o=r(6001);t.exports=function(t){return o(this.__data__,t)>-1}},2869:(t,e,r)=>{var o=r(6001);t.exports=function(t,e){var r=this.__data__,n=o(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}},4824:(t,e,r)=>{var o=r(4077),n=r(6581),a=r(7426);t.exports=function(){this.size=0,this.__data__={hash:new o,map:new(a||n),string:new o}}},8261:(t,e,r)=>{var o=r(9554);t.exports=function(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}},2647:(t,e,r)=>{var o=r(9554);t.exports=function(t){return o(this,t).get(t)}},4107:(t,e,r)=>{var o=r(9554);t.exports=function(t){return o(this,t).has(t)}},7692:(t,e,r)=>{var o=r(9554);t.exports=function(t,e){var r=o(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}},8414:(t,e,r)=>{var o=r(768)(Object,"create");t.exports=o},7696:(t,e,r)=>{var o=r(3731)(Object.keys,Object);t.exports=o},6044:t=>{t.exports=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}},6806:(t,e,r)=>{function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}t=r.nmd(t);var n=r(4222),a="object"==o(e)&&e&&!e.nodeType&&e,c=a&&"object"==o(t)&&t&&!t.nodeType&&t,u=c&&c.exports===a&&n.process,i=function(){try{return c&&c.require&&c.require("util").types||u&&u.binding&&u.binding("util")}catch(t){}}();t.exports=i},8592:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},3731:t=>{t.exports=function(t,e){return function(r){return t(e(r))}}},236:(t,e,r)=>{function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var n=r(4222),a="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,c=n||a||Function("return this")();t.exports=c},9175:(t,e,r)=>{var o=r(6581);t.exports=function(){this.__data__=new o,this.size=0}},3253:t=>{t.exports=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}},7406:t=>{t.exports=function(t){return this.__data__.get(t)}},4460:t=>{t.exports=function(t){return this.__data__.has(t)}},8556:(t,e,r)=>{var o=r(6581),n=r(7426),a=r(9843);t.exports=function(t,e){var r=this.__data__;if(r instanceof o){var c=r.__data__;if(!n||c.length<199)return c.push([t,e]),this.size=++r.size,this;r=this.__data__=new a(c)}return r.set(t,e),this.size=r.size,this}},2671:t=>{var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},2752:(t,e,r)=>{var o=r(5639);t.exports=function(t){return o(t,5)}},9971:t=>{t.exports=function(t,e){return t===e||t!=t&&e!=e}},2864:(t,e,r)=>{var o=r(1538),n=r(5126),a=Object.prototype,c=a.hasOwnProperty,u=a.propertyIsEnumerable,i=o(function(){return arguments}())?o:function(t){return n(t)&&c.call(t,"callee")&&!u.call(t,"callee")};t.exports=i},1389:t=>{var e=Array.isArray;t.exports=e},5329:(t,e,r)=>{var o=r(6525),n=r(3229);t.exports=function(t){return null!=t&&n(t.length)&&!o(t)}},7049:(t,e,r)=>{function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}t=r.nmd(t);var n=r(236),a=r(8636),c="object"==o(e)&&e&&!e.nodeType&&e,u=c&&"object"==o(t)&&t&&!t.nodeType&&t,i=u&&u.exports===c?n.Buffer:void 0,s=(i?i.isBuffer:void 0)||a;t.exports=s},6525:(t,e,r)=>{var o=r(7556),n=r(238);t.exports=function(t){if(!n(t))return!1;var e=o(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},3229:t=>{t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},5815:(t,e,r)=>{var o=r(9763),n=r(6741),a=r(6806),c=a&&a.isMap,u=c?n(c):o;t.exports=u},238:t=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}t.exports=function(t){var r=e(t);return null!=t&&("object"==r||"function"==r)}},5126:t=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}t.exports=function(t){return null!=t&&"object"==e(t)}},2777:(t,e,r)=>{var o=r(5043),n=r(6741),a=r(6806),c=a&&a.isSet,u=c?n(c):o;t.exports=u},6302:(t,e,r)=>{var o=r(7638),n=r(6741),a=r(6806),c=a&&a.isTypedArray,u=c?n(c):o;t.exports=u},8341:(t,e,r)=>{var o=r(3005),n=r(1502),a=r(5329);t.exports=function(t){return a(t)?o(t):n(t)}},6520:(t,e,r)=>{var o=r(3005),n=r(803),a=r(5329);t.exports=function(t){return a(t)?o(t,!0):n(t)}},8142:t=>{t.exports=function(){return[]}},8636:t=>{t.exports=function(){return!1}},2810:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});const o={value:"value-bc707",uploader:"uploader-e5cb1",item:"item-c8e62",thumbnail:"thumbnail-baad0",remove:"remove-ffe84",placeholder:"placeholder-b6ca9",text:"text-c5e7b"}},9828:(t,e,r)=>{"use strict";r.r(e)},5609:(t,e,r)=>{"use strict";r.r(e)},7196:(t,e,r)=>{"use strict";r.r(e)},3218:(t,e,r)=>{"use strict";r.r(e)},9525:e=>{"use strict";e.exports=t},6801:t=>{"use strict";t.exports=e},2973:t=>{"use strict";t.exports=r},359:t=>{"use strict";t.exports=o}},a={};function c(t){var e=a[t];if(void 0!==e)return e.exports;var r=a[t]={id:t,loaded:!1,exports:{}};return n[t](r,r.exports,c),r.loaded=!0,r.exports}c.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return c.d(e,{a:e}),e},c.d=(t,e)=>{for(var r in e)c.o(e,r)&&!c.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),c.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var u={};return(()=>{"use strict";c.r(u),c.d(u,{default:()=>v}),c(9665);var t=c(2973),e=c.n(t),r=c(359),o=c.n(r),n=c(9525),a=c(2810),i=c(6801),s=c(2752),p=c.n(s),l=c(238),f=c.n(l),y=function(t,e,r,o){return new(r||(r=Promise))((function(n,a){function c(t){try{i(o.next(t))}catch(t){a(t)}}function u(t){try{i(o.throw(t))}catch(t){a(t)}}function i(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(c,u)}i((o=o.apply(t,e||[])).next())}))},b=function(t,e){var r,o,n,a,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(i){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(c=0)),c;)try{if(r=1,o&&(n=2&u[0]?o.return:u[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,u[1])).done)return n;switch(o=0,n&&(u=[2&u[0],n.value]),u[0]){case 0:case 1:n=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,o=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((n=(n=c.trys).length>0&&n[n.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!n||u[1]>n[0]&&u[1]<n[3])){c.label=u[1];break}if(6===u[0]&&c.label<n[1]){c.label=n[1],n=u;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(u);break}n[2]&&c.ops.pop(),c.trys.pop();continue}u=e.call(t,c)}catch(t){u=[6,t],o=0}finally{r=n=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}};function v(t){var c=this,u=t.env,s=t.data,l=t.inputs,v=t.outputs;t.slots,(0,r.useEffect)((function(){l.setValue((function(t){switch(!0){case"string"==typeof t:s.value=[t],v.onChange({name:s.name,value:t});break;case Array.isArray(t):s.value=t,v.onChange({name:s.name,value:t});break;case f()(t):var e=t[s.name];"string"==typeof e?s.value=[t[s.name]]:Array.isArray(e)&&(s.value=t[s.name]),v.onChange({name:s.name,value:t[s.name]})}}))}),[]);var m=(0,r.useCallback)((function(t){var e=t;1==s.maxCount&&s.useValueString&&(e=t[0]),v.onChange({name:s.name,value:e})}),[s.name,s.maxCount,s.useValueString]),h=(0,r.useCallback)((function(t,e){t.stopPropagation(),i.previewImage({urls:[e]})}),[]),d=(0,r.useCallback)((function(t,e){t.stopPropagation();var r=s.value.filter((function(t,r){return r!==e}));s.value=r,m(r)}),[s.value]),x=(0,r.useCallback)((function(){i.chooseImage({count:s.maxCount-s.value.length,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){return y(c,void 0,void 0,(function(){return b(this,(function(e){return u.fileUploader(t.tempFiles[0]).then((function(t){var e=p()(s.value);e.unshift(t),s.value=e,m(e)})),[2]}))}))}})}),[s.value]),j=(0,r.useMemo)((function(){return s.value.length>=s.maxCount?null:o().createElement(n.View,{className:a.Z.uploader,onClick:x})}),[s.value,s.maxCount]),_=(0,r.useMemo)((function(){return s.value.map((function(t,e){return o().createElement(n.View,{className:a.Z.item,onClick:function(e){h(e,t)}},o().createElement(n.Image,{className:a.Z.thumbnail,mode:"aspectFill",src:t}),o().createElement(n.View,{className:a.Z.remove,onClick:function(t){d(t,e)}}))}))}),[s.value]),g=(0,r.useMemo)((function(){return s.placeholder?o().createElement(n.View,{className:a.Z.placeholder,onClick:function(t){h(t,s.placeholder)}},o().createElement(n.Image,{className:a.Z.thumbnail,mode:"aspectFill",src:s.placeholder}),o().createElement(n.View,{className:a.Z.text},"示例图片")):null}),[s.placeholder]);return o().createElement(e(),{label:s.label,name:s.name,value:s.value,required:s.required,rules:[{required:s.required,message:"请上传".concat(s.label)}]},o().createElement(n.View,{className:a.Z.value},j,_,g))}})(),u})()));