// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
var p = function() {
  var n = this, a = n.$createElement, _ = n._self._c || a;
  return _("span", {
    class: ["loadingBox rounded flex flex-row relative overflow-hidden bg-gray-200", n.width, n.height],
    attrs: {
      "data-id": "sds-loading-box"
    }
  });
}, g = [];
function C(r, n, a, _, i, s, d, h) {
  var e = typeof r == "function" ? r.options : r;
  n && (e.render = n, e.staticRenderFns = a, e._compiled = !0), _ && (e.functional = !0), s && (e._scopeId = "data-v-" + s);
  var o;
  if (d ? (o = function(t) {
    t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !t && typeof __VUE_SSR_CONTEXT__ < "u" && (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(d);
  }, e._ssrRegister = o) : i && (o = h ? function() {
    i.call(
      this,
      (e.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), o)
    if (e.functional) {
      e._injectStyles = o;
      var v = e.render;
      e.render = function(c, l) {
        return o.call(l), v(c, l);
      };
    } else {
      var f = e.beforeCreate;
      e.beforeCreate = f ? [].concat(f, o) : [o];
    }
  return {
    exports: r,
    options: e
  };
}
const m = {
  name: "SdsLoadingBox",
  props: {
    height: {
      default: "h-full",
      type: String
    },
    width: {
      default: "w-full",
      type: String
    }
  }
}, u = {};
var $ = /* @__PURE__ */ C(
  m,
  p,
  g,
  !1,
  w,
  "7021287c",
  null,
  null
);
function w(r) {
  for (let n in u)
    this[n] = u[n];
}
const y = /* @__PURE__ */ function() {
  return $.exports;
}();
export {
  y as default
};
