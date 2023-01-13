// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
var v = function() {
  var e = this, o = e.$createElement, r = e._self._c || o;
  return r("div", {
    attrs: {
      "data-id": "sds-loading-spinner",
      role: "status"
    }
  }, [r("svg", {
    staticClass: "animate-spin",
    class: e.sizeClass,
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }
  }, [r("circle", {
    staticClass: "opacity-25",
    attrs: {
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      "stroke-width": "4"
    }
  }), r("path", {
    staticClass: "opacity-75",
    attrs: {
      fill: "currentColor",
      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }
  })]), e.label ? r("span", {
    staticClass: "sr-only"
  }, [e._v(e._s(e.label))]) : e._e()]);
}, C = [];
function m(a, e, o, r, i, l, _, f) {
  var t = typeof a == "function" ? a.options : a;
  e && (t.render = e, t.staticRenderFns = o, t._compiled = !0), r && (t.functional = !0), l && (t._scopeId = "data-v-" + l);
  var s;
  if (_ ? (s = function(n) {
    n = n || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !n && typeof __VUE_SSR_CONTEXT__ < "u" && (n = __VUE_SSR_CONTEXT__), i && i.call(this, n), n && n._registeredComponents && n._registeredComponents.add(_);
  }, t._ssrRegister = s) : i && (s = f ? function() {
    i.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), s)
    if (t.functional) {
      t._injectStyles = s;
      var p = t.render;
      t.render = function(h, c) {
        return s.call(c), p(h, c);
      };
    } else {
      var u = t.beforeCreate;
      t.beforeCreate = u ? [].concat(u, s) : [s];
    }
  return {
    exports: a,
    options: t
  };
}
const w = {
  name: "SdsLoadingSpinner",
  props: {
    size: { type: String, default: "md" },
    label: { type: String, default: null }
  },
  computed: {
    sizeClass() {
      switch (this.size) {
        case "lg":
          return "h-20 w-20";
        case "sm":
          return "h-4 w-4";
        case "auto":
          return "";
        default:
          return "h-12 w-12";
      }
    }
  }
}, d = {};
var g = /* @__PURE__ */ m(
  w,
  v,
  C,
  !1,
  y,
  null,
  null,
  null
);
function y(a) {
  for (let e in d)
    this[e] = d[e];
}
const z = /* @__PURE__ */ function() {
  return g.exports;
}();
export {
  z as default
};
