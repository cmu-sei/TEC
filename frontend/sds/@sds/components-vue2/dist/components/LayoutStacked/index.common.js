// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
"use strict";const v=require("vue"),C=o=>o&&typeof o=="object"&&"default"in o?o:{default:o},m=C(v),y=m.default.extend({name:"SdsLayoutStacked",props:{stickyHeader:{type:Boolean,default:!1},stickyFooter:{type:Boolean,default:!1}},computed:{hasHeaderSlot(){return!!this.$slots.header},hasFooterSlot(){return!!this.$slots.footer}}});var k=function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("div",{staticClass:"flex flex-col w-full min-h-screen",attrs:{"data-id":"sds-layout-stacked"}},[e.hasHeaderSlot?a("header",{staticClass:"z-30 flex-shrink",class:{"sticky top-0 shadow":e.stickyHeader}},[e._t("header")],2):e._e(),a("main",{staticClass:"flex-grow"},[e._t("default")],2),e.hasFooterSlot?a("footer",{staticClass:"z-20 flex-shrink",class:{"sticky bottom-0 shadow":e.stickyFooter}},[e._t("footer")],2):e._e()])},S=[];function $(o,e,i,a,r,l,f,c){var t=typeof o=="function"?o.options:o;e&&(t.render=e,t.staticRenderFns=i,t._compiled=!0),a&&(t.functional=!0),l&&(t._scopeId="data-v-"+l);var n;if(f?(n=function(s){s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!s&&typeof __VUE_SSR_CONTEXT__<"u"&&(s=__VUE_SSR_CONTEXT__),r&&r.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(f)},t._ssrRegister=n):r&&(n=c?function(){r.call(this,(t.functional?this.parent:this).$root.$options.shadowRoot)}:r),n)if(t.functional){t._injectStyles=n;var h=t.render;t.render=function(p,d){return n.call(d),h(p,d)}}else{var _=t.beforeCreate;t.beforeCreate=_?[].concat(_,n):[n]}return{exports:o,options:t}}const u={};var F=$(y,k,S,!1,R,null,null,null);function R(o){for(let e in u)this[e]=u[e]}const w=function(){return F.exports}();module.exports=w;
