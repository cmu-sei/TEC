// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import h from "vue";
const b = h.extend({
  name: "SdsDropdownItem",
  props: {
    tag: {
      type: String,
      default: "a"
    },
    closeOnClick: {
      type: Boolean,
      default: !0
    },
    active: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    listeners() {
      return Object.assign({}, this.$listeners);
    }
  }
});
var g = function() {
  var e = this, a = e.$createElement, s = e._self._c || a;
  return s(e.tag, e._g({
    tag: "component",
    staticClass: "block w-full select-none px-4 py-2 text-sm leading-5 text-left hover:no-underline hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-600 focus:text-white",
    class: {
      "bg-blue-500 dark:bg-blue-600 text-white": e.active,
      "text-gray-700 dark:text-gray-100": !e.active,
      "pointer-events-none opacity-50": e.disabled
    },
    attrs: {
      "data-id": "sds-dropdown-item",
      disabled: e.disabled,
      role: "menuitem"
    },
    on: {
      click: function(l) {
        e.closeOnClick && e.$root.$emit("floating-ui-toggle");
      }
    }
  }, e.listeners), [e._t("default")], 2);
}, m = [];
function C(r, e, a, s, i, l, u, _) {
  var t = typeof r == "function" ? r.options : r;
  e && (t.render = e, t.staticRenderFns = a, t._compiled = !0), s && (t.functional = !0), l && (t._scopeId = "data-v-" + l);
  var o;
  if (u ? (o = function(n) {
    n = n || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !n && typeof __VUE_SSR_CONTEXT__ < "u" && (n = __VUE_SSR_CONTEXT__), i && i.call(this, n), n && n._registeredComponents && n._registeredComponents.add(u);
  }, t._ssrRegister = o) : i && (o = _ ? function() {
    i.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), o)
    if (t.functional) {
      t._injectStyles = o;
      var p = t.render;
      t.render = function(v, f) {
        return o.call(f), p(v, f);
      };
    } else {
      var d = t.beforeCreate;
      t.beforeCreate = d ? [].concat(d, o) : [o];
    }
  return {
    exports: r,
    options: t
  };
}
const c = {};
var $ = /* @__PURE__ */ C(
  b,
  g,
  m,
  !1,
  k,
  null,
  null,
  null
);
function k(r) {
  for (let e in c)
    this[e] = c[e];
}
const w = /* @__PURE__ */ function() {
  return $.exports;
}();
export {
  w as default
};
