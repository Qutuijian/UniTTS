(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0906":function(t,e,n){"use strict";n.r(e);var o=n("4ca0"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},"0d64":function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("5fa4").default)}))},"0de9":function(t,e,n){"use strict";function o(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){return"string"===typeof __channelId__&&__channelId__}function i(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];console[t].apply(console,n)}function c(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.shift();if(r())return e.push(e.pop().replace("at ","uni-app:///")),console[i].apply(console,e);var c=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(r){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=o(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),a="";if(c.length>1){var u=c.pop();a=c.join("---COMMA---"),0===u.indexOf(" at ")?a+=u:a+="---COMMA---"+u}else a=c[0];console[i](a)}n.r(e),n.d(e,"log",(function(){return i})),n.d(e,"default",(function(){return c}))},2767:function(t,e,n){"use strict";var o,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[n("p"),n("button",{staticClass:t._$s(2,"sc","title"),attrs:{_i:2},on:{click:t.init}}),n("button",{staticClass:t._$s(3,"sc","title"),attrs:{_i:3},on:{click:t.play}}),n("button",{staticClass:t._$s(4,"sc","title"),attrs:{_i:4},on:{click:t.setEngines}}),n("button",{staticClass:t._$s(5,"sc","title"),attrs:{_i:5},on:{click:t.saveFile}}),n("button",{staticClass:t._$s(6,"sc","title"),attrs:{_i:6},on:{click:t.setVoice}})])},i=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}))},"4ca0":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.requireNativePlugin("Fvv-UniTTS"),o={data:function(){return{}},onLoad:function(){},methods:{init:function(){n.init((function(e){t("log",e," at pages/index/index.vue:26")})),n.onStart((function(e){t("log","onStart:"+e," at pages/index/index.vue:30")})),n.onDone((function(e){t("log","onDone:"+e," at pages/index/index.vue:34")})),n.onError((function(e){t("log","onError:"+e," at pages/index/index.vue:38")}))},play:function(){n.speak({text:"hello f v v",id:1})},setEngines:function(){var e="com.iflytek.speechcloud";n.getInstallTTS((function(o){null==o||o.length<=0||(JSON.stringify(o).indexOf(e)<0?t("log","\u672a\u5b89\u88c5\u8be5\u8bed\u97f3\u5f15\u64ce"," at pages/index/index.vue:56"):(t("log","set engine : "+n.setEngine(e)," at pages/index/index.vue:59"),n.speak({text:"\u8bbe\u7f6e\u6210\u529f",id:2})))}))},saveFile:function(){n.saveAudioFile({text:"hello",id:3,path:"/sdcard/test/1.wav"})},setVoice:function(){n.setPitch(100),n.setSpeechRate(100)}}};e.default=o}).call(this,n("0de9")["default"])},"5fa4":function(t,e,n){"use strict";n.r(e);var o=n("2767"),r=n("0906");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var c,a=n("f0c5"),u=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=u.exports},"8bbf":function(t,e){t.exports=Vue},"94f1":function(t,e,n){"use strict";n("0d64");var o=i(n("8bbf")),r=i(n("a601"));function i(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}o.default.config.productionTip=!1,r.default.mpType="app";var s=new o.default(a({},r.default));s.$mount()},a601:function(t,e,n){"use strict";n.r(e);var o=n("cf7c");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var i,c,a,u,s=n("f0c5"),f=Object(s["a"])(o["default"],i,c,!1,null,null,null,!1,a,u);e["default"]=f.exports},c4af:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},cf7c:function(t,e,n){"use strict";n.r(e);var o=n("c4af"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},f0c5:function(t,e,n){"use strict";function o(t,e,n,o,r,i,c,a,u,s){var f,l="function"===typeof t?t.options:t;if(u){l.components||(l.components={});var p=Object.prototype.hasOwnProperty;for(var d in u)p.call(u,d)&&!p.call(l.components,d)&&(l.components[d]=u[d])}if(s&&((s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(l.mixins||(l.mixins=[])).push(s)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),c?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},l._ssrRegister=f):r&&(f=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),f)if(l.functional){l._injectStyles=f;var v=l.render;l.render=function(t,e){return f.call(e),v(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return o}))}},[["94f1","app-config"]]]);