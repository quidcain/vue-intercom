/*!
 * Vue-intercom v0.0.2
 * (c) 2019-2020 Mathieu Stanowski
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e=e||self).VueIntercom={},e.Vue)}(this,(function(e,t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var n=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e};var r=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r};var o=function(e){if(Array.isArray(e))return r(e)};var i=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)};var c=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}};var a=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var u=function(e){return o(e)||i(e)||c(e)||a()};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=arguments,r=1;r<arguments.length;r++){var o=null!=t[r]?t[r]:{};r%2?f(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(){var e;if(window.Intercom)return(e=window).Intercom.apply(e,arguments)}function d(e,t){e.app_id||(e.app_id=t),t?p("boot",e):console.warn("You didn't specified Intercom appId. Please check your configuration.")}function l(e,t){var r=t.appId,o=new e({data:function(){return{ready:!1,visible:!1,unreadCount:0}}}),i={_vm:o,_call:p,_init:function(){return function(e){e.ready=!0,p("onHide",(function(){return e.visible=!1})),p("onShow",(function(){return e.visible=!0})),p("onUnreadCountChange",(function(t){return e.unreadCount=t}))}(o)},boot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return d(e,r)},shutdown:function(){return p("shutdown")},update:function(){for(var e=arguments,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=e[r];return p.apply(void 0,["update"].concat(n))},show:function(){return p("show")},hide:function(){return p("hide")},showMessages:function(){return p("showMessages")},showNewMessage:function(e){return p.apply(void 0,["showNewMessage"].concat(u((n=e)instanceof(t=String)||null!=n&&n.constructor===t?[e]:[])));var t,n},trackEvent:function(e){for(var t=arguments,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=t[o];return p.apply(void 0,["trackEvent"].concat([e].concat(r)))},startTour:function(e){for(var t=arguments,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=t[o];return p.apply(void 0,["startTour"].concat([e].concat(r)))},getVisitorId:function(){return p("getVisitorId")}};return Object.defineProperties(i,function(e,t){return t.reduce((function(t,r){return s(s({},t),{},n({},r,{get:function(){return e[r]}}))}),{})}(o,["ready","visible","unreadCount"])),i}function y(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.intercom.io/widget/".concat(e);var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r),n.onload=t}function v(e,t){if(window&&document){var n=function(){return y(e,t)};"complete"===document.readyState?y(e,t):window.attachEvent?window.attachEvent("onload",n):window.addEventListener("load",n,!1)}}var w=!1;var b={version:"0.0.2",install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t!==e&&console.error("Multiple instances of Vue detected.");var r=n.appId,o=l(e,{appId:r});Object.defineProperty(e.prototype,"$intercom",{get:function(){return o}}),e.mixin({beforeCreate:function(){var e=this;if(!w){if("function"==typeof window.Intercom)this.$intercom._init(),this.$intercom._call("reattach_activator"),this.$intercom.update();else{var t=function e(){for(var t=arguments,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=t[o];return e.c(r)};t.q=[],t.c=function(e){return t.q.push(e)},window.Intercom=t,v(r,(function(){return e.$intercom._init()}))}w=!0}}})}};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var O=b.install;b.install=function(e,t){O.call(b,e,function(e){for(var t=arguments,r=1;r<arguments.length;r++){var o=null!=t[r]?t[r]:{};r%2?h(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},t))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(b),e.default=b,Object.defineProperty(e,"__esModule",{value:!0})}));
