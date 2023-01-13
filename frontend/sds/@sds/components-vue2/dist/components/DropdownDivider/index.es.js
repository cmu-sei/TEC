// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import h from "vue";
const m = h.extend({
  name: "SdsDropdownDivider"
});
var C = function() {
  var r = this, a = r.$createElement, s = r._self._c || a;
  return s("div", {
    staticClass: "my-2 border-t border-gray-100 dark:border-gray-600",
    attrs: {
      "data-id": "sds-dropdown-divider"
    }
  });
}, $ = [];
function R(t, r, a, s, i, _, d, v) {
  var e = typeof t == "function" ? t.options : t;
  r && (e.render = r, e.staticRenderFns = a, e._compiled = !0), s && (e.functional = !0), _ && (e._scopeId = "data-v-" + _);
  var o;
  if (d ? (o = function(n) {
    n = n || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !n && typeof __VUE_SSR_CONTEXT__ < "u" && (n = __VUE_SSR_CONTEXT__), i && i.call(this, n), n && n._registeredComponents && n._registeredComponents.add(d);
  }, e._ssrRegister = o) : i && (o = v ? function() {
    i.call(
      this,
      (e.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), o)
    if (e.functional) {
      e._injectStyles = o;
      var c = e.render;
      e.render = function(p, u) {
        return o.call(u), c(p, u);
      };
    } else {
      var f = e.beforeCreate;
      e.beforeCreate = f ? [].concat(f, o) : [o];
    }
  return {
    exports: t,
    options: e
  };
}
const l = {};
var b = /* @__PURE__ */ R(
  m,
  C,
  $,
  !1,
  g,
  null,
  null,
  null
);
function g(t) {
  for (let r in l)
    this[r] = l[r];
}
const S = /* @__PURE__ */ function() {
  return b.exports;
}();
export {
  S as default
};
