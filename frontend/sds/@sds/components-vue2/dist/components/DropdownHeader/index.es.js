// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import h from "vue";
const m = h.extend({
  name: "SdsDropdownHeader"
});
var C = function() {
  var n = this, i = n.$createElement, s = n._self._c || i;
  return s("div", {
    staticClass: "px-4 py-1 text-sm font-semibold leading-5 text-gray-500 dark:text-gray-300",
    attrs: {
      "data-id": "sds-dropdown-header"
    }
  }, [n._t("default")], 2);
}, $ = [];
function R(o, n, i, s, a, _, d, p) {
  var e = typeof o == "function" ? o.options : o;
  n && (e.render = n, e.staticRenderFns = i, e._compiled = !0), s && (e.functional = !0), _ && (e._scopeId = "data-v-" + _);
  var r;
  if (d ? (r = function(t) {
    t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !t && typeof __VUE_SSR_CONTEXT__ < "u" && (t = __VUE_SSR_CONTEXT__), a && a.call(this, t), t && t._registeredComponents && t._registeredComponents.add(d);
  }, e._ssrRegister = r) : a && (r = p ? function() {
    a.call(
      this,
      (e.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), r)
    if (e.functional) {
      e._injectStyles = r;
      var v = e.render;
      e.render = function(c, l) {
        return r.call(l), v(c, l);
      };
    } else {
      var f = e.beforeCreate;
      e.beforeCreate = f ? [].concat(f, r) : [r];
    }
  return {
    exports: o,
    options: e
  };
}
const u = {};
var g = /* @__PURE__ */ R(
  m,
  C,
  $,
  !1,
  y,
  null,
  null,
  null
);
function y(o) {
  for (let n in u)
    this[n] = u[n];
}
const T = /* @__PURE__ */ function() {
  return g.exports;
}();
export {
  T as default
};
