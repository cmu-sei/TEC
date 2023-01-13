// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
function w(r) {
  if (r === null || r === !0 || r === !1)
    return NaN;
  var t = Number(r);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function u(r, t) {
  if (t.length < r)
    throw new TypeError(r + " argument" + (r > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function V(r) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? V = function(e) {
    return typeof e;
  } : V = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, V(r);
}
function l(r) {
  u(1, arguments);
  var t = Object.prototype.toString.call(r);
  return r instanceof Date || V(r) === "object" && t === "[object Date]" ? new Date(r.getTime()) : typeof r == "number" || t === "[object Number]" ? new Date(r) : ((typeof r == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function W(r, t) {
  u(2, arguments);
  var e = l(r), a = w(t);
  if (isNaN(a))
    return new Date(NaN);
  if (!a)
    return e;
  var n = e.getDate(), i = new Date(e.getTime());
  i.setMonth(e.getMonth() + a + 1, 0);
  var s = i.getDate();
  return n >= s ? i : (e.setFullYear(i.getFullYear(), i.getMonth(), n), e);
}
function kt(r, t) {
  u(2, arguments);
  var e = l(r).getTime(), a = w(t);
  return new Date(e + a);
}
var St = {};
function j() {
  return St;
}
function Ot(r) {
  var t = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
  return t.setUTCFullYear(r.getFullYear()), r.getTime() - t.getTime();
}
function it(r) {
  u(1, arguments);
  var t = l(r);
  return t.setHours(0, 0, 0, 0), t;
}
function B(r) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? B = function(e) {
    return typeof e;
  } : B = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, B(r);
}
function st(r) {
  u(1, arguments);
  var t;
  if (r && typeof r.forEach == "function")
    t = r;
  else if (B(r) === "object" && r !== null)
    t = Array.prototype.slice.call(r);
  else
    return new Date(NaN);
  var e;
  return t.forEach(function(a) {
    var n = l(a);
    (e === void 0 || e < n || isNaN(Number(n))) && (e = n);
  }), e || new Date(NaN);
}
function X(r) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? X = function(e) {
    return typeof e;
  } : X = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, X(r);
}
function ot(r) {
  u(1, arguments);
  var t;
  if (r && typeof r.forEach == "function")
    t = r;
  else if (X(r) === "object" && r !== null)
    t = Array.prototype.slice.call(r);
  else
    return new Date(NaN);
  var e;
  return t.forEach(function(a) {
    var n = l(a);
    (e === void 0 || e > n || isNaN(n.getDate())) && (e = n);
  }), e || new Date(NaN);
}
function k(r, t) {
  u(2, arguments);
  var e = it(r), a = it(t);
  return e.getTime() === a.getTime();
}
function Q(r) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Q = function(e) {
    return typeof e;
  } : Q = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Q(r);
}
function b(r) {
  return u(1, arguments), r instanceof Date || Q(r) === "object" && Object.prototype.toString.call(r) === "[object Date]";
}
function Nt(r) {
  if (u(1, arguments), !b(r) && typeof r != "number")
    return !1;
  var t = l(r);
  return !isNaN(Number(t));
}
function dt(r) {
  u(1, arguments);
  var t = l(r);
  return t.setHours(23, 59, 59, 999), t;
}
function Y(r) {
  u(1, arguments);
  var t = l(r);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Pt(r, t) {
  u(2, arguments);
  var e = w(t);
  return kt(r, -e);
}
var Wt = 864e5;
function It(r) {
  u(1, arguments);
  var t = l(r), e = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var a = t.getTime(), n = e - a;
  return Math.floor(n / Wt) + 1;
}
function J(r) {
  u(1, arguments);
  var t = 1, e = l(r), a = e.getUTCDay(), n = (a < t ? 7 : 0) + a - t;
  return e.setUTCDate(e.getUTCDate() - n), e.setUTCHours(0, 0, 0, 0), e;
}
function bt(r) {
  u(1, arguments);
  var t = l(r), e = t.getUTCFullYear(), a = new Date(0);
  a.setUTCFullYear(e + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var n = J(a), i = new Date(0);
  i.setUTCFullYear(e, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var s = J(i);
  return t.getTime() >= n.getTime() ? e + 1 : t.getTime() >= s.getTime() ? e : e - 1;
}
function Yt(r) {
  u(1, arguments);
  var t = bt(r), e = new Date(0);
  e.setUTCFullYear(t, 0, 4), e.setUTCHours(0, 0, 0, 0);
  var a = J(e);
  return a;
}
var Ut = 6048e5;
function $t(r) {
  u(1, arguments);
  var t = l(r), e = J(t).getTime() - Yt(t).getTime();
  return Math.round(e / Ut) + 1;
}
function z(r, t) {
  var e, a, n, i, s, o, d, c;
  u(1, arguments);
  var v = j(), m = w((e = (a = (n = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (s = t.locale) === null || s === void 0 || (o = s.options) === null || o === void 0 ? void 0 : o.weekStartsOn) !== null && n !== void 0 ? n : v.weekStartsOn) !== null && a !== void 0 ? a : (d = v.locale) === null || d === void 0 || (c = d.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && e !== void 0 ? e : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = l(r), g = f.getUTCDay(), y = (g < m ? 7 : 0) + g - m;
  return f.setUTCDate(f.getUTCDate() - y), f.setUTCHours(0, 0, 0, 0), f;
}
function wt(r, t) {
  var e, a, n, i, s, o, d, c;
  u(1, arguments);
  var v = l(r), m = v.getUTCFullYear(), f = j(), g = w((e = (a = (n = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (s = t.locale) === null || s === void 0 || (o = s.options) === null || o === void 0 ? void 0 : o.firstWeekContainsDate) !== null && n !== void 0 ? n : f.firstWeekContainsDate) !== null && a !== void 0 ? a : (d = f.locale) === null || d === void 0 || (c = d.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && e !== void 0 ? e : 1);
  if (!(g >= 1 && g <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var y = new Date(0);
  y.setUTCFullYear(m + 1, 0, g), y.setUTCHours(0, 0, 0, 0);
  var $ = z(y, t), S = new Date(0);
  S.setUTCFullYear(m, 0, g), S.setUTCHours(0, 0, 0, 0);
  var E = z(S, t);
  return v.getTime() >= $.getTime() ? m + 1 : v.getTime() >= E.getTime() ? m : m - 1;
}
function Et(r, t) {
  var e, a, n, i, s, o, d, c;
  u(1, arguments);
  var v = j(), m = w((e = (a = (n = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (s = t.locale) === null || s === void 0 || (o = s.options) === null || o === void 0 ? void 0 : o.firstWeekContainsDate) !== null && n !== void 0 ? n : v.firstWeekContainsDate) !== null && a !== void 0 ? a : (d = v.locale) === null || d === void 0 || (c = d.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && e !== void 0 ? e : 1), f = wt(r, t), g = new Date(0);
  g.setUTCFullYear(f, 0, m), g.setUTCHours(0, 0, 0, 0);
  var y = z(g, t);
  return y;
}
var Ht = 6048e5;
function Ft(r, t) {
  u(1, arguments);
  var e = l(r), a = z(e, t).getTime() - Et(e, t).getTime();
  return Math.round(a / Ht) + 1;
}
function h(r, t) {
  for (var e = r < 0 ? "-" : "", a = Math.abs(r).toString(); a.length < t; )
    a = "0" + a;
  return e + a;
}
var Rt = {
  y: function(t, e) {
    var a = t.getUTCFullYear(), n = a > 0 ? a : 1 - a;
    return h(e === "yy" ? n % 100 : n, e.length);
  },
  M: function(t, e) {
    var a = t.getUTCMonth();
    return e === "M" ? String(a + 1) : h(a + 1, 2);
  },
  d: function(t, e) {
    return h(t.getUTCDate(), e.length);
  },
  a: function(t, e) {
    var a = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return a.toUpperCase();
      case "aaa":
        return a;
      case "aaaaa":
        return a[0];
      case "aaaa":
      default:
        return a === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(t, e) {
    return h(t.getUTCHours() % 12 || 12, e.length);
  },
  H: function(t, e) {
    return h(t.getUTCHours(), e.length);
  },
  m: function(t, e) {
    return h(t.getUTCMinutes(), e.length);
  },
  s: function(t, e) {
    return h(t.getUTCSeconds(), e.length);
  },
  S: function(t, e) {
    var a = e.length, n = t.getUTCMilliseconds(), i = Math.floor(n * Math.pow(10, a - 3));
    return h(i, e.length);
  }
};
const _ = Rt;
var U = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, At = {
  G: function(t, e, a) {
    var n = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (e) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(n, {
          width: "abbreviated"
        });
      case "GGGGG":
        return a.era(n, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return a.era(n, {
          width: "wide"
        });
    }
  },
  y: function(t, e, a) {
    if (e === "yo") {
      var n = t.getUTCFullYear(), i = n > 0 ? n : 1 - n;
      return a.ordinalNumber(i, {
        unit: "year"
      });
    }
    return _.y(t, e);
  },
  Y: function(t, e, a, n) {
    var i = wt(t, n), s = i > 0 ? i : 1 - i;
    if (e === "YY") {
      var o = s % 100;
      return h(o, 2);
    }
    return e === "Yo" ? a.ordinalNumber(s, {
      unit: "year"
    }) : h(s, e.length);
  },
  R: function(t, e) {
    var a = bt(t);
    return h(a, e.length);
  },
  u: function(t, e) {
    var a = t.getUTCFullYear();
    return h(a, e.length);
  },
  Q: function(t, e, a) {
    var n = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (e) {
      case "Q":
        return String(n);
      case "QQ":
        return h(n, 2);
      case "Qo":
        return a.ordinalNumber(n, {
          unit: "quarter"
        });
      case "QQQ":
        return a.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(t, e, a) {
    var n = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (e) {
      case "q":
        return String(n);
      case "qq":
        return h(n, 2);
      case "qo":
        return a.ordinalNumber(n, {
          unit: "quarter"
        });
      case "qqq":
        return a.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(t, e, a) {
    var n = t.getUTCMonth();
    switch (e) {
      case "M":
      case "MM":
        return _.M(t, e);
      case "Mo":
        return a.ordinalNumber(n + 1, {
          unit: "month"
        });
      case "MMM":
        return a.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return a.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(t, e, a) {
    var n = t.getUTCMonth();
    switch (e) {
      case "L":
        return String(n + 1);
      case "LL":
        return h(n + 1, 2);
      case "Lo":
        return a.ordinalNumber(n + 1, {
          unit: "month"
        });
      case "LLL":
        return a.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return a.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(t, e, a, n) {
    var i = Ft(t, n);
    return e === "wo" ? a.ordinalNumber(i, {
      unit: "week"
    }) : h(i, e.length);
  },
  I: function(t, e, a) {
    var n = $t(t);
    return e === "Io" ? a.ordinalNumber(n, {
      unit: "week"
    }) : h(n, e.length);
  },
  d: function(t, e, a) {
    return e === "do" ? a.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : _.d(t, e);
  },
  D: function(t, e, a) {
    var n = It(t);
    return e === "Do" ? a.ordinalNumber(n, {
      unit: "dayOfYear"
    }) : h(n, e.length);
  },
  E: function(t, e, a) {
    var n = t.getUTCDay();
    switch (e) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return a.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return a.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(t, e, a, n) {
    var i = t.getUTCDay(), s = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "e":
        return String(s);
      case "ee":
        return h(s, 2);
      case "eo":
        return a.ordinalNumber(s, {
          unit: "day"
        });
      case "eee":
        return a.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return a.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return a.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(t, e, a, n) {
    var i = t.getUTCDay(), s = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "c":
        return String(s);
      case "cc":
        return h(s, e.length);
      case "co":
        return a.ordinalNumber(s, {
          unit: "day"
        });
      case "ccc":
        return a.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return a.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return a.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(t, e, a) {
    var n = t.getUTCDay(), i = n === 0 ? 7 : n;
    switch (e) {
      case "i":
        return String(i);
      case "ii":
        return h(i, e.length);
      case "io":
        return a.ordinalNumber(i, {
          unit: "day"
        });
      case "iii":
        return a.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return a.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return a.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return a.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(t, e, a) {
    var n = t.getUTCHours(), i = n / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return a.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return a.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return a.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(t, e, a) {
    var n = t.getUTCHours(), i;
    switch (n === 12 ? i = U.noon : n === 0 ? i = U.midnight : i = n / 12 >= 1 ? "pm" : "am", e) {
      case "b":
      case "bb":
        return a.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return a.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return a.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(t, e, a) {
    var n = t.getUTCHours(), i;
    switch (n >= 17 ? i = U.evening : n >= 12 ? i = U.afternoon : n >= 4 ? i = U.morning : i = U.night, e) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(t, e, a) {
    if (e === "ho") {
      var n = t.getUTCHours() % 12;
      return n === 0 && (n = 12), a.ordinalNumber(n, {
        unit: "hour"
      });
    }
    return _.h(t, e);
  },
  H: function(t, e, a) {
    return e === "Ho" ? a.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : _.H(t, e);
  },
  K: function(t, e, a) {
    var n = t.getUTCHours() % 12;
    return e === "Ko" ? a.ordinalNumber(n, {
      unit: "hour"
    }) : h(n, e.length);
  },
  k: function(t, e, a) {
    var n = t.getUTCHours();
    return n === 0 && (n = 24), e === "ko" ? a.ordinalNumber(n, {
      unit: "hour"
    }) : h(n, e.length);
  },
  m: function(t, e, a) {
    return e === "mo" ? a.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : _.m(t, e);
  },
  s: function(t, e, a) {
    return e === "so" ? a.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : _.s(t, e);
  },
  S: function(t, e) {
    return _.S(t, e);
  },
  X: function(t, e, a, n) {
    var i = n._originalDate || t, s = i.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (e) {
      case "X":
        return lt(s);
      case "XXXX":
      case "XX":
        return I(s);
      case "XXXXX":
      case "XXX":
      default:
        return I(s, ":");
    }
  },
  x: function(t, e, a, n) {
    var i = n._originalDate || t, s = i.getTimezoneOffset();
    switch (e) {
      case "x":
        return lt(s);
      case "xxxx":
      case "xx":
        return I(s);
      case "xxxxx":
      case "xxx":
      default:
        return I(s, ":");
    }
  },
  O: function(t, e, a, n) {
    var i = n._originalDate || t, s = i.getTimezoneOffset();
    switch (e) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ut(s, ":");
      case "OOOO":
      default:
        return "GMT" + I(s, ":");
    }
  },
  z: function(t, e, a, n) {
    var i = n._originalDate || t, s = i.getTimezoneOffset();
    switch (e) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ut(s, ":");
      case "zzzz":
      default:
        return "GMT" + I(s, ":");
    }
  },
  t: function(t, e, a, n) {
    var i = n._originalDate || t, s = Math.floor(i.getTime() / 1e3);
    return h(s, e.length);
  },
  T: function(t, e, a, n) {
    var i = n._originalDate || t, s = i.getTime();
    return h(s, e.length);
  }
};
function ut(r, t) {
  var e = r > 0 ? "-" : "+", a = Math.abs(r), n = Math.floor(a / 60), i = a % 60;
  if (i === 0)
    return e + String(n);
  var s = t || "";
  return e + String(n) + s + h(i, 2);
}
function lt(r, t) {
  if (r % 60 === 0) {
    var e = r > 0 ? "-" : "+";
    return e + h(Math.abs(r) / 60, 2);
  }
  return I(r, t);
}
function I(r, t) {
  var e = t || "", a = r > 0 ? "-" : "+", n = Math.abs(r), i = h(Math.floor(n / 60), 2), s = h(n % 60, 2);
  return a + i + e + s;
}
const Lt = At;
var ct = function(t, e) {
  switch (t) {
    case "P":
      return e.date({
        width: "short"
      });
    case "PP":
      return e.date({
        width: "medium"
      });
    case "PPP":
      return e.date({
        width: "long"
      });
    case "PPPP":
    default:
      return e.date({
        width: "full"
      });
  }
}, Mt = function(t, e) {
  switch (t) {
    case "p":
      return e.time({
        width: "short"
      });
    case "pp":
      return e.time({
        width: "medium"
      });
    case "ppp":
      return e.time({
        width: "long"
      });
    case "pppp":
    default:
      return e.time({
        width: "full"
      });
  }
}, qt = function(t, e) {
  var a = t.match(/(P+)(p+)?/) || [], n = a[1], i = a[2];
  if (!i)
    return ct(t, e);
  var s;
  switch (n) {
    case "P":
      s = e.dateTime({
        width: "short"
      });
      break;
    case "PP":
      s = e.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      s = e.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      s = e.dateTime({
        width: "full"
      });
      break;
  }
  return s.replace("{{date}}", ct(n, e)).replace("{{time}}", Mt(i, e));
}, Gt = {
  p: Mt,
  P: qt
};
const Vt = Gt;
var Bt = ["D", "DD"], Xt = ["YY", "YYYY"];
function Qt(r) {
  return Bt.indexOf(r) !== -1;
}
function Jt(r) {
  return Xt.indexOf(r) !== -1;
}
function ht(r, t, e) {
  if (r === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (r === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (r === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (r === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var zt = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, jt = function(t, e, a) {
  var n, i = zt[t];
  return typeof i == "string" ? n = i : e === 1 ? n = i.one : n = i.other.replace("{{count}}", e.toString()), a != null && a.addSuffix ? a.comparison && a.comparison > 0 ? "in " + n : n + " ago" : n;
};
const Kt = jt;
function nt(r) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.width ? String(t.width) : r.defaultWidth, a = r.formats[e] || r.formats[r.defaultWidth];
    return a;
  };
}
var Zt = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, te = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ee = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ae = {
  date: nt({
    formats: Zt,
    defaultWidth: "full"
  }),
  time: nt({
    formats: te,
    defaultWidth: "full"
  }),
  dateTime: nt({
    formats: ee,
    defaultWidth: "full"
  })
};
const ne = ae;
var re = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ie = function(t, e, a, n) {
  return re[t];
};
const se = ie;
function R(r) {
  return function(t, e) {
    var a = e != null && e.context ? String(e.context) : "standalone", n;
    if (a === "formatting" && r.formattingValues) {
      var i = r.defaultFormattingWidth || r.defaultWidth, s = e != null && e.width ? String(e.width) : i;
      n = r.formattingValues[s] || r.formattingValues[i];
    } else {
      var o = r.defaultWidth, d = e != null && e.width ? String(e.width) : r.defaultWidth;
      n = r.values[d] || r.values[o];
    }
    var c = r.argumentCallback ? r.argumentCallback(t) : t;
    return n[c];
  };
}
var oe = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, de = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ue = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, le = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, ce = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, he = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, fe = function(t, e) {
  var a = Number(t), n = a % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return a + "st";
      case 2:
        return a + "nd";
      case 3:
        return a + "rd";
    }
  return a + "th";
}, me = {
  ordinalNumber: fe,
  era: R({
    values: oe,
    defaultWidth: "wide"
  }),
  quarter: R({
    values: de,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: R({
    values: ue,
    defaultWidth: "wide"
  }),
  day: R({
    values: le,
    defaultWidth: "wide"
  }),
  dayPeriod: R({
    values: ce,
    defaultWidth: "wide",
    formattingValues: he,
    defaultFormattingWidth: "wide"
  })
};
const ve = me;
function A(r) {
  return function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = e.width, n = a && r.matchPatterns[a] || r.matchPatterns[r.defaultMatchWidth], i = t.match(n);
    if (!i)
      return null;
    var s = i[0], o = a && r.parsePatterns[a] || r.parsePatterns[r.defaultParseWidth], d = Array.isArray(o) ? pe(o, function(m) {
      return m.test(s);
    }) : ge(o, function(m) {
      return m.test(s);
    }), c;
    c = r.valueCallback ? r.valueCallback(d) : d, c = e.valueCallback ? e.valueCallback(c) : c;
    var v = t.slice(s.length);
    return {
      value: c,
      rest: v
    };
  };
}
function ge(r, t) {
  for (var e in r)
    if (r.hasOwnProperty(e) && t(r[e]))
      return e;
}
function pe(r, t) {
  for (var e = 0; e < r.length; e++)
    if (t(r[e]))
      return e;
}
function ye(r) {
  return function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.match(r.matchPattern);
    if (!a)
      return null;
    var n = a[0], i = t.match(r.parsePattern);
    if (!i)
      return null;
    var s = r.valueCallback ? r.valueCallback(i[0]) : i[0];
    s = e.valueCallback ? e.valueCallback(s) : s;
    var o = t.slice(n.length);
    return {
      value: s,
      rest: o
    };
  };
}
var be = /^(\d+)(th|st|nd|rd)?/i, we = /\d+/i, Me = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Te = {
  any: [/^b/i, /^(a|c)/i]
}, De = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, xe = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ce = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, _e = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, ke = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Se = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Oe = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ne = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Pe = {
  ordinalNumber: ye({
    matchPattern: be,
    parsePattern: we,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: A({
    matchPatterns: Me,
    defaultMatchWidth: "wide",
    parsePatterns: Te,
    defaultParseWidth: "any"
  }),
  quarter: A({
    matchPatterns: De,
    defaultMatchWidth: "wide",
    parsePatterns: xe,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: A({
    matchPatterns: Ce,
    defaultMatchWidth: "wide",
    parsePatterns: _e,
    defaultParseWidth: "any"
  }),
  day: A({
    matchPatterns: ke,
    defaultMatchWidth: "wide",
    parsePatterns: Se,
    defaultParseWidth: "any"
  }),
  dayPeriod: A({
    matchPatterns: Oe,
    defaultMatchWidth: "any",
    parsePatterns: Ne,
    defaultParseWidth: "any"
  })
};
const We = Pe;
var Ie = {
  code: "en-US",
  formatDistance: Kt,
  formatLong: ne,
  formatRelative: se,
  localize: ve,
  match: We,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Ye = Ie;
var Ue = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, $e = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ee = /^'([^]*?)'?$/, He = /''/g, Fe = /[a-zA-Z]/;
function O(r, t, e) {
  var a, n, i, s, o, d, c, v, m, f, g, y, $, S, E, K, Z, tt;
  u(2, arguments);
  var Tt = String(t), H = j(), F = (a = (n = e == null ? void 0 : e.locale) !== null && n !== void 0 ? n : H.locale) !== null && a !== void 0 ? a : Ye, et = w((i = (s = (o = (d = e == null ? void 0 : e.firstWeekContainsDate) !== null && d !== void 0 ? d : e == null || (c = e.locale) === null || c === void 0 || (v = c.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && o !== void 0 ? o : H.firstWeekContainsDate) !== null && s !== void 0 ? s : (m = H.locale) === null || m === void 0 || (f = m.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(et >= 1 && et <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var at = w((g = (y = ($ = (S = e == null ? void 0 : e.weekStartsOn) !== null && S !== void 0 ? S : e == null || (E = e.locale) === null || E === void 0 || (K = E.options) === null || K === void 0 ? void 0 : K.weekStartsOn) !== null && $ !== void 0 ? $ : H.weekStartsOn) !== null && y !== void 0 ? y : (Z = H.locale) === null || Z === void 0 || (tt = Z.options) === null || tt === void 0 ? void 0 : tt.weekStartsOn) !== null && g !== void 0 ? g : 0);
  if (!(at >= 0 && at <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!F.localize)
    throw new RangeError("locale must contain localize property");
  if (!F.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var L = l(r);
  if (!Nt(L))
    throw new RangeError("Invalid time value");
  var Dt = Ot(L), xt = Pt(L, Dt), Ct = {
    firstWeekContainsDate: et,
    weekStartsOn: at,
    locale: F,
    _originalDate: L
  }, _t = Tt.match($e).map(function(M) {
    var C = M[0];
    if (C === "p" || C === "P") {
      var q = Vt[C];
      return q(M, F.formatLong);
    }
    return M;
  }).join("").match(Ue).map(function(M) {
    if (M === "''")
      return "'";
    var C = M[0];
    if (C === "'")
      return Re(M);
    var q = Lt[C];
    if (q)
      return !(e != null && e.useAdditionalWeekYearTokens) && Jt(M) && ht(M, t, String(r)), !(e != null && e.useAdditionalDayOfYearTokens) && Qt(M) && ht(M, t, String(r)), q(xt, M, F.localize, Ct);
    if (C.match(Fe))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + C + "`");
    return M;
  }).join("");
  return _t;
}
function Re(r) {
  var t = r.match(Ee);
  return t ? t[1].replace(He, "'") : r;
}
function ft(r) {
  u(1, arguments);
  var t = l(r), e = t.getDay();
  return e;
}
function mt(r) {
  u(1, arguments);
  var t = l(r), e = t.getFullYear(), a = t.getMonth(), n = new Date(0);
  return n.setFullYear(e, a + 1, 0), n.setHours(0, 0, 0, 0), n.getDate();
}
function x(r) {
  u(1, arguments);
  var t = l(r), e = t.getHours();
  return e;
}
function G(r, t) {
  u(2, arguments);
  var e = l(r), a = l(t);
  return e.getTime() > a.getTime();
}
function vt(r, t) {
  u(2, arguments);
  var e = l(r), a = l(t);
  return e.getTime() < a.getTime();
}
function gt(r, t) {
  u(2, arguments);
  var e = l(r), a = l(t);
  return e.getTime() === a.getTime();
}
function rt(r) {
  return u(1, arguments), k(r, Date.now());
}
function Ae(r, t) {
  u(2, arguments);
  var e = l(r).getTime(), a = l(t.start).getTime(), n = l(t.end).getTime();
  if (!(a <= n))
    throw new RangeError("Invalid interval");
  return e >= a && e <= n;
}
function p(r, t) {
  u(2, arguments);
  var e = l(r), a = w(t);
  return e.setDate(a), e;
}
function T(r, t) {
  u(2, arguments);
  var e = l(r), a = w(t);
  return e.setHours(a), e;
}
function N(r, t) {
  u(2, arguments);
  var e = l(r), a = w(t);
  return e.setMilliseconds(a), e;
}
function D(r, t) {
  u(2, arguments);
  var e = l(r), a = w(t);
  return e.setMinutes(a), e;
}
function P(r, t) {
  u(2, arguments);
  var e = l(r), a = w(t);
  return e.setSeconds(a), e;
}
function pt(r, t) {
  u(2, arguments);
  var e = w(t);
  return W(r, -e);
}
var Le = function() {
  var t = this, e = t.$createElement, a = t._self._c || e;
  return a("div", {
    staticClass: "select-none",
    attrs: {
      "data-id": "sds-calendar",
      "data-testid": "calendar"
    }
  }, [t.showCalendars ? a("div", [t.view === "days" ? [a("div", {
    staticClass: "flex relative gap-1 mb-2 w-56",
    class: {
      "sm:w-120": t.isRange
    }
  }, [a("button", {
    staticClass: "absolute left-0 top-0 text-gray-700 dark:text-gray-300 p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded disabled:pointer-events-none disabled:opacity-50",
    attrs: {
      type: "button",
      tabindex: "-1",
      disabled: !t.canGoToPrevMonth
    },
    on: {
      click: t.goToPrevMonth
    }
  }, [a("span", {
    staticClass: "sr-only"
  }, [t._v("Go to previous month")]), a("svg", {
    staticClass: "w-5 h-5",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "32",
      height: "32",
      preserveAspectRatio: "xMidYMid meet",
      viewBox: "0 0 512 512"
    }
  }, [a("path", {
    attrs: {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "48",
      d: "M328 112L184 256l144 144"
    }
  })])]), a("div", {
    staticClass: "flex-grow"
  }, [a("button", {
    staticClass: "m-auto text-lg font-semibold flex gap-1 text-gray-900 hover:text-gray-500 dark:text-gray-100",
    attrs: {
      type: "button",
      tabindex: "-1"
    },
    on: {
      click: function(i) {
        t.view = "years";
      }
    }
  }, [a("span", [t._v(t._s(t.calendarMonthTitle) + " " + t._s(t.calendarYearTitle))])])]), t.isRange ? a("div", {
    staticClass: "hidden flex-grow sm:block"
  }, [a("button", {
    staticClass: "m-auto text-lg font-semibold flex gap-1 text-gray-900 hover:text-gray-500 dark:text-gray-100",
    attrs: {
      type: "button",
      tabindex: "-1"
    },
    on: {
      click: function(i) {
        t.view = "years";
      }
    }
  }, [a("span", [t._v(t._s(t.calendarNextMonthTitle) + " " + t._s(t.calendarNextYearTitle))])])]) : t._e(), a("button", {
    staticClass: "absolute right-0 top-0 text-gray-700 dark:text-gray-300 p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded disabled:pointer-events-none disabled:opacity-50",
    attrs: {
      type: "button",
      tabindex: "-1",
      disabled: !t.canGoToNextMonth
    },
    on: {
      click: t.goToNextMonth
    }
  }, [a("span", {
    staticClass: "sr-only"
  }, [t._v("Go to next month")]), a("svg", {
    staticClass: "w-5 h-5",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "32",
      height: "32",
      preserveAspectRatio: "xMidYMid meet",
      viewBox: "0 0 512 512"
    }
  }, [a("path", {
    attrs: {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "48",
      d: "M184 112l144 144l-144 144"
    }
  })])])]), a("div", {
    staticClass: "flex flex-col sm:flex-row sm:gap-8"
  }, [a("div", {
    staticClass: "grid grid-cols-7 w-56 h-60 place-content-start"
  }, [t._l(t.calendarDaysOfWeek, function(n) {
    return a("div", {
      key: n,
      staticClass: "text-sm font-bold text-gray-400 text-center uppercase mb-1"
    }, [t._v(" " + t._s(n.charAt(0)) + " ")]);
  }), t._l(t.calendarDaysInMonth, function(n) {
    return a("div", {
      key: n,
      class: ["w-8 h-8 mb-1", n === 1 ? "col-start-".concat(t.calendarStartOfMonth) : "", t.dateIsWithinInterval(n) ? "bg-blue-200 dark:bg-blue-800" : "", t.dateIsAtStartOfInterval(n) ? "bg-blue-200 dark:bg-blue-800 rounded-l-full" : "", t.dateIsAtEndOfInterval(n) ? "bg-blue-200 dark:bg-blue-800 rounded-r-full" : ""]
    }, [a("button", {
      staticClass: "disabled:pointer-events-none disabled:opacity-25",
      class: {
        "px-2 py-1 w-8 h-8 rounded-full text-sm": !0,
        "hover:bg-gray-300 dark:hover:bg-gray-600": !t.dateIsSameDay(n),
        "font-bold bg-blue-500 text-white": t.dateIsSameDay(n),
        "font-bold text-blue-500 bg-gray-100 dark:text-blue-100 dark:bg-gray-800": t.dateIsToday(n) && !t.dateIsSameDay(n) && !t.dateIsWithinInterval(n),
        "font-semibold text-blue-900 dark:text-blue-100": t.dateIsWithinInterval(n) && !t.dateIsSameDay(n)
      },
      attrs: {
        type: "button",
        tabindex: "-1",
        disabled: t.dateIsNotSelectable(n),
        title: t.dateIsToday(n) ? "Today" : ""
      },
      on: {
        click: function(s) {
          return t.setValueDate(n);
        }
      }
    }, [t._v(" " + t._s(n) + " ")])]);
  })], 2), t.isRange ? [a("div", {
    staticClass: "hidden sm:grid grid-cols-7 w- place-content-start"
  }, [t._l(t.calendarDaysOfWeek, function(n) {
    return a("div", {
      key: n,
      staticClass: "text-sm font-bold text-gray-400 text-center uppercase mb-1"
    }, [t._v(" " + t._s(n.charAt(0)) + " ")]);
  }), t._l(t.calendarNextDaysInMonth, function(n) {
    return a("div", {
      key: n,
      class: ["w-8 h-8 mb-1", n === 1 ? "col-start-".concat(t.calendarNextStartOfMonth) : "", t.dateIsWithinInterval(n, !0) ? "bg-blue-200 dark:bg-blue-800" : "", t.dateIsAtStartOfInterval(n, !0) ? "bg-blue-200 dark:bg-blue-800 rounded-l-full" : "", t.dateIsAtEndOfInterval(n, !0) ? "bg-blue-200 dark:bg-blue-800 rounded-r-full" : ""]
    }, [a("button", {
      staticClass: "disabled:pointer-events-none disabled:opacity-25",
      class: {
        "px-2 py-1 w-8 h-8 rounded-full text-sm": !0,
        "hover:bg-gray-300 dark:hover:bg-gray-600": !t.dateIsSameDay(n, !0),
        "font-bold bg-blue-500 text-white": t.dateIsSameDay(n, !0),
        "font-bold text-blue-500 bg-gray-100 dark:text-blue-400 dark:bg-gray-100": t.dateIsToday(n, !0) && !t.dateIsSameDay(n, !0) && !t.dateIsWithinInterval(n, !0),
        "font-semibold text-blue-900 dark:text-blue-100": t.dateIsWithinInterval(n, !0) && !t.dateIsSameDay(n, !0)
      },
      attrs: {
        type: "button",
        tabindex: "-1",
        disabled: t.dateIsNotSelectable(n, !0),
        title: t.dateIsToday(n, !0) ? "Today" : ""
      },
      on: {
        click: function(s) {
          return t.setValueDate(n, !0);
        }
      }
    }, [t._v(" " + t._s(n) + " ")])]);
  })], 2)] : t._e()], 2)] : [a("div", {
    staticClass: "grid gap-1 w-56",
    class: {
      "sm:w-120": t.isRange
    }
  }, [a("div", [a("div", {
    staticClass: "mb-1 text-sm uppercase font-semibold text-gray-500"
  }, [t._v(" Month ")]), a("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.calendarMonthSelect,
      expression: "calendarMonthSelect"
    }],
    staticClass: "form-control form-control-sm",
    on: {
      change: function(i) {
        var s = Array.prototype.filter.call(i.target.options, function(o) {
          return o.selected;
        }).map(function(o) {
          var d = "_value" in o ? o._value : o.value;
          return d;
        });
        t.calendarMonthSelect = i.target.multiple ? s : s[0];
      }
    }
  }, t._l(t.calendarMonths, function(n) {
    return a("option", {
      key: n
    }, [t._v(" " + t._s(n) + " ")]);
  }), 0)]), a("div", {
    staticClass: "mt-1"
  }, [a("div", {
    staticClass: "mb-1 text-sm uppercase font-semibold text-gray-500"
  }, [t._v(" Year ")]), a("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.calendarYearSelect,
      expression: "calendarYearSelect"
    }],
    staticClass: "form-control form-control-sm",
    on: {
      change: function(i) {
        var s = Array.prototype.filter.call(i.target.options, function(o) {
          return o.selected;
        }).map(function(o) {
          var d = "_value" in o ? o._value : o.value;
          return d;
        });
        t.calendarYearSelect = i.target.multiple ? s : s[0];
      }
    }
  }, t._l(t.calendarYears, function(n) {
    return a("option", {
      key: n
    }, [t._v(" " + t._s(n) + " ")]);
  }), 0)]), a("button", {
    staticClass: "mt-2 btn btn-primary btn-sm",
    attrs: {
      type: "button",
      tabindex: "-1"
    },
    on: {
      click: function(i) {
        return t.goToSelectedMonth();
      }
    }
  }, [t._v(" Go to Date ")]), a("button", {
    staticClass: "mt-2 btn btn-default btn-sm",
    attrs: {
      type: "button",
      tabindex: "-1"
    },
    on: {
      click: function(i) {
        return t.goToThisMonth();
      }
    }
  }, [t._v(" Go to Today ")]), a("hr", {
    staticClass: "my-2"
  }), a("button", {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      type: "button",
      tabindex: "-1"
    },
    on: {
      click: function(i) {
        t.view = "days";
      }
    }
  }, [t._v(" Cancel ")])])]], 2) : t._e(), t.showTime && t.view === "days" ? a("div", {
    class: {
      "sm:flex sm:gap-8 sm:w-120": t.showCalendars && t.isRange
    }
  }, [a("div", {
    staticClass: "w-56",
    class: {
      "border-t my-2 pt-2 border-t": t.showCalendars
    }
  }, [a("div", {
    staticClass: "uppercase text-sm text-gray-500 mb-2"
  }, [t.date && t.date instanceof Date ? [t._v(" " + t._s(t.formatDate(t.date, "eee MMM dd yyyy")) + " ")] : t.date && !(t.date instanceof Date) && t.date.start instanceof Date ? [t._v(" " + t._s(t.formatDate(t.date.start, "eee MMM dd yyyy")) + " ")] : [t._v(" -- ")]], 2), a("div", {
    staticClass: "flex gap-1"
  }, [a("svg", {
    staticClass: "my-auto flex-shrink-0 w-4 h-4 text-gray-700 dark:text-gray-300",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "32",
      height: "32",
      preserveAspectRatio: "xMidYMid meet",
      viewBox: "0 0 512 512"
    }
  }, [a("path", {
    attrs: {
      d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
      fill: "currentColor"
    }
  })]), a("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.startTimeHour,
      expression: "startTimeHour"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      disabled: !t.startTimeHour
    },
    on: {
      change: [function(n) {
        var i = Array.prototype.filter.call(n.target.options, function(s) {
          return s.selected;
        }).map(function(s) {
          var o = "_value" in s ? s._value : s.value;
          return o;
        });
        t.startTimeHour = n.target.multiple ? i : i[0];
      }, function(n) {
        return t.changeTime("hour", n.target.value);
      }]
    }
  }, t._l(t.getCalendarHours, function(n) {
    return a("option", {
      key: n
    }, [t._v(" " + t._s(n) + " ")]);
  }), 0), a("span", {
    staticClass: "my-auto"
  }, [t._v(":")]), a("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.startTimeMinutes,
      expression: "startTimeMinutes"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      disabled: !t.startTimeMinutes
    },
    on: {
      change: [function(n) {
        var i = Array.prototype.filter.call(n.target.options, function(s) {
          return s.selected;
        }).map(function(s) {
          var o = "_value" in s ? s._value : s.value;
          return o;
        });
        t.startTimeMinutes = n.target.multiple ? i : i[0];
      }, function(n) {
        return t.changeTime("minutes", n.target.value);
      }]
    }
  }, t._l(t.getCalendarMinutes, function(n) {
    return a("option", {
      key: n
    }, [t._v(" " + t._s(n) + " ")]);
  }), 0), a("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.startTimeMeridian,
      expression: "startTimeMeridian"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      disabled: !t.startTimeMeridian
    },
    on: {
      change: [function(n) {
        var i = Array.prototype.filter.call(n.target.options, function(s) {
          return s.selected;
        }).map(function(s) {
          var o = "_value" in s ? s._value : s.value;
          return o;
        });
        t.startTimeMeridian = n.target.multiple ? i : i[0];
      }, function(n) {
        return t.changeTime("meridian", n.target.value);
      }]
    }
  }, t._l(t.getCalendarMeridian, function(n) {
    return a("option", {
      key: n
    }, [t._v(" " + t._s(n) + " ")]);
  }), 0)])]), t.isRange ? a("div", {
    staticClass: "border-t my-2 pt-2 border-t w-56"
  }, [a("div", {
    staticClass: "uppercase text-sm text-gray-500 mb-2"
  }, [t.date && !(t.date instanceof Date) && t.date.end instanceof Date ? [t._v(" " + t._s(t.formatDate(t.date.end, "eee MMM dd yyyy")) + " ")] : [t._v(" -- ")]], 2), a("div", {
    staticClass: "flex gap-1"
  }, [a("svg", {
    staticClass: "my-auto flex-shrink-0 w-4 h-4 text-gray-700 dark:text-gray-300",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "32",
      height: "32",
      preserveAspectRatio: "xMidYMid meet",
      viewBox: "0 0 512 512"
    }
  }, [a("path", {
    attrs: {
      d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
      fill: "currentColor"
    }
  })]), a("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.endTimeHour,
      expression: "endTimeHour"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      disabled: !t.endTimeHour
    },
    on: {
      change: [function(n) {
        var i = Array.prototype.filter.call(n.target.options, function(s) {
          return s.selected;
        }).map(function(s) {
          var o = "_value" in s ? s._value : s.value;
          return o;
        });
        t.endTimeHour = n.target.multiple ? i : i[0];
      }, function(n) {
        return t.changeTime("hour", n.target.value, !0);
      }]
    }
  }, t._l(t.getCalendarHours, function(n) {
    return a("option", {
      key: n
    }, [t._v(" " + t._s(n) + " ")]);
  }), 0), a("span", {
    staticClass: "my-auto"
  }, [t._v(":")]), a("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.endTimeMinutes,
      expression: "endTimeMinutes"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      disabled: !t.endTimeMinutes
    },
    on: {
      change: [function(n) {
        var i = Array.prototype.filter.call(n.target.options, function(s) {
          return s.selected;
        }).map(function(s) {
          var o = "_value" in s ? s._value : s.value;
          return o;
        });
        t.endTimeMinutes = n.target.multiple ? i : i[0];
      }, function(n) {
        return t.changeTime("minutes", n.target.value, !0);
      }]
    }
  }, t._l(t.getCalendarMinutes, function(n) {
    return a("option", {
      key: n
    }, [t._v(" " + t._s(n) + " ")]);
  }), 0), a("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.endTimeMeridian,
      expression: "endTimeMeridian"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      disabled: !t.endTimeMeridian
    },
    on: {
      change: [function(n) {
        var i = Array.prototype.filter.call(n.target.options, function(s) {
          return s.selected;
        }).map(function(s) {
          var o = "_value" in s ? s._value : s.value;
          return o;
        });
        t.endTimeMeridian = n.target.multiple ? i : i[0];
      }, function(n) {
        return t.changeTime("meridian", n.target.value, !0);
      }]
    }
  }, t._l(t.getCalendarMeridian, function(n) {
    return a("option", {
      key: n
    }, [t._v(" " + t._s(n) + " ")]);
  }), 0)])]) : t._e()]) : t._e()]);
}, qe = [];
function Ge(r, t, e, a, n, i, s, o) {
  var d = typeof r == "function" ? r.options : r;
  t && (d.render = t, d.staticRenderFns = e, d._compiled = !0), a && (d.functional = !0), i && (d._scopeId = "data-v-" + i);
  var c;
  if (s ? (c = function(f) {
    f = f || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !f && typeof __VUE_SSR_CONTEXT__ < "u" && (f = __VUE_SSR_CONTEXT__), n && n.call(this, f), f && f._registeredComponents && f._registeredComponents.add(s);
  }, d._ssrRegister = c) : n && (c = o ? function() {
    n.call(
      this,
      (d.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : n), c)
    if (d.functional) {
      d._injectStyles = c;
      var v = d.render;
      d.render = function(g, y) {
        return c.call(y), v(g, y);
      };
    } else {
      var m = d.beforeCreate;
      d.beforeCreate = m ? [].concat(m, c) : [c];
    }
  return {
    exports: r,
    options: d
  };
}
const Ve = {
  name: "SdsCalendar",
  props: {
    value: { type: [Object, Date], default: new Date() },
    mode: { type: String, default: "date" },
    min: { type: Date, default: null },
    max: { type: Date, default: null },
    useCurrentTimeForToday: { type: Boolean, default: !1 }
  },
  data() {
    const r = new Date();
    return {
      displayedMonth: r,
      displayedNextMonth: W(r, 1),
      view: "days",
      calendarDaysOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      calendarMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      calendarYears: [...Array(200).keys()].map((t) => t + 1900),
      calendarMonthSelect: null,
      calendarYearSelect: null,
      startTimeHour: null,
      startTimeMinutes: null,
      startTimeMeridian: null,
      endTimeHour: null,
      endTimeMinutes: null,
      endTimeMeridian: null
    };
  },
  computed: {
    date: {
      get() {
        return this.value;
      },
      set(r) {
        this.$emit("input", r);
      }
    },
    calendarMonthTitle() {
      return O(this.displayedMonth, "MMMM");
    },
    calendarYearTitle() {
      return O(this.displayedMonth, "yyyy");
    },
    calendarStartOfMonth() {
      return ft(Y(this.displayedMonth)) + 1;
    },
    calendarDaysInMonth() {
      return mt(this.displayedMonth);
    },
    calendarNextMonthTitle() {
      return O(this.displayedNextMonth, "MMMM");
    },
    calendarNextYearTitle() {
      return O(this.displayedNextMonth, "yyyy");
    },
    calendarNextStartOfMonth() {
      return ft(Y(this.displayedNextMonth)) + 1;
    },
    calendarNextDaysInMonth() {
      return mt(this.displayedNextMonth);
    },
    showCalendars() {
      return this.mode === "date" || this.mode === "dateTime";
    },
    showTime() {
      return this.mode === "dateTime" || this.mode === "time";
    },
    getCalendarHours() {
      return [...Array(12).keys()].map((t) => (t + 1).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: !1
      }));
    },
    getCalendarMinutes() {
      return [...Array(60).keys()].map((t) => t.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: !1
      }));
    },
    getCalendarMeridian() {
      return ["am", "pm"];
    },
    canGoToPrevMonth() {
      return this.min instanceof Date ? vt(Y(this.min), Y(this.displayedMonth)) : !0;
    },
    canGoToNextMonth() {
      return this.max instanceof Date ? G(Y(this.max), Y(this.displayedMonth)) : !0;
    },
    isRange() {
      return this.value && !b(this.value);
    }
  },
  watch: {
    view() {
      this.setCalendarSelectMonthAndYear();
    },
    value() {
      this.updateTimeSelects();
    }
  },
  mounted() {
    this.initTimeMode(), this.moveToStartDate(), this.$nextTick(() => {
      this.updateTimeSelects();
    });
  },
  methods: {
    setCalendarSelectMonthAndYear() {
      this.calendarMonthSelect = O(this.displayedMonth, "MMMM"), this.calendarYearSelect = O(this.displayedMonth, "yyyy");
    },
    initTimeMode() {
      if (this.mode === "time" && (!this.date || !(this.date instanceof Date) && (!this.date.start || !this.date.end))) {
        const r = T(D(P(N(new Date(), 0), 0), 0), 0);
        this.isRange ? this.date = {
          start: r,
          end: r
        } : this.date = r;
      }
    },
    moveToStartDate() {
      this.date && !(this.date instanceof Date) && this.date.start instanceof Date ? this.displayedMonth = this.date.start : this.date && this.date instanceof Date ? this.displayedMonth = this.date : this.min && this.min instanceof Date && G(this.min, new Date()) && (this.displayedMonth = this.min), this.displayedNextMonth = W(this.displayedMonth, 1);
    },
    updateTimeSelects() {
      this.isRange ? (this.date && !(this.date instanceof Date) && this.date.start instanceof Date ? (this.startTimeHour = this.formatDate(this.date.start, "hh"), this.startTimeMinutes = this.formatDate(this.date.start, "mm"), this.startTimeMeridian = x(this.date.start) > 11 ? "pm" : "am") : (this.startTimeHour = null, this.startTimeMinutes = null, this.startTimeMeridian = null), this.date && !(this.date instanceof Date) && this.date.end instanceof Date ? (this.endTimeHour = this.formatDate(this.date.end, "hh"), this.endTimeMinutes = this.formatDate(this.date.end, "mm"), this.endTimeMeridian = x(this.date.end) > 11 ? "pm" : "am") : (this.endTimeHour = null, this.endTimeMinutes = null, this.endTimeMeridian = null)) : this.date instanceof Date ? (this.startTimeHour = this.formatDate(this.date, "hh"), this.startTimeMinutes = this.formatDate(this.date, "mm"), this.startTimeMeridian = x(this.date) > 11 ? "pm" : "am") : (this.startTimeHour = null, this.startTimeMinutes = null, this.startTimeMeridian = null);
    },
    changeTime(r, t, e = !1) {
      switch (r) {
        case "hour":
          if (this.isRange) {
            if (!e && this.date && !(this.date instanceof Date) && this.date.start instanceof Date) {
              const n = x(this.date.start) > 12 ? parseInt(t) + 12 : parseInt(t);
              this.date.start = T(this.date.start, n);
            } else if (e && this.date && !(this.date instanceof Date) && this.date.end instanceof Date) {
              const n = x(this.date.end) > 12 ? parseInt(t) + 12 : parseInt(t);
              this.date.end = T(this.date.end, n);
            }
          } else if (this.date instanceof Date) {
            const n = x(this.date) > 12 ? parseInt(t) + 12 : parseInt(t);
            this.date = T(this.date, n);
          }
          break;
        case "minutes":
          this.isRange ? !e && this.date && !(this.date instanceof Date) && this.date.start instanceof Date ? this.date.start = D(this.date.start, parseInt(t)) : e && this.date && !(this.date instanceof Date) && this.date.end instanceof Date && (this.date.end = D(this.date.end, parseInt(t))) : this.date instanceof Date && (this.date = D(this.date, parseInt(t)));
          break;
        case "meridian":
          if (this.isRange) {
            if (!e && this.date && !(this.date instanceof Date) && this.date.start instanceof Date) {
              const a = x(this.date.start), n = t === "am" && a >= 12 ? a - 12 : t === "pm" && a < 12 ? a + 12 : a;
              this.date.start = T(this.date.start, n);
            } else if (e && this.date && !(this.date instanceof Date) && this.date.end instanceof Date) {
              const a = x(this.date.end), n = t === "am" && a >= 12 ? a - 12 : t === "pm" && a < 12 ? a + 12 : a;
              this.date.end = T(this.date.end, n);
            }
          } else if (this.date instanceof Date) {
            const a = x(this.date), n = t === "am" && a >= 12 ? a - 12 : t === "pm" && a < 12 ? a + 12 : a;
            this.date = T(this.date, n);
          }
          break;
      }
      this.isRange && this.date && !(this.date instanceof Date) && this.date.start instanceof Date && this.date.end instanceof Date && (this.date = {
        start: ot([this.date.start, this.date.end]),
        end: st([this.date.start, this.date.end])
      });
    },
    goToPrevMonth() {
      this.displayedMonth = pt(this.displayedMonth, 1), this.displayedNextMonth = pt(this.displayedNextMonth, 1);
    },
    goToNextMonth() {
      this.displayedMonth = W(this.displayedMonth, 1), this.displayedNextMonth = W(this.displayedNextMonth, 1);
    },
    goToSelectedMonth() {
      if (!this.calendarMonthSelect || !this.calendarYearSelect)
        return;
      const r = this.calendarMonths.findIndex((t) => t === this.calendarMonthSelect) + 1;
      typeof r == "number" && (this.displayedMonth = new Date(parseInt(this.calendarYearSelect), r, 0, 0, 0, 0, 0), this.displayedNextMonth = W(this.displayedMonth, 1), this.view = "days");
    },
    goToThisMonth() {
      this.displayedMonth = new Date(), this.displayedNextMonth = W(this.displayedMonth, 1), this.view = "days";
    },
    formatDate(r, t) {
      return O(r, t);
    },
    setValueDate(r, t = !1) {
      const e = t ? this.displayedNextMonth : this.displayedMonth;
      if (this.isRange && this.date)
        if (this.date.end || !this.date.start)
          this.date = {
            start: this.useCurrentTimeForToday && rt(p(e, r)) ? new Date() : T(D(P(N(p(e, r), 0), 0), 0), 0),
            end: null
          };
        else if (!(this.date instanceof Date) && b(this.date.start) && this.date.start instanceof Date) {
          const a = this.date.start, n = dt(p(e, r));
          if (k(a, n) && G(n, a))
            this.date = { start: a, end: n };
          else {
            const i = ot([a, n]), s = st([a, n]);
            this.date = {
              start: gt(a, i) ? i : this.useCurrentTimeForToday && rt(i) ? new Date() : T(D(P(N(i, 0), 0), 0), 0),
              end: dt(s)
            };
          }
        } else
          this.date.end = T(D(P(N(p(e, r), 0), 0), 0), 0);
      else
        this.date = this.useCurrentTimeForToday && rt(p(e, r)) ? new Date() : T(D(P(N(p(e, r), 0), 0), 0), 0);
      this.$nextTick(() => {
        this.updateTimeSelects();
      });
    },
    dateIsBeforeMin(r, t = !1) {
      if (!(this.min instanceof Date))
        return !1;
      const e = t ? this.displayedNextMonth : this.displayedMonth;
      return vt(p(e, r), T(D(P(N(this.min, 0), 0), 0), 0));
    },
    dateIsAfterMax(r, t = !1) {
      if (!(this.max instanceof Date))
        return !1;
      const e = t ? this.displayedNextMonth : this.displayedMonth, a = p(e, r - 1), n = T(D(P(N(this.max, 0), 0), 0), 0);
      return G(a, n) || gt(a, n);
    },
    dateIsNotSelectable(r, t = !1) {
      return this.dateIsBeforeMin(r, t) || this.dateIsAfterMax(r, t);
    },
    dateIsWithinInterval(r, t = !1) {
      const e = t ? this.displayedNextMonth : this.displayedMonth;
      return this.date && !(this.date instanceof Date) && b(this.date.start) && this.date.start instanceof Date && b(this.date.end) && this.date.end instanceof Date ? Ae(
        p(e, r),
        { start: this.date.start, end: this.date.end }
      ) : !1;
    },
    dateIsAtStartOfInterval(r, t = !1) {
      const e = t ? this.displayedNextMonth : this.displayedMonth;
      return this.date && !(this.date instanceof Date) && b(this.date.start) && this.date.start instanceof Date && b(this.date.end) && this.date.end instanceof Date ? k(p(e, r), this.date.start) : !1;
    },
    dateIsAtEndOfInterval(r, t = !1) {
      const e = t ? this.displayedNextMonth : this.displayedMonth;
      return this.date && !(this.date instanceof Date) && b(this.date.start) && this.date.start instanceof Date && b(this.date.end) && this.date.end instanceof Date ? k(p(e, r), this.date.end) : !1;
    },
    dateIsSameDay(r, t = !1) {
      if (this.date) {
        if (b(this.date) && this.date instanceof Date) {
          const e = t ? this.displayedNextMonth : this.displayedMonth;
          return k(p(e, r), this.date);
        } else if (!(this.date instanceof Date) && (b(this.date.start) && this.date.start instanceof Date || b(this.date.end) && this.date.end instanceof Date)) {
          const e = t ? this.displayedNextMonth : this.displayedMonth;
          return b(this.date.start) && this.date.start instanceof Date && k(p(e, r), this.date.start) || b(this.date.end) && this.date.end instanceof Date && k(p(e, r), this.date.end);
        }
      } else
        return !1;
    },
    dateIsToday(r, t = !1) {
      const e = t ? this.displayedNextMonth : this.displayedMonth;
      return k(p(e, r), new Date());
    }
  }
}, yt = {};
var Be = /* @__PURE__ */ Ge(
  Ve,
  Le,
  qe,
  !1,
  Xe,
  null,
  null,
  null
);
function Xe(r) {
  for (let t in yt)
    this[t] = yt[t];
}
const Qe = /* @__PURE__ */ function() {
  return Be.exports;
}();
export {
  Qe as default
};
