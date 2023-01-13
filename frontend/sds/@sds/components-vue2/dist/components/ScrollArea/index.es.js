// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import p from "vue";
const m = p.extend({
  name: "SdsScrollArea"
});
var C = function() {
  var n = this, s = n.$createElement, i = n._self._c || s;
  return i("div", {
    staticClass: "scroll-area",
    attrs: {
      "data-id": "sds-scroll-area"
    }
  }, [n._t("default")], 2);
}, $ = [];
function R(o, n, s, i, a, _, f, c) {
  var e = typeof o == "function" ? o.options : o;
  n && (e.render = n, e.staticRenderFns = s, e._compiled = !0), i && (e.functional = !0), _ && (e._scopeId = "data-v-" + _);
  var t;
  if (f ? (t = function(r) {
    r = r || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !r && typeof __VUE_SSR_CONTEXT__ < "u" && (r = __VUE_SSR_CONTEXT__), a && a.call(this, r), r && r._registeredComponents && r._registeredComponents.add(f);
  }, e._ssrRegister = t) : a && (t = c ? function() {
    a.call(
      this,
      (e.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), t)
    if (e.functional) {
      e._injectStyles = t;
      var v = e.render;
      e.render = function(h, d) {
        return t.call(d), v(h, d);
      };
    } else {
      var l = e.beforeCreate;
      e.beforeCreate = l ? [].concat(l, t) : [t];
    }
  return {
    exports: o,
    options: e
  };
}
const u = {};
var S = /* @__PURE__ */ R(
  m,
  C,
  $,
  !1,
  T,
  null,
  null,
  null
);
function T(o) {
  for (let n in u)
    this[n] = u[n];
}
const b = /* @__PURE__ */ function() {
  return S.exports;
}();
export {
  b as default
};
