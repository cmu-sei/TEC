// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
function y() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
var v = function() {
  var t = this, s = t.$createElement, a = t._self._c || s;
  return a("div", {
    attrs: {
      "data-id": "sds-tabs"
    }
  }, [a("div", {
    staticClass: "overflow-x-auto",
    class: {
      "bg-gray-100 dark:bg-gray-700 rounded-t": t.type === "folder"
    }
  }, [a("ul", {
    staticClass: "flex whitespace-nowrap z-10",
    attrs: {
      role: "tablist"
    }
  }, t._l(t.tabs, function(e) {
    return a("li", {
      key: e.key,
      class: {
        "mr-auto": e.align === "left",
        "ml-auto": e.align === "right",
        "mx-auto": e.align === "center"
      },
      attrs: {
        role: "presentation"
      }
    }, [a(e.tag || "button", {
      tag: "component",
      class: {
        "opacity-50": e.disabled,
        "pointer-events-none": e.disabled || e.active,
        "text-sm inline-block rounded-t py-2 px-4 font-bold": t.type === "folder",
        "bg-white dark:bg-gray-800 border-l border-t border-r text-gray-700 dark:border-gray-500 dark:text-gray-100": t.type === "folder" && e.active,
        "text-blue-500 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100": t.type === "folder" && !e.active,
        "tab tab-underline tab-red": t.type === "underline",
        "tab tab-block tab-red": t.type === "block",
        active: (t.type === "underline" || t.type === "block") && e.active,
        disabled: (t.type === "underline" || t.type === "block") && e.disabled
      },
      attrs: {
        id: "sds-tabs-".concat(t.id, "__").concat(e.key, "__tab"),
        href: e.tag === "a" && e.href || void 0,
        target: e.tag === "a" && e.href && e.external ? "_blank" : void 0,
        rel: e.tag === "a" && e.href && e.external ? "noopener noreferrer" : void 0,
        type: e.tag === "button" ? "button" : void 0,
        disabled: e.disabled,
        tabindex: e.disabled ? -1 : void 0,
        "aria-selected": e.active,
        "aria-controls": "sds-tabs-".concat(t.id, "__").concat(e.key, "__tab-content"),
        "data-active": e.active ? !0 : void 0,
        role: "tab"
      },
      on: {
        click: function(l) {
          return t.changeTab(e);
        }
      }
    }, [t._t("tab(".concat(e.key, ")"), function() {
      return [t._v(" " + t._s(e.title) + " ")];
    })], 2)], 1);
  }), 0)]), t._l(t.tabs, function(e) {
    return [e.active ? a("div", {
      key: e.key,
      attrs: {
        id: "sds-tabs-".concat(t.id, "__").concat(e.key, "__tab-content"),
        "aria-labelby": "sds-tabs-".concat(t.id, "__").concat(e.key, "__tab"),
        role: "tabpanel",
        tabindex: "0"
      }
    }, [e.active ? t._t("panel(".concat(e.key, ")")) : t._e()], 2) : t._e()];
  })], 2);
}, g = [];
function b(n, t, s, a, e, d, l, f) {
  var r = typeof n == "function" ? n.options : n;
  t && (r.render = t, r.staticRenderFns = s, r._compiled = !0), a && (r.functional = !0), d && (r._scopeId = "data-v-" + d);
  var o;
  if (l ? (o = function(i) {
    i = i || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !i && typeof __VUE_SSR_CONTEXT__ < "u" && (i = __VUE_SSR_CONTEXT__), e && e.call(this, i), i && i._registeredComponents && i._registeredComponents.add(l);
  }, r._ssrRegister = o) : e && (o = f ? function() {
    e.call(
      this,
      (r.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : e), o)
    if (r.functional) {
      r._injectStyles = o;
      var p = r.render;
      r.render = function(h, u) {
        return o.call(u), p(h, u);
      };
    } else {
      var c = r.beforeCreate;
      r.beforeCreate = c ? [].concat(c, o) : [o];
    }
  return {
    exports: n,
    options: r
  };
}
const k = {
  name: "SdsTabs",
  props: {
    value: { type: Array, default: () => [] },
    type: { type: String, default: "folder" },
    willChangeTab: { type: Function, default: null }
  },
  data() {
    return {
      id: ""
    };
  },
  computed: {
    tabs: {
      get() {
        return this.value;
      },
      set(n) {
        this.$emit("input", n);
      }
    }
  },
  mounted() {
    this.id = y();
  },
  methods: {
    willChangeTabStateDelay(n, t) {
      return new Promise(async (s, a) => t ? await t(n, s, a) : s());
    },
    async changeTab(n) {
      if (n.tag === "a" && n.href)
        return !0;
      await this.willChangeTabStateDelay(n, this.willChangeTab), this.tabs = this.tabs.map((t) => (t.active = n.key === t.key, t)), this.$emit("change", n);
    }
  }
}, _ = {};
var m = /* @__PURE__ */ b(
  k,
  v,
  g,
  !1,
  C,
  null,
  null,
  null
);
function C(n) {
  for (let t in _)
    this[t] = _[t];
}
const w = /* @__PURE__ */ function() {
  return m.exports;
}();
export {
  w as default
};
