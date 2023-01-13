// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import v from "vue";
const C = v.extend({
  name: "SdsLink",
  props: {
    variant: { type: String, default: "" },
    external: { type: Boolean, default: !1 },
    cta: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  computed: {
    linkClass() {
      return this.variant !== "" || this.cta ? "link" : "";
    },
    variantClass() {
      switch (this.variant) {
        case "primary":
          return "link-primary";
        case "secondary":
          return "link-secondary";
        case "tertiary":
          return "link-tertiary";
        case "danger":
          return "link-danger";
        case "light":
          return "link-light";
        case "dark":
          return "link-dark";
        default:
          return "";
      }
    },
    ctaClass() {
      return this.cta ? "link-cta" : "";
    },
    disabledClass() {
      return this.disabled ? "disabled" : "";
    }
  }
});
var k = function() {
  var e = this, i = e.$createElement, l = e._self._c || i;
  return l("a", {
    class: [e.linkClass, e.variantClass, e.ctaClass, e.disabledClass],
    attrs: {
      "data-id": "sds-link",
      target: e.external ? "_blank" : !1,
      rel: e.external ? "noopener noreferrer" : !1,
      tabindex: e.disabled ? -1 : void 0
    }
  }, [e._t("default")], 2);
}, m = [];
function y(r, e, i, l, s, o, d, c) {
  var n = typeof r == "function" ? r.options : r;
  e && (n.render = e, n.staticRenderFns = i, n._compiled = !0), l && (n.functional = !0), o && (n._scopeId = "data-v-" + o);
  var t;
  if (d ? (t = function(a) {
    a = a || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !a && typeof __VUE_SSR_CONTEXT__ < "u" && (a = __VUE_SSR_CONTEXT__), s && s.call(this, a), a && a._registeredComponents && a._registeredComponents.add(d);
  }, n._ssrRegister = t) : s && (t = c ? function() {
    s.call(
      this,
      (n.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), t)
    if (n.functional) {
      n._injectStyles = t;
      var p = n.render;
      n.render = function(h, u) {
        return t.call(u), p(h, u);
      };
    } else {
      var f = n.beforeCreate;
      n.beforeCreate = f ? [].concat(f, t) : [t];
    }
  return {
    exports: r,
    options: n
  };
}
const _ = {};
var b = /* @__PURE__ */ y(
  C,
  k,
  m,
  !1,
  g,
  null,
  null,
  null
);
function g(r) {
  for (let e in _)
    this[e] = _[e];
}
const R = /* @__PURE__ */ function() {
  return b.exports;
}();
export {
  R as default
};
