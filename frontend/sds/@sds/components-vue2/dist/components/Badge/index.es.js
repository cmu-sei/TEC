// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
var u = function() {
  var e = this, a = e.$createElement, h = e._self._c || a;
  return h("div", {
    staticClass: "inline-block tracking-wide max-w-full uppercase px-2 py-1 text-xs font-bold text-center text-ellipsis whitespace-nowrap overflow-hidden align-baseline rounded",
    class: e.variantClass,
    attrs: {
      "data-id": "sds-badge"
    }
  }, [e._t("default")], 2);
}, _ = [];
function c(t, e, a, h, l, n, g, b) {
  var i = typeof t == "function" ? t.options : t;
  e && (i.render = e, i.staticRenderFns = a, i._compiled = !0), h && (i.functional = !0), n && (i._scopeId = "data-v-" + n);
  var s;
  if (g ? (s = function(r) {
    r = r || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !r && typeof __VUE_SSR_CONTEXT__ < "u" && (r = __VUE_SSR_CONTEXT__), l && l.call(this, r), r && r._registeredComponents && r._registeredComponents.add(g);
  }, i._ssrRegister = s) : l && (s = b ? function() {
    l.call(
      this,
      (i.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : l), s)
    if (i.functional) {
      i._injectStyles = s;
      var f = i.render;
      i.render = function(y, p) {
        return s.call(p), f(y, p);
      };
    } else {
      var o = i.beforeCreate;
      i.beforeCreate = o ? [].concat(o, s) : [s];
    }
  return {
    exports: t,
    options: i
  };
}
const m = {
  name: "SdsBadge",
  props: {
    type: {
      type: String,
      default: "medium"
    },
    variant: {
      type: String,
      default: "gray"
    }
  },
  computed: {
    variantClass() {
      let t = "", e = "", a = "";
      switch (this.type === "light-border" && (a = "border border-current"), this.variant) {
        case "blue":
          this.type === "light-border" || this.type === "light" ? (e = "bg-blue-100", t = "text-blue-500") : this.type === "medium" ? (e = "bg-blue-500", t = "text-white") : this.type === "dark" && (e = "bg-blue-700", t = "text-white");
          break;
        case "green":
          this.type === "light-border" || this.type === "light" ? (e = "bg-green-100", t = "text-green-500") : this.type === "medium" ? (e = "bg-green-500", t = "text-white") : this.type === "dark" && (e = "bg-green-700", t = "text-white");
          break;
        case "teal":
          this.type === "light-border" || this.type === "light" ? (e = "bg-teal-100", t = "text-teal-500") : this.type === "medium" ? (e = "bg-teal-500", t = "text-white") : this.type === "dark" && (e = "bg-teal-700", t = "text-white");
          break;
        case "orange":
          this.type === "light-border" || this.type === "light" ? (e = "bg-orange-100", t = "text-orange-800") : this.type === "medium" ? (e = "bg-orange-500", t = "text-white") : this.type === "dark" && (e = "bg-orange-700", t = "text-white");
          break;
        case "red":
          this.type === "light-border" || this.type === "light" ? (e = "bg-red-100", t = "text-red-500") : this.type === "medium" ? (e = "bg-red-500", t = "text-white") : this.type === "dark" && (e = "bg-red-700", t = "text-white");
          break;
        case "tan":
          this.type === "light-border" || this.type === "light" ? (e = "bg-tan-200", t = "text-tan-900") : this.type === "medium" ? (e = "bg-tan-600", t = "text-gray-800") : this.type === "dark" && (e = "bg-tan-800", t = "text-white");
          break;
        case "yellow":
          this.type === "light-border" || this.type === "light" ? (e = "bg-yellow-100", t = "text-yellow-800") : this.type === "medium" ? (e = "bg-yellow-500", t = "text-gray-800") : this.type === "dark" && (e = "bg-yellow-700", t = "text-white");
          break;
        case "pink":
          this.type === "light-border" || this.type === "light" ? (e = "bg-pink-100", t = "text-pink-500") : this.type === "medium" ? (e = "bg-pink-500", t = "text-white") : this.type === "dark" && (e = "bg-pink-700", t = "text-white");
          break;
        case "purple":
          this.type === "light-border" || this.type === "light" ? (e = "bg-purple-100", t = "text-purple-500") : this.type === "medium" ? (e = "bg-purple-400", t = "text-white") : this.type === "dark" && (e = "bg-purple-600", t = "text-white");
          break;
        case "indigo":
          this.type === "light-border" || this.type === "light" ? (e = "bg-indigo-100", t = "text-indigo-500") : this.type === "medium" ? (e = "bg-indigo-500", t = "text-white") : this.type === "dark" && (e = "bg-indigo-700", t = "text-white");
          break;
        case "gray":
        default:
          this.type === "light-border" || this.type === "light" ? (e = "bg-gray-100", t = "text-gray-500") : this.type === "medium" ? (e = "bg-gray-500", t = "text-white") : this.type === "dark" && (e = "bg-gray-700", t = "text-white");
          break;
      }
      return [t, e, a];
    }
  }
}, d = {};
var x = /* @__PURE__ */ c(
  m,
  u,
  _,
  !1,
  w,
  null,
  null,
  null
);
function w(t) {
  for (let e in d)
    this[e] = d[e];
}
const k = /* @__PURE__ */ function() {
  return x.exports;
}();
export {
  k as default
};
