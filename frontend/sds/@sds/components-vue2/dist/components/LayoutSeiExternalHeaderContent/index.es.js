// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
var h = function() {
  var e = this, i = e.$createElement, a = e._self._c || i;
  return a("div", {
    staticClass: "space-y-4",
    attrs: {
      "data-id": "sds-layout-sei-external-header-content"
    }
  }, [e.page.title ? a("h3", {
    staticClass: "text-3xl text-gray-500 break-words font-extralight"
  }, [e._v(" " + e._s(e.page.title) + " ")]) : e._e(), e.page.subtitle ? a("h4", {
    staticClass: "text-xl text-gray-500 break-words"
  }, [e._v(" " + e._s(e.page.subtitle) + " ")]) : e._e(), e.page.description ? a("div", {
    staticClass: "max-w-screen-md prose break-words prose-red",
    domProps: {
      innerHTML: e._s(e.page.description)
    }
  }) : e._e()]);
}, C = [];
function g(s, e, i, a, o, _, l, u) {
  var t = typeof s == "function" ? s.options : s;
  e && (t.render = e, t.staticRenderFns = i, t._compiled = !0), a && (t.functional = !0), _ && (t._scopeId = "data-v-" + _);
  var r;
  if (l ? (r = function(n) {
    n = n || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !n && typeof __VUE_SSR_CONTEXT__ < "u" && (n = __VUE_SSR_CONTEXT__), o && o.call(this, n), n && n._registeredComponents && n._registeredComponents.add(l);
  }, t._ssrRegister = r) : o && (r = u ? function() {
    o.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : o), r)
    if (t.functional) {
      t._injectStyles = r;
      var c = t.render;
      t.render = function(v, f) {
        return r.call(f), c(v, f);
      };
    } else {
      var d = t.beforeCreate;
      t.beforeCreate = d ? [].concat(d, r) : [r];
    }
  return {
    exports: s,
    options: t
  };
}
const m = {
  name: "SdsLayoutSeiExternalHeaderContent",
  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  }
}, p = {};
var b = /* @__PURE__ */ g(
  m,
  h,
  C,
  !1,
  y,
  null,
  null,
  null
);
function y(s) {
  for (let e in p)
    this[e] = p[e];
}
const $ = /* @__PURE__ */ function() {
  return b.exports;
}();
export {
  $ as default
};
