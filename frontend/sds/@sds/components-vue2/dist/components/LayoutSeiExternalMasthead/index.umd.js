// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
(function(d,_){typeof exports=="object"&&typeof module<"u"?module.exports=_():typeof define=="function"&&define.amd?define(_):(d=typeof globalThis<"u"?globalThis:d||self,d.SdsLayoutSeiExternalMasthead=_())})(this,function(){"use strict";var d=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"space-y-4",attrs:{"data-id":"sds-layout-sei-external-nav"}},e._l(e.page.nav,function(s){return t("div",{key:s.title,staticClass:"p-4 space-y-2 bg-gray-100"},[t("h3",{staticClass:"text-xl text-gray-600 break-words"},[e._v(" "+e._s(s.title)+" ")]),t("ul",{staticClass:"pb-2 space-y-2"},e._l(s.items,function(l){return t("li",{key:l.title},[t("a",{staticClass:"text-red-500 break-words hover:text-red-700 hover:underline",attrs:{href:l.url}},[e._v(e._s(l.title))])])}),0),s.seeAll?t("div",{staticClass:"pt-2 border-t"},[t("a",{staticClass:"inline-flex font-bold uppercase group text-secondary",attrs:{href:s.seeAll.url}},[t("span",{staticClass:"group-hover:underline"},[e._v(e._s(s.seeAll.title))]),t("svg",{staticClass:"block w-5 h-5 my-auto fill-current",attrs:{viewBox:"0 0 32 32","aria-hidden":"true"}},[t("path",{attrs:{d:"M11.303 8l11.394 7.997L11.303 24z"}})])])]):e._e()])}),0)},_=[];function c(n,e,o,t,s,l,v,O){var a=typeof n=="function"?n.options:n;e&&(a.render=e,a.staticRenderFns=o,a._compiled=!0),t&&(a.functional=!0),l&&(a._scopeId="data-v-"+l);var i;if(v?(i=function(r){r=r||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!r&&typeof __VUE_SSR_CONTEXT__<"u"&&(r=__VUE_SSR_CONTEXT__),s&&s.call(this,r),r&&r._registeredComponents&&r._registeredComponents.add(v)},a._ssrRegister=i):s&&(i=O?function(){s.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:s),i)if(a.functional){a._injectStyles=i;var F=a.render;a.render=function(N,h){return i.call(h),F(N,h)}}else{var g=a.beforeCreate;a.beforeCreate=g?[].concat(g,i):[i]}return{exports:n,options:a}}const y={name:"SdsLayoutSeiExternalNav",props:{page:{type:Object,default:()=>({})}}},u={};var C=c(y,d,_,!1,x,null,null,null);function x(n){for(let e in u)this[e]=u[e]}const m=function(){return C.exports}();var b=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"space-y-4",attrs:{"data-id":"sds-layout-sei-external-header-content"}},[e.page.title?t("h3",{staticClass:"text-3xl text-gray-500 break-words font-extralight"},[e._v(" "+e._s(e.page.title)+" ")]):e._e(),e.page.subtitle?t("h4",{staticClass:"text-xl text-gray-500 break-words"},[e._v(" "+e._s(e.page.subtitle)+" ")]):e._e(),e.page.description?t("div",{staticClass:"max-w-screen-md prose break-words prose-red",domProps:{innerHTML:e._s(e.page.description)}}):e._e()])},$=[];const S={name:"SdsLayoutSeiExternalHeaderContent",props:{page:{type:Object,default:()=>({})}}},p={};var w=c(S,b,$,!1,E,null,null,null);function E(n){for(let e in p)this[e]=p[e]}const L=function(){return w.exports}();var R=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"py-8 bg-white",attrs:{"data-id":"sds-layout-sei-external-masthead"}},[t("div",{staticClass:"container px-4 mx-auto md:px-8"},[e.page.nav?t("div",{staticClass:"grid grid-cols-1 gap-8 lg:grid-cols-12"},[t("div",{staticClass:"order-2 lg:col-span-3 lg:order-1"},[t("layout-sei-external-nav",{attrs:{page:e.page}})],1),e.page.title||e.page.subtitle||e.page.description?t("div",{staticClass:"order-1 lg:col-span-9 lg:order-2"},[t("layout-sei-external-header-content",{attrs:{page:e.page}})],1):e._e()]):[e.page.title||e.page.subtitle||e.page.description?t("layout-sei-external-header-content",{attrs:{page:e.page}}):e._e()]],2)])},k=[];const M={name:"SdsLayoutSeiExternalMasthead",components:{LayoutSeiExternalNav:m,LayoutSeiExternalHeaderContent:L},props:{page:{type:Object,default:()=>({})}}},f={};var T=c(M,R,k,!1,j,null,null,null);function j(n){for(let e in f)this[e]=f[e]}return function(){return T.exports}()});
