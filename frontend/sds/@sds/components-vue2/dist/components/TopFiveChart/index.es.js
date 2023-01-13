// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
var h = function() {
  var r = this, u = r.$createElement, t = r._self._c || u;
  return t("div", {
    staticClass: "space-y-4 chart",
    attrs: {
      "data-id": "sds-top-five-chart"
    }
  }, [t("h3", {
    class: {
      "text-lg font-bold": r.smallHeading,
      "text-2xl font-bold": !r.smallHeading
    }
  }, [r._v(" " + r._s(r.title) + " ")]), r.results.length > 0 ? t("div", [t("ul", {
    staticClass: "space-y-6"
  }, [r._l(r.results, function(s, i) {
    return t("li", {
      key: s.id
    }, [t("div", {
      staticClass: "flex"
    }, [t("div", {
      staticClass: "flex-grow"
    }, [t("div", {
      staticClass: "mb-2"
    }, [t("div", {
      staticClass: "h-6 mr-2 rounded",
      class: [r.getProgressColor(i)],
      style: {
        width: "".concat(r.resultValue(s.count), "%")
      },
      attrs: {
        role: "progressbar",
        title: s.count,
        "aria-valuenow": s.count,
        "aria-valuemin": "0",
        "aria-valuemax": r.maxResultValue
      }
    }, [t("span", {
      staticClass: "sr-only"
    }, [r._v(r._s(r.resultCountDisplay(s.count)) + " " + r._s(s.title))])])]), t("div", {
      staticClass: "text-sm font-semibold chart-label-section"
    }, [r._v(" " + r._s(r.resultCountDisplay(s.count)) + " \xB7 "), r.doNotLinkEntries ? t("span", [r._v(r._s(s.title))]) : [r.resultHasUrl(s) ? [t("a", {
      staticClass: "hover:underline focus:underline focus:outline-none",
      attrs: {
        href: s.url
      }
    }, [r._v(r._s(s.title))])] : [t("a", {
      staticClass: "hover:underline focus:underline focus:outline-none",
      attrs: {
        href: "#"
      },
      on: {
        click: function(f) {
          return f.preventDefault(), r.resultClick(s);
        }
      }
    }, [r._v(r._s(s.title))])]]], 2)])])]);
  }), r.viewAllUrl !== null ? t("li", {
    staticClass: "mt-4"
  }, [t("a", {
    staticClass: "link link-primary link-cta",
    attrs: {
      href: r.viewAllUrl
    }
  }, [r._v(" View All ")])]) : r._e()], 2)]) : t("div", [r.entriesHaveAllRequiredProps ? t("p", [r._v(" " + r._s(r.noDataMsg) + " ")]) : t("p", [r._v(" " + r._s(r.missingPropsMsg) + " ")])])]);
}, v = [];
function d(e, r, u, t, s, i, o, f) {
  var l = typeof e == "function" ? e.options : e;
  r && (l.render = r, l.staticRenderFns = u, l._compiled = !0), t && (l.functional = !0), i && (l._scopeId = "data-v-" + i);
  var n;
  if (o ? (n = function(a) {
    a = a || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !a && typeof __VUE_SSR_CONTEXT__ < "u" && (a = __VUE_SSR_CONTEXT__), s && s.call(this, a), a && a._registeredComponents && a._registeredComponents.add(o);
  }, l._ssrRegister = n) : s && (n = f ? function() {
    s.call(
      this,
      (l.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), n)
    if (l.functional) {
      l._injectStyles = n;
      var b = l.render;
      l.render = function(_, c) {
        return n.call(c), b(_, c);
      };
    } else {
      var g = l.beforeCreate;
      l.beforeCreate = g ? [].concat(g, n) : [n];
    }
  return {
    exports: e,
    options: l
  };
}
const y = {
  name: "SdsTopFiveChart",
  props: {
    title: {
      type: String,
      default: null
    },
    entries: {
      type: Array,
      default: () => []
    },
    doNotLinkEntries: {
      type: Boolean,
      default: !1
    },
    viewAllUrl: {
      type: String,
      default: null
    },
    progressColor: {
      type: String,
      default: "blue"
    },
    showPercent: {
      type: Boolean,
      default: !1
    },
    smallHeading: {
      type: Boolean,
      default: !1
    },
    noDataMsg: {
      type: String,
      default: "There is no chart data to display at this time."
    },
    missingPropsMsg: {
      type: String,
      default: "The chart data is malformed and cannot be displayed at this time."
    }
  },
  computed: {
    results() {
      return this.entriesHaveAllRequiredProps ? this.entries.slice(0, 5) : [];
    },
    entriesHaveAllRequiredProps() {
      return this.entries.length < 1 ? !0 : this.entries.every((e) => Object.prototype.hasOwnProperty.call(e, "id") && Object.prototype.hasOwnProperty.call(e, "title") && Object.prototype.hasOwnProperty.call(e, "count"));
    },
    maxResultValue() {
      return Math.max.apply(
        Math,
        this.results.map((e) => e.count)
      );
    }
  },
  methods: {
    resultValue(e) {
      return e * 100 / this.maxResultValue;
    },
    resultCountDisplay(e) {
      return this.showPercent ? `${e}%` : e;
    },
    resultHasUrl(e) {
      return typeof e.url < "u";
    },
    resultClick(e) {
      this.$emit("result-click", e);
    },
    getProgressColor(e) {
      switch (this.progressColor) {
        case "teal":
          if (e === 0)
            return "bg-teal-900";
          if (e === 1)
            return "bg-teal-700";
          if (e === 2)
            return "bg-teal-500";
          if (e === 3)
            return "bg-teal-300";
          if (e === 4)
            return "bg-teal-100";
          break;
        case "red":
          if (e === 0)
            return "bg-red-900";
          if (e === 1)
            return "bg-red-700";
          if (e === 2)
            return "bg-red-500";
          if (e === 3)
            return "bg-red-300";
          if (e === 4)
            return "bg-red-100";
          break;
        case "gray":
          if (e === 0)
            return "bg-gray-900";
          if (e === 1)
            return "bg-gray-700";
          if (e === 2)
            return "bg-gray-500";
          if (e === 3)
            return "bg-gray-300";
          if (e === 4)
            return "bg-gray-100";
          break;
        case "green":
          if (e === 0)
            return "bg-green-900";
          if (e === 1)
            return "bg-green-700";
          if (e === 2)
            return "bg-green-500";
          if (e === 3)
            return "bg-green-300";
          if (e === 4)
            return "bg-green-100";
          break;
        case "orange":
          if (e === 0)
            return "bg-orange-900";
          if (e === 1)
            return "bg-orange-700";
          if (e === 2)
            return "bg-orange-500";
          if (e === 3)
            return "bg-orange-300";
          if (e === 4)
            return "bg-orange-100";
          break;
        case "pink":
          if (e === 0)
            return "bg-pink-900";
          if (e === 1)
            return "bg-pink-700";
          if (e === 2)
            return "bg-pink-500";
          if (e === 3)
            return "bg-pink-300";
          if (e === 4)
            return "bg-pink-100";
          break;
        case "indigo":
          if (e === 0)
            return "bg-indigo-900";
          if (e === 1)
            return "bg-indigo-700";
          if (e === 2)
            return "bg-indigo-500";
          if (e === 3)
            return "bg-indigo-300";
          if (e === 4)
            return "bg-indigo-100";
          break;
        case "purple":
          if (e === 0)
            return "bg-purple-900";
          if (e === 1)
            return "bg-purple-700";
          if (e === 2)
            return "bg-purple-500";
          if (e === 3)
            return "bg-purple-300";
          if (e === 4)
            return "bg-purple-100";
          break;
        case "blue":
        default:
          if (e === 0)
            return "bg-blue-900";
          if (e === 1)
            return "bg-blue-700";
          if (e === 2)
            return "bg-blue-500";
          if (e === 3)
            return "bg-blue-300";
          if (e === 4)
            return "bg-blue-100";
          break;
      }
    }
  }
}, p = {};
var m = /* @__PURE__ */ d(
  y,
  h,
  v,
  !1,
  C,
  null,
  null,
  null
);
function C(e) {
  for (let r in p)
    this[r] = p[r];
}
const k = /* @__PURE__ */ function() {
  return m.exports;
}();
export {
  k as default
};
