// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
function m(e, t) {
  let n, i = !1;
  return () => {
    n && clearTimeout(n), i ? n = setTimeout(e, t) : (e(), i = !0, setTimeout(() => {
      i = !1;
    }, t));
  };
}
var _ = function() {
  var t = this, n = t.$createElement, i = t._self._c || n;
  return i("nav", t._l(t.items, function(r) {
    var o;
    return i("a", {
      key: r.id,
      class: (o = {}, o[t.itemClass] = !0, o[t.activeClass] = t.activeId === r.id, o[t.inactiveClass] = t.activeId !== r.id, o),
      attrs: {
        href: "#".concat(r.id),
        "data-id": "sds-scrollspy"
      },
      on: {
        click: function(d) {
          t.parent && t.scrollToIdTarget(r.id, d);
        }
      }
    }, [t._t("default", function() {
      return [t._v(t._s(r.text))];
    }, {
      item: r
    })], 2);
  }), 0);
}, g = [];
function E(e, t, n, i, r, o, c, d) {
  var s = typeof e == "function" ? e.options : e;
  t && (s.render = t, s.staticRenderFns = n, s._compiled = !0), i && (s.functional = !0), o && (s._scopeId = "data-v-" + o);
  var a;
  if (c ? (a = function(l) {
    l = l || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !l && typeof __VUE_SSR_CONTEXT__ < "u" && (l = __VUE_SSR_CONTEXT__), r && r.call(this, l), l && l._registeredComponents && l._registeredComponents.add(c);
  }, s._ssrRegister = a) : r && (a = d ? function() {
    r.call(
      this,
      (s.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : r), a)
    if (s.functional) {
      s._injectStyles = a;
      var p = s.render;
      s.render = function(v, f) {
        return a.call(f), p(v, f);
      };
    } else {
      var u = s.beforeCreate;
      s.beforeCreate = u ? [].concat(u, a) : [a];
    }
  return {
    exports: e,
    options: s
  };
}
const I = 56, C = {
  name: "SdsScrollspy",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    parent: { type: String, default: void 0 },
    itemClass: { type: String, default: "" },
    activeClass: { type: String, default: "" },
    inactiveClass: { type: String, default: "" }
  },
  data() {
    return {
      activeId: null,
      lastActiveId: null
    };
  },
  computed: {
    parentEl() {
      return typeof document > "u" ? null : this.parent ? document.querySelector(this.parent) : null;
    }
  },
  mounted() {
    requestAnimationFrame(this.setActiveItem), this.onScroll = m(this.setActiveItem, 100), this.parentEl ? this.parentEl.addEventListener("scroll", this.onScroll) : window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    this.parentEl ? this.parentEl.removeEventListener("scroll", this.onScroll) : window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    getAnchorTop(e) {
      const t = document.getElementById(e.id);
      return t ? t.getBoundingClientRect().top - I - 15 : 0;
    },
    isItemActive(e, t, n) {
      const i = this.parentEl && this.parentEl.getBoundingClientRect().top || window.scrollY;
      return e === 0 && i === 0 ? [!0, null] : i < this.getAnchorTop(t) ? [!1, null] : !n || i < this.getAnchorTop(n) ? [!0, t.id] : [!1, null];
    },
    isInViewport(e) {
      const n = document.getElementById(e.id).getBoundingClientRect();
      if (this.parentEl) {
        const i = this.parentEl.getBoundingClientRect();
        return n.top >= i.top && n.bottom <= i.bottom;
      } else
        return n.top >= 0 && n.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    },
    setActiveItem() {
      const e = [];
      if (this.lastActiveId = this.activeId, this.items.forEach((t) => {
        this.isInViewport(t) && e.push(t);
      }), e.length) {
        this.activeId = e[0].id;
        return;
      }
      if (this.lastActiveId) {
        this.activeId = this.lastActiveId;
        return;
      }
      if (this.items.length && !this.activeId) {
        for (let t = 0; t < this.items.length; t++) {
          const n = this.items[t], i = this.items[t + 1], [r, o] = this.isItemActive(t, n, i);
          r && (this.activeId = o);
        }
        return;
      }
    },
    scrollToIdTarget(e, t) {
      if (!this.parentEl)
        return;
      const n = document.getElementById(e);
      !n || (t.preventDefault(), this.parentEl.scrollTop = n.offsetTop - this.parentEl.offsetTop);
    }
  }
}, h = {};
var T = /* @__PURE__ */ E(
  C,
  _,
  g,
  !1,
  A,
  null,
  null,
  null
);
function A(e) {
  for (let t in h)
    this[t] = h[t];
}
const S = /* @__PURE__ */ function() {
  return T.exports;
}();
export {
  S as default
};
