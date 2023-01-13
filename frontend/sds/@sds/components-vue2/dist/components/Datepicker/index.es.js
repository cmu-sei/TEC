// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
function C(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function p(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Ct(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ct = function(n) {
    return typeof n;
  } : Ct = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ct(e);
}
function v(e) {
  p(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Ct(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function wa(e, t) {
  p(2, arguments);
  var n = v(e), r = C(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function ft(e, t) {
  p(2, arguments);
  var n = v(e), r = C(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), i = new Date(n.getTime());
  i.setMonth(n.getMonth() + r + 1, 0);
  var a = i.getDate();
  return o >= a ? i : (n.setFullYear(i.getFullYear(), i.getMonth(), o), n);
}
function ja(e, t) {
  p(2, arguments);
  var n = v(e).getTime(), r = C(t);
  return new Date(n + r);
}
var Qa = {};
function wt() {
  return Qa;
}
function _a(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Fr(e) {
  p(1, arguments);
  var t = v(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Va(e, t) {
  p(2, arguments);
  var n = C(t);
  return ft(e, n * 12);
}
function Et(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Et = function(n) {
    return typeof n;
  } : Et = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Et(e);
}
function yn(e) {
  p(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Et(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = v(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function It(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? It = function(n) {
    return typeof n;
  } : It = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, It(e);
}
function dn(e) {
  p(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (It(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = v(r);
    (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
  }), n || new Date(NaN);
}
var Xa = 6e4, Ga = 36e5, Ka = 1e3;
function st(e, t) {
  p(2, arguments);
  var n = Fr(e), r = Fr(t);
  return n.getTime() === r.getTime();
}
function Nt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Nt = function(n) {
    return typeof n;
  } : Nt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Nt(e);
}
function Q(e) {
  return p(1, arguments), e instanceof Date || Nt(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Oa(e) {
  if (p(1, arguments), !Q(e) && typeof e != "number")
    return !1;
  var t = v(e);
  return !isNaN(Number(t));
}
function jr(e) {
  p(1, arguments);
  var t = v(e);
  return t.setHours(23, 59, 59, 999), t;
}
function vt(e) {
  p(1, arguments);
  var t = v(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Pa(e, t) {
  p(2, arguments);
  var n = C(t);
  return ja(e, -n);
}
var Ja = 864e5;
function Za(e) {
  p(1, arguments);
  var t = v(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / Ja) + 1;
}
function gt(e) {
  p(1, arguments);
  var t = 1, n = v(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function xa(e) {
  p(1, arguments);
  var t = v(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = gt(r), i = new Date(0);
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var a = gt(i);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= a.getTime() ? n : n - 1;
}
function ti(e) {
  p(1, arguments);
  var t = xa(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = gt(n);
  return r;
}
var ei = 6048e5;
function Ta(e) {
  p(1, arguments);
  var t = v(e), n = gt(t).getTime() - ti(t).getTime();
  return Math.round(n / ei) + 1;
}
function pt(e, t) {
  var n, r, o, i, a, u, f, s;
  p(1, arguments);
  var c = wt(), l = C((n = (r = (o = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (a = t.locale) === null || a === void 0 || (u = a.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && o !== void 0 ? o : c.weekStartsOn) !== null && r !== void 0 ? r : (f = c.locale) === null || f === void 0 || (s = f.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(l >= 0 && l <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = v(e), d = y.getUTCDay(), h = (d < l ? 7 : 0) + d - l;
  return y.setUTCDate(y.getUTCDate() - h), y.setUTCHours(0, 0, 0, 0), y;
}
function Sr(e, t) {
  var n, r, o, i, a, u, f, s;
  p(1, arguments);
  var c = v(e), l = c.getUTCFullYear(), y = wt(), d = C((n = (r = (o = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (a = t.locale) === null || a === void 0 || (u = a.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && o !== void 0 ? o : y.firstWeekContainsDate) !== null && r !== void 0 ? r : (f = y.locale) === null || f === void 0 || (s = f.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(d >= 1 && d <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setUTCFullYear(l + 1, 0, d), h.setUTCHours(0, 0, 0, 0);
  var m = pt(h, t), g = new Date(0);
  g.setUTCFullYear(l, 0, d), g.setUTCHours(0, 0, 0, 0);
  var b = pt(g, t);
  return c.getTime() >= m.getTime() ? l + 1 : c.getTime() >= b.getTime() ? l : l - 1;
}
function ni(e, t) {
  var n, r, o, i, a, u, f, s;
  p(1, arguments);
  var c = wt(), l = C((n = (r = (o = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (a = t.locale) === null || a === void 0 || (u = a.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && o !== void 0 ? o : c.firstWeekContainsDate) !== null && r !== void 0 ? r : (f = c.locale) === null || f === void 0 || (s = f.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), y = Sr(e, t), d = new Date(0);
  d.setUTCFullYear(y, 0, l), d.setUTCHours(0, 0, 0, 0);
  var h = pt(d, t);
  return h;
}
var ri = 6048e5;
function Ma(e, t) {
  p(1, arguments);
  var n = v(e), r = pt(n, t).getTime() - ni(n, t).getTime();
  return Math.round(r / ri) + 1;
}
function x(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var oi = {
  y: function(t, n) {
    var r = t.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return x(n === "yy" ? o % 100 : o, n.length);
  },
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : x(r + 1, 2);
  },
  d: function(t, n) {
    return x(t.getUTCDate(), n.length);
  },
  a: function(t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(t, n) {
    return x(t.getUTCHours() % 12 || 12, n.length);
  },
  H: function(t, n) {
    return x(t.getUTCHours(), n.length);
  },
  m: function(t, n) {
    return x(t.getUTCMinutes(), n.length);
  },
  s: function(t, n) {
    return x(t.getUTCSeconds(), n.length);
  },
  S: function(t, n) {
    var r = n.length, o = t.getUTCMilliseconds(), i = Math.floor(o * Math.pow(10, r - 3));
    return x(i, n.length);
  }
};
const ut = oi;
var bt = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ai = {
  G: function(t, n, r) {
    var o = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(o, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(o, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(o, {
          width: "wide"
        });
    }
  },
  y: function(t, n, r) {
    if (n === "yo") {
      var o = t.getUTCFullYear(), i = o > 0 ? o : 1 - o;
      return r.ordinalNumber(i, {
        unit: "year"
      });
    }
    return ut.y(t, n);
  },
  Y: function(t, n, r, o) {
    var i = Sr(t, o), a = i > 0 ? i : 1 - i;
    if (n === "YY") {
      var u = a % 100;
      return x(u, 2);
    }
    return n === "Yo" ? r.ordinalNumber(a, {
      unit: "year"
    }) : x(a, n.length);
  },
  R: function(t, n) {
    var r = xa(t);
    return x(r, n.length);
  },
  u: function(t, n) {
    var r = t.getUTCFullYear();
    return x(r, n.length);
  },
  Q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return x(o, 2);
      case "Qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(o);
      case "qq":
        return x(o, 2);
      case "qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(t, n, r) {
    var o = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return ut.M(t, n);
      case "Mo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(o, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(t, n, r) {
    var o = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(o + 1);
      case "LL":
        return x(o + 1, 2);
      case "Lo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(o, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(t, n, r, o) {
    var i = Ma(t, o);
    return n === "wo" ? r.ordinalNumber(i, {
      unit: "week"
    }) : x(i, n.length);
  },
  I: function(t, n, r) {
    var o = Ta(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : x(o, n.length);
  },
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : ut.d(t, n);
  },
  D: function(t, n, r) {
    var o = Za(t);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : x(o, n.length);
  },
  E: function(t, n, r) {
    var o = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(t, n, r, o) {
    var i = t.getUTCDay(), a = (i - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(a);
      case "ee":
        return x(a, 2);
      case "eo":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "eee":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(t, n, r, o) {
    var i = t.getUTCDay(), a = (i - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(a);
      case "cc":
        return x(a, n.length);
      case "co":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "ccc":
        return r.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(t, n, r) {
    var o = t.getUTCDay(), i = o === 0 ? 7 : o;
    switch (n) {
      case "i":
        return String(i);
      case "ii":
        return x(i, n.length);
      case "io":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "iii":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(t, n, r) {
    var o = t.getUTCHours(), i = o / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(t, n, r) {
    var o = t.getUTCHours(), i;
    switch (o === 12 ? i = bt.noon : o === 0 ? i = bt.midnight : i = o / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(t, n, r) {
    var o = t.getUTCHours(), i;
    switch (o >= 17 ? i = bt.evening : o >= 12 ? i = bt.afternoon : o >= 4 ? i = bt.morning : i = bt.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(t, n, r) {
    if (n === "ho") {
      var o = t.getUTCHours() % 12;
      return o === 0 && (o = 12), r.ordinalNumber(o, {
        unit: "hour"
      });
    }
    return ut.h(t, n);
  },
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : ut.H(t, n);
  },
  K: function(t, n, r) {
    var o = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : x(o, n.length);
  },
  k: function(t, n, r) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : x(o, n.length);
  },
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : ut.m(t, n);
  },
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : ut.s(t, n);
  },
  S: function(t, n) {
    return ut.S(t, n);
  },
  X: function(t, n, r, o) {
    var i = o._originalDate || t, a = i.getTimezoneOffset();
    if (a === 0)
      return "Z";
    switch (n) {
      case "X":
        return Vr(a);
      case "XXXX":
      case "XX":
        return yt(a);
      case "XXXXX":
      case "XXX":
      default:
        return yt(a, ":");
    }
  },
  x: function(t, n, r, o) {
    var i = o._originalDate || t, a = i.getTimezoneOffset();
    switch (n) {
      case "x":
        return Vr(a);
      case "xxxx":
      case "xx":
        return yt(a);
      case "xxxxx":
      case "xxx":
      default:
        return yt(a, ":");
    }
  },
  O: function(t, n, r, o) {
    var i = o._originalDate || t, a = i.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Qr(a, ":");
      case "OOOO":
      default:
        return "GMT" + yt(a, ":");
    }
  },
  z: function(t, n, r, o) {
    var i = o._originalDate || t, a = i.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Qr(a, ":");
      case "zzzz":
      default:
        return "GMT" + yt(a, ":");
    }
  },
  t: function(t, n, r, o) {
    var i = o._originalDate || t, a = Math.floor(i.getTime() / 1e3);
    return x(a, n.length);
  },
  T: function(t, n, r, o) {
    var i = o._originalDate || t, a = i.getTime();
    return x(a, n.length);
  }
};
function Qr(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = r % 60;
  if (i === 0)
    return n + String(o);
  var a = t || "";
  return n + String(o) + a + x(i, 2);
}
function Vr(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + x(Math.abs(e) / 60, 2);
  }
  return yt(e, t);
}
function yt(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), i = x(Math.floor(o / 60), 2), a = x(o % 60, 2);
  return r + i + n + a;
}
const ii = ai;
var Xr = function(t, n) {
  switch (t) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, $a = function(t, n) {
  switch (t) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, ui = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], i = r[2];
  if (!i)
    return Xr(t, n);
  var a;
  switch (o) {
    case "P":
      a = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      a = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      a = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      a = n.dateTime({
        width: "full"
      });
      break;
  }
  return a.replace("{{date}}", Xr(o, n)).replace("{{time}}", $a(i, n));
}, si = {
  p: $a,
  P: ui
};
const hn = si;
var fi = ["D", "DD"], ci = ["YY", "YYYY"];
function Sa(e) {
  return fi.indexOf(e) !== -1;
}
function Ra(e) {
  return ci.indexOf(e) !== -1;
}
function ve(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var li = {
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
}, yi = function(t, n, r) {
  var o, i = li[t];
  return typeof i == "string" ? o = i : n === 1 ? o = i.one : o = i.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const di = yi;
function an(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var hi = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, pi = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, mi = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, vi = {
  date: an({
    formats: hi,
    defaultWidth: "full"
  }),
  time: an({
    formats: pi,
    defaultWidth: "full"
  }),
  dateTime: an({
    formats: mi,
    defaultWidth: "full"
  })
};
const bi = vi;
var gi = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, wi = function(t, n, r, o) {
  return gi[t];
};
const _i = wi;
function Pt(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", o;
    if (r === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth, a = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[a] || e.formattingValues[i];
    } else {
      var u = e.defaultWidth, f = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[f] || e.values[u];
    }
    var s = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[s];
  };
}
var Oi = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Pi = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, xi = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Ti = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Mi = {
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
}, $i = {
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
}, Si = function(t, n) {
  var r = Number(t), o = r % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Ri = {
  ordinalNumber: Si,
  era: Pt({
    values: Oi,
    defaultWidth: "wide"
  }),
  quarter: Pt({
    values: Pi,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Pt({
    values: xi,
    defaultWidth: "wide"
  }),
  day: Pt({
    values: Ti,
    defaultWidth: "wide"
  }),
  dayPeriod: Pt({
    values: Mi,
    defaultWidth: "wide",
    formattingValues: $i,
    defaultFormattingWidth: "wide"
  })
};
const Di = Ri;
function xt(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    var a = i[0], u = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], f = Array.isArray(u) ? Ci(u, function(l) {
      return l.test(a);
    }) : ki(u, function(l) {
      return l.test(a);
    }), s;
    s = e.valueCallback ? e.valueCallback(f) : f, s = n.valueCallback ? n.valueCallback(s) : s;
    var c = t.slice(a.length);
    return {
      value: s,
      rest: c
    };
  };
}
function ki(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Ci(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Ei(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var o = r[0], i = t.match(e.parsePattern);
    if (!i)
      return null;
    var a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    var u = t.slice(o.length);
    return {
      value: a,
      rest: u
    };
  };
}
var Ii = /^(\d+)(th|st|nd|rd)?/i, Ni = /\d+/i, Hi = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ai = {
  any: [/^b/i, /^(a|c)/i]
}, Bi = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Li = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ui = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Yi = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Wi = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, zi = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, qi = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Fi = {
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
}, ji = {
  ordinalNumber: Ei({
    matchPattern: Ii,
    parsePattern: Ni,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: xt({
    matchPatterns: Hi,
    defaultMatchWidth: "wide",
    parsePatterns: Ai,
    defaultParseWidth: "any"
  }),
  quarter: xt({
    matchPatterns: Bi,
    defaultMatchWidth: "wide",
    parsePatterns: Li,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: xt({
    matchPatterns: Ui,
    defaultMatchWidth: "wide",
    parsePatterns: Yi,
    defaultParseWidth: "any"
  }),
  day: xt({
    matchPatterns: Wi,
    defaultMatchWidth: "wide",
    parsePatterns: zi,
    defaultParseWidth: "any"
  }),
  dayPeriod: xt({
    matchPatterns: qi,
    defaultMatchWidth: "any",
    parsePatterns: Fi,
    defaultParseWidth: "any"
  })
};
const Qi = ji;
var Vi = {
  code: "en-US",
  formatDistance: di,
  formatLong: bi,
  formatRelative: _i,
  localize: Di,
  match: Qi,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Da = Vi;
var Xi = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Gi = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ki = /^'([^]*?)'?$/, Ji = /''/g, Zi = /[a-zA-Z]/;
function q(e, t, n) {
  var r, o, i, a, u, f, s, c, l, y, d, h, m, g, b, w, P, T;
  p(2, arguments);
  var O = String(t), M = wt(), I = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : M.locale) !== null && r !== void 0 ? r : Da, k = C((i = (a = (u = (f = n == null ? void 0 : n.firstWeekContainsDate) !== null && f !== void 0 ? f : n == null || (s = n.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && u !== void 0 ? u : M.firstWeekContainsDate) !== null && a !== void 0 ? a : (l = M.locale) === null || l === void 0 || (y = l.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(k >= 1 && k <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var R = C((d = (h = (m = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (b = n.locale) === null || b === void 0 || (w = b.options) === null || w === void 0 ? void 0 : w.weekStartsOn) !== null && m !== void 0 ? m : M.weekStartsOn) !== null && h !== void 0 ? h : (P = M.locale) === null || P === void 0 || (T = P.options) === null || T === void 0 ? void 0 : T.weekStartsOn) !== null && d !== void 0 ? d : 0);
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!I.localize)
    throw new RangeError("locale must contain localize property");
  if (!I.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var B = v(e);
  if (!Oa(B))
    throw new RangeError("Invalid time value");
  var D = _a(B), Y = Pa(B, D), F = {
    firstWeekContainsDate: k,
    weekStartsOn: R,
    locale: I,
    _originalDate: B
  }, W = O.match(Gi).map(function($) {
    var L = $[0];
    if (L === "p" || L === "P") {
      var J = hn[L];
      return J($, I.formatLong);
    }
    return $;
  }).join("").match(Xi).map(function($) {
    if ($ === "''")
      return "'";
    var L = $[0];
    if (L === "'")
      return tu($);
    var J = ii[L];
    if (J)
      return !(n != null && n.useAdditionalWeekYearTokens) && Ra($) && ve($, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Sa($) && ve($, t, String(e)), J(Y, $, I.localize, F);
    if (L.match(Zi))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + L + "`");
    return $;
  }).join("");
  return W;
}
function tu(e) {
  var t = e.match(Ki);
  return t ? t[1].replace(Ji, "'") : e;
}
function eu(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function Gr(e) {
  p(1, arguments);
  var t = v(e), n = t.getDay();
  return n;
}
function Kr(e) {
  p(1, arguments);
  var t = v(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function et(e) {
  p(1, arguments);
  var t = v(e), n = t.getHours();
  return n;
}
function dt(e, t) {
  p(2, arguments);
  var n = v(e), r = v(t);
  return n.getTime() > r.getTime();
}
function pn(e, t) {
  p(2, arguments);
  var n = v(e), r = v(t);
  return n.getTime() < r.getTime();
}
function mn(e, t) {
  p(2, arguments);
  var n = v(e), r = v(t);
  return n.getTime() === r.getTime();
}
function Ht(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ht = function(n) {
    return typeof n;
  } : Ht = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ht(e);
}
function ka(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && vn(e, t);
}
function vn(e, t) {
  return vn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, vn(e, t);
}
function Ca(e) {
  var t = ru();
  return function() {
    var r = be(e), o;
    if (t) {
      var i = be(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return nu(this, o);
  };
}
function nu(e, t) {
  return t && (Ht(t) === "object" || typeof t == "function") ? t : bn(e);
}
function bn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ru() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function be(e) {
  return be = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, be(e);
}
function Rr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Jr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Dr(e, t, n) {
  return t && Jr(e.prototype, t), n && Jr(e, n), e;
}
function gn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ou = 10, Ea = /* @__PURE__ */ function() {
  function e() {
    Rr(this, e), gn(this, "subPriority", 0);
  }
  return Dr(e, [{
    key: "validate",
    value: function(n, r) {
      return !0;
    }
  }]), e;
}(), au = /* @__PURE__ */ function(e) {
  ka(n, e);
  var t = Ca(n);
  function n(r, o, i, a, u) {
    var f;
    return Rr(this, n), f = t.call(this), f.value = r, f.validateValue = o, f.setValue = i, f.priority = a, u && (f.subPriority = u), f;
  }
  return Dr(n, [{
    key: "validate",
    value: function(o, i) {
      return this.validateValue(o, this.value, i);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return this.setValue(o, i, this.value, a);
    }
  }]), n;
}(Ea), iu = /* @__PURE__ */ function(e) {
  ka(n, e);
  var t = Ca(n);
  function n() {
    var r;
    Rr(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), gn(bn(r), "priority", ou), gn(bn(r), "subPriority", -1), r;
  }
  return Dr(n, [{
    key: "set",
    value: function(o, i) {
      if (i.timestampIsSet)
        return o;
      var a = new Date(0);
      return a.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), a.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), a;
    }
  }]), n;
}(Ea);
function uu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function su(e, t, n) {
  return t && Zr(e.prototype, t), n && Zr(e, n), e;
}
var _ = /* @__PURE__ */ function() {
  function e() {
    uu(this, e);
  }
  return su(e, [{
    key: "run",
    value: function(n, r, o, i) {
      var a = this.parse(n, r, o, i);
      return a ? {
        setter: new au(a.value, this.validate, this.set, this.priority, this.subPriority),
        rest: a.rest
      } : null;
    }
  }, {
    key: "validate",
    value: function(n, r, o) {
      return !0;
    }
  }]), e;
}();
function At(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? At = function(n) {
    return typeof n;
  } : At = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, At(e);
}
function fu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function to(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function cu(e, t, n) {
  return t && to(e.prototype, t), n && to(e, n), e;
}
function lu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && wn(e, t);
}
function wn(e, t) {
  return wn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, wn(e, t);
}
function yu(e) {
  var t = hu();
  return function() {
    var r = ge(e), o;
    if (t) {
      var i = ge(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return du(this, o);
  };
}
function du(e, t) {
  return t && (At(t) === "object" || typeof t == "function") ? t : _n(e);
}
function _n(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ge(e) {
  return ge = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ge(e);
}
function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var pu = /* @__PURE__ */ function(e) {
  lu(n, e);
  var t = yu(n);
  function n() {
    var r;
    fu(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), eo(_n(r), "priority", 140), eo(_n(r), "incompatibleTokens", ["R", "u", "t", "T"]), r;
  }
  return cu(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "G":
        case "GG":
        case "GGG":
          return a.era(o, {
            width: "abbreviated"
          }) || a.era(o, {
            width: "narrow"
          });
        case "GGGGG":
          return a.era(o, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return a.era(o, {
            width: "wide"
          }) || a.era(o, {
            width: "abbreviated"
          }) || a.era(o, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return i.era = a, o.setUTCFullYear(a, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(_), H = {
  month: /^(1[0-2]|0?\d)/,
  date: /^(3[0-1]|[0-2]?\d)/,
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  week: /^(5[0-3]|[0-4]?\d)/,
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  hour11h: /^(1[0-1]|0?\d)/,
  hour12h: /^(1[0-2]|0?\d)/,
  minute: /^[0-5]?\d/,
  second: /^[0-5]?\d/,
  singleDigit: /^\d/,
  twoDigits: /^\d{1,2}/,
  threeDigits: /^\d{1,3}/,
  fourDigits: /^\d{1,4}/,
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  twoDigitsSigned: /^-?\d{1,2}/,
  threeDigitsSigned: /^-?\d{1,3}/,
  fourDigitsSigned: /^-?\d{1,4}/
}, Z = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function A(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function E(e, t) {
  var n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function tt(e, t) {
  var n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  var r = n[1] === "+" ? 1 : -1, o = n[2] ? parseInt(n[2], 10) : 0, i = n[3] ? parseInt(n[3], 10) : 0, a = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (o * Ga + i * Xa + a * Ka),
    rest: t.slice(n[0].length)
  };
}
function Ia(e) {
  return E(H.anyDigitsSigned, e);
}
function N(e, t) {
  switch (e) {
    case 1:
      return E(H.singleDigit, t);
    case 2:
      return E(H.twoDigits, t);
    case 3:
      return E(H.threeDigits, t);
    case 4:
      return E(H.fourDigits, t);
    default:
      return E(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function we(e, t) {
  switch (e) {
    case 1:
      return E(H.singleDigitSigned, t);
    case 2:
      return E(H.twoDigitsSigned, t);
    case 3:
      return E(H.threeDigitsSigned, t);
    case 4:
      return E(H.fourDigitsSigned, t);
    default:
      return E(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function kr(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Na(e, t) {
  var n = t > 0, r = n ? t : 1 - t, o;
  if (r <= 50)
    o = e || 100;
  else {
    var i = r + 50, a = Math.floor(i / 100) * 100, u = e >= i % 100;
    o = e + a - (u ? 100 : 0);
  }
  return n ? o : 1 - o;
}
function Ha(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Bt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bt = function(n) {
    return typeof n;
  } : Bt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Bt(e);
}
function mu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function no(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function vu(e, t, n) {
  return t && no(e.prototype, t), n && no(e, n), e;
}
function bu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && On(e, t);
}
function On(e, t) {
  return On = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, On(e, t);
}
function gu(e) {
  var t = _u();
  return function() {
    var r = _e(e), o;
    if (t) {
      var i = _e(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return wu(this, o);
  };
}
function wu(e, t) {
  return t && (Bt(t) === "object" || typeof t == "function") ? t : Pn(e);
}
function Pn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _u() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _e(e) {
  return _e = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _e(e);
}
function ro(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ou = /* @__PURE__ */ function(e) {
  bu(n, e);
  var t = gu(n);
  function n() {
    var r;
    mu(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), ro(Pn(r), "priority", 130), ro(Pn(r), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return vu(n, [{
    key: "parse",
    value: function(o, i, a) {
      var u = function(s) {
        return {
          year: s,
          isTwoDigitYear: i === "yy"
        };
      };
      switch (i) {
        case "y":
          return A(N(4, o), u);
        case "yo":
          return A(a.ordinalNumber(o, {
            unit: "year"
          }), u);
        default:
          return A(N(i.length, o), u);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i.isTwoDigitYear || i.year > 0;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      var u = o.getUTCFullYear();
      if (a.isTwoDigitYear) {
        var f = Na(a.year, u);
        return o.setUTCFullYear(f, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
      }
      var s = !("era" in i) || i.era === 1 ? a.year : 1 - a.year;
      return o.setUTCFullYear(s, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(_);
function Lt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Lt = function(n) {
    return typeof n;
  } : Lt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Lt(e);
}
function Pu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function xu(e, t, n) {
  return t && oo(e.prototype, t), n && oo(e, n), e;
}
function Tu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && xn(e, t);
}
function xn(e, t) {
  return xn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, xn(e, t);
}
function Mu(e) {
  var t = Su();
  return function() {
    var r = Oe(e), o;
    if (t) {
      var i = Oe(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return $u(this, o);
  };
}
function $u(e, t) {
  return t && (Lt(t) === "object" || typeof t == "function") ? t : Tn(e);
}
function Tn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Su() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Oe(e) {
  return Oe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Oe(e);
}
function ao(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ru = /* @__PURE__ */ function(e) {
  Tu(n, e);
  var t = Mu(n);
  function n() {
    var r;
    Pu(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), ao(Tn(r), "priority", 130), ao(Tn(r), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return xu(n, [{
    key: "parse",
    value: function(o, i, a) {
      var u = function(s) {
        return {
          year: s,
          isTwoDigitYear: i === "YY"
        };
      };
      switch (i) {
        case "Y":
          return A(N(4, o), u);
        case "Yo":
          return A(a.ordinalNumber(o, {
            unit: "year"
          }), u);
        default:
          return A(N(i.length, o), u);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i.isTwoDigitYear || i.year > 0;
    }
  }, {
    key: "set",
    value: function(o, i, a, u) {
      var f = Sr(o, u);
      if (a.isTwoDigitYear) {
        var s = Na(a.year, f);
        return o.setUTCFullYear(s, 0, u.firstWeekContainsDate), o.setUTCHours(0, 0, 0, 0), pt(o, u);
      }
      var c = !("era" in i) || i.era === 1 ? a.year : 1 - a.year;
      return o.setUTCFullYear(c, 0, u.firstWeekContainsDate), o.setUTCHours(0, 0, 0, 0), pt(o, u);
    }
  }]), n;
}(_);
function Ut(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ut = function(n) {
    return typeof n;
  } : Ut = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ut(e);
}
function Du(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function io(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ku(e, t, n) {
  return t && io(e.prototype, t), n && io(e, n), e;
}
function Cu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Mn(e, t);
}
function Mn(e, t) {
  return Mn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Mn(e, t);
}
function Eu(e) {
  var t = Nu();
  return function() {
    var r = Pe(e), o;
    if (t) {
      var i = Pe(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Iu(this, o);
  };
}
function Iu(e, t) {
  return t && (Ut(t) === "object" || typeof t == "function") ? t : $n(e);
}
function $n(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Pe(e) {
  return Pe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pe(e);
}
function uo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Hu = /* @__PURE__ */ function(e) {
  Cu(n, e);
  var t = Eu(n);
  function n() {
    var r;
    Du(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), uo($n(r), "priority", 130), uo($n(r), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return ku(n, [{
    key: "parse",
    value: function(o, i) {
      return we(i === "R" ? 4 : i.length, o);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      var u = new Date(0);
      return u.setUTCFullYear(a, 0, 4), u.setUTCHours(0, 0, 0, 0), gt(u);
    }
  }]), n;
}(_);
function Yt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yt = function(n) {
    return typeof n;
  } : Yt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Yt(e);
}
function Au(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function so(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Bu(e, t, n) {
  return t && so(e.prototype, t), n && so(e, n), e;
}
function Lu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Sn(e, t);
}
function Sn(e, t) {
  return Sn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Sn(e, t);
}
function Uu(e) {
  var t = Wu();
  return function() {
    var r = xe(e), o;
    if (t) {
      var i = xe(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Yu(this, o);
  };
}
function Yu(e, t) {
  return t && (Yt(t) === "object" || typeof t == "function") ? t : Rn(e);
}
function Rn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function xe(e) {
  return xe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, xe(e);
}
function fo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var zu = /* @__PURE__ */ function(e) {
  Lu(n, e);
  var t = Uu(n);
  function n() {
    var r;
    Au(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), fo(Rn(r), "priority", 130), fo(Rn(r), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return Bu(n, [{
    key: "parse",
    value: function(o, i) {
      return we(i === "u" ? 4 : i.length, o);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCFullYear(a, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(_);
function Wt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wt = function(n) {
    return typeof n;
  } : Wt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Wt(e);
}
function qu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function co(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Fu(e, t, n) {
  return t && co(e.prototype, t), n && co(e, n), e;
}
function ju(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Dn(e, t);
}
function Dn(e, t) {
  return Dn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Dn(e, t);
}
function Qu(e) {
  var t = Xu();
  return function() {
    var r = Te(e), o;
    if (t) {
      var i = Te(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Vu(this, o);
  };
}
function Vu(e, t) {
  return t && (Wt(t) === "object" || typeof t == "function") ? t : kn(e);
}
function kn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Te(e) {
  return Te = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Te(e);
}
function lo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Gu = /* @__PURE__ */ function(e) {
  ju(n, e);
  var t = Qu(n);
  function n() {
    var r;
    qu(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), lo(kn(r), "priority", 120), lo(kn(r), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Fu(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "Q":
        case "QQ":
          return N(i.length, o);
        case "Qo":
          return a.ordinalNumber(o, {
            unit: "quarter"
          });
        case "QQQ":
          return a.quarter(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.quarter(o, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return a.quarter(o, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return a.quarter(o, {
            width: "wide",
            context: "formatting"
          }) || a.quarter(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.quarter(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 4;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMonth((a - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(_);
function zt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zt = function(n) {
    return typeof n;
  } : zt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, zt(e);
}
function Ku(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ju(e, t, n) {
  return t && yo(e.prototype, t), n && yo(e, n), e;
}
function Zu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Cn(e, t);
}
function Cn(e, t) {
  return Cn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Cn(e, t);
}
function ts(e) {
  var t = ns();
  return function() {
    var r = Me(e), o;
    if (t) {
      var i = Me(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return es(this, o);
  };
}
function es(e, t) {
  return t && (zt(t) === "object" || typeof t == "function") ? t : En(e);
}
function En(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ns() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Me(e) {
  return Me = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Me(e);
}
function ho(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var rs = /* @__PURE__ */ function(e) {
  Zu(n, e);
  var t = ts(n);
  function n() {
    var r;
    Ku(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), ho(En(r), "priority", 120), ho(En(r), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Ju(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "q":
        case "qq":
          return N(i.length, o);
        case "qo":
          return a.ordinalNumber(o, {
            unit: "quarter"
          });
        case "qqq":
          return a.quarter(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.quarter(o, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return a.quarter(o, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return a.quarter(o, {
            width: "wide",
            context: "standalone"
          }) || a.quarter(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.quarter(o, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 4;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMonth((a - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(_);
function qt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qt = function(n) {
    return typeof n;
  } : qt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, qt(e);
}
function os(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function po(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function as(e, t, n) {
  return t && po(e.prototype, t), n && po(e, n), e;
}
function is(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && In(e, t);
}
function In(e, t) {
  return In = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, In(e, t);
}
function us(e) {
  var t = fs();
  return function() {
    var r = $e(e), o;
    if (t) {
      var i = $e(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return ss(this, o);
  };
}
function ss(e, t) {
  return t && (qt(t) === "object" || typeof t == "function") ? t : Nn(e);
}
function Nn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fs() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function $e(e) {
  return $e = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, $e(e);
}
function mo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var cs = /* @__PURE__ */ function(e) {
  is(n, e);
  var t = us(n);
  function n() {
    var r;
    os(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), mo(Nn(r), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), mo(Nn(r), "priority", 110), r;
  }
  return as(n, [{
    key: "parse",
    value: function(o, i, a) {
      var u = function(s) {
        return s - 1;
      };
      switch (i) {
        case "M":
          return A(E(H.month, o), u);
        case "MM":
          return A(N(2, o), u);
        case "Mo":
          return A(a.ordinalNumber(o, {
            unit: "month"
          }), u);
        case "MMM":
          return a.month(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.month(o, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return a.month(o, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return a.month(o, {
            width: "wide",
            context: "formatting"
          }) || a.month(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.month(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMonth(a, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(_);
function Ft(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ft = function(n) {
    return typeof n;
  } : Ft = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ft(e);
}
function ls(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ys(e, t, n) {
  return t && vo(e.prototype, t), n && vo(e, n), e;
}
function ds(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Hn(e, t);
}
function Hn(e, t) {
  return Hn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Hn(e, t);
}
function hs(e) {
  var t = ms();
  return function() {
    var r = Se(e), o;
    if (t) {
      var i = Se(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return ps(this, o);
  };
}
function ps(e, t) {
  return t && (Ft(t) === "object" || typeof t == "function") ? t : An(e);
}
function An(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ms() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Se(e) {
  return Se = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Se(e);
}
function bo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vs = /* @__PURE__ */ function(e) {
  ds(n, e);
  var t = hs(n);
  function n() {
    var r;
    ls(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), bo(An(r), "priority", 110), bo(An(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return ys(n, [{
    key: "parse",
    value: function(o, i, a) {
      var u = function(s) {
        return s - 1;
      };
      switch (i) {
        case "L":
          return A(E(H.month, o), u);
        case "LL":
          return A(N(2, o), u);
        case "Lo":
          return A(a.ordinalNumber(o, {
            unit: "month"
          }), u);
        case "LLL":
          return a.month(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.month(o, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return a.month(o, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return a.month(o, {
            width: "wide",
            context: "standalone"
          }) || a.month(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.month(o, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMonth(a, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(_);
function bs(e, t, n) {
  p(2, arguments);
  var r = v(e), o = C(t), i = Ma(r, n) - o;
  return r.setUTCDate(r.getUTCDate() - i * 7), r;
}
function jt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jt = function(n) {
    return typeof n;
  } : jt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, jt(e);
}
function gs(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function go(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ws(e, t, n) {
  return t && go(e.prototype, t), n && go(e, n), e;
}
function _s(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Bn(e, t);
}
function Bn(e, t) {
  return Bn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Bn(e, t);
}
function Os(e) {
  var t = xs();
  return function() {
    var r = Re(e), o;
    if (t) {
      var i = Re(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Ps(this, o);
  };
}
function Ps(e, t) {
  return t && (jt(t) === "object" || typeof t == "function") ? t : Ln(e);
}
function Ln(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xs() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Re(e) {
  return Re = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Re(e);
}
function wo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ts = /* @__PURE__ */ function(e) {
  _s(n, e);
  var t = Os(n);
  function n() {
    var r;
    gs(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), wo(Ln(r), "priority", 100), wo(Ln(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return ws(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "w":
          return E(H.week, o);
        case "wo":
          return a.ordinalNumber(o, {
            unit: "week"
          });
        default:
          return N(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 53;
    }
  }, {
    key: "set",
    value: function(o, i, a, u) {
      return pt(bs(o, a, u), u);
    }
  }]), n;
}(_);
function Ms(e, t) {
  p(2, arguments);
  var n = v(e), r = C(t), o = Ta(n) - r;
  return n.setUTCDate(n.getUTCDate() - o * 7), n;
}
function Qt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qt = function(n) {
    return typeof n;
  } : Qt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Qt(e);
}
function $s(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _o(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ss(e, t, n) {
  return t && _o(e.prototype, t), n && _o(e, n), e;
}
function Rs(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Un(e, t);
}
function Un(e, t) {
  return Un = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Un(e, t);
}
function Ds(e) {
  var t = Cs();
  return function() {
    var r = De(e), o;
    if (t) {
      var i = De(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return ks(this, o);
  };
}
function ks(e, t) {
  return t && (Qt(t) === "object" || typeof t == "function") ? t : Yn(e);
}
function Yn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Cs() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function De(e) {
  return De = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, De(e);
}
function Oo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Es = /* @__PURE__ */ function(e) {
  Rs(n, e);
  var t = Ds(n);
  function n() {
    var r;
    $s(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Oo(Yn(r), "priority", 100), Oo(Yn(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return Ss(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "I":
          return E(H.week, o);
        case "Io":
          return a.ordinalNumber(o, {
            unit: "week"
          });
        default:
          return N(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 53;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return gt(Ms(o, a));
    }
  }]), n;
}(_);
function Vt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Vt = function(n) {
    return typeof n;
  } : Vt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Vt(e);
}
function Is(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Po(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ns(e, t, n) {
  return t && Po(e.prototype, t), n && Po(e, n), e;
}
function Hs(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Wn(e, t);
}
function Wn(e, t) {
  return Wn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Wn(e, t);
}
function As(e) {
  var t = Ls();
  return function() {
    var r = ke(e), o;
    if (t) {
      var i = ke(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Bs(this, o);
  };
}
function Bs(e, t) {
  return t && (Vt(t) === "object" || typeof t == "function") ? t : Xt(e);
}
function Xt(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ls() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ke(e) {
  return ke = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ke(e);
}
function un(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Us = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ys = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ws = /* @__PURE__ */ function(e) {
  Hs(n, e);
  var t = As(n);
  function n() {
    var r;
    Is(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), un(Xt(r), "priority", 90), un(Xt(r), "subPriority", 1), un(Xt(r), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Ns(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "d":
          return E(H.date, o);
        case "do":
          return a.ordinalNumber(o, {
            unit: "date"
          });
        default:
          return N(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      var a = o.getUTCFullYear(), u = Ha(a), f = o.getUTCMonth();
      return u ? i >= 1 && i <= Ys[f] : i >= 1 && i <= Us[f];
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCDate(a), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(_);
function Gt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gt = function(n) {
    return typeof n;
  } : Gt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Gt(e);
}
function zs(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function qs(e, t, n) {
  return t && xo(e.prototype, t), n && xo(e, n), e;
}
function Fs(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && zn(e, t);
}
function zn(e, t) {
  return zn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, zn(e, t);
}
function js(e) {
  var t = Vs();
  return function() {
    var r = Ce(e), o;
    if (t) {
      var i = Ce(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Qs(this, o);
  };
}
function Qs(e, t) {
  return t && (Gt(t) === "object" || typeof t == "function") ? t : Kt(e);
}
function Kt(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vs() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ce(e) {
  return Ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ce(e);
}
function sn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Xs = /* @__PURE__ */ function(e) {
  Fs(n, e);
  var t = js(n);
  function n() {
    var r;
    zs(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), sn(Kt(r), "priority", 90), sn(Kt(r), "subpriority", 1), sn(Kt(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), r;
  }
  return qs(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "D":
        case "DD":
          return E(H.dayOfYear, o);
        case "Do":
          return a.ordinalNumber(o, {
            unit: "date"
          });
        default:
          return N(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      var a = o.getUTCFullYear(), u = Ha(a);
      return u ? i >= 1 && i <= 366 : i >= 1 && i <= 365;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMonth(0, a), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(_);
function Cr(e, t, n) {
  var r, o, i, a, u, f, s, c;
  p(2, arguments);
  var l = wt(), y = C((r = (o = (i = (a = n == null ? void 0 : n.weekStartsOn) !== null && a !== void 0 ? a : n == null || (u = n.locale) === null || u === void 0 || (f = u.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && i !== void 0 ? i : l.weekStartsOn) !== null && o !== void 0 ? o : (s = l.locale) === null || s === void 0 || (c = s.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var d = v(e), h = C(t), m = d.getUTCDay(), g = h % 7, b = (g + 7) % 7, w = (b < y ? 7 : 0) + h - m;
  return d.setUTCDate(d.getUTCDate() + w), d;
}
function Jt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jt = function(n) {
    return typeof n;
  } : Jt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Jt(e);
}
function Gs(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function To(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ks(e, t, n) {
  return t && To(e.prototype, t), n && To(e, n), e;
}
function Js(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && qn(e, t);
}
function qn(e, t) {
  return qn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, qn(e, t);
}
function Zs(e) {
  var t = ef();
  return function() {
    var r = Ee(e), o;
    if (t) {
      var i = Ee(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return tf(this, o);
  };
}
function tf(e, t) {
  return t && (Jt(t) === "object" || typeof t == "function") ? t : Fn(e);
}
function Fn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ef() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ee(e) {
  return Ee = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ee(e);
}
function Mo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var nf = /* @__PURE__ */ function(e) {
  Js(n, e);
  var t = Zs(n);
  function n() {
    var r;
    Gs(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Mo(Fn(r), "priority", 90), Mo(Fn(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), r;
  }
  return Ks(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "E":
        case "EE":
        case "EEE":
          return a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return a.day(o, {
            width: "wide",
            context: "formatting"
          }) || a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(o, i, a, u) {
      return o = Cr(o, a, u), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(_);
function Zt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zt = function(n) {
    return typeof n;
  } : Zt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Zt(e);
}
function rf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $o(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function of(e, t, n) {
  return t && $o(e.prototype, t), n && $o(e, n), e;
}
function af(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && jn(e, t);
}
function jn(e, t) {
  return jn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, jn(e, t);
}
function uf(e) {
  var t = ff();
  return function() {
    var r = Ie(e), o;
    if (t) {
      var i = Ie(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return sf(this, o);
  };
}
function sf(e, t) {
  return t && (Zt(t) === "object" || typeof t == "function") ? t : Qn(e);
}
function Qn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ff() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ie(e) {
  return Ie = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ie(e);
}
function So(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var cf = /* @__PURE__ */ function(e) {
  af(n, e);
  var t = uf(n);
  function n() {
    var r;
    rf(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), So(Qn(r), "priority", 90), So(Qn(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), r;
  }
  return of(n, [{
    key: "parse",
    value: function(o, i, a, u) {
      var f = function(c) {
        var l = Math.floor((c - 1) / 7) * 7;
        return (c + u.weekStartsOn + 6) % 7 + l;
      };
      switch (i) {
        case "e":
        case "ee":
          return A(N(i.length, o), f);
        case "eo":
          return A(a.ordinalNumber(o, {
            unit: "day"
          }), f);
        case "eee":
          return a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return a.day(o, {
            width: "wide",
            context: "formatting"
          }) || a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(o, i, a, u) {
      return o = Cr(o, a, u), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(_);
function te(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? te = function(n) {
    return typeof n;
  } : te = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, te(e);
}
function lf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ro(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function yf(e, t, n) {
  return t && Ro(e.prototype, t), n && Ro(e, n), e;
}
function df(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Vn(e, t);
}
function Vn(e, t) {
  return Vn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Vn(e, t);
}
function hf(e) {
  var t = mf();
  return function() {
    var r = Ne(e), o;
    if (t) {
      var i = Ne(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return pf(this, o);
  };
}
function pf(e, t) {
  return t && (te(t) === "object" || typeof t == "function") ? t : Xn(e);
}
function Xn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ne(e) {
  return Ne = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ne(e);
}
function Do(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vf = /* @__PURE__ */ function(e) {
  df(n, e);
  var t = hf(n);
  function n() {
    var r;
    lf(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Do(Xn(r), "priority", 90), Do(Xn(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), r;
  }
  return yf(n, [{
    key: "parse",
    value: function(o, i, a, u) {
      var f = function(c) {
        var l = Math.floor((c - 1) / 7) * 7;
        return (c + u.weekStartsOn + 6) % 7 + l;
      };
      switch (i) {
        case "c":
        case "cc":
          return A(N(i.length, o), f);
        case "co":
          return A(a.ordinalNumber(o, {
            unit: "day"
          }), f);
        case "ccc":
          return a.day(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.day(o, {
            width: "short",
            context: "standalone"
          }) || a.day(o, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return a.day(o, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return a.day(o, {
            width: "short",
            context: "standalone"
          }) || a.day(o, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return a.day(o, {
            width: "wide",
            context: "standalone"
          }) || a.day(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.day(o, {
            width: "short",
            context: "standalone"
          }) || a.day(o, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(o, i, a, u) {
      return o = Cr(o, a, u), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(_);
function bf(e, t) {
  p(2, arguments);
  var n = C(t);
  n % 7 === 0 && (n = n - 7);
  var r = 1, o = v(e), i = o.getUTCDay(), a = n % 7, u = (a + 7) % 7, f = (u < r ? 7 : 0) + n - i;
  return o.setUTCDate(o.getUTCDate() + f), o;
}
function ee(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ee = function(n) {
    return typeof n;
  } : ee = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ee(e);
}
function gf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ko(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function wf(e, t, n) {
  return t && ko(e.prototype, t), n && ko(e, n), e;
}
function _f(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Gn(e, t);
}
function Gn(e, t) {
  return Gn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Gn(e, t);
}
function Of(e) {
  var t = xf();
  return function() {
    var r = He(e), o;
    if (t) {
      var i = He(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Pf(this, o);
  };
}
function Pf(e, t) {
  return t && (ee(t) === "object" || typeof t == "function") ? t : Kn(e);
}
function Kn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function He(e) {
  return He = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, He(e);
}
function Co(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Tf = /* @__PURE__ */ function(e) {
  _f(n, e);
  var t = Of(n);
  function n() {
    var r;
    gf(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Co(Kn(r), "priority", 90), Co(Kn(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), r;
  }
  return wf(n, [{
    key: "parse",
    value: function(o, i, a) {
      var u = function(s) {
        return s === 0 ? 7 : s;
      };
      switch (i) {
        case "i":
        case "ii":
          return N(i.length, o);
        case "io":
          return a.ordinalNumber(o, {
            unit: "day"
          });
        case "iii":
          return A(a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiiii":
          return A(a.day(o, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiiiii":
          return A(a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiii":
        default:
          return A(a.day(o, {
            width: "wide",
            context: "formatting"
          }) || a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          }), u);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 7;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o = bf(o, a), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), n;
}(_);
function ne(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ne = function(n) {
    return typeof n;
  } : ne = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ne(e);
}
function Mf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Eo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function $f(e, t, n) {
  return t && Eo(e.prototype, t), n && Eo(e, n), e;
}
function Sf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Jn(e, t);
}
function Jn(e, t) {
  return Jn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Jn(e, t);
}
function Rf(e) {
  var t = kf();
  return function() {
    var r = Ae(e), o;
    if (t) {
      var i = Ae(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Df(this, o);
  };
}
function Df(e, t) {
  return t && (ne(t) === "object" || typeof t == "function") ? t : Zn(e);
}
function Zn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ae(e) {
  return Ae = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ae(e);
}
function Io(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Cf = /* @__PURE__ */ function(e) {
  Sf(n, e);
  var t = Rf(n);
  function n() {
    var r;
    Mf(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Io(Zn(r), "priority", 80), Io(Zn(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), r;
  }
  return $f(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "a":
        case "aa":
        case "aaa":
          return a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return a.dayPeriod(o, {
            width: "wide",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCHours(kr(a), 0, 0, 0), o;
    }
  }]), n;
}(_);
function re(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? re = function(n) {
    return typeof n;
  } : re = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, re(e);
}
function Ef(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function No(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function If(e, t, n) {
  return t && No(e.prototype, t), n && No(e, n), e;
}
function Nf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && tr(e, t);
}
function tr(e, t) {
  return tr = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, tr(e, t);
}
function Hf(e) {
  var t = Bf();
  return function() {
    var r = Be(e), o;
    if (t) {
      var i = Be(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Af(this, o);
  };
}
function Af(e, t) {
  return t && (re(t) === "object" || typeof t == "function") ? t : er(e);
}
function er(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Bf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Be(e) {
  return Be = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Be(e);
}
function Ho(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Lf = /* @__PURE__ */ function(e) {
  Nf(n, e);
  var t = Hf(n);
  function n() {
    var r;
    Ef(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Ho(er(r), "priority", 80), Ho(er(r), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), r;
  }
  return If(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "b":
        case "bb":
        case "bbb":
          return a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return a.dayPeriod(o, {
            width: "wide",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCHours(kr(a), 0, 0, 0), o;
    }
  }]), n;
}(_);
function oe(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? oe = function(n) {
    return typeof n;
  } : oe = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, oe(e);
}
function Uf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ao(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Yf(e, t, n) {
  return t && Ao(e.prototype, t), n && Ao(e, n), e;
}
function Wf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && nr(e, t);
}
function nr(e, t) {
  return nr = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, nr(e, t);
}
function zf(e) {
  var t = Ff();
  return function() {
    var r = Le(e), o;
    if (t) {
      var i = Le(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return qf(this, o);
  };
}
function qf(e, t) {
  return t && (oe(t) === "object" || typeof t == "function") ? t : rr(e);
}
function rr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ff() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Le(e) {
  return Le = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Le(e);
}
function Bo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var jf = /* @__PURE__ */ function(e) {
  Wf(n, e);
  var t = zf(n);
  function n() {
    var r;
    Uf(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Bo(rr(r), "priority", 80), Bo(rr(r), "incompatibleTokens", ["a", "b", "t", "T"]), r;
  }
  return Yf(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "B":
        case "BB":
        case "BBB":
          return a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return a.dayPeriod(o, {
            width: "wide",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCHours(kr(a), 0, 0, 0), o;
    }
  }]), n;
}(_);
function ae(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ae = function(n) {
    return typeof n;
  } : ae = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ae(e);
}
function Qf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Lo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Vf(e, t, n) {
  return t && Lo(e.prototype, t), n && Lo(e, n), e;
}
function Xf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && or(e, t);
}
function or(e, t) {
  return or = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, or(e, t);
}
function Gf(e) {
  var t = Jf();
  return function() {
    var r = Ue(e), o;
    if (t) {
      var i = Ue(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Kf(this, o);
  };
}
function Kf(e, t) {
  return t && (ae(t) === "object" || typeof t == "function") ? t : ar(e);
}
function ar(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ue(e) {
  return Ue = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ue(e);
}
function Uo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Zf = /* @__PURE__ */ function(e) {
  Xf(n, e);
  var t = Gf(n);
  function n() {
    var r;
    Qf(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Uo(ar(r), "priority", 70), Uo(ar(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]), r;
  }
  return Vf(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "h":
          return E(H.hour12h, o);
        case "ho":
          return a.ordinalNumber(o, {
            unit: "hour"
          });
        default:
          return N(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 12;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      var u = o.getUTCHours() >= 12;
      return u && a < 12 ? o.setUTCHours(a + 12, 0, 0, 0) : !u && a === 12 ? o.setUTCHours(0, 0, 0, 0) : o.setUTCHours(a, 0, 0, 0), o;
    }
  }]), n;
}(_);
function ie(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ie = function(n) {
    return typeof n;
  } : ie = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ie(e);
}
function tc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ec(e, t, n) {
  return t && Yo(e.prototype, t), n && Yo(e, n), e;
}
function nc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ir(e, t);
}
function ir(e, t) {
  return ir = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, ir(e, t);
}
function rc(e) {
  var t = ac();
  return function() {
    var r = Ye(e), o;
    if (t) {
      var i = Ye(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return oc(this, o);
  };
}
function oc(e, t) {
  return t && (ie(t) === "object" || typeof t == "function") ? t : ur(e);
}
function ur(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ac() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ye(e) {
  return Ye = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ye(e);
}
function Wo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ic = /* @__PURE__ */ function(e) {
  nc(n, e);
  var t = rc(n);
  function n() {
    var r;
    tc(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Wo(ur(r), "priority", 70), Wo(ur(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), r;
  }
  return ec(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "H":
          return E(H.hour23h, o);
        case "Ho":
          return a.ordinalNumber(o, {
            unit: "hour"
          });
        default:
          return N(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 23;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCHours(a, 0, 0, 0), o;
    }
  }]), n;
}(_);
function ue(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ue = function(n) {
    return typeof n;
  } : ue = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ue(e);
}
function uc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function sc(e, t, n) {
  return t && zo(e.prototype, t), n && zo(e, n), e;
}
function fc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && sr(e, t);
}
function sr(e, t) {
  return sr = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, sr(e, t);
}
function cc(e) {
  var t = yc();
  return function() {
    var r = We(e), o;
    if (t) {
      var i = We(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return lc(this, o);
  };
}
function lc(e, t) {
  return t && (ue(t) === "object" || typeof t == "function") ? t : fr(e);
}
function fr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function We(e) {
  return We = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, We(e);
}
function qo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var dc = /* @__PURE__ */ function(e) {
  fc(n, e);
  var t = cc(n);
  function n() {
    var r;
    uc(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), qo(fr(r), "priority", 70), qo(fr(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]), r;
  }
  return sc(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "K":
          return E(H.hour11h, o);
        case "Ko":
          return a.ordinalNumber(o, {
            unit: "hour"
          });
        default:
          return N(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      var u = o.getUTCHours() >= 12;
      return u && a < 12 ? o.setUTCHours(a + 12, 0, 0, 0) : o.setUTCHours(a, 0, 0, 0), o;
    }
  }]), n;
}(_);
function se(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? se = function(n) {
    return typeof n;
  } : se = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, se(e);
}
function hc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function pc(e, t, n) {
  return t && Fo(e.prototype, t), n && Fo(e, n), e;
}
function mc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && cr(e, t);
}
function cr(e, t) {
  return cr = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, cr(e, t);
}
function vc(e) {
  var t = gc();
  return function() {
    var r = ze(e), o;
    if (t) {
      var i = ze(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return bc(this, o);
  };
}
function bc(e, t) {
  return t && (se(t) === "object" || typeof t == "function") ? t : lr(e);
}
function lr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ze(e) {
  return ze = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ze(e);
}
function jo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var wc = /* @__PURE__ */ function(e) {
  mc(n, e);
  var t = vc(n);
  function n() {
    var r;
    hc(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), jo(lr(r), "priority", 70), jo(lr(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), r;
  }
  return pc(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "k":
          return E(H.hour24h, o);
        case "ko":
          return a.ordinalNumber(o, {
            unit: "hour"
          });
        default:
          return N(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 24;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      var u = a <= 24 ? a % 24 : a;
      return o.setUTCHours(u, 0, 0, 0), o;
    }
  }]), n;
}(_);
function fe(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fe = function(n) {
    return typeof n;
  } : fe = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, fe(e);
}
function _c(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Oc(e, t, n) {
  return t && Qo(e.prototype, t), n && Qo(e, n), e;
}
function Pc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && yr(e, t);
}
function yr(e, t) {
  return yr = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, yr(e, t);
}
function xc(e) {
  var t = Mc();
  return function() {
    var r = qe(e), o;
    if (t) {
      var i = qe(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Tc(this, o);
  };
}
function Tc(e, t) {
  return t && (fe(t) === "object" || typeof t == "function") ? t : dr(e);
}
function dr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Mc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function qe(e) {
  return qe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, qe(e);
}
function Vo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $c = /* @__PURE__ */ function(e) {
  Pc(n, e);
  var t = xc(n);
  function n() {
    var r;
    _c(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Vo(dr(r), "priority", 60), Vo(dr(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Oc(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "m":
          return E(H.minute, o);
        case "mo":
          return a.ordinalNumber(o, {
            unit: "minute"
          });
        default:
          return N(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 59;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMinutes(a, 0, 0), o;
    }
  }]), n;
}(_);
function ce(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ce = function(n) {
    return typeof n;
  } : ce = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ce(e);
}
function Sc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Rc(e, t, n) {
  return t && Xo(e.prototype, t), n && Xo(e, n), e;
}
function Dc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && hr(e, t);
}
function hr(e, t) {
  return hr = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, hr(e, t);
}
function kc(e) {
  var t = Ec();
  return function() {
    var r = Fe(e), o;
    if (t) {
      var i = Fe(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Cc(this, o);
  };
}
function Cc(e, t) {
  return t && (ce(t) === "object" || typeof t == "function") ? t : pr(e);
}
function pr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ec() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Fe(e) {
  return Fe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Fe(e);
}
function Go(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ic = /* @__PURE__ */ function(e) {
  Dc(n, e);
  var t = kc(n);
  function n() {
    var r;
    Sc(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Go(pr(r), "priority", 50), Go(pr(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Rc(n, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "s":
          return E(H.second, o);
        case "so":
          return a.ordinalNumber(o, {
            unit: "second"
          });
        default:
          return N(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 59;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCSeconds(a, 0), o;
    }
  }]), n;
}(_);
function le(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? le = function(n) {
    return typeof n;
  } : le = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, le(e);
}
function Nc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ko(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Hc(e, t, n) {
  return t && Ko(e.prototype, t), n && Ko(e, n), e;
}
function Ac(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && mr(e, t);
}
function mr(e, t) {
  return mr = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, mr(e, t);
}
function Bc(e) {
  var t = Uc();
  return function() {
    var r = je(e), o;
    if (t) {
      var i = je(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Lc(this, o);
  };
}
function Lc(e, t) {
  return t && (le(t) === "object" || typeof t == "function") ? t : vr(e);
}
function vr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Uc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function je(e) {
  return je = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, je(e);
}
function Jo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Yc = /* @__PURE__ */ function(e) {
  Ac(n, e);
  var t = Bc(n);
  function n() {
    var r;
    Nc(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), Jo(vr(r), "priority", 30), Jo(vr(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Hc(n, [{
    key: "parse",
    value: function(o, i) {
      var a = function(f) {
        return Math.floor(f * Math.pow(10, -i.length + 3));
      };
      return A(N(i.length, o), a);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMilliseconds(a), o;
    }
  }]), n;
}(_);
function ye(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ye = function(n) {
    return typeof n;
  } : ye = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ye(e);
}
function Wc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function zc(e, t, n) {
  return t && Zo(e.prototype, t), n && Zo(e, n), e;
}
function qc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && br(e, t);
}
function br(e, t) {
  return br = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, br(e, t);
}
function Fc(e) {
  var t = Qc();
  return function() {
    var r = Qe(e), o;
    if (t) {
      var i = Qe(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return jc(this, o);
  };
}
function jc(e, t) {
  return t && (ye(t) === "object" || typeof t == "function") ? t : gr(e);
}
function gr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Qc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Qe(e) {
  return Qe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Qe(e);
}
function ta(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Vc = /* @__PURE__ */ function(e) {
  qc(n, e);
  var t = Fc(n);
  function n() {
    var r;
    Wc(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), ta(gr(r), "priority", 10), ta(gr(r), "incompatibleTokens", ["t", "T", "x"]), r;
  }
  return zc(n, [{
    key: "parse",
    value: function(o, i) {
      switch (i) {
        case "X":
          return tt(Z.basicOptionalMinutes, o);
        case "XX":
          return tt(Z.basic, o);
        case "XXXX":
          return tt(Z.basicOptionalSeconds, o);
        case "XXXXX":
          return tt(Z.extendedOptionalSeconds, o);
        case "XXX":
        default:
          return tt(Z.extended, o);
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return i.timestampIsSet ? o : new Date(o.getTime() - a);
    }
  }]), n;
}(_);
function de(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? de = function(n) {
    return typeof n;
  } : de = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, de(e);
}
function Xc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ea(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Gc(e, t, n) {
  return t && ea(e.prototype, t), n && ea(e, n), e;
}
function Kc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && wr(e, t);
}
function wr(e, t) {
  return wr = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, wr(e, t);
}
function Jc(e) {
  var t = tl();
  return function() {
    var r = Ve(e), o;
    if (t) {
      var i = Ve(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Zc(this, o);
  };
}
function Zc(e, t) {
  return t && (de(t) === "object" || typeof t == "function") ? t : _r(e);
}
function _r(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tl() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ve(e) {
  return Ve = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ve(e);
}
function na(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var el = /* @__PURE__ */ function(e) {
  Kc(n, e);
  var t = Jc(n);
  function n() {
    var r;
    Xc(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), na(_r(r), "priority", 10), na(_r(r), "incompatibleTokens", ["t", "T", "X"]), r;
  }
  return Gc(n, [{
    key: "parse",
    value: function(o, i) {
      switch (i) {
        case "x":
          return tt(Z.basicOptionalMinutes, o);
        case "xx":
          return tt(Z.basic, o);
        case "xxxx":
          return tt(Z.basicOptionalSeconds, o);
        case "xxxxx":
          return tt(Z.extendedOptionalSeconds, o);
        case "xxx":
        default:
          return tt(Z.extended, o);
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return i.timestampIsSet ? o : new Date(o.getTime() - a);
    }
  }]), n;
}(_);
function he(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? he = function(n) {
    return typeof n;
  } : he = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, he(e);
}
function nl(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ra(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function rl(e, t, n) {
  return t && ra(e.prototype, t), n && ra(e, n), e;
}
function ol(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Or(e, t);
}
function Or(e, t) {
  return Or = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Or(e, t);
}
function al(e) {
  var t = ul();
  return function() {
    var r = Xe(e), o;
    if (t) {
      var i = Xe(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return il(this, o);
  };
}
function il(e, t) {
  return t && (he(t) === "object" || typeof t == "function") ? t : Pr(e);
}
function Pr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ul() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Xe(e) {
  return Xe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Xe(e);
}
function oa(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var sl = /* @__PURE__ */ function(e) {
  ol(n, e);
  var t = al(n);
  function n() {
    var r;
    nl(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), oa(Pr(r), "priority", 40), oa(Pr(r), "incompatibleTokens", "*"), r;
  }
  return rl(n, [{
    key: "parse",
    value: function(o) {
      return Ia(o);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return [new Date(a * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(_);
function pe(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? pe = function(n) {
    return typeof n;
  } : pe = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, pe(e);
}
function fl(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function aa(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function cl(e, t, n) {
  return t && aa(e.prototype, t), n && aa(e, n), e;
}
function ll(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && xr(e, t);
}
function xr(e, t) {
  return xr = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, xr(e, t);
}
function yl(e) {
  var t = hl();
  return function() {
    var r = Ge(e), o;
    if (t) {
      var i = Ge(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return dl(this, o);
  };
}
function dl(e, t) {
  return t && (pe(t) === "object" || typeof t == "function") ? t : Tr(e);
}
function Tr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hl() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ge(e) {
  return Ge = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ge(e);
}
function ia(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var pl = /* @__PURE__ */ function(e) {
  ll(n, e);
  var t = yl(n);
  function n() {
    var r;
    fl(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), ia(Tr(r), "priority", 20), ia(Tr(r), "incompatibleTokens", "*"), r;
  }
  return cl(n, [{
    key: "parse",
    value: function(o) {
      return Ia(o);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return [new Date(a), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(_), ml = {
  G: new pu(),
  y: new Ou(),
  Y: new Ru(),
  R: new Hu(),
  u: new zu(),
  Q: new Gu(),
  q: new rs(),
  M: new cs(),
  L: new vs(),
  w: new Ts(),
  I: new Es(),
  d: new Ws(),
  D: new Xs(),
  E: new nf(),
  e: new cf(),
  c: new vf(),
  i: new Tf(),
  a: new Cf(),
  b: new Lf(),
  B: new jf(),
  h: new Zf(),
  H: new ic(),
  K: new dc(),
  k: new wc(),
  m: new $c(),
  s: new Ic(),
  S: new Yc(),
  X: new Vc(),
  x: new el(),
  t: new sl(),
  T: new pl()
};
function me(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? me = function(n) {
    return typeof n;
  } : me = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, me(e);
}
function ua(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = vl(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var r = 0, o = function() {
      };
      return { s: o, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(s) {
        throw s;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, a = !1, u;
  return { s: function() {
    n = e[Symbol.iterator]();
  }, n: function() {
    var s = n.next();
    return i = s.done, s;
  }, e: function(s) {
    a = !0, u = s;
  }, f: function() {
    try {
      !i && n.return != null && n.return();
    } finally {
      if (a)
        throw u;
    }
  } };
}
function vl(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return sa(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return sa(e, t);
  }
}
function sa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var bl = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, gl = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, wl = /^'([^]*?)'?$/, _l = /''/g, Ol = /\S/, Pl = /[a-zA-Z]/;
function fn(e, t, n, r) {
  var o, i, a, u, f, s, c, l, y, d, h, m, g, b, w, P, T, O;
  p(3, arguments);
  var M = String(e), I = String(t), k = wt(), R = (o = (i = r == null ? void 0 : r.locale) !== null && i !== void 0 ? i : k.locale) !== null && o !== void 0 ? o : Da;
  if (!R.match)
    throw new RangeError("locale must contain match property");
  var B = C((a = (u = (f = (s = r == null ? void 0 : r.firstWeekContainsDate) !== null && s !== void 0 ? s : r == null || (c = r.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && f !== void 0 ? f : k.firstWeekContainsDate) !== null && u !== void 0 ? u : (y = k.locale) === null || y === void 0 || (d = y.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(B >= 1 && B <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var D = C((h = (m = (g = (b = r == null ? void 0 : r.weekStartsOn) !== null && b !== void 0 ? b : r == null || (w = r.locale) === null || w === void 0 || (P = w.options) === null || P === void 0 ? void 0 : P.weekStartsOn) !== null && g !== void 0 ? g : k.weekStartsOn) !== null && m !== void 0 ? m : (T = k.locale) === null || T === void 0 || (O = T.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!(D >= 0 && D <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (I === "")
    return M === "" ? v(n) : new Date(NaN);
  var Y = {
    firstWeekContainsDate: B,
    weekStartsOn: D,
    locale: R
  }, F = [new iu()], W = I.match(gl).map(function(U) {
    var S = U[0];
    if (S in hn) {
      var X = hn[S];
      return X(U, R.formatLong);
    }
    return U;
  }).join("").match(bl), $ = [], L = ua(W), J;
  try {
    var nn = function() {
      var S = J.value;
      !(r != null && r.useAdditionalWeekYearTokens) && Ra(S) && ve(S, I, e), !(r != null && r.useAdditionalDayOfYearTokens) && Sa(S) && ve(S, I, e);
      var X = S[0], kt = ml[X];
      if (kt) {
        var Wr = kt.incompatibleTokens;
        if (Array.isArray(Wr)) {
          var zr = $.find(function(qr) {
            return Wr.includes(qr.token) || qr.token === X;
          });
          if (zr)
            throw new RangeError("The format string mustn't contain `".concat(zr.fullToken, "` and `").concat(S, "` at the same time"));
        } else if (kt.incompatibleTokens === "*" && $.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(S, "` and any other token at the same time"));
        $.push({
          token: X,
          fullToken: S
        });
        var on = kt.run(M, S, R.match, Y);
        if (!on)
          return {
            v: new Date(NaN)
          };
        F.push(on.setter), M = on.rest;
      } else {
        if (X.match(Pl))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + X + "`");
        if (S === "''" ? S = "'" : X === "'" && (S = xl(S)), M.indexOf(S) === 0)
          M = M.slice(S.length);
        else
          return {
            v: new Date(NaN)
          };
      }
    };
    for (L.s(); !(J = L.n()).done; ) {
      var St = nn();
      if (me(St) === "object")
        return St.v;
    }
  } catch (U) {
    L.e(U);
  } finally {
    L.f();
  }
  if (M.length > 0 && Ol.test(M))
    return new Date(NaN);
  var Fa = F.map(function(U) {
    return U.priority;
  }).sort(function(U, S) {
    return S - U;
  }).filter(function(U, S, X) {
    return X.indexOf(U) === S;
  }).map(function(U) {
    return F.filter(function(S) {
      return S.priority === U;
    }).sort(function(S, X) {
      return X.subPriority - S.subPriority;
    });
  }).map(function(U) {
    return U[0];
  }), rn = v(n);
  if (isNaN(rn.getTime()))
    return new Date(NaN);
  var Ot = Pa(rn, _a(rn)), Lr = {}, Rt = ua(Fa), Ur;
  try {
    for (Rt.s(); !(Ur = Rt.n()).done; ) {
      var Yr = Ur.value;
      if (!Yr.validate(Ot, Y))
        return new Date(NaN);
      var Dt = Yr.set(Ot, Lr, Y);
      Array.isArray(Dt) ? (Ot = Dt[0], eu(Lr, Dt[1])) : Ot = Dt;
    }
  } catch (U) {
    Rt.e(U);
  } finally {
    Rt.f();
  }
  return Ot;
}
function xl(e) {
  return e.match(wl)[1].replace(_l, "'");
}
function cn(e) {
  return p(1, arguments), st(e, Date.now());
}
function Tl(e, t) {
  p(2, arguments);
  var n = v(e).getTime(), r = v(t.start).getTime(), o = v(t.end).getTime();
  if (!(r <= o))
    throw new RangeError("Invalid interval");
  return n >= r && n <= o;
}
function ln(e, t) {
  p(2, arguments);
  var n = C(t);
  return wa(e, -n);
}
function j(e, t) {
  p(2, arguments);
  var n = v(e), r = C(t);
  return n.setDate(r), n;
}
function z(e, t) {
  p(2, arguments);
  var n = v(e), r = C(t);
  return n.setHours(r), n;
}
function G(e, t) {
  p(2, arguments);
  var n = v(e), r = C(t);
  return n.setMilliseconds(r), n;
}
function V(e, t) {
  p(2, arguments);
  var n = v(e), r = C(t);
  return n.setMinutes(r), n;
}
function K(e, t) {
  p(2, arguments);
  var n = v(e), r = C(t);
  return n.setSeconds(r), n;
}
function fa(e, t) {
  p(2, arguments);
  var n = C(t);
  return ft(e, -n);
}
var Ml = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "select-none",
    attrs: {
      "data-id": "sds-calendar",
      "data-testid": "calendar"
    }
  }, [t.showCalendars ? r("div", [t.view === "days" ? [r("div", {
    staticClass: "flex relative gap-1 mb-2 w-56",
    class: {
      "sm:w-120": t.isRange
    }
  }, [r("button", {
    staticClass: "absolute left-0 top-0 text-gray-700 dark:text-gray-300 p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded disabled:pointer-events-none disabled:opacity-50",
    attrs: {
      type: "button",
      tabindex: "-1",
      disabled: !t.canGoToPrevMonth
    },
    on: {
      click: t.goToPrevMonth
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [t._v("Go to previous month")]), r("svg", {
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
  }, [r("path", {
    attrs: {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "48",
      d: "M328 112L184 256l144 144"
    }
  })])]), r("div", {
    staticClass: "flex-grow"
  }, [r("button", {
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
  }, [r("span", [t._v(t._s(t.calendarMonthTitle) + " " + t._s(t.calendarYearTitle))])])]), t.isRange ? r("div", {
    staticClass: "hidden flex-grow sm:block"
  }, [r("button", {
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
  }, [r("span", [t._v(t._s(t.calendarNextMonthTitle) + " " + t._s(t.calendarNextYearTitle))])])]) : t._e(), r("button", {
    staticClass: "absolute right-0 top-0 text-gray-700 dark:text-gray-300 p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded disabled:pointer-events-none disabled:opacity-50",
    attrs: {
      type: "button",
      tabindex: "-1",
      disabled: !t.canGoToNextMonth
    },
    on: {
      click: t.goToNextMonth
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [t._v("Go to next month")]), r("svg", {
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
  }, [r("path", {
    attrs: {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "48",
      d: "M184 112l144 144l-144 144"
    }
  })])])]), r("div", {
    staticClass: "flex flex-col sm:flex-row sm:gap-8"
  }, [r("div", {
    staticClass: "grid grid-cols-7 w-56 h-60 place-content-start"
  }, [t._l(t.calendarDaysOfWeek, function(o) {
    return r("div", {
      key: o,
      staticClass: "text-sm font-bold text-gray-400 text-center uppercase mb-1"
    }, [t._v(" " + t._s(o.charAt(0)) + " ")]);
  }), t._l(t.calendarDaysInMonth, function(o) {
    return r("div", {
      key: o,
      class: ["w-8 h-8 mb-1", o === 1 ? "col-start-".concat(t.calendarStartOfMonth) : "", t.dateIsWithinInterval(o) ? "bg-blue-200 dark:bg-blue-800" : "", t.dateIsAtStartOfInterval(o) ? "bg-blue-200 dark:bg-blue-800 rounded-l-full" : "", t.dateIsAtEndOfInterval(o) ? "bg-blue-200 dark:bg-blue-800 rounded-r-full" : ""]
    }, [r("button", {
      staticClass: "disabled:pointer-events-none disabled:opacity-25",
      class: {
        "px-2 py-1 w-8 h-8 rounded-full text-sm": !0,
        "hover:bg-gray-300 dark:hover:bg-gray-600": !t.dateIsSameDay(o),
        "font-bold bg-blue-500 text-white": t.dateIsSameDay(o),
        "font-bold text-blue-500 bg-gray-100 dark:text-blue-100 dark:bg-gray-800": t.dateIsToday(o) && !t.dateIsSameDay(o) && !t.dateIsWithinInterval(o),
        "font-semibold text-blue-900 dark:text-blue-100": t.dateIsWithinInterval(o) && !t.dateIsSameDay(o)
      },
      attrs: {
        type: "button",
        tabindex: "-1",
        disabled: t.dateIsNotSelectable(o),
        title: t.dateIsToday(o) ? "Today" : ""
      },
      on: {
        click: function(a) {
          return t.setValueDate(o);
        }
      }
    }, [t._v(" " + t._s(o) + " ")])]);
  })], 2), t.isRange ? [r("div", {
    staticClass: "hidden sm:grid grid-cols-7 w- place-content-start"
  }, [t._l(t.calendarDaysOfWeek, function(o) {
    return r("div", {
      key: o,
      staticClass: "text-sm font-bold text-gray-400 text-center uppercase mb-1"
    }, [t._v(" " + t._s(o.charAt(0)) + " ")]);
  }), t._l(t.calendarNextDaysInMonth, function(o) {
    return r("div", {
      key: o,
      class: ["w-8 h-8 mb-1", o === 1 ? "col-start-".concat(t.calendarNextStartOfMonth) : "", t.dateIsWithinInterval(o, !0) ? "bg-blue-200 dark:bg-blue-800" : "", t.dateIsAtStartOfInterval(o, !0) ? "bg-blue-200 dark:bg-blue-800 rounded-l-full" : "", t.dateIsAtEndOfInterval(o, !0) ? "bg-blue-200 dark:bg-blue-800 rounded-r-full" : ""]
    }, [r("button", {
      staticClass: "disabled:pointer-events-none disabled:opacity-25",
      class: {
        "px-2 py-1 w-8 h-8 rounded-full text-sm": !0,
        "hover:bg-gray-300 dark:hover:bg-gray-600": !t.dateIsSameDay(o, !0),
        "font-bold bg-blue-500 text-white": t.dateIsSameDay(o, !0),
        "font-bold text-blue-500 bg-gray-100 dark:text-blue-400 dark:bg-gray-100": t.dateIsToday(o, !0) && !t.dateIsSameDay(o, !0) && !t.dateIsWithinInterval(o, !0),
        "font-semibold text-blue-900 dark:text-blue-100": t.dateIsWithinInterval(o, !0) && !t.dateIsSameDay(o, !0)
      },
      attrs: {
        type: "button",
        tabindex: "-1",
        disabled: t.dateIsNotSelectable(o, !0),
        title: t.dateIsToday(o, !0) ? "Today" : ""
      },
      on: {
        click: function(a) {
          return t.setValueDate(o, !0);
        }
      }
    }, [t._v(" " + t._s(o) + " ")])]);
  })], 2)] : t._e()], 2)] : [r("div", {
    staticClass: "grid gap-1 w-56",
    class: {
      "sm:w-120": t.isRange
    }
  }, [r("div", [r("div", {
    staticClass: "mb-1 text-sm uppercase font-semibold text-gray-500"
  }, [t._v(" Month ")]), r("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.calendarMonthSelect,
      expression: "calendarMonthSelect"
    }],
    staticClass: "form-control form-control-sm",
    on: {
      change: function(i) {
        var a = Array.prototype.filter.call(i.target.options, function(u) {
          return u.selected;
        }).map(function(u) {
          var f = "_value" in u ? u._value : u.value;
          return f;
        });
        t.calendarMonthSelect = i.target.multiple ? a : a[0];
      }
    }
  }, t._l(t.calendarMonths, function(o) {
    return r("option", {
      key: o
    }, [t._v(" " + t._s(o) + " ")]);
  }), 0)]), r("div", {
    staticClass: "mt-1"
  }, [r("div", {
    staticClass: "mb-1 text-sm uppercase font-semibold text-gray-500"
  }, [t._v(" Year ")]), r("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.calendarYearSelect,
      expression: "calendarYearSelect"
    }],
    staticClass: "form-control form-control-sm",
    on: {
      change: function(i) {
        var a = Array.prototype.filter.call(i.target.options, function(u) {
          return u.selected;
        }).map(function(u) {
          var f = "_value" in u ? u._value : u.value;
          return f;
        });
        t.calendarYearSelect = i.target.multiple ? a : a[0];
      }
    }
  }, t._l(t.calendarYears, function(o) {
    return r("option", {
      key: o
    }, [t._v(" " + t._s(o) + " ")]);
  }), 0)]), r("button", {
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
  }, [t._v(" Go to Date ")]), r("button", {
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
  }, [t._v(" Go to Today ")]), r("hr", {
    staticClass: "my-2"
  }), r("button", {
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
  }, [t._v(" Cancel ")])])]], 2) : t._e(), t.showTime && t.view === "days" ? r("div", {
    class: {
      "sm:flex sm:gap-8 sm:w-120": t.showCalendars && t.isRange
    }
  }, [r("div", {
    staticClass: "w-56",
    class: {
      "border-t my-2 pt-2 border-t": t.showCalendars
    }
  }, [r("div", {
    staticClass: "uppercase text-sm text-gray-500 mb-2"
  }, [t.date && t.date instanceof Date ? [t._v(" " + t._s(t.formatDate(t.date, "eee MMM dd yyyy")) + " ")] : t.date && !(t.date instanceof Date) && t.date.start instanceof Date ? [t._v(" " + t._s(t.formatDate(t.date.start, "eee MMM dd yyyy")) + " ")] : [t._v(" -- ")]], 2), r("div", {
    staticClass: "flex gap-1"
  }, [r("svg", {
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
  }, [r("path", {
    attrs: {
      d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
      fill: "currentColor"
    }
  })]), r("select", {
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
      change: [function(o) {
        var i = Array.prototype.filter.call(o.target.options, function(a) {
          return a.selected;
        }).map(function(a) {
          var u = "_value" in a ? a._value : a.value;
          return u;
        });
        t.startTimeHour = o.target.multiple ? i : i[0];
      }, function(o) {
        return t.changeTime("hour", o.target.value);
      }]
    }
  }, t._l(t.getCalendarHours, function(o) {
    return r("option", {
      key: o
    }, [t._v(" " + t._s(o) + " ")]);
  }), 0), r("span", {
    staticClass: "my-auto"
  }, [t._v(":")]), r("select", {
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
      change: [function(o) {
        var i = Array.prototype.filter.call(o.target.options, function(a) {
          return a.selected;
        }).map(function(a) {
          var u = "_value" in a ? a._value : a.value;
          return u;
        });
        t.startTimeMinutes = o.target.multiple ? i : i[0];
      }, function(o) {
        return t.changeTime("minutes", o.target.value);
      }]
    }
  }, t._l(t.getCalendarMinutes, function(o) {
    return r("option", {
      key: o
    }, [t._v(" " + t._s(o) + " ")]);
  }), 0), r("select", {
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
      change: [function(o) {
        var i = Array.prototype.filter.call(o.target.options, function(a) {
          return a.selected;
        }).map(function(a) {
          var u = "_value" in a ? a._value : a.value;
          return u;
        });
        t.startTimeMeridian = o.target.multiple ? i : i[0];
      }, function(o) {
        return t.changeTime("meridian", o.target.value);
      }]
    }
  }, t._l(t.getCalendarMeridian, function(o) {
    return r("option", {
      key: o
    }, [t._v(" " + t._s(o) + " ")]);
  }), 0)])]), t.isRange ? r("div", {
    staticClass: "border-t my-2 pt-2 border-t w-56"
  }, [r("div", {
    staticClass: "uppercase text-sm text-gray-500 mb-2"
  }, [t.date && !(t.date instanceof Date) && t.date.end instanceof Date ? [t._v(" " + t._s(t.formatDate(t.date.end, "eee MMM dd yyyy")) + " ")] : [t._v(" -- ")]], 2), r("div", {
    staticClass: "flex gap-1"
  }, [r("svg", {
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
  }, [r("path", {
    attrs: {
      d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
      fill: "currentColor"
    }
  })]), r("select", {
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
      change: [function(o) {
        var i = Array.prototype.filter.call(o.target.options, function(a) {
          return a.selected;
        }).map(function(a) {
          var u = "_value" in a ? a._value : a.value;
          return u;
        });
        t.endTimeHour = o.target.multiple ? i : i[0];
      }, function(o) {
        return t.changeTime("hour", o.target.value, !0);
      }]
    }
  }, t._l(t.getCalendarHours, function(o) {
    return r("option", {
      key: o
    }, [t._v(" " + t._s(o) + " ")]);
  }), 0), r("span", {
    staticClass: "my-auto"
  }, [t._v(":")]), r("select", {
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
      change: [function(o) {
        var i = Array.prototype.filter.call(o.target.options, function(a) {
          return a.selected;
        }).map(function(a) {
          var u = "_value" in a ? a._value : a.value;
          return u;
        });
        t.endTimeMinutes = o.target.multiple ? i : i[0];
      }, function(o) {
        return t.changeTime("minutes", o.target.value, !0);
      }]
    }
  }, t._l(t.getCalendarMinutes, function(o) {
    return r("option", {
      key: o
    }, [t._v(" " + t._s(o) + " ")]);
  }), 0), r("select", {
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
      change: [function(o) {
        var i = Array.prototype.filter.call(o.target.options, function(a) {
          return a.selected;
        }).map(function(a) {
          var u = "_value" in a ? a._value : a.value;
          return u;
        });
        t.endTimeMeridian = o.target.multiple ? i : i[0];
      }, function(o) {
        return t.changeTime("meridian", o.target.value, !0);
      }]
    }
  }, t._l(t.getCalendarMeridian, function(o) {
    return r("option", {
      key: o
    }, [t._v(" " + t._s(o) + " ")]);
  }), 0)])]) : t._e()]) : t._e()]);
}, $l = [];
function Er(e, t, n, r, o, i, a, u) {
  var f = typeof e == "function" ? e.options : e;
  t && (f.render = t, f.staticRenderFns = n, f._compiled = !0), r && (f.functional = !0), i && (f._scopeId = "data-v-" + i);
  var s;
  if (a ? (s = function(y) {
    y = y || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !y && typeof __VUE_SSR_CONTEXT__ < "u" && (y = __VUE_SSR_CONTEXT__), o && o.call(this, y), y && y._registeredComponents && y._registeredComponents.add(a);
  }, f._ssrRegister = s) : o && (s = u ? function() {
    o.call(
      this,
      (f.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : o), s)
    if (f.functional) {
      f._injectStyles = s;
      var c = f.render;
      f.render = function(d, h) {
        return s.call(h), c(d, h);
      };
    } else {
      var l = f.beforeCreate;
      f.beforeCreate = l ? [].concat(l, s) : [s];
    }
  return {
    exports: e,
    options: f
  };
}
const Sl = {
  name: "SdsCalendar",
  props: {
    value: { type: [Object, Date], default: new Date() },
    mode: { type: String, default: "date" },
    min: { type: Date, default: null },
    max: { type: Date, default: null },
    useCurrentTimeForToday: { type: Boolean, default: !1 }
  },
  data() {
    const e = new Date();
    return {
      displayedMonth: e,
      displayedNextMonth: ft(e, 1),
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
      set(e) {
        this.$emit("input", e);
      }
    },
    calendarMonthTitle() {
      return q(this.displayedMonth, "MMMM");
    },
    calendarYearTitle() {
      return q(this.displayedMonth, "yyyy");
    },
    calendarStartOfMonth() {
      return Gr(vt(this.displayedMonth)) + 1;
    },
    calendarDaysInMonth() {
      return Kr(this.displayedMonth);
    },
    calendarNextMonthTitle() {
      return q(this.displayedNextMonth, "MMMM");
    },
    calendarNextYearTitle() {
      return q(this.displayedNextMonth, "yyyy");
    },
    calendarNextStartOfMonth() {
      return Gr(vt(this.displayedNextMonth)) + 1;
    },
    calendarNextDaysInMonth() {
      return Kr(this.displayedNextMonth);
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
      return this.min instanceof Date ? pn(vt(this.min), vt(this.displayedMonth)) : !0;
    },
    canGoToNextMonth() {
      return this.max instanceof Date ? dt(vt(this.max), vt(this.displayedMonth)) : !0;
    },
    isRange() {
      return this.value && !Q(this.value);
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
      this.calendarMonthSelect = q(this.displayedMonth, "MMMM"), this.calendarYearSelect = q(this.displayedMonth, "yyyy");
    },
    initTimeMode() {
      if (this.mode === "time" && (!this.date || !(this.date instanceof Date) && (!this.date.start || !this.date.end))) {
        const e = z(V(K(G(new Date(), 0), 0), 0), 0);
        this.isRange ? this.date = {
          start: e,
          end: e
        } : this.date = e;
      }
    },
    moveToStartDate() {
      this.date && !(this.date instanceof Date) && this.date.start instanceof Date ? this.displayedMonth = this.date.start : this.date && this.date instanceof Date ? this.displayedMonth = this.date : this.min && this.min instanceof Date && dt(this.min, new Date()) && (this.displayedMonth = this.min), this.displayedNextMonth = ft(this.displayedMonth, 1);
    },
    updateTimeSelects() {
      this.isRange ? (this.date && !(this.date instanceof Date) && this.date.start instanceof Date ? (this.startTimeHour = this.formatDate(this.date.start, "hh"), this.startTimeMinutes = this.formatDate(this.date.start, "mm"), this.startTimeMeridian = et(this.date.start) > 11 ? "pm" : "am") : (this.startTimeHour = null, this.startTimeMinutes = null, this.startTimeMeridian = null), this.date && !(this.date instanceof Date) && this.date.end instanceof Date ? (this.endTimeHour = this.formatDate(this.date.end, "hh"), this.endTimeMinutes = this.formatDate(this.date.end, "mm"), this.endTimeMeridian = et(this.date.end) > 11 ? "pm" : "am") : (this.endTimeHour = null, this.endTimeMinutes = null, this.endTimeMeridian = null)) : this.date instanceof Date ? (this.startTimeHour = this.formatDate(this.date, "hh"), this.startTimeMinutes = this.formatDate(this.date, "mm"), this.startTimeMeridian = et(this.date) > 11 ? "pm" : "am") : (this.startTimeHour = null, this.startTimeMinutes = null, this.startTimeMeridian = null);
    },
    changeTime(e, t, n = !1) {
      switch (e) {
        case "hour":
          if (this.isRange) {
            if (!n && this.date && !(this.date instanceof Date) && this.date.start instanceof Date) {
              const o = et(this.date.start) > 12 ? parseInt(t) + 12 : parseInt(t);
              this.date.start = z(this.date.start, o);
            } else if (n && this.date && !(this.date instanceof Date) && this.date.end instanceof Date) {
              const o = et(this.date.end) > 12 ? parseInt(t) + 12 : parseInt(t);
              this.date.end = z(this.date.end, o);
            }
          } else if (this.date instanceof Date) {
            const o = et(this.date) > 12 ? parseInt(t) + 12 : parseInt(t);
            this.date = z(this.date, o);
          }
          break;
        case "minutes":
          this.isRange ? !n && this.date && !(this.date instanceof Date) && this.date.start instanceof Date ? this.date.start = V(this.date.start, parseInt(t)) : n && this.date && !(this.date instanceof Date) && this.date.end instanceof Date && (this.date.end = V(this.date.end, parseInt(t))) : this.date instanceof Date && (this.date = V(this.date, parseInt(t)));
          break;
        case "meridian":
          if (this.isRange) {
            if (!n && this.date && !(this.date instanceof Date) && this.date.start instanceof Date) {
              const r = et(this.date.start), o = t === "am" && r >= 12 ? r - 12 : t === "pm" && r < 12 ? r + 12 : r;
              this.date.start = z(this.date.start, o);
            } else if (n && this.date && !(this.date instanceof Date) && this.date.end instanceof Date) {
              const r = et(this.date.end), o = t === "am" && r >= 12 ? r - 12 : t === "pm" && r < 12 ? r + 12 : r;
              this.date.end = z(this.date.end, o);
            }
          } else if (this.date instanceof Date) {
            const r = et(this.date), o = t === "am" && r >= 12 ? r - 12 : t === "pm" && r < 12 ? r + 12 : r;
            this.date = z(this.date, o);
          }
          break;
      }
      this.isRange && this.date && !(this.date instanceof Date) && this.date.start instanceof Date && this.date.end instanceof Date && (this.date = {
        start: dn([this.date.start, this.date.end]),
        end: yn([this.date.start, this.date.end])
      });
    },
    goToPrevMonth() {
      this.displayedMonth = fa(this.displayedMonth, 1), this.displayedNextMonth = fa(this.displayedNextMonth, 1);
    },
    goToNextMonth() {
      this.displayedMonth = ft(this.displayedMonth, 1), this.displayedNextMonth = ft(this.displayedNextMonth, 1);
    },
    goToSelectedMonth() {
      if (!this.calendarMonthSelect || !this.calendarYearSelect)
        return;
      const e = this.calendarMonths.findIndex((t) => t === this.calendarMonthSelect) + 1;
      typeof e == "number" && (this.displayedMonth = new Date(parseInt(this.calendarYearSelect), e, 0, 0, 0, 0, 0), this.displayedNextMonth = ft(this.displayedMonth, 1), this.view = "days");
    },
    goToThisMonth() {
      this.displayedMonth = new Date(), this.displayedNextMonth = ft(this.displayedMonth, 1), this.view = "days";
    },
    formatDate(e, t) {
      return q(e, t);
    },
    setValueDate(e, t = !1) {
      const n = t ? this.displayedNextMonth : this.displayedMonth;
      if (this.isRange && this.date)
        if (this.date.end || !this.date.start)
          this.date = {
            start: this.useCurrentTimeForToday && cn(j(n, e)) ? new Date() : z(V(K(G(j(n, e), 0), 0), 0), 0),
            end: null
          };
        else if (!(this.date instanceof Date) && Q(this.date.start) && this.date.start instanceof Date) {
          const r = this.date.start, o = jr(j(n, e));
          if (st(r, o) && dt(o, r))
            this.date = { start: r, end: o };
          else {
            const i = dn([r, o]), a = yn([r, o]);
            this.date = {
              start: mn(r, i) ? i : this.useCurrentTimeForToday && cn(i) ? new Date() : z(V(K(G(i, 0), 0), 0), 0),
              end: jr(a)
            };
          }
        } else
          this.date.end = z(V(K(G(j(n, e), 0), 0), 0), 0);
      else
        this.date = this.useCurrentTimeForToday && cn(j(n, e)) ? new Date() : z(V(K(G(j(n, e), 0), 0), 0), 0);
      this.$nextTick(() => {
        this.updateTimeSelects();
      });
    },
    dateIsBeforeMin(e, t = !1) {
      if (!(this.min instanceof Date))
        return !1;
      const n = t ? this.displayedNextMonth : this.displayedMonth;
      return pn(j(n, e), z(V(K(G(this.min, 0), 0), 0), 0));
    },
    dateIsAfterMax(e, t = !1) {
      if (!(this.max instanceof Date))
        return !1;
      const n = t ? this.displayedNextMonth : this.displayedMonth, r = j(n, e - 1), o = z(V(K(G(this.max, 0), 0), 0), 0);
      return dt(r, o) || mn(r, o);
    },
    dateIsNotSelectable(e, t = !1) {
      return this.dateIsBeforeMin(e, t) || this.dateIsAfterMax(e, t);
    },
    dateIsWithinInterval(e, t = !1) {
      const n = t ? this.displayedNextMonth : this.displayedMonth;
      return this.date && !(this.date instanceof Date) && Q(this.date.start) && this.date.start instanceof Date && Q(this.date.end) && this.date.end instanceof Date ? Tl(
        j(n, e),
        { start: this.date.start, end: this.date.end }
      ) : !1;
    },
    dateIsAtStartOfInterval(e, t = !1) {
      const n = t ? this.displayedNextMonth : this.displayedMonth;
      return this.date && !(this.date instanceof Date) && Q(this.date.start) && this.date.start instanceof Date && Q(this.date.end) && this.date.end instanceof Date ? st(j(n, e), this.date.start) : !1;
    },
    dateIsAtEndOfInterval(e, t = !1) {
      const n = t ? this.displayedNextMonth : this.displayedMonth;
      return this.date && !(this.date instanceof Date) && Q(this.date.start) && this.date.start instanceof Date && Q(this.date.end) && this.date.end instanceof Date ? st(j(n, e), this.date.end) : !1;
    },
    dateIsSameDay(e, t = !1) {
      if (this.date) {
        if (Q(this.date) && this.date instanceof Date) {
          const n = t ? this.displayedNextMonth : this.displayedMonth;
          return st(j(n, e), this.date);
        } else if (!(this.date instanceof Date) && (Q(this.date.start) && this.date.start instanceof Date || Q(this.date.end) && this.date.end instanceof Date)) {
          const n = t ? this.displayedNextMonth : this.displayedMonth;
          return Q(this.date.start) && this.date.start instanceof Date && st(j(n, e), this.date.start) || Q(this.date.end) && this.date.end instanceof Date && st(j(n, e), this.date.end);
        }
      } else
        return !1;
    },
    dateIsToday(e, t = !1) {
      const n = t ? this.displayedNextMonth : this.displayedMonth;
      return st(j(n, e), new Date());
    }
  }
}, ca = {};
var Rl = /* @__PURE__ */ Er(
  Sl,
  Ml,
  $l,
  !1,
  Dl,
  null,
  null,
  null
);
function Dl(e) {
  for (let t in ca)
    this[t] = ca[t];
}
const kl = /* @__PURE__ */ function() {
  return Rl.exports;
}();
function rt(e) {
  return e.split("-")[0];
}
function ht(e) {
  return e.split("-")[1];
}
function _t(e) {
  return ["top", "bottom"].includes(rt(e)) ? "x" : "y";
}
function Ir(e) {
  return e === "y" ? "height" : "width";
}
function la(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = r.x + r.width / 2 - o.width / 2, a = r.y + r.height / 2 - o.height / 2, u = _t(t), f = Ir(u), s = r[f] / 2 - o[f] / 2, c = rt(t), l = u === "x";
  let y;
  switch (c) {
    case "top":
      y = {
        x: i,
        y: r.y - o.height
      };
      break;
    case "bottom":
      y = {
        x: i,
        y: r.y + r.height
      };
      break;
    case "right":
      y = {
        x: r.x + r.width,
        y: a
      };
      break;
    case "left":
      y = {
        x: r.x - o.width,
        y: a
      };
      break;
    default:
      y = {
        x: r.x,
        y: r.y
      };
  }
  switch (ht(t)) {
    case "start":
      y[u] -= s * (n && l ? -1 : 1);
      break;
    case "end":
      y[u] += s * (n && l ? -1 : 1);
      break;
  }
  return y;
}
const Cl = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, u = i.filter(Boolean), f = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let s = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: l
  } = la(s, r, f), y = r, d = {}, h = 0;
  for (let m = 0; m < u.length; m++) {
    const {
      name: g,
      fn: b
    } = u[m], {
      x: w,
      y: P,
      data: T,
      reset: O
    } = await b({
      x: c,
      y: l,
      initialPlacement: r,
      placement: y,
      strategy: o,
      middlewareData: d,
      rects: s,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (c = w != null ? w : c, l = P != null ? P : l, d = {
      ...d,
      [g]: {
        ...d[g],
        ...T
      }
    }, O && h <= 50) {
      h++, typeof O == "object" && (O.placement && (y = O.placement), O.rects && (s = O.rects === !0 ? await a.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : O.rects), {
        x: c,
        y: l
      } = la(s, y, f)), m = -1;
      continue;
    }
  }
  return {
    x: c,
    y: l,
    placement: y,
    strategy: o,
    middlewareData: d
  };
};
function El(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Nr(e) {
  return typeof e != "number" ? El(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $t(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function Hr(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: u,
    strategy: f
  } = e, {
    boundary: s = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: l = "floating",
    altBoundary: y = !1,
    padding: d = 0
  } = t, h = Nr(d), g = u[y ? l === "floating" ? "reference" : "floating" : l], b = $t(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null || n ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(u.floating)),
    boundary: s,
    rootBoundary: c,
    strategy: f
  })), w = $t(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: l === "floating" ? {
      ...a.floating,
      x: r,
      y: o
    } : a.reference,
    offsetParent: await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u.floating)),
    strategy: f
  }) : a[l]);
  return {
    top: b.top - w.top + h.top,
    bottom: w.bottom - b.bottom + h.bottom,
    left: b.left - w.left + h.left,
    right: w.right - b.right + h.right
  };
}
const Aa = Math.min, Ba = Math.max;
function Mr(e, t, n) {
  return Ba(e, Aa(t, n));
}
const Il = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      element: n,
      padding: r = 0
    } = e != null ? e : {}, {
      x: o,
      y: i,
      placement: a,
      rects: u,
      platform: f
    } = t;
    if (n == null)
      return {};
    const s = Nr(r), c = {
      x: o,
      y: i
    }, l = _t(a), y = ht(a), d = Ir(l), h = await f.getDimensions(n), m = l === "y" ? "top" : "left", g = l === "y" ? "bottom" : "right", b = u.reference[d] + u.reference[l] - c[l] - u.floating[d], w = c[l] - u.reference[l], P = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(n));
    let T = P ? l === "y" ? P.clientHeight || 0 : P.clientWidth || 0 : 0;
    T === 0 && (T = u.floating[d]);
    const O = b / 2 - w / 2, M = s[m], I = T - h[d] - s[g], k = T / 2 - h[d] / 2 + O, R = Mr(M, k, I), Y = (y === "start" ? s[m] : s[g]) > 0 && k !== R && u.reference[d] <= u.floating[d] ? k < M ? M - k : I - k : 0;
    return {
      [l]: c[l] - Y,
      data: {
        [l]: R,
        centerOffset: k - R
      }
    };
  }
}), Nl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ke(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Nl[t]);
}
function La(e, t, n) {
  n === void 0 && (n = !1);
  const r = ht(e), o = _t(e), i = Ir(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Ke(a)), {
    main: a,
    cross: Ke(a)
  };
}
const Hl = {
  start: "end",
  end: "start"
};
function $r(e) {
  return e.replace(/start|end/g, (t) => Hl[t]);
}
const Al = ["top", "right", "bottom", "left"], Bl = /* @__PURE__ */ Al.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
function Ll(e, t, n) {
  return (e ? [...n.filter((o) => ht(o) === e), ...n.filter((o) => ht(o) !== e)] : n.filter((o) => rt(o) === o)).filter((o) => e ? ht(o) === e || (t ? $r(o) !== o : !1) : !0);
}
const Ul = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, r, o, i, a;
      const {
        x: u,
        y: f,
        rects: s,
        middlewareData: c,
        placement: l,
        platform: y,
        elements: d
      } = t, {
        alignment: h = null,
        allowedPlacements: m = Bl,
        autoAlignment: g = !0,
        ...b
      } = e, w = Ll(h, g, m), P = await Hr(t, b), T = (n = (r = c.autoPlacement) == null ? void 0 : r.index) != null ? n : 0, O = w[T];
      if (O == null)
        return {};
      const {
        main: M,
        cross: I
      } = La(O, s, await (y.isRTL == null ? void 0 : y.isRTL(d.floating)));
      if (l !== O)
        return {
          x: u,
          y: f,
          reset: {
            placement: w[0]
          }
        };
      const k = [P[rt(O)], P[M], P[I]], R = [...(o = (i = c.autoPlacement) == null ? void 0 : i.overflows) != null ? o : [], {
        placement: O,
        overflows: k
      }], B = w[T + 1];
      if (B)
        return {
          data: {
            index: T + 1,
            overflows: R
          },
          reset: {
            placement: B
          }
        };
      const D = R.slice().sort((W, $) => W.overflows[0] - $.overflows[0]), Y = (a = D.find((W) => {
        let {
          overflows: $
        } = W;
        return $.every((L) => L <= 0);
      })) == null ? void 0 : a.placement, F = Y != null ? Y : D[0].placement;
      return F !== l ? {
        data: {
          index: T + 1,
          overflows: R
        },
        reset: {
          placement: F
        }
      } : {};
    }
  };
};
function Yl(e) {
  const t = Ke(e);
  return [$r(e), t, $r(t)];
}
const Wl = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: r,
        middlewareData: o,
        rects: i,
        initialPlacement: a,
        platform: u,
        elements: f
      } = t, {
        mainAxis: s = !0,
        crossAxis: c = !0,
        fallbackPlacements: l,
        fallbackStrategy: y = "bestFit",
        flipAlignment: d = !0,
        ...h
      } = e, m = rt(r), b = l || (m === a || !d ? [Ke(a)] : Yl(a)), w = [a, ...b], P = await Hr(t, h), T = [];
      let O = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (s && T.push(P[m]), c) {
        const {
          main: R,
          cross: B
        } = La(r, i, await (u.isRTL == null ? void 0 : u.isRTL(f.floating)));
        T.push(P[R], P[B]);
      }
      if (O = [...O, {
        placement: r,
        overflows: T
      }], !T.every((R) => R <= 0)) {
        var M, I;
        const R = ((M = (I = o.flip) == null ? void 0 : I.index) != null ? M : 0) + 1, B = w[R];
        if (B)
          return {
            data: {
              index: R,
              overflows: O
            },
            reset: {
              placement: B
            }
          };
        let D = "bottom";
        switch (y) {
          case "bestFit": {
            var k;
            const Y = (k = O.map((F) => [F, F.overflows.filter((W) => W > 0).reduce((W, $) => W + $, 0)]).sort((F, W) => F[1] - W[1])[0]) == null ? void 0 : k[0].placement;
            Y && (D = Y);
            break;
          }
          case "initialPlacement":
            D = a;
            break;
        }
        if (r !== D)
          return {
            reset: {
              placement: D
            }
          };
      }
      return {};
    }
  };
};
async function zl(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = rt(n), u = ht(n), f = _t(n) === "x", s = ["left", "top"].includes(a) ? -1 : 1, c = i && f ? -1 : 1, l = typeof t == "function" ? t(e) : t;
  let {
    mainAxis: y,
    crossAxis: d,
    alignmentAxis: h
  } = typeof l == "number" ? {
    mainAxis: l,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...l
  };
  return u && typeof h == "number" && (d = u === "end" ? h * -1 : h), f ? {
    x: d * c,
    y: y * s
  } : {
    x: y * s,
    y: d * c
  };
}
const ql = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await zl(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
};
function Fl(e) {
  return e === "x" ? "y" : "x";
}
const jl = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: u = {
          fn: (g) => {
            let {
              x: b,
              y: w
            } = g;
            return {
              x: b,
              y: w
            };
          }
        },
        ...f
      } = e, s = {
        x: n,
        y: r
      }, c = await Hr(t, f), l = _t(rt(o)), y = Fl(l);
      let d = s[l], h = s[y];
      if (i) {
        const g = l === "y" ? "top" : "left", b = l === "y" ? "bottom" : "right", w = d + c[g], P = d - c[b];
        d = Mr(w, d, P);
      }
      if (a) {
        const g = y === "y" ? "top" : "left", b = y === "y" ? "bottom" : "right", w = h + c[g], P = h - c[b];
        h = Mr(w, h, P);
      }
      const m = u.fn({
        ...t,
        [l]: d,
        [y]: h
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r
        }
      };
    }
  };
}, Ql = function(e) {
  return e === void 0 && (e = {}), {
    name: "inline",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: r,
        elements: o,
        rects: i,
        platform: a,
        strategy: u
      } = t, {
        padding: f = 2,
        x: s,
        y: c
      } = e, l = $t(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: i.reference,
        offsetParent: await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(o.floating)),
        strategy: u
      }) : i.reference), y = (n = await (a.getClientRects == null ? void 0 : a.getClientRects(o.reference))) != null ? n : [], d = Nr(f);
      function h() {
        if (y.length === 2 && y[0].left > y[1].right && s != null && c != null) {
          var g;
          return (g = y.find((b) => s > b.left - d.left && s < b.right + d.right && c > b.top - d.top && c < b.bottom + d.bottom)) != null ? g : l;
        }
        if (y.length >= 2) {
          if (_t(r) === "x") {
            const D = y[0], Y = y[y.length - 1], F = rt(r) === "top", W = D.top, $ = Y.bottom, L = F ? D.left : Y.left, J = F ? D.right : Y.right, nn = J - L, St = $ - W;
            return {
              top: W,
              bottom: $,
              left: L,
              right: J,
              width: nn,
              height: St,
              x: L,
              y: W
            };
          }
          const b = rt(r) === "left", w = Ba(...y.map((D) => D.right)), P = Aa(...y.map((D) => D.left)), T = y.filter((D) => b ? D.left === P : D.right === w), O = T[0].top, M = T[T.length - 1].bottom, I = P, k = w, R = k - I, B = M - O;
          return {
            top: O,
            bottom: M,
            left: I,
            right: k,
            width: R,
            height: B,
            x: I,
            y: O
          };
        }
        return l;
      }
      const m = await a.getElementRects({
        reference: {
          getBoundingClientRect: h
        },
        floating: o.floating,
        strategy: u
      });
      return i.reference.x !== m.reference.x || i.reference.y !== m.reference.y || i.reference.width !== m.reference.width || i.reference.height !== m.reference.height ? {
        reset: {
          rects: m
        }
      } : {};
    }
  };
};
function Ua(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function it(e) {
  if (e == null)
    return window;
  if (!Ua(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ct(e) {
  return it(e).getComputedStyle(e);
}
function mt(e) {
  return Ua(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function Ya() {
  const e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function ot(e) {
  return e instanceof it(e).HTMLElement;
}
function nt(e) {
  return e instanceof it(e).Element;
}
function Vl(e) {
  return e instanceof it(e).Node;
}
function ya(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = it(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function tn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ct(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Xl(e) {
  return ["table", "td", "th"].includes(mt(e));
}
function Ar(e) {
  const t = /firefox/i.test(Ya()), n = ct(e), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((o) => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some(
    (o) => {
      const i = n.contain;
      return i != null ? i.includes(o) : !1;
    }
  );
}
function Wa() {
  return !/^((?!chrome|android).)*safari/i.test(Ya());
}
function Br(e) {
  return ["html", "body", "#document"].includes(mt(e));
}
const da = Math.min, Tt = Math.max, Je = Math.round;
function at(e, t, n) {
  var r, o, i, a;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const u = e.getBoundingClientRect();
  let f = 1, s = 1;
  t && ot(e) && (f = e.offsetWidth > 0 && Je(u.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Je(u.height) / e.offsetHeight || 1);
  const c = nt(e) ? it(e) : window, l = !Wa() && n, y = (u.left + (l && (r = (o = c.visualViewport) == null ? void 0 : o.offsetLeft) != null ? r : 0)) / f, d = (u.top + (l && (i = (a = c.visualViewport) == null ? void 0 : a.offsetTop) != null ? i : 0)) / s, h = u.width / f, m = u.height / s;
  return {
    width: h,
    height: m,
    top: d,
    right: y + h,
    bottom: d + m,
    left: y,
    x: y,
    y: d
  };
}
function lt(e) {
  return ((Vl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function en(e) {
  return nt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function za(e) {
  return at(lt(e)).left + en(e).scrollLeft;
}
function Gl(e) {
  const t = at(e);
  return Je(t.width) !== e.offsetWidth || Je(t.height) !== e.offsetHeight;
}
function Kl(e, t, n) {
  const r = ot(t), o = lt(t), i = at(
    e,
    r && Gl(t),
    n === "fixed"
  );
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((mt(t) !== "body" || tn(o)) && (a = en(t)), ot(t)) {
      const f = at(t, !0);
      u.x = f.x + t.clientLeft, u.y = f.y + t.clientTop;
    } else
      o && (u.x = za(o));
  return {
    x: i.left + a.scrollLeft - u.x,
    y: i.top + a.scrollTop - u.y,
    width: i.width,
    height: i.height
  };
}
function Ze(e) {
  if (mt(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (ya(e) ? e.host : null) || lt(e);
  return ya(t) ? t.host : t;
}
function ha(e) {
  return !ot(e) || ct(e).position === "fixed" ? null : e.offsetParent;
}
function Jl(e) {
  let t = Ze(e);
  for (; ot(t) && !Br(t); ) {
    if (Ar(t))
      return t;
    t = Ze(t);
  }
  return null;
}
function pa(e) {
  const t = it(e);
  let n = ha(e);
  for (; n && Xl(n) && ct(n).position === "static"; )
    n = ha(n);
  return n && (mt(n) === "html" || mt(n) === "body" && ct(n).position === "static" && !Ar(n)) ? t : n || Jl(e) || t;
}
function ma(e) {
  if (ot(e))
    return {
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const t = at(e);
  return {
    width: t.width,
    height: t.height
  };
}
function Zl(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = ot(n), i = lt(n);
  if (n === i)
    return t;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = {
    x: 0,
    y: 0
  };
  if ((o || !o && r !== "fixed") && ((mt(n) !== "body" || tn(i)) && (a = en(n)), ot(n))) {
    const f = at(n, !0);
    u.x = f.x + n.clientLeft, u.y = f.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - a.scrollLeft + u.x,
    y: t.y - a.scrollTop + u.y
  };
}
function ty(e, t) {
  const n = it(e), r = lt(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, u = 0, f = 0;
  if (o) {
    i = o.width, a = o.height;
    const s = Wa();
    (s || !s && t === "fixed") && (u = o.offsetLeft, f = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: u,
    y: f
  };
}
function ey(e) {
  var t;
  const n = lt(e), r = en(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Tt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Tt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let u = -r.scrollLeft + za(e);
  const f = -r.scrollTop;
  return ct(o || n).direction === "rtl" && (u += Tt(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: u,
    y: f
  };
}
function qa(e) {
  const t = Ze(e);
  return Br(t) ? e.ownerDocument.body : ot(t) && tn(t) ? t : qa(t);
}
function Mt(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = qa(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = it(r), a = o ? [i].concat(i.visualViewport || [], tn(r) ? r : []) : r, u = t.concat(a);
  return o ? u : u.concat(Mt(a));
}
function ny(e, t) {
  const n = at(e, !1, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft;
  return {
    top: r,
    left: o,
    x: o,
    y: r,
    right: o + e.clientWidth,
    bottom: r + e.clientHeight,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function va(e, t, n) {
  return t === "viewport" ? $t(ty(e, n)) : nt(t) ? ny(t, n) : $t(ey(lt(e)));
}
function ry(e) {
  let t = Mt(e).filter((o) => nt(o)), n = e, r = null;
  for (; nt(n) && !Br(n); ) {
    const o = ct(n);
    o.position === "static" && r && ["absolute", "fixed"].includes(r.position) && !Ar(n) ? t = t.filter((i) => i !== n) : r = o, n = Ze(n);
  }
  return t;
}
function oy(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? ry(t) : [].concat(n), r], u = a[0], f = a.reduce((s, c) => {
    const l = va(t, c, o);
    return s.top = Tt(l.top, s.top), s.right = da(l.right, s.right), s.bottom = da(l.bottom, s.bottom), s.left = Tt(l.left, s.left), s;
  }, va(t, u, o));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
const ay = {
  getClippingRect: oy,
  convertOffsetParentRelativeRectToViewportRelativeRect: Zl,
  isElement: nt,
  getDimensions: ma,
  getOffsetParent: pa,
  getDocumentElement: lt,
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    return {
      reference: Kl(t, pa(n), r),
      floating: {
        ...ma(n),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => ct(e).direction === "rtl"
};
function iy(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = !0,
    animationFrame: u = !1
  } = r, f = o && !u, s = f || i ? [...nt(e) ? Mt(e) : e.contextElement ? Mt(e.contextElement) : [], ...Mt(t)] : [];
  s.forEach((h) => {
    f && h.addEventListener("scroll", n, {
      passive: !0
    }), i && h.addEventListener("resize", n);
  });
  let c = null;
  if (a) {
    let h = !0;
    c = new ResizeObserver(() => {
      h || n(), h = !1;
    }), nt(e) && !u && c.observe(e), !nt(e) && e.contextElement && !u && c.observe(e.contextElement), c.observe(t);
  }
  let l, y = u ? at(e) : null;
  u && d();
  function d() {
    const h = at(e);
    y && (h.x !== y.x || h.y !== y.y || h.width !== y.width || h.height !== y.height) && n(), y = h, l = requestAnimationFrame(d);
  }
  return n(), () => {
    var h;
    s.forEach((m) => {
      f && m.removeEventListener("scroll", n), i && m.removeEventListener("resize", n);
    }), (h = c) == null || h.disconnect(), c = null, u && cancelAnimationFrame(l);
  };
}
const uy = (e, t, n) => Cl(e, t, {
  platform: ay,
  ...n
});
var sy = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "inline-block"
  }, [r("div", {
    ref: "triggerRef",
    staticClass: "inline-block w-full"
  }, [t._t("trigger", null, {
    isOpen: t.open,
    open: t.onOpen,
    close: t.onClose,
    toggle: t.onToggle
  })], 2), r("transition", {
    attrs: {
      css: !t.disableAnimation,
      "enter-active-class": "transition duration-75 ease-out",
      "enter-class": "transform scale-95 opacity-0",
      "enter-to-class": "transform scale-100 opacity-100",
      "leave-active-class": "transition duration-50 ease-in",
      "leave-class": "transform scale-100 opacity-100",
      "leave-to-class": "transform scale-95 opacity-0"
    }
  }, [t.open ? r("div", {
    ref: "popperRef",
    class: t.popperClass,
    style: t.popperPosition
  }, [t.hideArrow ? t._e() : r("div", {
    ref: "arrowRef",
    class: [t.arrowClass, t.arrowPlacementClass],
    style: t.arrowPosition
  }), t._t("default", null, {
    isOpen: t.open,
    open: t.onOpen,
    close: t.onClose,
    toggle: t.onToggle
  })], 2) : t._e()])], 1);
}, fy = [];
const cy = {
  name: "SdsFloatingUi",
  props: {
    disabled: { type: Boolean, default: !1 },
    placement: { type: String, default: "auto" },
    strategy: { type: String, default: "absolute" },
    overflowPadding: { type: Number, default: 5 },
    arrowPadding: { type: Number, default: 5 },
    offset: { type: Number, default: 10 },
    inline: { type: Boolean, default: !1 },
    shift: { type: Boolean, default: !1 },
    disableAnimation: { type: Boolean, default: !1 },
    popperClass: { type: String, default: void 0 },
    hideArrow: { type: Boolean, default: !1 },
    arrowClass: { type: String, default: void 0 },
    placementTopArrowClass: { type: String, default: void 0 },
    placementRightArrowClass: { type: String, default: void 0 },
    placementBottomArrowClass: { type: String, default: void 0 },
    placementLeftArrowClass: { type: String, default: void 0 },
    willOpen: { type: Function, default: null },
    willClose: { type: Function, default: null }
  },
  data() {
    return {
      open: !1,
      popperPosition: { left: "0px", top: "0px" },
      arrowPosition: { left: "0px", top: "0px" },
      currentPlacement: "",
      openStateTimeout: null,
      shouldOpen: !1,
      cleanup: null
    };
  },
  computed: {
    arrowPlacementClass() {
      return this.currentPlacement ? this.currentPlacement.includes("top") ? this.placementTopArrowClass : this.currentPlacement.includes("right") ? this.placementRightArrowClass : this.currentPlacement.includes("bottom") ? this.placementBottomArrowClass : this.currentPlacement.includes("left") ? this.placementLeftArrowClass : "" : "";
    }
  },
  watch: {
    open(e) {
      e ? this.$nextTick(() => {
        this.update(), this.$refs.triggerRef && this.$refs.popperRef && (this.cleanup = iy(this.$refs.triggerRef, this.$refs.popperRef, this.update));
      }) : this.cleanup && this.cleanup();
    }
  },
  created() {
    this.$root.$on("floating-ui-toggle", (e) => {
      e ? !this.open && this.onOpen() : this.open && this.onClose();
    });
  },
  mounted() {
    document.addEventListener("mousedown", this.handleOutsideMouseDown), document.addEventListener("keyup", this.handleOutsideKeyUp);
  },
  destroyed() {
    document.removeEventListener("mousedown", this.handleOutsideMouseDown), document.removeEventListener("keyup", this.handleOutsideKeyUp);
  },
  methods: {
    openStateDelay(e) {
      return new Promise((t) => (this.openStateTimeout && clearTimeout(this.openStateTimeout), this.openStateTimeout = setTimeout(t, e), this.openStateTimeout));
    },
    willOpenStateDelay(e) {
      return new Promise(async (t, n) => e ? await e(t, n) : t());
    },
    async onOpen(e = 0) {
      if (!this.disabled)
        try {
          if (this.shouldOpen = !0, await this.openStateDelay(e), this.shouldOpen) {
            if (await this.willOpenStateDelay(this.willOpen), this.open || !this.shouldOpen)
              return;
            this.shouldOpen = !1, this.open = !0;
          }
        } catch {
          this.shouldOpen = !1;
        }
    },
    async onClose(e = 0) {
      try {
        if (this.shouldOpen = !1, await this.openStateDelay(e), await this.willOpenStateDelay(this.willClose), !this.open)
          return;
        this.open = !1;
      } catch {
      }
    },
    async onToggle(e = 0, t = 0) {
      this.open ? this.onClose(t) : this.onOpen(e);
    },
    async update() {
      var u;
      if (!this.$refs.triggerRef || !this.$refs.popperRef)
        return;
      const e = {
        middleware: [],
        placement: this.placement,
        strategy: this.strategy
      }, t = this.placement.startsWith("auto");
      this.offset && e.middleware.push(ql(this.offset)), t ? e.middleware.push(Ul({
        alignment: (u = this.placement.split("-")[1]) != null ? u : ""
      })) : e.placement = this.placement, this.inline && e.middleware.push(Ql()), t || e.middleware.push(Wl({
        padding: this.overflowPadding
      })), this.shift && e.middleware.push(jl({
        padding: this.overflowPadding
      })), !this.hideArrow && this.$refs.arrowRef && e.middleware.push(Il({
        element: this.$refs.arrowRef,
        padding: this.arrowPadding
      }));
      const n = await uy(this.$refs.triggerRef, this.$refs.popperRef, e), { x: r, y: o, placement: i, middlewareData: a } = n;
      if (this.popperPosition = {
        left: r ? `${r}px` : "",
        top: o ? `${o}px` : ""
      }, !this.hideArrow) {
        const { x: f, y: s } = a.arrow;
        this.currentPlacement = i, this.arrowPosition = {
          left: f ? `${f}px` : "",
          top: s ? `${s}px` : ""
        };
      }
    },
    handleOutsideMouseDown(e) {
      this.$refs.triggerRef && e.target && this.$refs.triggerRef.contains(e.target) || this.$refs.popperRef && e.target && this.$refs.popperRef.contains(e.target) || !this.open || this.onClose();
    },
    handleOutsideKeyUp(e) {
      if (e.key === "Escape") {
        if (!this.open)
          return;
        e.preventDefault(), this.onClose();
      }
    }
  }
}, ba = {};
var ly = /* @__PURE__ */ Er(
  cy,
  sy,
  fy,
  !1,
  yy,
  null,
  null,
  null
);
function yy(e) {
  for (let t in ba)
    this[t] = ba[t];
}
const dy = /* @__PURE__ */ function() {
  return ly.exports;
}();
var hy = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("floating-ui", {
    staticClass: "w-full",
    attrs: {
      "data-id": "sds-datepicker",
      placement: "bottom",
      disabled: t.disabled,
      "popper-class": "absolute bg-white border dark:text-gray-50 dark:bg-gray-700 dark:border-gray-600 shadow-lg rounded-md w-auto ".concat(t.zIndexClass),
      "arrow-class": "absolute bg-white border dark:bg-gray-700 dark:border-gray-600 w-3 h-3 rotate-45",
      "placement-top-arrow-class": "-bottom-1.5 border-t-0 border-l-0",
      "placement-right-arrow-class": "-left-1.5 border-t-0 border-r-0",
      "placement-bottom-arrow-class": "-top-1.5 border-b-0 border-r-0",
      "placement-left-arrow-class": "-right-1.5 border-b-0 border-l-0"
    },
    scopedSlots: t._u([{
      key: "trigger",
      fn: function(i) {
        var a = i.open, u = i.close, f = i.toggle;
        return [r("div", {
          staticClass: "flex w-full",
          class: {
            "gap-1": t.size === "sm",
            "gap-2": t.size !== "sm"
          }
        }, [r("div", {
          staticClass: "w-full input-group",
          class: {
            "input-group-sm": t.size === "sm"
          }
        }, [r("button", {
          staticClass: "input-group-text fill-current",
          class: {
            "p-1": t.size === "sm",
            "pointer-events-none opacity-50": t.disabled || t.readonly
          },
          attrs: {
            type: "button",
            tabindex: "-1",
            disabled: t.disabled || t.readonly
          },
          on: {
            click: function(c) {
              f(), t.$refs.startDateInput.focus();
            }
          }
        }, [r("svg", {
          staticClass: "fill-current",
          class: {
            "w-3 h-3": t.size === "sm",
            "w-4 h-4": t.size !== "sm"
          },
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
          }
        }, [t.mode === "time" ? r("path", {
          attrs: {
            d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
            fill: "currentColor"
          }
        }) : r("path", {
          attrs: {
            d: "M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
          }
        })])]), r("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.inputDate.start,
            expression: "inputDate.start"
          }],
          ref: "startDateInput",
          staticClass: "form-control",
          class: {
            "px-1": t.size === "sm"
          },
          attrs: {
            type: "text",
            title: "".concat(t.placeholder),
            placeholder: t.placeholder,
            readonly: t.readonly,
            disabled: t.disabled,
            required: t.required,
            pattern: t.inputPattern
          },
          domProps: {
            value: t.inputDate.start
          },
          on: {
            focusin: function(c) {
              return a();
            },
            keydown: [function(s) {
              if (!s.type.indexOf("key") && t._k(s.keyCode, "tab", 9, s.key, "Tab"))
                return null;
              t.updateDatesFromInput(), u();
            }, function(s) {
              if (!s.type.indexOf("key") && t._k(s.keyCode, "enter", 13, s.key, "Enter"))
                return null;
              s.preventDefault(), t.updateDatesFromInput(), f();
            }],
            mousedown: function(c) {
              return c.stopPropagation(), f();
            },
            keyup: [function(s) {
              return !s.type.indexOf("key") && t._k(s.keyCode, "up", 38, s.key, ["Up", "ArrowUp"]) ? null : u();
            }, function(s) {
              return !s.type.indexOf("key") && t._k(s.keyCode, "down", 40, s.key, ["Down", "ArrowDown"]) ? null : a();
            }],
            change: t.updateDatesFromInput,
            input: function(c) {
              c.target.composing || t.$set(t.inputDate, "start", c.target.value);
            }
          }
        })]), t.isRange ? [t.hideArrow ? t._e() : r("div", {
          staticClass: "flex my-auto flex-shrink-0",
          class: {
            "opacity-50": t.disabled || t.readonly
          }
        }, [r("svg", {
          staticClass: "text-gray-700",
          class: {
            "w-5 h-5": t.size !== "sm",
            "w-4 h-4": t.size === "sm"
          },
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            "aria-hidden": "true",
            role: "img",
            width: "32",
            height: "32",
            preserveAspectRatio: "xMidYMid meet",
            viewBox: "0 0 24 24"
          }
        }, [r("path", {
          attrs: {
            d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
            fill: "currentColor"
          }
        })])]), r("div", {
          staticClass: "w-full input-group",
          class: {
            "input-group-sm": t.size === "sm"
          }
        }, [r("button", {
          staticClass: "input-group-text fill-current",
          class: {
            "p-1": t.size === "sm",
            "pointer-events-none opacity-50": t.disabled || t.readonly
          },
          attrs: {
            type: "button",
            tabindex: "-1",
            disabled: t.disabled || t.readonly
          },
          on: {
            click: function(c) {
              f(), t.$refs.endDateInput.focus();
            }
          }
        }, [r("svg", {
          staticClass: "fill-current",
          class: {
            "w-3 h-3": t.size === "sm",
            "w-4 h-4": t.size !== "sm"
          },
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
          }
        }, [t.mode === "time" ? r("path", {
          attrs: {
            d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
            fill: "currentColor"
          }
        }) : r("path", {
          attrs: {
            d: "M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
          }
        })])]), r("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.inputDate.end,
            expression: "inputDate.end"
          }],
          ref: "endDateInput",
          staticClass: "form-control",
          class: {
            "px-1": t.size === "sm"
          },
          attrs: {
            type: "text",
            title: "".concat(t.placeholder),
            placeholder: t.placeholder,
            readonly: t.readonly,
            disabled: t.disabled,
            required: t.required,
            pattern: t.inputPattern
          },
          domProps: {
            value: t.inputDate.end
          },
          on: {
            focusin: function(c) {
              return a();
            },
            keydown: [function(s) {
              if (!s.type.indexOf("key") && t._k(s.keyCode, "tab", 9, s.key, "Tab"))
                return null;
              t.updateDatesFromInput(), u();
            }, function(s) {
              if (!s.type.indexOf("key") && t._k(s.keyCode, "enter", 13, s.key, "Enter"))
                return null;
              s.preventDefault(), t.updateDatesFromInput(), f();
            }],
            mousedown: function(c) {
              return c.stopPropagation(), f();
            },
            keyup: [function(s) {
              return !s.type.indexOf("key") && t._k(s.keyCode, "up", 38, s.key, ["Up", "ArrowUp"]) ? null : u();
            }, function(s) {
              return !s.type.indexOf("key") && t._k(s.keyCode, "down", 40, s.key, ["Down", "ArrowDown"]) ? null : a();
            }],
            change: t.updateDatesFromInput,
            input: function(c) {
              c.target.composing || t.$set(t.inputDate, "end", c.target.value);
            }
          }
        })])] : t._e()], 2)];
      }
    }, {
      key: "default",
      fn: function(i) {
        var a = i.close;
        return [r("div", {
          staticClass: "p-4"
        }, [r("calendar", {
          attrs: {
            min: t.min,
            max: t.max,
            mode: t.mode,
            "use-current-time-for-today": t.useCurrentTimeForToday
          },
          on: {
            input: function(f) {
              return t.focusCorrectInput(f, a);
            }
          },
          model: {
            value: t.localDate,
            callback: function(f) {
              t.localDate = f;
            },
            expression: "localDate"
          }
        })], 1)];
      }
    }])
  });
}, py = [];
const my = {
  name: "SdsDatepicker",
  components: {
    Calendar: kl,
    FloatingUi: dy
  },
  props: {
    zIndex: { type: String, required: !1, default: "50" },
    hideArrow: { type: Boolean, default: !1 },
    size: { type: String, default: "md" },
    mode: { type: String, default: "date" },
    value: { type: [Object, Date], default: null },
    max: { type: Date, default: null },
    min: { type: Date, default: null },
    required: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    useCurrentTimeForToday: { type: Boolean, default: !1 }
  },
  data() {
    return {
      inputDate: { start: "", end: "" }
    };
  },
  computed: {
    zIndexClass() {
      switch (this.zIndex) {
        case "0":
          return "z-0";
        case "10":
          return "z-10";
        case "20":
          return "z-20";
        case "30":
          return "z-30";
        case "40":
          return "z-40";
        case "50":
          return "z-50";
        case "auto":
          return "z-auto";
        default:
          return "";
      }
    },
    isRange() {
      return this.value && !(this.value instanceof Date);
    },
    placeholder() {
      switch (this.mode) {
        case "date":
          return "mm/dd/yyyy";
        case "time":
          return "hh:mm a";
        case "dateTime":
          return "mm/dd/yyyy hh:mm a";
        default:
          return "mm/dd/yyyy";
      }
    },
    inputFormat() {
      switch (this.mode) {
        case "date":
          return "MM/dd/yyyy";
        case "time":
          return "hh:mm aaa";
        case "dateTime":
          return "MM/dd/yyyy hh:mm aaa";
        default:
          return "MM/dd/yyyy";
      }
    },
    inputPattern() {
      switch (this.mode) {
        case "date":
          return "[0-9]{2}/[0-9]{2}/[0-9]{4}";
        case "time":
          return "[0-9]{2}:[0-9]{2} [a|p]m";
        case "dateTime":
          return "[0-9]{2}/[0-9]{2}/[0-9]{4} [0-9]{2}:[0-9]{2} [a|p]m";
        default:
          return "[0-9]{2}/[0-9]{2}/[0-9]{4}";
      }
    },
    localDate: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("input", e);
      }
    }
  },
  watch: {
    localDate: {
      handler(e) {
        if (this.isRange) {
          const t = e.start && this.formatDate(q(e.start, "yyyy-MM-dd HH:mm:ss")) || { date: null, text: "" }, n = e.end && this.formatDate(q(e.end, "yyyy-MM-dd HH:mm:ss")) || { date: null, text: "" };
          t.date && n.date && dt(t.date, n.date) ? this.inputDate = {
            start: n.text,
            end: t.text
          } : this.inputDate = {
            start: t.text,
            end: n.text
          };
        } else {
          const t = e && this.formatDate(q(e, "yyyy-MM-dd HH:mm:ss")) || { date: null, text: "" };
          this.inputDate = {
            start: t.text,
            end: ""
          };
        }
      },
      deep: !0,
      immediate: !0
    }
  },
  methods: {
    focusCorrectInput(e, t) {
      e && e instanceof Date ? this.$refs.startDateInput.focus() : e && !(e instanceof Date) && !e.start ? this.$refs.startDateInput.focus() : e && !(e instanceof Date) && !e.end ? this.$refs.endDateInput.focus() : e && !(e instanceof Date) && e.end ? this.$refs.endDateInput.focus() : this.$refs.startDateInput.focus(), this.mode === "date" && this.$nextTick(() => {
        (this.isRange && this.inputDate.start && this.inputDate.end || !this.isRange && this.inputDate.start) && t();
      });
    },
    updateDatesFromInput() {
      if (this.isRange) {
        const e = this.formatDate(this.inputDate.start), t = this.formatDate(this.inputDate.end);
        this.localDate = {
          start: e.date && t.date && dn([e.date, t.date]) || e.date,
          end: e.date && t.date && yn([e.date, t.date]) || t.date
        }, e.date && t.date && dt(e.date, t.date) ? this.inputDate = {
          start: t.text,
          end: e.text
        } : this.inputDate = {
          start: e.text,
          end: t.text
        };
      } else {
        const e = this.formatDate(this.inputDate.start);
        this.localDate = e.date, this.inputDate = {
          start: e.text,
          end: ""
        };
      }
    },
    formatDate(e) {
      if (e === "now") {
        const o = new Date();
        return { date: o, text: q(o, this.inputFormat) };
      } else if (e === "today") {
        const o = z(V(K(G(new Date(), 0), 0), 0), 0);
        return { date: o, text: q(o, this.inputFormat) };
      } else if (e === "tomorrow") {
        const o = wa(z(V(K(G(new Date(), 0), 0), 0), 0), 1);
        return { date: o, text: q(o, this.inputFormat) };
      } else if (e === "yesterday") {
        const o = ln(z(V(K(G(new Date(), 0), 0), 0), 0), 1);
        return { date: o, text: q(o, this.inputFormat) };
      }
      const t = [
        "MM/dd/yyyy hh:mm aaa",
        "MM/dd/yyyy hh:mm a",
        "MM/dd/yyyy h:mm aaa",
        "MM/dd/yyyy h:mm a",
        "MM/dd/yyyy hh:mmaaa",
        "MM/dd/yyyy hh:mma",
        "MM/dd/yyyy h:mmaaa",
        "MM/dd/yyyy h:mma",
        "MM/dd/yyyy H:mm",
        "MM/dd/yyyy HH:mm",
        "MM/dd/yyyy HH:mm:ss",
        "MM-dd-yyyy hh:mm aaa",
        "MM-dd-yyyy hh:mm a",
        "MM-dd-yyyy h:mm aaa",
        "MM-dd-yyyy h:mm a",
        "MM-dd-yyyy ha",
        "MM-dd-yyyy haaa",
        "MM-dd-yyyy hh:mmaaa",
        "MM-dd-yyyy hh:mma",
        "MM-dd-yyyy h:mmaaa",
        "MM-dd-yyyy h:mma",
        "MM-dd-yyyy H:mm",
        "MM-dd-yyyy HH:mm",
        "MM-dd-yyyy HH:mm:ss",
        "yyyy-MM-dd hh:mm aaa",
        "yyyy-MM-dd hh:mm a",
        "yyyy-MM-dd h:mm aaa",
        "yyyy-MM-dd h:mm a",
        "yyyy-MM-dd hh:mma",
        "yyyy-MM-dd h:mmaaa",
        "yyyy-MM-dd h:mma",
        "yyyy-MM-dd H:mm",
        "yyyy-MM-dd HH:mm",
        "yyyy-MM-dd HH:mm:ss",
        "MM/dd/yyyy",
        "MM-dd-yyyy",
        "yyyy-MM-dd",
        "M/d",
        "MM/dd",
        "MM/yyyy",
        "M-d",
        "MM-dd",
        "MM-yyyy",
        "yyyy/MM",
        "yyyy-MM",
        "M/dd/yyyy hh:mm aaa",
        "M/dd/yyyy hh:mm a",
        "M/dd/yyyy h:mm aaa",
        "M/dd/yyyy h:mm a",
        "M/dd/yyyy ha",
        "M/dd/yyyy haaa",
        "M/dd/yyyy hh:mmaaa",
        "M/dd/yyyy hh:mma",
        "M/dd/yyyy h:mmaaa",
        "M/dd/yyyy h:mma",
        "M/dd/yyyy H:mm",
        "M/dd/yyyy HH:mm",
        "M/dd/yyyy HH:mm:ss",
        "M-dd-yyyy hh:mm aaa",
        "M-dd-yyyy hh:mm a",
        "M-dd-yyyy h:mm aaa",
        "M-dd-yyyy h:mm a",
        "M-dd-yyyy hh:mmaaa",
        "M-dd-yyyy hh:mma",
        "M-dd-yyyy h:mmaaa",
        "M-dd-yyyy h:mma",
        "M-dd-yyyy H:mm",
        "M-dd-yyyy HH:mm",
        "M-dd-yyyy HH:mm:ss",
        "yyyy-M-dd hh:mm aaa",
        "yyyy-M-dd hh:mm a",
        "yyyy-M-dd h:mm aaa",
        "yyyy-M-dd h:mm a",
        "yyyy-M-dd hh:mma",
        "yyyy-M-dd h:mmaaa",
        "yyyy-M-dd h:mma",
        "yyyy-M-dd H:mm",
        "yyyy-M-dd HH:mm",
        "yyyy-M-dd HH:mm:ss",
        "yyyy-M-dd",
        "M/yyyy",
        "M-yyyy",
        "M/yyyy haaa",
        "M-yyyy haaa",
        "M/yyyy ha",
        "M/yyyy HH:mm:ss",
        "M-yyyy HH:mm:ss",
        "M.yyyy HH:mm:ss",
        "M-yyyy ha",
        "M/yyyy h:mmaaa",
        "M-yyyy h:mmaaa",
        "M/yyyy h:mma",
        "M-yyyy h:mma",
        "M/yyyy h:mm aaa",
        "M-yyyy h:mm aaa",
        "M/yyyy h:mm a",
        "M-yyyy h:mm a",
        "yyyy/M",
        "yyyy-M",
        "yyyy",
        "EEE",
        "EEEE",
        "LLL",
        "LLLL",
        "LLL yyyy",
        "LLLL yyyy",
        "LLL dd yyyy",
        "LLLL dd yyyy",
        "hh:mm aaa",
        "hh:mm a",
        "h:mm aaa",
        "h:mm a",
        "hh:mmaaa",
        "hh:mma",
        "h:mmaaa",
        "h:mma",
        "HH:mm:ss",
        "H:mm",
        "HH:mm",
        "QQQ",
        "QQQQ",
        "QQQ yyyy",
        "QQQQ yyyy",
        "PP",
        "PPP",
        "PPPP",
        "bbb",
        "h BBB",
        "h:mm BBB",
        "hh BBB",
        "hh:mm BBB",
        "hBBB",
        "h:mmBBB",
        "hhBBB",
        "hh:mmBBB"
      ];
      let n;
      const r = t.filter((o) => {
        const i = Oa(fn(e, o, new Date()));
        return i && (n = o), i;
      });
      if (r.length > 0) {
        let o = fn(e, r[0], new Date());
        if (this.mode === "date")
          o = z(V(K(G(o, 0), 0), 0), 0);
        else if (this.mode === "time") {
          const s = q(o, "HH:mm:ss"), c = q(new Date(), "yyyy-MM-dd");
          o = fn(`${c} ${s}`, "yyyy-MM-dd HH:mm:ss", new Date());
        }
        const i = o.getFullYear();
        n === "LLLL dd yyyy" && i < 1e3 && (o = Va(o, 2e3));
        const a = pn(o, this.min), u = dt(ln(o, 1), this.max), f = mn(ln(o, 1), this.max);
        if (!a && !u && !f)
          return { date: o, text: q(o, this.inputFormat) };
      }
      return { date: null, text: "" };
    }
  }
}, ga = {};
var vy = /* @__PURE__ */ Er(
  my,
  hy,
  py,
  !1,
  by,
  null,
  null,
  null
);
function by(e) {
  for (let t in ga)
    this[t] = ga[t];
}
const gy = /* @__PURE__ */ function() {
  return vy.exports;
}();
export {
  gy as default
};
