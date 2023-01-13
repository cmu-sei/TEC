// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
var h = function() {
  var e = this, l = e.$createElement, s = e._self._c || l;
  return s("div", {
    staticClass: "space-y-4",
    attrs: {
      "data-id": "sds-layout-sei-external-nav"
    }
  }, e._l(e.page.nav, function(r) {
    return s("div", {
      key: r.title,
      staticClass: "p-4 space-y-2 bg-gray-100"
    }, [s("h3", {
      staticClass: "text-xl text-gray-600 break-words"
    }, [e._v(" " + e._s(r.title) + " ")]), s("ul", {
      staticClass: "pb-2 space-y-2"
    }, e._l(r.items, function(i) {
      return s("li", {
        key: i.title
      }, [s("a", {
        staticClass: "text-red-500 break-words hover:text-red-700 hover:underline",
        attrs: {
          href: i.url
        }
      }, [e._v(e._s(i.title))])]);
    }), 0), r.seeAll ? s("div", {
      staticClass: "pt-2 border-t"
    }, [s("a", {
      staticClass: "inline-flex font-bold uppercase group text-secondary",
      attrs: {
        href: r.seeAll.url
      }
    }, [s("span", {
      staticClass: "group-hover:underline"
    }, [e._v(e._s(r.seeAll.title))]), s("svg", {
      staticClass: "block w-5 h-5 my-auto fill-current",
      attrs: {
        viewBox: "0 0 32 32",
        "aria-hidden": "true"
      }
    }, [s("path", {
      attrs: {
        d: "M11.303 8l11.394 7.997L11.303 24z"
      }
    })])])]) : e._e()]);
  }), 0);
}, C = [];
function y(o, e, l, s, r, i, _, c) {
  var t = typeof o == "function" ? o.options : o;
  e && (t.render = e, t.staticRenderFns = l, t._compiled = !0), s && (t.functional = !0), i && (t._scopeId = "data-v-" + i);
  var n;
  if (_ ? (n = function(a) {
    a = a || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !a && typeof __VUE_SSR_CONTEXT__ < "u" && (a = __VUE_SSR_CONTEXT__), r && r.call(this, a), a && a._registeredComponents && a._registeredComponents.add(_);
  }, t._ssrRegister = n) : r && (n = c ? function() {
    r.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : r), n)
    if (t.functional) {
      t._injectStyles = n;
      var v = t.render;
      t.render = function(p, d) {
        return n.call(d), v(p, d);
      };
    } else {
      var u = t.beforeCreate;
      t.beforeCreate = u ? [].concat(u, n) : [n];
    }
  return {
    exports: o,
    options: t
  };
}
const b = {
  name: "SdsLayoutSeiExternalNav",
  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  }
}, f = {};
var g = /* @__PURE__ */ y(
  b,
  h,
  C,
  !1,
  $,
  null,
  null,
  null
);
function $(o) {
  for (let e in f)
    this[e] = f[e];
}
const m = /* @__PURE__ */ function() {
  return g.exports;
}();
export {
  m as default
};
