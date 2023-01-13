// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import v from "vue";
var y = function() {
  var e = this, i = e.$createElement, s = e._self._c || i;
  return s("div", {
    staticClass: "block bg-white dark:bg-gray-800 dark:border-gray-700",
    class: {
      border: e.type === "simple" || e.type === "raised",
      "shadow border rounded": e.type === "raised"
    },
    attrs: {
      "data-id": "sds-section"
    }
  }, [e.hideHeader ? e._e() : s("header", {
    class: {
      "border-b dark:border-gray-700": e.type === "simple" || e.type === "raised",
      "border-0 border-t-2 border-gray-900 dark:border-gray-100": e.type === "accented"
    }
  }, [s("div", {
    staticClass: "flex px-4 py-3",
    class: {
      "border-b border-gray-300": e.type === "accented"
    }
  }, [s("div", {
    staticClass: "self-center flex-grow"
  }, [e.hasTitleSlot ? s("div", {
    staticClass: "slot-title"
  }, [e._t("title")], 2) : e._e(), e.hasSubtitleSlot ? s("div", {
    staticClass: "text-sm text-gray-500"
  }, [e._t("subtitle")], 2) : e._e()]), e.hasNavSlot ? s("div", {
    staticClass: "flex items-stretch self-start justify-center ml-auto",
    class: [e.navClass]
  }, [e._t("nav")], 2) : e._e()])]), !e.hideContent && e.hasDefaultSlot ? s("div", {
    class: [e.contentClass]
  }, [e._t("default")], 2) : e._e()]);
}, b = [];
function C(n, e, i, s, o, l, d, c) {
  var t = typeof n == "function" ? n.options : n;
  e && (t.render = e, t.staticRenderFns = i, t._compiled = !0), s && (t.functional = !0), l && (t._scopeId = "data-v-" + l);
  var a;
  if (d ? (a = function(r) {
    r = r || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !r && typeof __VUE_SSR_CONTEXT__ < "u" && (r = __VUE_SSR_CONTEXT__), o && o.call(this, r), r && r._registeredComponents && r._registeredComponents.add(d);
  }, t._ssrRegister = a) : o && (a = c ? function() {
    o.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : o), a)
    if (t.functional) {
      t._injectStyles = a;
      var p = t.render;
      t.render = function(h, f) {
        return a.call(f), p(h, f);
      };
    } else {
      var _ = t.beforeCreate;
      t.beforeCreate = _ ? [].concat(_, a) : [a];
    }
  return {
    exports: n,
    options: t
  };
}
const S = v.extend({
  name: "SdsSection",
  props: {
    type: {
      type: String,
      default: ""
    },
    hideHeader: {
      type: Boolean,
      default: !1
    },
    hideContent: {
      type: Boolean,
      default: !1
    },
    navClass: {
      type: String,
      default: ""
    },
    contentClass: {
      type: String,
      default: "p-4"
    }
  },
  computed: {
    hasTitleSlot() {
      return !!this.$slots.title;
    },
    hasSubtitleSlot() {
      return !!this.$slots.subtitle;
    },
    hasNavSlot() {
      return !!this.$slots.nav;
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    }
  }
}), u = {};
var m = /* @__PURE__ */ C(
  S,
  y,
  b,
  !1,
  g,
  null,
  null,
  null
);
function g(n) {
  for (let e in u)
    this[e] = u[e];
}
const k = /* @__PURE__ */ function() {
  return m.exports;
}();
export {
  k as default
};
