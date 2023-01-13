// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
var _ = function() {
  var t = this, o = t.$createElement, e = t._self._c || o;
  return t.totalPages > 1 ? e("nav", {
    staticClass: "paginator",
    attrs: {
      "data-id": "sds-paginator",
      "aria-label": "Page navigation"
    }
  }, [e("div", {
    staticClass: "btn-toolbar",
    attrs: {
      role: "toolbar"
    }
  }, [e("div", {
    staticClass: "mr-2 btn-group"
  }, [e("button", {
    staticClass: "flex space-x-1 btn btn-default",
    attrs: {
      disabled: t.prevDisabled,
      title: "First"
    },
    on: {
      click: function(r) {
        return r.preventDefault(), t.goToPage(1, r);
      }
    }
  }, [e("svg", {
    staticClass: "w-4 h-4 my-auto",
    attrs: {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [e("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "3",
      d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
    }
  })]), e("span", {
    staticClass: "sr-only sm:not-sr-only"
  }, [t._v("First")])]), e("button", {
    staticClass: "flex space-x-1 btn btn-default",
    attrs: {
      disabled: t.prevDisabled,
      title: "Prev"
    },
    on: {
      click: function(r) {
        return r.preventDefault(), t.goToPage(t.currentPage - 1, r);
      }
    }
  }, [e("svg", {
    staticClass: "w-4 h-4 my-auto",
    attrs: {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [e("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "3",
      d: "M15 19l-7-7 7-7"
    }
  })]), e("span", {
    staticClass: "sr-only sm:not-sr-only"
  }, [t._v("Prev")])])]), t.totalPages > 1 ? e("div", {
    staticClass: "hidden btn-group md:block"
  }, [t._l(t.pageList, function(a, r) {
    return [e("button", {
      key: r,
      staticClass: "btn btn-default",
      class: {
        "shadow-none border-transparent": a === "...",
        active: t.currentPage === a
      },
      attrs: {
        disabled: a === "..." || t.loading
      },
      on: {
        click: function(u) {
          return u.preventDefault(), t.goToPage(a, u);
        }
      }
    }, [t._v(" " + t._s(a.toLocaleString()) + " ")])];
  })], 2) : t._e(), e("div", {
    staticClass: "block mx-0 currentPageLabelContainer btn-group md:hidden"
  }, [e("span", {
    staticClass: "inline-block px-3 pt-2 currentPageLabel"
  }, [t._v(" Page " + t._s(t.currentPage.toLocaleString()) + " ")])]), e("div", {
    staticClass: "ml-2 btn-group"
  }, [e("button", {
    staticClass: "flex space-x-1 btn btn-default",
    attrs: {
      disabled: t.nextDisabled,
      title: "Next"
    },
    on: {
      click: function(r) {
        return r.preventDefault(), t.goToPage(t.currentPage + 1, r);
      }
    }
  }, [e("span", {
    staticClass: "sr-only sm:not-sr-only"
  }, [t._v("Next")]), e("svg", {
    staticClass: "w-4 h-4 my-auto",
    attrs: {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [e("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "3",
      d: "M9 5l7 7-7 7"
    }
  })])]), e("button", {
    staticClass: "flex space-x-1 btn btn-default",
    attrs: {
      disabled: t.nextDisabled,
      title: "Last"
    },
    on: {
      click: function(r) {
        return r.preventDefault(), t.goToPage(t.totalPages, r);
      }
    }
  }, [e("span", {
    staticClass: "sr-only sm:not-sr-only"
  }, [t._v("Last")]), e("svg", {
    staticClass: "w-4 h-4 my-auto",
    attrs: {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [e("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "3",
      d: "M13 5l7 7-7 7M5 5l7 7-7 7"
    }
  })])])])])]) : t._e();
}, v = [];
function b(s, t, o, e, a, r, c, u) {
  var n = typeof s == "function" ? s.options : s;
  t && (n.render = t, n.staticRenderFns = o, n._compiled = !0), e && (n.functional = !0), r && (n._scopeId = "data-v-" + r);
  var i;
  if (c ? (i = function(l) {
    l = l || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !l && typeof __VUE_SSR_CONTEXT__ < "u" && (l = __VUE_SSR_CONTEXT__), a && a.call(this, l), l && l._registeredComponents && l._registeredComponents.add(c);
  }, n._ssrRegister = i) : a && (i = u ? function() {
    a.call(
      this,
      (n.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), i)
    if (n.functional) {
      n._injectStyles = i;
      var g = n.render;
      n.render = function(f, h) {
        return i.call(h), g(f, h);
      };
    } else {
      var d = n.beforeCreate;
      n.beforeCreate = d ? [].concat(d, i) : [i];
    }
  return {
    exports: s,
    options: n
  };
}
const m = {
  name: "SdsPaginator",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 0
    },
    loading: {
      type: Boolean,
      default: !1
    },
    threshold: {
      type: Number,
      default: 5
    }
  },
  computed: {
    prevDisabled() {
      return this.currentPage <= 1 || this.loading;
    },
    nextDisabled() {
      return this.currentPage >= this.totalPages || this.loading;
    },
    pageList() {
      if (this.totalPages <= this.threshold)
        return Array.apply(null, Array(this.totalPages)).map((s, t) => t + 1);
      if (this.currentPage < this.threshold)
        return Array.apply(null, Array(this.threshold)).map((t, o) => o + 1).concat(["...", this.totalPages]);
      if (this.currentPage > this.totalPages - this.threshold + 1)
        return [1, "..."].concat(
          Array.apply(null, Array(this.threshold)).map((t, o) => this.totalPages - this.threshold + o + 1)
        );
      {
        let s = [1, "..."];
        return s = s.concat(
          Array.apply(null, Array(this.threshold - 3)).map((t, o) => this.currentPage + o - this.threshold + 3)
        ), s.push(this.currentPage), s = s.concat(
          Array.apply(null, Array(this.threshold - 3)).map((t, o) => this.currentPage + o + 1)
        ), s.concat(["...", this.totalPages]);
      }
    }
  },
  methods: {
    goToPage(s, t) {
      this.$emit("go-to-page", { page: s, event: t });
    }
  }
}, p = {};
var P = /* @__PURE__ */ b(
  m,
  _,
  v,
  !1,
  C,
  null,
  null,
  null
);
function C(s) {
  for (let t in p)
    this[t] = p[t];
}
const y = /* @__PURE__ */ function() {
  return P.exports;
}();
export {
  y as default
};
