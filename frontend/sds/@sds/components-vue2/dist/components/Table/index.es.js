// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
var y = function() {
  var t = this, n = t.$createElement, s = t._self._c || n;
  return s("table", {
    attrs: {
      "data-id": "sds-table"
    }
  }, [!!t.$slots.caption || t.caption ? s("caption", [t._t("caption", function() {
    return [t._v(" " + t._s(t.caption) + " ")];
  })], 2) : t._e(), s("colgroup", [t._l(t.displayedFields, function(e) {
    return [t._t("col(".concat(e.key, ")"), function() {
      var o;
      return [s("col", {
        key: e.key,
        class: (o = {}, o[t.sortedColumnClass] = t.sortField === e.key, o)
      })];
    }, {
      active: t.sortField === e.key,
      activeClass: t.sortedColumnClass
    })];
  })], 2), s("thead", [s("tr", t._l(t.displayedFields, function(e) {
    var o;
    return s("th", {
      key: e.key,
      staticClass: "space-x-1 select-none group",
      class: (o = {}, o[t.sortedColumnClass] = t.sortField === e.key, o["cursor-pointer"] = e.sortable, o),
      on: {
        click: function(d) {
          e.sortable && t.handleSortBy(e);
        }
      }
    }, [t._t("head(".concat(e.key, ")"), function() {
      return [t._v(" " + t._s(e.label) + " "), e.sortable ? s("svg", {
        staticClass: "inline-block w-4 h-4 group-hover:opacity-100",
        class: {
          "opacity-100": t.sortField === e.key,
          "opacity-50": t.sortField !== e.key
        },
        attrs: {
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "aria-hidden": "true",
          role: "img",
          preserveAspectRatio: "xMidYMid meet",
          viewBox: "0 0 320 512"
        }
      }, [t.sortField !== e.key ? s("path", {
        attrs: {
          d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z",
          fill: "currentColor"
        }
      }) : t._e(), t.sortField === e.key && t.sortOrder > 0 ? s("path", {
        attrs: {
          d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z",
          fill: "currentColor"
        }
      }) : t._e(), t.sortField === e.key && t.sortOrder < 0 ? s("path", {
        attrs: {
          d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z",
          fill: "currentColor"
        }
      }) : t._e()]) : t._e()];
    }, {
      field: e,
      active: t.sortField === e.key
    })], 2);
  }), 0)]), s("tbody", t._l(t.sortedItems, function(e) {
    return s("tr", {
      key: e.id
    }, [t._l(t.displayedFieldKeys, function(o) {
      return [s(t.cellElement(o), {
        key: o,
        tag: "component"
      }, [t._t("cell(".concat(o, ")"), function() {
        return [t._v(" " + t._s(t.format(e, o)) + " ")];
      }, {
        value: t.format(e, o),
        item: e,
        format: function(d) {
          return t.format(e, d);
        }
      })], 2)];
    })], 2);
  }), 0)]);
}, m = [];
function v(r, t, n, s, e, o, c, d) {
  var i = typeof r == "function" ? r.options : r;
  t && (i.render = t, i.staticRenderFns = n, i._compiled = !0), s && (i.functional = !0), o && (i._scopeId = "data-v-" + o);
  var l;
  if (c ? (l = function(a) {
    a = a || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !a && typeof __VUE_SSR_CONTEXT__ < "u" && (a = __VUE_SSR_CONTEXT__), e && e.call(this, a), a && a._registeredComponents && a._registeredComponents.add(c);
  }, i._ssrRegister = l) : e && (l = d ? function() {
    e.call(
      this,
      (i.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : e), l)
    if (i.functional) {
      i._injectStyles = l;
      var p = i.render;
      i.render = function(h, f) {
        return l.call(f), p(h, f);
      };
    } else {
      var u = i.beforeCreate;
      i.beforeCreate = u ? [].concat(u, l) : [l];
    }
  return {
    exports: r,
    options: i
  };
}
const C = {
  name: "SdsTable",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    fields: {
      type: Array,
      default: () => []
    },
    sortBy: { type: String, default: "" },
    sortDesc: { type: Boolean, default: !1 },
    caption: { type: String, default: null },
    sortedColumnClass: { type: String, default: null }
  },
  data() {
    return {
      sortField: this.sortBy,
      sortOrder: this.sortDesc ? -1 : 1
    };
  },
  computed: {
    sortedItems() {
      return this.items.sort((t, n) => this.sortCompare(t, n, this.sortField));
    },
    displayedFields() {
      return this.fields.filter((r) => !r.hidden);
    },
    displayedFieldKeys() {
      return Object.entries(this.displayedFields).map(([r, t]) => t.key);
    }
  },
  methods: {
    cellElement(r) {
      const t = this.fields.find((n) => n.key === r);
      return t && t.header ? "th" : "td";
    },
    format(r, t) {
      const n = this.fields.find((s) => s.key === t);
      return n && n.format ? n.format(r[t]) : r[t];
    },
    handleSortBy(r) {
      this.sortField = r.key, this.sortOrder = this.sortOrder === 0 ? 1 : this.sortOrder === 1 ? -1 : 1;
    },
    sortCompare(r, t, n) {
      const s = r[n], e = t[n];
      return typeof s == "number" && typeof e == "number" || s instanceof Date && e instanceof Date ? (s < e ? -1 : s > e ? 1 : 0) * this.sortOrder : this.toString(s).localeCompare(this.toString(e)) * this.sortOrder;
    },
    toString(r) {
      return r === null || typeof r > "u" ? "" : r instanceof Object ? Object.keys(r).sort().map((t) => this.toString(r[t])).join(" ") : String(r);
    }
  }
}, _ = {};
var k = /* @__PURE__ */ v(
  C,
  y,
  m,
  !1,
  F,
  null,
  null,
  null
);
function F(r) {
  for (let t in _)
    this[t] = _[t];
}
const g = /* @__PURE__ */ function() {
  return k.exports;
}();
export {
  g as default
};
