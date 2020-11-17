/*!
 * Vue-intercom v0.0.5
 * (c) 2019-2020 Mathieu Stanowski
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],e):e((t=t||self).VueIntercom={},t.Vue)}(this,(function(t,e){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;var r=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t};var n=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n};var o=function(t){if(Array.isArray(t))return n(t)};var i=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)};var a=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}};var c=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var s=function(t){return o(t)||i(t)||a(t)||c()};function u(t,e){return t(e={exports:{}},e.exports),e.exports}var f=u((function(t){var e=function(t){var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function l(){}function h(){}function p(){}var v={};v[o]=function(){return this};var y=Object.getPrototypeOf,d=y&&y(y(O([])));d&&d!==e&&r.call(d,o)&&(v=d);var m=p.prototype=l.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return h.prototype=m.constructor=p,p.constructor=h,h.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new g(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),c(m,a,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}));function l(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}var h=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){l(i,n,o,a,c,"next",t)}function c(t){l(i,n,o,a,c,"throw",t)}a(void 0)}))}};var p=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var y=function(t,e,r){return e&&v(t.prototype,e),r&&v(t,r),t},d=u((function(t){function e(r,n){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(r,n)}t.exports=e}));var m=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)},w=u((function(t){function e(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(r)}t.exports=e}));var g=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};var b=function(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?g(t):e},_=u((function(t){function e(r){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(r)}t.exports=e}));function x(){}function L(){L.init.call(this)}function O(t){return void 0===t._maxListeners?L.defaultMaxListeners:t._maxListeners}function E(t,e,r){if(e)t.call(r);else for(var n=t.length,o=T(t,n),i=0;i<n;++i)o[i].call(r)}function j(t,e,r,n){if(e)t.call(r,n);else for(var o=t.length,i=T(t,o),a=0;a<o;++a)i[a].call(r,n)}function k(t,e,r,n,o){if(e)t.call(r,n,o);else for(var i=t.length,a=T(t,i),c=0;c<i;++c)a[c].call(r,n,o)}function P(t,e,r,n,o,i){if(e)t.call(r,n,o,i);else for(var a=t.length,c=T(t,a),s=0;s<a;++s)c[s].call(r,n,o,i)}function S(t,e,r,n){if(e)t.apply(r,n);else for(var o=t.length,i=T(t,o),a=0;a<o;++a)i[a].apply(r,n)}function I(t,e,r,n){var o,i,a,c;if("function"!=typeof r)throw new TypeError('"listener" argument must be a function');if((i=t._events)?(i.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),i=t._events),a=i[e]):(i=t._events=new x,t._eventsCount=0),a){if("function"==typeof a?a=i[e]=n?[r,a]:[a,r]:n?a.unshift(r):a.push(r),!a.warned&&(o=O(t))&&o>0&&a.length>o){a.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+e+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=t,s.type=e,s.count=a.length,c=s,"function"==typeof console.warn?console.warn(c):console.log(c)}}else a=i[e]=r,++t._eventsCount;return t}function C(t,e,r){var n=!1;function o(){t.removeListener(e,o),n||(n=!0,r.apply(t,arguments))}return o.listener=r,o}function A(t){var e=this._events;if(e){var r=e[t];if("function"==typeof r)return 1;if(r)return r.length}return 0}function T(t,e){for(var r=new Array(e);e--;)r[e]=t[e];return r}function N(t,e){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://widget.intercom.io/widget/".concat(t);var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(r,n),r.onload=function(){return e.emit("ready")}}function M(t,e){return!(!e||0===e.length)&&(e instanceof t||null!=e&&e.constructor===t)}function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=_(t);if(e){var o=_(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return b(this,r)}}x.prototype=Object.create(null),L.EventEmitter=L,L.usingDomains=!1,L.prototype.domain=void 0,L.prototype._events=void 0,L.prototype._maxListeners=void 0,L.defaultMaxListeners=10,L.init=function(){this.domain=null,L.usingDomains&&(void 0).active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new x,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},L.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||isNaN(t))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=t,this},L.prototype.getMaxListeners=function(){return O(this)},L.prototype.emit=function(t){var e,r,n,o,i,a,c,s=arguments,u="error"===t;if(a=this._events)u=u&&null==a.error;else if(!u)return!1;if(c=this.domain,u){if(e=arguments[1],!c){if(e instanceof Error)throw e;var f=new Error('Uncaught, unspecified "error" event. ('+e+")");throw f.context=e,f}return e||(e=new Error('Uncaught, unspecified "error" event')),e.domainEmitter=this,e.domain=c,e.domainThrown=!1,c.emit("error",e),!1}if(!(r=a[t]))return!1;var l="function"==typeof r;switch(n=arguments.length){case 1:E(r,l,this);break;case 2:j(r,l,this,arguments[1]);break;case 3:k(r,l,this,arguments[1],arguments[2]);break;case 4:P(r,l,this,arguments[1],arguments[2],arguments[3]);break;default:for(o=new Array(n-1),i=1;i<n;i++)o[i-1]=s[i];S(r,l,this,o)}return!0},L.prototype.addListener=function(t,e){return I(this,t,e,!1)},L.prototype.on=L.prototype.addListener,L.prototype.prependListener=function(t,e){return I(this,t,e,!0)},L.prototype.once=function(t,e){if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');return this.on(t,C(this,t,e)),this},L.prototype.prependOnceListener=function(t,e){if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');return this.prependListener(t,C(this,t,e)),this},L.prototype.removeListener=function(t,e){var r,n,o,i,a;if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');if(!(n=this._events))return this;if(!(r=n[t]))return this;if(r===e||r.listener&&r.listener===e)0==--this._eventsCount?this._events=new x:(delete n[t],n.removeListener&&this.emit("removeListener",t,r.listener||e));else if("function"!=typeof r){for(o=-1,i=r.length;i-- >0;)if(r[i]===e||r[i].listener&&r[i].listener===e){a=r[i].listener,o=i;break}if(o<0)return this;if(1===r.length){if(r[0]=void 0,0==--this._eventsCount)return this._events=new x,this;delete n[t]}else!function(t,e){for(var r=e,n=r+1,o=t.length;n<o;r+=1,n+=1)t[r]=t[n];t.pop()}(r,o);n.removeListener&&this.emit("removeListener",t,a||e)}return this},L.prototype.removeAllListeners=function(t){var e,r;if(!(r=this._events))return this;if(!r.removeListener)return 0===arguments.length?(this._events=new x,this._eventsCount=0):r[t]&&(0==--this._eventsCount?this._events=new x:delete r[t]),this;if(0===arguments.length){for(var n,o=Object.keys(r),i=0;i<o.length;++i)"removeListener"!==(n=o[i])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=new x,this._eventsCount=0,this}if("function"==typeof(e=r[t]))this.removeListener(t,e);else if(e)do{this.removeListener(t,e[e.length-1])}while(e[0]);return this},L.prototype.listeners=function(t){var e,r=this._events;return r&&(e=r[t])?"function"==typeof e?[e.listener||e]:function(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}(e):[]},L.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):A.call(t,e)},L.prototype.listenerCount=A,L.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};var R=function(t){m(n,t);var e,r=$(n);function n(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.appId;return p(this,n),(t=r.call(this)).appId=o,t.defaultOptions={app_id:o},t.ready=!1,t.isBooted=!1,t.visible=!1,t.unreadCount=0,t._call=t.callIntercom,t._load=t.load,t._init=t.init,t._ready=new Promise((function(e){return t.once("ready",e)})),t}return y(n,[{key:"load",value:(e=h(f.mark((function t(e){var r,n=this;return f.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window&&document){t.next=2;break}return t.abrupt("return");case 2:return r=function(){return N(e,n)},"complete"===document.readyState?N(e,this):window.attachEvent?window.attachEvent("onload",r):window.addEventListener("load",r,!1),t.abrupt("return",this._ready);case 5:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"init",value:function(){var t=this;this.ready=!0,this._call("onHide",(function(){return t.visible=!1})),this._call("onShow",(function(){return t.visible=!0})),this._call("onUnreadCountChange",(function(e){return t.unreadCount=e})),this.emit("ready")}},{key:"boot",value:function(t){this.isBooted=!0,this._call("boot",Object.assign({},this.defaultOptions,t))}},{key:"callIntercom",value:function(){var t;if(window.Intercom)return(t=window).Intercom.apply(t,arguments)}},{key:"shutdown",value:function(){this.isBooted=!1,this._call("shutdown")}},{key:"update",value:function(){for(var t=arguments,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=t[n];this._call.apply(this,["update"].concat(r))}},{key:"show",value:function(){this._call("show")}},{key:"hide",value:function(){this._call("hide")}},{key:"showMessages",value:function(){this._call("showMessages")}},{key:"showNewMessage",value:function(t){this._call.apply(this,["showNewMessage"].concat(s(M(String,t)?[t]:[])))}},{key:"trackEvent",value:function(t){for(var e=arguments,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=e[o];this._call.apply(this,["trackEvent"].concat([t].concat(n)))}},{key:"startTour",value:function(t){for(var e=arguments,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=e[o];this._call.apply(this,["startTour"].concat([t].concat(n)))}},{key:"getVisitorId",value:function(){this._call("getVisitorId")}}]),n}(L),D=!1;var G={version:"0.0.5",install:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e!==t&&console.error("Multiple instances of Vue detected.");var n=r.appId;if(M(String,n)){var o,i=new R({appId:n});t.mixin({beforeCreate:(o=h(f.mark((function e(){var r;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!D){e.next=2;break}return e.abrupt("return");case 2:if("function"!=typeof window.Intercom||!this.$intercom){e.next=8;break}this.$intercom._init(),this.$intercom._call("reattach_activator"),this.$intercom.update(),e.next=17;break;case 8:return(r=function t(){for(var e=arguments,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=e[o];return t.c(n)}).q=[],r.c=function(t){return r.q.push(t)},window.Intercom=r,this.$intercom=t.observable(i),t.prototype.$intercom=this.$intercom,e.next=16,this.$intercom._load();case 16:this.$intercom._init();case 17:D=!0;case 18:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})})}else console.warn("You didn't specified Intercom appId. Please check your configuration.")}};function V(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var F=G.install;G.install=function(t,e){F.call(G,t,function(t){for(var e=arguments,n=1;n<arguments.length;n++){var o=null!=e[n]?e[n]:{};n%2?V(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):V(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},e))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(G),t.Intercom=R,t.default=G,Object.defineProperty(t,"__esModule",{value:!0})}));
