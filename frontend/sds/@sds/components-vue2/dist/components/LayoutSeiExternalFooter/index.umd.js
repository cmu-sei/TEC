// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
(function(b,o){typeof exports=="object"&&typeof module<"u"?module.exports=o():typeof define=="function"&&define.amd?define(o):(b=typeof globalThis<"u"?globalThis:b||self,b.SdsLayoutSeiExternalFooter=o())})(this,function(){"use strict";const b="data:image/png;base64,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";var o=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("footer",{attrs:{"data-id":"sds-layout-sei-external-footer"}},[s._m(0),a("div",{staticClass:"py-8 text-gray-100 bg-gray-900"},[a("div",{staticClass:"container px-4 mx-auto space-y-6 md:px-8"},[a("div",{staticClass:"grid grid-cols-1 gap-8 md:grid-cols-3"},[s._m(1),a("ul",{staticClass:"space-x-2"},[a("li",{staticClass:"inline-block"},[a("a",{staticClass:"inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 facebook",style:{height:"30px",width:"30px",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(s.socialSprites,")"),backgroundPosition:"0 0",backgroundSize:"auto 100%"},attrs:{href:"https://www.facebook.com/SEICMU/",rel:"noopener",target:"_blank"}},[a("span",{staticClass:"sr-only"},[s._v("Facebook")])])]),a("li",{staticClass:"inline-block"},[a("a",{staticClass:"inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 twitter",style:{height:"30px",width:"30px",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(s.socialSprites,")"),backgroundPosition:"-32px 0",backgroundSize:"auto 100%",content:""},attrs:{href:"https://twitter.com/sei_cmu",rel:"noopener",target:"_blank"}},[a("span",{staticClass:"sr-only"},[s._v("Twitter")])])]),a("li",{staticClass:"inline-block"},[a("a",{staticClass:"inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 linkedin",style:{height:"30px",width:"30px",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(s.socialSprites,")"),backgroundPosition:"-96px 0",backgroundSize:"auto 100%"},attrs:{href:"https://www.linkedin.com/company/software-engineering-institute",rel:"noopener",target:"_blank"}},[a("span",{staticClass:"sr-only"},[s._v("LinkedIn")])])]),a("li",{staticClass:"inline-block"},[a("a",{staticClass:"inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 youtube",style:{height:"30px",width:"30px",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(s.socialSprites,")"),backgroundPosition:"-129px 0",backgroundSize:"auto 100%"},attrs:{href:"https://www.youtube.com/user/TheSEICMU",rel:"noopener",target:"_blank"}},[a("span",{staticClass:"sr-only"},[s._v("YouTube")])])]),a("li",{staticClass:"inline-block"},[a("a",{staticClass:"inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 itunes",style:{height:"30px",width:"30px",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(s.socialSprites,")"),backgroundPosition:"-161px 0",backgroundSize:"auto 100%",borderRadius:"50%"},attrs:{href:"https://podcasts.apple.com/us/podcast/software-engineering-institute-sei-podcast-series/id566573552?mt=2",rel:"noopener",target:"_blank"}},[a("span",{staticClass:"sr-only"},[s._v("iTunes")])])])]),s._m(2)]),s._m(3),a("div",{staticClass:"text-sm"},[s._v(" \xA9 "+s._s(s.year)+" Carnegie Mellon University ")])])])])},h=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"py-8 text-white bg-gray-500"},[t("div",{staticClass:"container px-4 mx-auto space-y-6 md:px-8"},[t("ul",{staticClass:"grid grid-cols-1 gap-6 md:grid-cols-3"},[t("li",[t("a",{staticClass:"hover:underline focus:underline focus:outline-none",attrs:{href:"https://vulcoord.cert.org/VulReport/"}},[e._v("Report a Vulnerability to CERT/CC")])]),t("li",[t("a",{staticClass:"hover:underline focus:underline focus:outline-none",attrs:{href:"https://sei.cmu.edu/subscribe-to-sei-bulletin/"}},[e._v("Subscribe to SEI Bulletin")])]),t("li",[t("a",{staticClass:"hover:underline focus:underline focus:outline-none",attrs:{href:"https://sei.cmu.edu/legal/request-permission-to-use-sei-material"}},[e._v("Request Permission to Use SEI Materials")])])])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("address",{staticClass:"not-italic"},[e._v(" Carnegie Mellon University"),t("br"),e._v(" Software Engineering Institute"),t("br"),e._v(" 4500 Fifth Avenue"),t("br"),e._v(" Pittsburgh, PA 15213-2612"),t("br"),t("a",{staticClass:"hover:underline",attrs:{href:"tel:412-268-5800",target:"_self"}},[e._v("412-268-5800")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("a",{staticClass:"py-8 text-xl text-center transition-colors duration-100 rounded-none btn btn-outline btn-light btn-lg btn-block",attrs:{href:"https://sei.cmu.edu/contact-us/",target:"_self"}},[e._v(" Contact Us ")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",{staticClass:"space-x-1 text-sm"},[t("li",{staticClass:"inline-block"},[t("a",{staticClass:"hover:underline",attrs:{href:"https://www.sei.cmu.edu/locations/index.cfm",target:"_self"}},[e._v("Office Locations")])]),t("li",{staticClass:"inline-block"},[e._v(" | ")]),t("li",{staticClass:"inline-block"},[t("a",{staticClass:"hover:underline",attrs:{href:"https://www.sei.cmu.edu/additional-sites-directory/index.cfm",target:"_self"}},[e._v("Additional Sites Directory")])]),t("li",{staticClass:"inline-block"},[e._v(" | ")]),t("li",{staticClass:"inline-block"},[t("a",{staticClass:"hover:underline",attrs:{href:"https://www.sei.cmu.edu/legal/index.cfm",target:"_self"}},[e._v("Legal")])]),t("li",{staticClass:"inline-block"},[e._v(" | ")]),t("li",{staticClass:"inline-block"},[t("a",{staticClass:"hover:underline",attrs:{href:"https://www.sei.cmu.edu/legal/privacy-notice/index.cfm",target:"_self"}},[e._v("Privacy Notice")])]),t("li",{staticClass:"inline-block"},[e._v(" | ")]),t("li",{staticClass:"inline-block"},[t("a",{staticClass:"hover:underline",attrs:{href:"https://www.cmu.edu/hr/ethics-hotline/",target:"_self"}},[e._v("CMU Ethics Hotline")])]),t("li",{staticClass:"inline-block"},[e._v(" | ")]),t("li",{staticClass:"inline-block"},[t("a",{staticClass:"hover:underline",attrs:{href:"https://www.sei.cmu.edu/index.cfm",target:"_self"}},[e._v("www.sei.cmu.edu")])])])}];function g(e,s,t,a,l,v,u,m){var n=typeof e=="function"?e.options:e;s&&(n.render=s,n.staticRenderFns=t,n._compiled=!0),a&&(n.functional=!0),v&&(n._scopeId="data-v-"+v);var r;if(u?(r=function(i){i=i||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!i&&typeof __VUE_SSR_CONTEXT__<"u"&&(i=__VUE_SSR_CONTEXT__),l&&l.call(this,i),i&&i._registeredComponents&&i._registeredComponents.add(u)},n._ssrRegister=r):l&&(r=m?function(){l.call(this,(n.functional?this.parent:this).$root.$options.shadowRoot)}:l),r)if(n.functional){n._injectStyles=r;var x=n.render;n.render=function(z,d){return r.call(d),x(z,d)}}else{var f=n.beforeCreate;n.beforeCreate=f?[].concat(f,r):[r]}return{exports:e,options:n}}const p={name:"SdsLayoutSeiExternalFooter",computed:{year(){return new Date().getFullYear()},socialSprites(){return b}}},c={};var w=g(p,o,h,!1,N,null,null,null);function N(e){for(let s in c)this[s]=c[s]}return function(){return w.exports}()});
