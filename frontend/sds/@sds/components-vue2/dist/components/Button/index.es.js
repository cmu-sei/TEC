// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import p from "vue";
var C = function() {
  var e = this, i = e.$createElement, l = e._self._c || i;
  return l("button", {
    class: [e.btnClass, e.variantClass, e.sizeClass, e.outlineClass, e.disabledClass, e.blockClass],
    attrs: {
      "data-id": "sds-button",
      disabled: e.disabled
    },
    on: {
      click: e.onClick
    }
  }, [e._t("default")], 2);
}, v = [];
function m(a, e, i, l, r, o, u, _) {
  var t = typeof a == "function" ? a.options : a;
  e && (t.render = e, t.staticRenderFns = i, t._compiled = !0), l && (t.functional = !0), o && (t._scopeId = "data-v-" + o);
  var s;
  if (u ? (s = function(n) {
    n = n || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !n && typeof __VUE_SSR_CONTEXT__ < "u" && (n = __VUE_SSR_CONTEXT__), r && r.call(this, n), n && n._registeredComponents && n._registeredComponents.add(u);
  }, t._ssrRegister = s) : r && (s = _ ? function() {
    r.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : r), s)
    if (t.functional) {
      t._injectStyles = s;
      var h = t.render;
      t.render = function(b, c) {
        return s.call(c), h(b, c);
      };
    } else {
      var d = t.beforeCreate;
      t.beforeCreate = d ? [].concat(d, s) : [s];
    }
  return {
    exports: a,
    options: t
  };
}
const k = p.extend({
  name: "SdsButton",
  props: {
    variant: { type: String, default: "" },
    size: { type: String, default: "" },
    outline: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 }
  },
  computed: {
    btnClass() {
      return this.variant !== "" || this.size !== "" || this.outline || this.block ? "btn" : "";
    },
    variantClass() {
      switch (this.variant) {
        case "default":
          return "btn-default";
        case "primary":
          return "btn-primary";
        case "success":
          return "btn-success";
        case "danger":
          return "btn-danger";
        case "light":
          return "btn-light";
        default:
          return "";
      }
    },
    sizeClass() {
      switch (this.size) {
        case "sm":
          return "btn-sm";
        default:
          return "";
      }
    },
    outlineClass() {
      return this.outline ? "btn-outline" : "";
    },
    disabledClass() {
      return this.disabled ? "disabled" : "";
    },
    blockClass() {
      return this.block ? "btn-block" : "";
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
}), f = {};
var g = /* @__PURE__ */ m(
  k,
  C,
  v,
  !1,
  y,
  null,
  null,
  null
);
function y(a) {
  for (let e in f)
    this[e] = f[e];
}
const z = /* @__PURE__ */ function() {
  return g.exports;
}();
export {
  z as default
};
