// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
var x = function() {
  var e = this, i = e.$createElement, s = e._self._c || i;
  return s("div", [e.$slots.label || e.label ? s("div", {
    staticClass: "text-base"
  }, [e._t("label", function() {
    return [e._v(" " + e._s(e.label) + " ")];
  })], 2) : e._e(), s("div", {
    staticClass: "flex gap-2"
  }, [s("div", {
    staticClass: "font-bold",
    class: [e.sizeClass, e.variantClass]
  }, [e._t("default", function() {
    return [e._v(e._s(e.modelValueDisplay))];
  })], 2), e.$slots.context || e.context ? s("div", {
    staticClass: "text-base mt-auto"
  }, [e._t("context", function() {
    return [e._v(" " + e._s(e.context) + " ")];
  })], 2) : e._e()])]);
}, k = [];
function b(t, e, i, s, l, o, u, f) {
  var a = typeof t == "function" ? t.options : t;
  e && (a.render = e, a.staticRenderFns = i, a._compiled = !0), s && (a.functional = !0), o && (a._scopeId = "data-v-" + o);
  var n;
  if (u ? (n = function(r) {
    r = r || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !r && typeof __VUE_SSR_CONTEXT__ < "u" && (r = __VUE_SSR_CONTEXT__), l && l.call(this, r), r && r._registeredComponents && r._registeredComponents.add(u);
  }, a._ssrRegister = n) : l && (n = f ? function() {
    l.call(
      this,
      (a.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : l), n)
    if (a.functional) {
      a._injectStyles = n;
      var p = a.render;
      a.render = function(v, _) {
        return n.call(_), p(v, _);
      };
    } else {
      var d = a.beforeCreate;
      a.beforeCreate = d ? [].concat(d, n) : [n];
    }
  return {
    exports: t,
    options: a
  };
}
const h = {
  name: "SdsDatapoint",
  props: {
    value: { type: [String, Number], default: null },
    label: { type: String, default: null },
    context: { type: String, default: null },
    size: { type: String, default: "md" },
    variant: { type: String, default: null }
  },
  computed: {
    modelValueDisplay() {
      return typeof this.value == "number" ? this.value.toLocaleString() : this.value;
    },
    sizeClass() {
      let t = "";
      switch (this.size) {
        case "sm":
          t = "text-lg";
          break;
        case "md":
          t = "text-3xl";
          break;
        default:
          t = "text-5xl";
      }
      return t;
    },
    variantClass() {
      let t = "";
      switch (this.variant) {
        case "blue":
          t = "text-blue-500 dark:text-blue-400";
          break;
        case "green":
          t = "text-green-500 dark:text-green-400";
          break;
        case "teal":
          t = "text-teal-500 dark:text-teal-400";
          break;
        case "orange":
          t = "text-orange-700 dark:text-orange-400";
          break;
        case "red":
          t = "text-red-500 dark:text-red-400";
          break;
        case "tan":
          t = "text-tan-800 dark:text-tan-500";
          break;
        case "yellow":
          t = "text-yellow-800 dark:text-yellow-400";
          break;
        case "pink":
          t = "text-pink-600 dark:text-pink-400";
          break;
        case "purple":
          t = "text-purple-500 dark:text-purple-400";
          break;
        case "indigo":
          t = "text-indigo-500 dark:text-indigo-400";
          break;
        case "gray":
          t = "text-gray-500 dark:text-gray-300";
          break;
        default:
          t = "text-black dark:text-white";
          break;
      }
      return t;
    }
  }
}, c = {};
var g = /* @__PURE__ */ b(
  h,
  x,
  k,
  !1,
  C,
  null,
  null,
  null
);
function C(t) {
  for (let e in c)
    this[e] = c[e];
}
const m = /* @__PURE__ */ function() {
  return g.exports;
}();
export {
  m as default
};
