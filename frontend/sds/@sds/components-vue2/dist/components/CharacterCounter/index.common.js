// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
"use strict";const h=require("vue"),m=t=>t&&typeof t=="object"&&"default"in t?t:{default:t},C=m(h),V=C.default.extend({name:"SdsCharacterCounter",props:{currentValue:{type:Number,default:0},maxValue:{type:Number,default:0}},computed:{count(){return(this.maxValue-this.currentValue).toLocaleString()}}});var $=function(){var n=this,s=n.$createElement,u=n._self._c||s;return u("div",{class:{"text-danger":n.count<0},attrs:{"data-id":"sds-character-counter"}},[n._v(" "+n._s(n.count)+" ")])},R=[];function b(t,n,s,u,a,i,_,d){var e=typeof t=="function"?t.options:t;n&&(e.render=n,e.staticRenderFns=s,e._compiled=!0),u&&(e.functional=!0),i&&(e._scopeId="data-v-"+i);var o;if(_?(o=function(r){r=r||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!r&&typeof __VUE_SSR_CONTEXT__<"u"&&(r=__VUE_SSR_CONTEXT__),a&&a.call(this,r),r&&r._registeredComponents&&r._registeredComponents.add(_)},e._ssrRegister=o):a&&(o=d?function(){a.call(this,(e.functional?this.parent:this).$root.$options.shadowRoot)}:a),o)if(e.functional){e._injectStyles=o;var p=e.render;e.render=function(v,c){return o.call(c),p(v,c)}}else{var f=e.beforeCreate;e.beforeCreate=f?[].concat(f,o):[o]}return{exports:t,options:e}}const l={};var g=b(V,$,R,!1,y,null,null,null);function y(t){for(let n in l)this[n]=l[n]}const S=function(){return g.exports}();module.exports=S;