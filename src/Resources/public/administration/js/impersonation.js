!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/bundles/impersonation/",n(n.s="NUDy")}({"0aKo":function(e,t,n){var r=n("KZ6D");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("SZ7m").default)("38bcad61",r,!0,{})},"5w5B":function(e,t){e.exports='{% block sw_settings_user_list_actions_edit %}\n    {% parent() %}\n\n    {% block sw_settings_user_list_actions_impersonate %}\n        <sw-context-menu-item\n            v-if="canImpersonate && !isImpersonating"\n            :disabled="currentUser.id === item.id"\n            class="sw-settings-user-list__user-view-action"\n            @click="impersonate(item.id)">\n            {{ $tc(\'impersonation.actions.impersonate\') }}\n        </sw-context-menu-item>\n    {% endblock %}\n{% endblock %}\n'},KZ6D:function(e,t,n){},NUDy:function(e,t,n){"use strict";n.r(t);var r="impersonated-user-id",i=n("lSNA"),o=n.n(i),s=(n("lwsE"),n("W8MJ"),Shopware);s.Application,s.WorkerNotification;function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=Shopware,p=u.Application,l=u.State;Shopware.Utils.debug,Shopware.Utils;function f(){var e=l.get("session").currentUser;if(!e)return null;var t=e.id;return t?"notifications#".concat(t):null}function d(){var e=f();if(!e)return{};var t=localStorage.getItem(e);if(!t)return localStorage.setItem(e,JSON.stringify({})),{};for(var n=JSON.parse(t),r=Object.keys(n).reverse(),i={},o=Math.min(50,r.length)-1;o>=0;o-=1){var s=r[o];i[s]=c(c({},n[s]),{},{timestamp:new Date(n[s].timestamp)})}return r.length>50&&m(i),i}function m(e){var t=f();if(t){var n={};Object.keys(e).forEach((function(t){!1===e[t].isLoading&&(n[t]=c(c({},e[t]),{},{timestamp:e[t].timestamp.toJSON()}))})),localStorage.setItem(t,JSON.stringify(n))}}function v(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function g(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function s(e){g(o,r,i,s,a,"next",e)}function a(e){g(o,r,i,s,a,"throw",e)}s(void 0)}))}}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=Shopware.State,w=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name="impersonationService";var i=n.userService,o=n.localeHelper,s=n.loginService;this.userService=i,this.localeHelper=o,this.loginService=s,this.impersonatingUser=t,this.httpClient=r,this._initializeService()}var t,n,i,o,s,a;return t=e,(n=[{key:"impersonate",value:(a=h(regeneratorRuntime.mark((function e(t){var n,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem(r,t),e.next=3,this.userService.getUser({},(c=t,(a=r)in(s={})?Object.defineProperty(s,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[a]=c,s));case 3:return n=e.sent,(i=n.data).password,o=v(i,["password"]),e.next=7,this._initializeUser(o);case 7:case"end":return e.stop()}var s,a,c}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"leaveImpersonation",value:(s=h(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem(r),e.next=3,this._initializeUser(this.impersonatingUser);case 3:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"isImpersonating",value:function(){return!!localStorage.getItem(r)}},{key:"_initializeUser",value:(o=h(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y.commit("setCurrentUser",t),e.next=3,this.localeHelper.setLocaleWithId(t.localeId);case 3:y.commit("context/setApiLanguageId",y.get("session").languageId),p.getApplicationRoot().$store?p.getApplicationRoot().$store.commit("notification/setNotificationsForCurrentUser"):l.get("notification").notifications=d();case 5:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"_initializeService",value:function(){var e=this;this.httpClient.interceptors.request.use((function(t){return e.isImpersonating()&&(t.headers=t.headers||{},t.headers["impersonated-user-id"]=localStorage.getItem(r)),t})),this._registerLogInListener(),this.isImpersonating()&&this.impersonate(localStorage.getItem(r))}},{key:"_registerLogInListener",value:function(){var e=this;this.loginService.addOnLoginListener(h(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isImpersonating()){t.next=3;break}return t.next=3,e.leaveImpersonation();case 3:case"end":return t.stop()}}),t)}))))}}])&&b(t.prototype,n),i&&b(t,i),e}(),S=Shopware,O=S.State,x=S.Application,_=x.getContainer("init"),j=O.get("session").currentUser,I=_.httpClient;x.addServiceProvider("impersonationService",(function(e){return new w(j,e,I)}));var k=n("5w5B"),P=n.n(k);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}var N=Shopware,M=N.Component,D=N.Service,E=N.State,A={computed:{impersonationService:function(){return D("impersonationService")},currentUser:function(){return E.get("session").currentUser},canImpersonate:function(){return!!this.currentUser.admin},isImpersonating:function(){return this.impersonationService.isImpersonating()}},methods:{impersonate:function(e){var t,n=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.canImpersonate){t.next=2;break}return t.abrupt("return");case 2:return n.isLoading=!0,t.next=5,n.impersonationService.impersonate(e);case 5:n.isLoading=!1,n.$router.push({name:"sw.dashboard.index"});case 7:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(e){R(o,r,i,s,a,"next",e)}function a(e){R(o,r,i,s,a,"throw",e)}s(void 0)}))})()}}};M.getComponentRegistry().has("sw-settings-user-list")?M.override("sw-settings-user-list",C({template:P.a,deprecated:{version:"6.4.0",comment:"Use sw-users-permissions-user-listing instead"}},A)):M.override("sw-users-permissions-user-listing",C({template:P.a},A));var B=n("yBBg"),T=n.n(B);n("0aKo");function $(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}var J=Shopware,z=J.Component,W=J.State,K=J.Service;z.override("sw-page",{template:T.a,data:function(){return{isLoading:!1}},computed:{currentUser:function(){return W.get("session").currentUser},pageClasses:function(){var e=this.$super("pageClasses");return e["has--leave-impersonation-button"]=this.isImpersonating,e},impersonationService:function(){return K("impersonationService")},isImpersonating:function(){return this.impersonationService.isImpersonating()}},methods:{leaveImpersonation:function(){var e,t=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.impersonationService.leaveImpersonation();case 3:t.isLoading=!1,"sw.users.permissions.index"===t.$route.name?t.$router.go():t.$router.push({name:"sw.users.permissions.index"});case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function s(e){$(o,r,i,s,a,"next",e)}function a(e){$(o,r,i,s,a,"throw",e)}s(void 0)}))})()}}}),Shopware.Module.register("impersonation",{type:"plugin",name:"Impersonation",version:"1.0.0",targetVersion:"1.0.0"})},SZ7m:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],a={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}n.r(t),n.d(t,"default",(function(){return m}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=i&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,u=!1,p=function(){},l=null,f="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,n,i){u=n,l=i||{};var s=r(e,t);return v(s),function(t){for(var n=[],i=0;i<s.length;i++){var a=s[i];(c=o[a.id]).refs--,n.push(c)}t?v(s=r(e,t)):s=[];for(i=0;i<n.length;i++){var c;if(0===(c=n[i]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete o[c.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(h(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(h(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:s}}}}function g(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function h(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(u)return p;r.parentNode.removeChild(r)}if(d){var i=c++;r=a||(a=g()),t=w.bind(null,r,i,!1),n=w.bind(null,r,i,!0)}else r=g(),t=S.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function w(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function S(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),l.ssrId&&e.setAttribute(f,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},yBBg:function(e,t){e.exports='{% block sw_page_top_bar_actions %}\n    <div class="sw-page__top-bar-actions" :style="topBarActionStyles">\n        {% block sw_page_leave_impersonation_button %}\n            <sw-button v-if="isImpersonating"\n                       class="impersonation-btn"\n                       variant="danger"\n                       size="x-small"\n                       :disabled="isLoading"\n                       :isLoading="isLoading"\n                       @click="leaveImpersonation">{{ $tc(\'impersonation.actions.leaveImpersonation\') }}</sw-button>\n        {% endblock %}\n\n        {% block sw_page_notification_center %}\n            <sw-notification-center></sw-notification-center>\n        {% endblock %}\n    </div>\n{% endblock %}\n'}});
