// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
(function(s,l){typeof exports=="object"&&typeof module<"u"?module.exports=l():typeof define=="function"&&define.amd?define(l):(s=typeof globalThis<"u"?globalThis:s||self,s.SdsCheckboxGroup=l())})(this,function(){"use strict";var s=function(){var e=this,f=e.$createElement,r=e._self._c||f;return r("div",{staticClass:"focus:outline-none",attrs:{id:e.id,"data-id":"sds-checkbox-group",role:"checkboxgroup",tabindex:"-1"}},e._l(e.options,function(o,i){return r("div",{key:o.value,staticClass:"space-x-1",class:{"inline-block mr-4":!e.stacked}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.localChecked,expression:"localChecked"}],staticClass:"focus:outline-none",attrs:{id:"".concat(e.id,"__option_").concat(i),type:"checkbox",name:e.name?e.name:"".concat(e.id,"__option"),required:e.required},domProps:{value:o.value,checked:Array.isArray(e.localChecked)?e._i(e.localChecked,o.value)>-1:e.localChecked},on:{click:function(_){return e.onChange(o.value)},change:function(_){var n=e.localChecked,a=_.target,h=!!a.checked;if(Array.isArray(n)){var d=o.value,t=e._i(n,d);a.checked?t<0&&(e.localChecked=n.concat([d])):t>-1&&(e.localChecked=n.slice(0,t).concat(n.slice(t+1)))}else e.localChecked=h}}}),e._t("label",function(){return[r("label",{attrs:{for:"".concat(e.id,"__option_").concat(i)}},[r("span",[e._v(e._s(o.text))])])]},{optionId:"".concat(e.id,"__option_").concat(i),option:o})],2)}),0)},l=[];function C(c,e,f,r,o,i,u,_){var n=typeof c=="function"?c.options:c;e&&(n.render=e,n.staticRenderFns=f,n._compiled=!0),r&&(n.functional=!0),i&&(n._scopeId="data-v-"+i);var a;if(u?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!t&&typeof __VUE_SSR_CONTEXT__<"u"&&(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},n._ssrRegister=a):o&&(a=_?function(){o.call(this,(n.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(n.functional){n._injectStyles=a;var h=n.render;n.render=function(g,m){return a.call(m),h(g,m)}}else{var d=n.beforeCreate;n.beforeCreate=d?[].concat(d,a):[a]}return{exports:c,options:n}}let p=0;const k={name:"SdsCheckboxGroup",props:{value:{type:Array,default:()=>[]},name:{type:String,default:null},options:{type:Array,default:()=>[]},required:{type:Boolean,default:!1},stacked:{type:Boolean,default:!1}},data(){return{id:""}},computed:{localChecked:{get(){return this.value},set(c){this.$emit("input",c)}}},mounted(){p++,this.id=`sds-checkbox-group_${p}`},methods:{onChange(c){this.$emit("change",c)}}},v={};var y=C(k,s,l,!1,b,null,null,null);function b(c){for(let e in v)this[e]=v[e]}return function(){return y.exports}()});
