// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import v from "vue";
const m = v.extend({
  name: "SdsLayoutStacked",
  props: {
    stickyHeader: {
      type: Boolean,
      default: !1
    },
    stickyFooter: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header;
    },
    hasFooterSlot() {
      return !!this.$slots.footer;
    }
  }
});
var C = function() {
  var e = this, i = e.$createElement, a = e._self._c || i;
  return a("div", {
    staticClass: "flex flex-col w-full min-h-screen",
    attrs: {
      "data-id": "sds-layout-stacked"
    }
  }, [e.hasHeaderSlot ? a("header", {
    staticClass: "z-30 flex-shrink",
    class: {
      "sticky top-0 shadow": e.stickyHeader
    }
  }, [e._t("header")], 2) : e._e(), a("main", {
    staticClass: "flex-grow"
  }, [e._t("default")], 2), e.hasFooterSlot ? a("footer", {
    staticClass: "z-20 flex-shrink",
    class: {
      "sticky bottom-0 shadow": e.stickyFooter
    }
  }, [e._t("footer")], 2) : e._e()]);
}, k = [];
function y(r, e, i, a, n, l, f, u) {
  var t = typeof r == "function" ? r.options : r;
  e && (t.render = e, t.staticRenderFns = i, t._compiled = !0), a && (t.functional = !0), l && (t._scopeId = "data-v-" + l);
  var s;
  if (f ? (s = function(o) {
    o = o || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !o && typeof __VUE_SSR_CONTEXT__ < "u" && (o = __VUE_SSR_CONTEXT__), n && n.call(this, o), o && o._registeredComponents && o._registeredComponents.add(f);
  }, t._ssrRegister = s) : n && (s = u ? function() {
    n.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : n), s)
    if (t.functional) {
      t._injectStyles = s;
      var h = t.render;
      t.render = function(p, d) {
        return s.call(d), h(p, d);
      };
    } else {
      var _ = t.beforeCreate;
      t.beforeCreate = _ ? [].concat(_, s) : [s];
    }
  return {
    exports: r,
    options: t
  };
}
const c = {};
var S = /* @__PURE__ */ y(
  m,
  C,
  k,
  !1,
  $,
  null,
  null,
  null
);
function $(r) {
  for (let e in c)
    this[e] = c[e];
}
const R = /* @__PURE__ */ function() {
  return S.exports;
}();
export {
  R as default
};
