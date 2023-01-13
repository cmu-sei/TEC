// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
(function(l,u){typeof exports=="object"&&typeof module<"u"?module.exports=u():typeof define=="function"&&define.amd?define(u):(l=typeof globalThis<"u"?globalThis:l||self,l.SdsLayoutSeiExternalNav=u())})(this,function(){"use strict";var l=function(){var e=this,d=e.$createElement,n=e._self._c||d;return n("div",{staticClass:"space-y-4",attrs:{"data-id":"sds-layout-sei-external-nav"}},e._l(e.page.nav,function(s){return n("div",{key:s.title,staticClass:"p-4 space-y-2 bg-gray-100"},[n("h3",{staticClass:"text-xl text-gray-600 break-words"},[e._v(" "+e._s(s.title)+" ")]),n("ul",{staticClass:"pb-2 space-y-2"},e._l(s.items,function(i){return n("li",{key:i.title},[n("a",{staticClass:"text-red-500 break-words hover:text-red-700 hover:underline",attrs:{href:i.url}},[e._v(e._s(i.title))])])}),0),s.seeAll?n("div",{staticClass:"pt-2 border-t"},[n("a",{staticClass:"inline-flex font-bold uppercase group text-secondary",attrs:{href:s.seeAll.url}},[n("span",{staticClass:"group-hover:underline"},[e._v(e._s(s.seeAll.title))]),n("svg",{staticClass:"block w-5 h-5 my-auto fill-current",attrs:{viewBox:"0 0 32 32","aria-hidden":"true"}},[n("path",{attrs:{d:"M11.303 8l11.394 7.997L11.303 24z"}})])])]):e._e()])}),0)},u=[];function v(o,e,d,n,s,i,f,b){var t=typeof o=="function"?o.options:o;e&&(t.render=e,t.staticRenderFns=d,t._compiled=!0),n&&(t.functional=!0),i&&(t._scopeId="data-v-"+i);var a;if(f?(a=function(r){r=r||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!r&&typeof __VUE_SSR_CONTEXT__<"u"&&(r=__VUE_SSR_CONTEXT__),s&&s.call(this,r),r&&r._registeredComponents&&r._registeredComponents.add(f)},t._ssrRegister=a):s&&(a=b?function(){s.call(this,(t.functional?this.parent:this).$root.$options.shadowRoot)}:s),a)if(t.functional){t._injectStyles=a;var g=t.render;t.render=function(m,p){return a.call(p),g(m,p)}}else{var c=t.beforeCreate;t.beforeCreate=c?[].concat(c,a):[a]}return{exports:o,options:t}}const h={name:"SdsLayoutSeiExternalNav",props:{page:{type:Object,default:()=>({})}}},_={};var C=v(h,l,u,!1,y,null,null,null);function y(o){for(let e in _)this[e]=_[e]}return function(){return C.exports}()});
