// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import h from "vue";
const m = h.extend({
  name: "SdsCharacterCounter",
  props: {
    currentValue: { type: Number, default: 0 },
    maxValue: { type: Number, default: 0 }
  },
  computed: {
    count() {
      return (this.maxValue - this.currentValue).toLocaleString();
    }
  }
});
var C = function() {
  var n = this, s = n.$createElement, i = n._self._c || s;
  return i("div", {
    class: {
      "text-danger": n.count < 0
    },
    attrs: {
      "data-id": "sds-character-counter"
    }
  }, [n._v(" " + n._s(n.count) + " ")]);
}, V = [];
function $(o, n, s, i, a, u, _, c) {
  var e = typeof o == "function" ? o.options : o;
  n && (e.render = n, e.staticRenderFns = s, e._compiled = !0), i && (e.functional = !0), u && (e._scopeId = "data-v-" + u);
  var r;
  if (_ ? (r = function(t) {
    t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !t && typeof __VUE_SSR_CONTEXT__ < "u" && (t = __VUE_SSR_CONTEXT__), a && a.call(this, t), t && t._registeredComponents && t._registeredComponents.add(_);
  }, e._ssrRegister = r) : a && (r = c ? function() {
    a.call(
      this,
      (e.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), r)
    if (e.functional) {
      e._injectStyles = r;
      var p = e.render;
      e.render = function(v, l) {
        return r.call(l), p(v, l);
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
const d = {};
var R = /* @__PURE__ */ $(
  m,
  C,
  V,
  !1,
  S,
  null,
  null,
  null
);
function S(o) {
  for (let n in d)
    this[n] = d[n];
}
const g = /* @__PURE__ */ function() {
  return R.exports;
}();
export {
  g as default
};
