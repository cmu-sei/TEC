// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
var g = function() {
  var e = this, l = e.$createElement, a = e._self._c || l;
  return a("div", {
    class: ["inline-flex items-center justify-center", e.variantClass, e.sizeClass, e.shapeClass],
    attrs: {
      "data-id": "sds-avatar"
    }
  }, [e.src ? a("div", {
    class: ["bg-cover bg-center", e.sizeClass, e.shapeClass],
    style: "background-image: url(".concat(e.src, ")"),
    attrs: {
      title: e.name
    }
  }) : a("span", {
    class: ["leading-none text-black cursor-default uppercase", e.textClass],
    attrs: {
      title: e.name
    }
  }, [e._v(" " + e._s(e.initials) + " ")])]);
}, m = [];
function v(t, e, l, a, i, o, u, d) {
  var r = typeof t == "function" ? t.options : t;
  e && (r.render = e, r.staticRenderFns = l, r._compiled = !0), a && (r.functional = !0), o && (r._scopeId = "data-v-" + o);
  var n;
  if (u ? (n = function(s) {
    s = s || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !s && typeof __VUE_SSR_CONTEXT__ < "u" && (s = __VUE_SSR_CONTEXT__), i && i.call(this, s), s && s._registeredComponents && s._registeredComponents.add(u);
  }, r._ssrRegister = n) : i && (n = d ? function() {
    i.call(
      this,
      (r.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), n)
    if (r.functional) {
      r._injectStyles = n;
      var p = r.render;
      r.render = function(_, c) {
        return n.call(c), p(_, c);
      };
    } else {
      var f = r.beforeCreate;
      r.beforeCreate = f ? [].concat(f, n) : [n];
    }
  return {
    exports: t,
    options: r
  };
}
const C = {
  name: "SdsAvatar",
  props: {
    variant: {
      type: String,
      default: "random"
    },
    shape: {
      default: "portrait",
      type: String
    },
    size: {
      default: "md",
      type: String
    },
    name: {
      default: "",
      type: String
    },
    src: {
      default: "",
      type: String
    }
  },
  computed: {
    sizeClass() {
      if (this.shape === "circle")
        switch (this.size) {
          case "lg":
            return "w-44 h-44";
          case "md":
            return "w-16 h-16";
          case "sm":
            return "w-12 h-12";
          case "auto":
            return "w-full h-full";
        }
      else if (this.shape === "portrait")
        switch (this.size) {
          case "lg":
            return "w-44 h-52";
          case "md":
            return "w-16 h-20";
          case "sm":
            return "w-10 h-11";
          case "auto":
            return "w-full h-full";
        }
      return "";
    },
    textClass() {
      return this.size === "lg" ? "text-6xl font-light" : this.size === "md" ? "text-2xl" : this.size === "sm" ? "text-xl font-semibold" : "";
    },
    shapeClass() {
      return this.shape === "circle" ? "rounded-full" : "";
    },
    variantClass() {
      const t = ["bg-gray-200", "bg-red-200", "bg-pink-200", "bg-orange-200", "bg-yellow-200", "bg-green-200", "bg-teal-200", "bg-blue-200", "bg-indigo-200", "bg-purple-200"];
      if (this.variant && this.variant !== "random")
        return t.filter((e) => e.includes(this.variant))[0];
      {
        const e = Math.floor(Math.random() * t.length);
        return t[e];
      }
    },
    initials() {
      if (!this.name)
        return;
      let t = this.name.trim().toUpperCase();
      return t.length > 2 && (t.includes(" ") && (t = t.split(" ").map((e) => e[0]).join("")), t.length > 2) ? t.charAt(0) + t.charAt(t.length - 1) : t.substring(0, 2);
    }
  }
}, h = {};
var b = /* @__PURE__ */ v(
  C,
  g,
  m,
  !1,
  w,
  null,
  null,
  null
);
function w(t) {
  for (let e in h)
    this[e] = h[e];
}
const y = /* @__PURE__ */ function() {
  return b.exports;
}();
export {
  y as default
};
