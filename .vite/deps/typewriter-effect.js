import {
  __commonJS,
  require_react
} from "./chunk-UTEJFLXC.js";

// node_modules/typewriter-effect/dist/react.js
var require_react2 = __commonJS({
  "node_modules/typewriter-effect/dist/react.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(require_react()) : "function" == typeof define && define.amd ? define("Typewriter", ["react"], t) : "object" == typeof exports ? exports.Typewriter = t(require_react()) : e.Typewriter = t(e.react);
    }("undefined" != typeof self ? self : exports, (e) => (() => {
      var t = { 2: (e2, t2, r2) => {
        var n2 = r2(2199), o2 = r2(4664), a = r2(5950);
        e2.exports = function(e3) {
          return n2(e3, a, o2);
        };
      }, 79: (e2, t2, r2) => {
        var n2 = r2(3702), o2 = r2(80), a = r2(4739), i = r2(8655), s = r2(1175);
        function u(e3) {
          var t3 = -1, r3 = null == e3 ? 0 : e3.length;
          for (this.clear(); ++t3 < r3; ) {
            var n3 = e3[t3];
            this.set(n3[0], n3[1]);
          }
        }
        u.prototype.clear = n2, u.prototype.delete = o2, u.prototype.get = a, u.prototype.has = i, u.prototype.set = s, e2.exports = u;
      }, 80: (e2, t2, r2) => {
        var n2 = r2(6025), o2 = Array.prototype.splice;
        e2.exports = function(e3) {
          var t3 = this.__data__, r3 = n2(t3, e3);
          return !(r3 < 0 || (r3 == t3.length - 1 ? t3.pop() : o2.call(t3, r3, 1), --this.size, 0));
        };
      }, 270: (e2, t2, r2) => {
        var n2 = r2(7068), o2 = r2(346);
        e2.exports = function e3(t3, r3, a, i, s) {
          return t3 === r3 || (null == t3 || null == r3 || !o2(t3) && !o2(r3) ? t3 != t3 && r3 != r3 : n2(t3, r3, a, i, e3, s));
        };
      }, 289: (e2, t2, r2) => {
        var n2 = r2(2651);
        e2.exports = function(e3) {
          return n2(this, e3).get(e3);
        };
      }, 294: (e2) => {
        e2.exports = function(e3) {
          return "number" == typeof e3 && e3 > -1 && e3 % 1 == 0 && e3 <= 9007199254740991;
        };
      }, 317: (e2) => {
        e2.exports = function(e3) {
          var t2 = -1, r2 = Array(e3.size);
          return e3.forEach(function(e4, n2) {
            r2[++t2] = [n2, e4];
          }), r2;
        };
      }, 346: (e2) => {
        e2.exports = function(e3) {
          return null != e3 && "object" == typeof e3;
        };
      }, 361: (e2) => {
        var t2 = /^(?:0|[1-9]\d*)$/;
        e2.exports = function(e3, r2) {
          var n2 = typeof e3;
          return !!(r2 = null == r2 ? 9007199254740991 : r2) && ("number" == n2 || "symbol" != n2 && t2.test(e3)) && e3 > -1 && e3 % 1 == 0 && e3 < r2;
        };
      }, 392: (e2) => {
        e2.exports = function(e3, t2) {
          return null == e3 ? void 0 : e3[t2];
        };
      }, 659: (e2, t2, r2) => {
        var n2 = r2(1873), o2 = Object.prototype, a = o2.hasOwnProperty, i = o2.toString, s = n2 ? n2.toStringTag : void 0;
        e2.exports = function(e3) {
          var t3 = a.call(e3, s), r3 = e3[s];
          try {
            e3[s] = void 0;
            var n3 = true;
          } catch (e4) {
          }
          var o3 = i.call(e3);
          return n3 && (t3 ? e3[s] = r3 : delete e3[s]), o3;
        };
      }, 689: (e2, t2, r2) => {
        var n2 = r2(2), o2 = Object.prototype.hasOwnProperty;
        e2.exports = function(e3, t3, r3, a, i, s) {
          var u = 1 & r3, c = n2(e3), p = c.length;
          if (p != n2(t3).length && !u) return false;
          for (var l = p; l--; ) {
            var f = c[l];
            if (!(u ? f in t3 : o2.call(t3, f))) return false;
          }
          var v = s.get(e3), d = s.get(t3);
          if (v && d) return v == t3 && d == e3;
          var h = true;
          s.set(e3, t3), s.set(t3, e3);
          for (var y = u; ++l < p; ) {
            var b = e3[f = c[l]], m = t3[f];
            if (a) var _ = u ? a(m, b, f, t3, e3, s) : a(b, m, f, e3, t3, s);
            if (!(void 0 === _ ? b === m || i(b, m, r3, a, s) : _)) {
              h = false;
              break;
            }
            y || (y = "constructor" == f);
          }
          if (h && !y) {
            var g = e3.constructor, w = t3.constructor;
            g == w || !("constructor" in e3) || !("constructor" in t3) || "function" == typeof g && g instanceof g && "function" == typeof w && w instanceof w || (h = false);
          }
          return s.delete(e3), s.delete(t3), h;
        };
      }, 695: (e2, t2, r2) => {
        var n2 = r2(8096), o2 = r2(2428), a = r2(6449), i = r2(3656), s = r2(361), u = r2(7167), c = Object.prototype.hasOwnProperty;
        e2.exports = function(e3, t3) {
          var r3 = a(e3), p = !r3 && o2(e3), l = !r3 && !p && i(e3), f = !r3 && !p && !l && u(e3), v = r3 || p || l || f, d = v ? n2(e3.length, String) : [], h = d.length;
          for (var y in e3) !t3 && !c.call(e3, y) || v && ("length" == y || l && ("offset" == y || "parent" == y) || f && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || s(y, h)) || d.push(y);
          return d;
        };
      }, 938: (e2) => {
        e2.exports = function(e3) {
          var t2 = this.__data__, r2 = t2.delete(e3);
          return this.size = t2.size, r2;
        };
      }, 945: (e2, t2, r2) => {
        var n2 = r2(79), o2 = r2(8223), a = r2(3661);
        e2.exports = function(e3, t3) {
          var r3 = this.__data__;
          if (r3 instanceof n2) {
            var i = r3.__data__;
            if (!o2 || i.length < 199) return i.push([e3, t3]), this.size = ++r3.size, this;
            r3 = this.__data__ = new a(i);
          }
          return r3.set(e3, t3), this.size = r3.size, this;
        };
      }, 1042: (e2, t2, r2) => {
        var n2 = r2(6110)(Object, "create");
        e2.exports = n2;
      }, 1175: (e2, t2, r2) => {
        var n2 = r2(6025);
        e2.exports = function(e3, t3) {
          var r3 = this.__data__, o2 = n2(r3, e3);
          return o2 < 0 ? (++this.size, r3.push([e3, t3])) : r3[o2][1] = t3, this;
        };
      }, 1380: (e2) => {
        e2.exports = function(e3) {
          return this.__data__.set(e3, "__lodash_hash_undefined__"), this;
        };
      }, 1420: (e2, t2, r2) => {
        var n2 = r2(79);
        e2.exports = function() {
          this.__data__ = new n2(), this.size = 0;
        };
      }, 1459: (e2) => {
        e2.exports = function(e3) {
          return this.__data__.has(e3);
        };
      }, 1549: (e2, t2, r2) => {
        var n2 = r2(2032), o2 = r2(3862), a = r2(6721), i = r2(2749), s = r2(5749);
        function u(e3) {
          var t3 = -1, r3 = null == e3 ? 0 : e3.length;
          for (this.clear(); ++t3 < r3; ) {
            var n3 = e3[t3];
            this.set(n3[0], n3[1]);
          }
        }
        u.prototype.clear = n2, u.prototype.delete = o2, u.prototype.get = a, u.prototype.has = i, u.prototype.set = s, e2.exports = u;
      }, 1873: (e2, t2, r2) => {
        var n2 = r2(9325).Symbol;
        e2.exports = n2;
      }, 1882: (e2, t2, r2) => {
        var n2 = r2(2552), o2 = r2(3805);
        e2.exports = function(e3) {
          if (!o2(e3)) return false;
          var t3 = n2(e3);
          return "[object Function]" == t3 || "[object GeneratorFunction]" == t3 || "[object AsyncFunction]" == t3 || "[object Proxy]" == t3;
        };
      }, 1986: (e2, t2, r2) => {
        var n2 = r2(1873), o2 = r2(7828), a = r2(5288), i = r2(5911), s = r2(317), u = r2(4247), c = n2 ? n2.prototype : void 0, p = c ? c.valueOf : void 0;
        e2.exports = function(e3, t3, r3, n3, c2, l, f) {
          switch (r3) {
            case "[object DataView]":
              if (e3.byteLength != t3.byteLength || e3.byteOffset != t3.byteOffset) return false;
              e3 = e3.buffer, t3 = t3.buffer;
            case "[object ArrayBuffer]":
              return !(e3.byteLength != t3.byteLength || !l(new o2(e3), new o2(t3)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
              return a(+e3, +t3);
            case "[object Error]":
              return e3.name == t3.name && e3.message == t3.message;
            case "[object RegExp]":
            case "[object String]":
              return e3 == t3 + "";
            case "[object Map]":
              var v = s;
            case "[object Set]":
              var d = 1 & n3;
              if (v || (v = u), e3.size != t3.size && !d) return false;
              var h = f.get(e3);
              if (h) return h == t3;
              n3 |= 2, f.set(e3, t3);
              var y = i(v(e3), v(t3), n3, c2, l, f);
              return f.delete(e3), y;
            case "[object Symbol]":
              if (p) return p.call(e3) == p.call(t3);
          }
          return false;
        };
      }, 2032: (e2, t2, r2) => {
        var n2 = r2(1042);
        e2.exports = function() {
          this.__data__ = n2 ? n2(null) : {}, this.size = 0;
        };
      }, 2199: (e2, t2, r2) => {
        var n2 = r2(4528), o2 = r2(6449);
        e2.exports = function(e3, t3, r3) {
          var a = t3(e3);
          return o2(e3) ? a : n2(a, r3(e3));
        };
      }, 2404: (e2, t2, r2) => {
        var n2 = r2(270);
        e2.exports = function(e3, t3) {
          return n2(e3, t3);
        };
      }, 2428: (e2, t2, r2) => {
        var n2 = r2(7534), o2 = r2(346), a = Object.prototype, i = a.hasOwnProperty, s = a.propertyIsEnumerable, u = n2(/* @__PURE__ */ function() {
          return arguments;
        }()) ? n2 : function(e3) {
          return o2(e3) && i.call(e3, "callee") && !s.call(e3, "callee");
        };
        e2.exports = u;
      }, 2552: (e2, t2, r2) => {
        var n2 = r2(1873), o2 = r2(659), a = r2(9350), i = n2 ? n2.toStringTag : void 0;
        e2.exports = function(e3) {
          return null == e3 ? void 0 === e3 ? "[object Undefined]" : "[object Null]" : i && i in Object(e3) ? o2(e3) : a(e3);
        };
      }, 2651: (e2, t2, r2) => {
        var n2 = r2(4218);
        e2.exports = function(e3, t3) {
          var r3 = e3.__data__;
          return n2(t3) ? r3["string" == typeof t3 ? "string" : "hash"] : r3.map;
        };
      }, 2749: (e2, t2, r2) => {
        var n2 = r2(1042), o2 = Object.prototype.hasOwnProperty;
        e2.exports = function(e3) {
          var t3 = this.__data__;
          return n2 ? void 0 !== t3[e3] : o2.call(t3, e3);
        };
      }, 2804: (e2, t2, r2) => {
        var n2 = r2(6110)(r2(9325), "Promise");
        e2.exports = n2;
      }, 2949: (e2, t2, r2) => {
        var n2 = r2(2651);
        e2.exports = function(e3, t3) {
          var r3 = n2(this, e3), o2 = r3.size;
          return r3.set(e3, t3), this.size += r3.size == o2 ? 0 : 1, this;
        };
      }, 3040: (e2, t2, r2) => {
        var n2 = r2(1549), o2 = r2(79), a = r2(8223);
        e2.exports = function() {
          this.size = 0, this.__data__ = { hash: new n2(), map: new (a || o2)(), string: new n2() };
        };
      }, 3146: (e2, t2, r2) => {
        for (var n2 = r2(3491), o2 = "undefined" == typeof window ? r2.g : window, a = ["moz", "webkit"], i = "AnimationFrame", s = o2["request" + i], u = o2["cancel" + i] || o2["cancelRequest" + i], c = 0; !s && c < a.length; c++) s = o2[a[c] + "Request" + i], u = o2[a[c] + "Cancel" + i] || o2[a[c] + "CancelRequest" + i];
        if (!s || !u) {
          var p = 0, l = 0, f = [], v = 1e3 / 60;
          s = function(e3) {
            if (0 === f.length) {
              var t3 = n2(), r3 = Math.max(0, v - (t3 - p));
              p = r3 + t3, setTimeout(function() {
                var e4 = f.slice(0);
                f.length = 0;
                for (var t4 = 0; t4 < e4.length; t4++) if (!e4[t4].cancelled) try {
                  e4[t4].callback(p);
                } catch (e5) {
                  setTimeout(function() {
                    throw e5;
                  }, 0);
                }
              }, Math.round(r3));
            }
            return f.push({ handle: ++l, callback: e3, cancelled: false }), l;
          }, u = function(e3) {
            for (var t3 = 0; t3 < f.length; t3++) f[t3].handle === e3 && (f[t3].cancelled = true);
          };
        }
        e2.exports = function(e3) {
          return s.call(o2, e3);
        }, e2.exports.cancel = function() {
          u.apply(o2, arguments);
        }, e2.exports.polyfill = function(e3) {
          e3 || (e3 = o2), e3.requestAnimationFrame = s, e3.cancelAnimationFrame = u;
        };
      }, 3345: (e2) => {
        e2.exports = function() {
          return [];
        };
      }, 3491: function(e2) {
        (function() {
          var t2, r2, n2, o2, a, i;
          "undefined" != typeof performance && null !== performance && performance.now ? e2.exports = function() {
            return performance.now();
          } : "undefined" != typeof process && null !== process && process.hrtime ? (e2.exports = function() {
            return (t2() - a) / 1e6;
          }, r2 = process.hrtime, o2 = (t2 = function() {
            var e3;
            return 1e9 * (e3 = r2())[0] + e3[1];
          })(), i = 1e9 * process.uptime(), a = o2 - i) : Date.now ? (e2.exports = function() {
            return Date.now() - n2;
          }, n2 = Date.now()) : (e2.exports = function() {
            return (/* @__PURE__ */ new Date()).getTime() - n2;
          }, n2 = (/* @__PURE__ */ new Date()).getTime());
        }).call(this);
      }, 3605: (e2) => {
        e2.exports = function(e3) {
          return this.__data__.get(e3);
        };
      }, 3650: (e2, t2, r2) => {
        var n2 = r2(4335)(Object.keys, Object);
        e2.exports = n2;
      }, 3656: (e2, t2, r2) => {
        e2 = r2.nmd(e2);
        var n2 = r2(9325), o2 = r2(9935), a = t2 && !t2.nodeType && t2, i = a && e2 && !e2.nodeType && e2, s = i && i.exports === a ? n2.Buffer : void 0, u = (s ? s.isBuffer : void 0) || o2;
        e2.exports = u;
      }, 3661: (e2, t2, r2) => {
        var n2 = r2(3040), o2 = r2(7670), a = r2(289), i = r2(4509), s = r2(2949);
        function u(e3) {
          var t3 = -1, r3 = null == e3 ? 0 : e3.length;
          for (this.clear(); ++t3 < r3; ) {
            var n3 = e3[t3];
            this.set(n3[0], n3[1]);
          }
        }
        u.prototype.clear = n2, u.prototype.delete = o2, u.prototype.get = a, u.prototype.has = i, u.prototype.set = s, e2.exports = u;
      }, 3702: (e2) => {
        e2.exports = function() {
          this.__data__ = [], this.size = 0;
        };
      }, 3805: (e2) => {
        e2.exports = function(e3) {
          var t2 = typeof e3;
          return null != e3 && ("object" == t2 || "function" == t2);
        };
      }, 3862: (e2) => {
        e2.exports = function(e3) {
          var t2 = this.has(e3) && delete this.__data__[e3];
          return this.size -= t2 ? 1 : 0, t2;
        };
      }, 4218: (e2) => {
        e2.exports = function(e3) {
          var t2 = typeof e3;
          return "string" == t2 || "number" == t2 || "symbol" == t2 || "boolean" == t2 ? "__proto__" !== e3 : null === e3;
        };
      }, 4247: (e2) => {
        e2.exports = function(e3) {
          var t2 = -1, r2 = Array(e3.size);
          return e3.forEach(function(e4) {
            r2[++t2] = e4;
          }), r2;
        };
      }, 4248: (e2) => {
        e2.exports = function(e3, t2) {
          for (var r2 = -1, n2 = null == e3 ? 0 : e3.length; ++r2 < n2; ) if (t2(e3[r2], r2, e3)) return true;
          return false;
        };
      }, 4335: (e2) => {
        e2.exports = function(e3, t2) {
          return function(r2) {
            return e3(t2(r2));
          };
        };
      }, 4509: (e2, t2, r2) => {
        var n2 = r2(2651);
        e2.exports = function(e3) {
          return n2(this, e3).has(e3);
        };
      }, 4528: (e2) => {
        e2.exports = function(e3, t2) {
          for (var r2 = -1, n2 = t2.length, o2 = e3.length; ++r2 < n2; ) e3[o2 + r2] = t2[r2];
          return e3;
        };
      }, 4664: (e2, t2, r2) => {
        var n2 = r2(9770), o2 = r2(3345), a = Object.prototype.propertyIsEnumerable, i = Object.getOwnPropertySymbols, s = i ? function(e3) {
          return null == e3 ? [] : (e3 = Object(e3), n2(i(e3), function(t3) {
            return a.call(e3, t3);
          }));
        } : o2;
        e2.exports = s;
      }, 4739: (e2, t2, r2) => {
        var n2 = r2(6025);
        e2.exports = function(e3) {
          var t3 = this.__data__, r3 = n2(t3, e3);
          return r3 < 0 ? void 0 : t3[r3][1];
        };
      }, 4840: (e2, t2, r2) => {
        var n2 = "object" == typeof r2.g && r2.g && r2.g.Object === Object && r2.g;
        e2.exports = n2;
      }, 4894: (e2, t2, r2) => {
        var n2 = r2(1882), o2 = r2(294);
        e2.exports = function(e3) {
          return null != e3 && o2(e3.length) && !n2(e3);
        };
      }, 4901: (e2, t2, r2) => {
        var n2 = r2(2552), o2 = r2(294), a = r2(346), i = {};
        i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = true, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = false, e2.exports = function(e3) {
          return a(e3) && o2(e3.length) && !!i[n2(e3)];
        };
      }, 5083: (e2, t2, r2) => {
        var n2 = r2(1882), o2 = r2(7296), a = r2(3805), i = r2(7473), s = /^\[object .+?Constructor\]$/, u = Function.prototype, c = Object.prototype, p = u.toString, l = c.hasOwnProperty, f = RegExp("^" + p.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e2.exports = function(e3) {
          return !(!a(e3) || o2(e3)) && (n2(e3) ? f : s).test(i(e3));
        };
      }, 5288: (e2) => {
        e2.exports = function(e3, t2) {
          return e3 === t2 || e3 != e3 && t2 != t2;
        };
      }, 5481: (e2, t2, r2) => {
        var n2 = r2(9325)["__core-js_shared__"];
        e2.exports = n2;
      }, 5527: (e2) => {
        var t2 = Object.prototype;
        e2.exports = function(e3) {
          var r2 = e3 && e3.constructor;
          return e3 === ("function" == typeof r2 && r2.prototype || t2);
        };
      }, 5580: (e2, t2, r2) => {
        var n2 = r2(6110)(r2(9325), "DataView");
        e2.exports = n2;
      }, 5749: (e2, t2, r2) => {
        var n2 = r2(1042);
        e2.exports = function(e3, t3) {
          var r3 = this.__data__;
          return this.size += this.has(e3) ? 0 : 1, r3[e3] = n2 && void 0 === t3 ? "__lodash_hash_undefined__" : t3, this;
        };
      }, 5861: (e2, t2, r2) => {
        var n2 = r2(5580), o2 = r2(8223), a = r2(2804), i = r2(6545), s = r2(8303), u = r2(2552), c = r2(7473), p = "[object Map]", l = "[object Promise]", f = "[object Set]", v = "[object WeakMap]", d = "[object DataView]", h = c(n2), y = c(o2), b = c(a), m = c(i), _ = c(s), g = u;
        (n2 && g(new n2(new ArrayBuffer(1))) != d || o2 && g(new o2()) != p || a && g(a.resolve()) != l || i && g(new i()) != f || s && g(new s()) != v) && (g = function(e3) {
          var t3 = u(e3), r3 = "[object Object]" == t3 ? e3.constructor : void 0, n3 = r3 ? c(r3) : "";
          if (n3) switch (n3) {
            case h:
              return d;
            case y:
              return p;
            case b:
              return l;
            case m:
              return f;
            case _:
              return v;
          }
          return t3;
        }), e2.exports = g;
      }, 5911: (e2, t2, r2) => {
        var n2 = r2(8859), o2 = r2(4248), a = r2(9219);
        e2.exports = function(e3, t3, r3, i, s, u) {
          var c = 1 & r3, p = e3.length, l = t3.length;
          if (p != l && !(c && l > p)) return false;
          var f = u.get(e3), v = u.get(t3);
          if (f && v) return f == t3 && v == e3;
          var d = -1, h = true, y = 2 & r3 ? new n2() : void 0;
          for (u.set(e3, t3), u.set(t3, e3); ++d < p; ) {
            var b = e3[d], m = t3[d];
            if (i) var _ = c ? i(m, b, d, t3, e3, u) : i(b, m, d, e3, t3, u);
            if (void 0 !== _) {
              if (_) continue;
              h = false;
              break;
            }
            if (y) {
              if (!o2(t3, function(e4, t4) {
                if (!a(y, t4) && (b === e4 || s(b, e4, r3, i, u))) return y.push(t4);
              })) {
                h = false;
                break;
              }
            } else if (b !== m && !s(b, m, r3, i, u)) {
              h = false;
              break;
            }
          }
          return u.delete(e3), u.delete(t3), h;
        };
      }, 5950: (e2, t2, r2) => {
        var n2 = r2(695), o2 = r2(8984), a = r2(4894);
        e2.exports = function(e3) {
          return a(e3) ? n2(e3) : o2(e3);
        };
      }, 6009: (e2, t2, r2) => {
        e2 = r2.nmd(e2);
        var n2 = r2(4840), o2 = t2 && !t2.nodeType && t2, a = o2 && e2 && !e2.nodeType && e2, i = a && a.exports === o2 && n2.process, s = function() {
          try {
            return a && a.require && a.require("util").types || i && i.binding && i.binding("util");
          } catch (e3) {
          }
        }();
        e2.exports = s;
      }, 6025: (e2, t2, r2) => {
        var n2 = r2(5288);
        e2.exports = function(e3, t3) {
          for (var r3 = e3.length; r3--; ) if (n2(e3[r3][0], t3)) return r3;
          return -1;
        };
      }, 6110: (e2, t2, r2) => {
        var n2 = r2(5083), o2 = r2(392);
        e2.exports = function(e3, t3) {
          var r3 = o2(e3, t3);
          return n2(r3) ? r3 : void 0;
        };
      }, 6449: (e2) => {
        var t2 = Array.isArray;
        e2.exports = t2;
      }, 6545: (e2, t2, r2) => {
        var n2 = r2(6110)(r2(9325), "Set");
        e2.exports = n2;
      }, 6721: (e2, t2, r2) => {
        var n2 = r2(1042), o2 = Object.prototype.hasOwnProperty;
        e2.exports = function(e3) {
          var t3 = this.__data__;
          if (n2) {
            var r3 = t3[e3];
            return "__lodash_hash_undefined__" === r3 ? void 0 : r3;
          }
          return o2.call(t3, e3) ? t3[e3] : void 0;
        };
      }, 7068: (e2, t2, r2) => {
        var n2 = r2(7217), o2 = r2(5911), a = r2(1986), i = r2(689), s = r2(5861), u = r2(6449), c = r2(3656), p = r2(7167), l = "[object Arguments]", f = "[object Array]", v = "[object Object]", d = Object.prototype.hasOwnProperty;
        e2.exports = function(e3, t3, r3, h, y, b) {
          var m = u(e3), _ = u(t3), g = m ? f : s(e3), w = _ ? f : s(t3), x = (g = g == l ? v : g) == v, j = (w = w == l ? v : w) == v, E = g == w;
          if (E && c(e3)) {
            if (!c(t3)) return false;
            m = true, x = false;
          }
          if (E && !x) return b || (b = new n2()), m || p(e3) ? o2(e3, t3, r3, h, y, b) : a(e3, t3, g, r3, h, y, b);
          if (!(1 & r3)) {
            var O = x && d.call(e3, "__wrapped__"), T = j && d.call(t3, "__wrapped__");
            if (O || T) {
              var A = O ? e3.value() : e3, S = T ? t3.value() : t3;
              return b || (b = new n2()), y(A, S, r3, h, b);
            }
          }
          return !!E && (b || (b = new n2()), i(e3, t3, r3, h, y, b));
        };
      }, 7167: (e2, t2, r2) => {
        var n2 = r2(4901), o2 = r2(7301), a = r2(6009), i = a && a.isTypedArray, s = i ? o2(i) : n2;
        e2.exports = s;
      }, 7217: (e2, t2, r2) => {
        var n2 = r2(79), o2 = r2(1420), a = r2(938), i = r2(3605), s = r2(9817), u = r2(945);
        function c(e3) {
          var t3 = this.__data__ = new n2(e3);
          this.size = t3.size;
        }
        c.prototype.clear = o2, c.prototype.delete = a, c.prototype.get = i, c.prototype.has = s, c.prototype.set = u, e2.exports = c;
      }, 7296: (e2, t2, r2) => {
        var n2, o2 = r2(5481), a = (n2 = /[^.]+$/.exec(o2 && o2.keys && o2.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n2 : "";
        e2.exports = function(e3) {
          return !!a && a in e3;
        };
      }, 7301: (e2) => {
        e2.exports = function(e3) {
          return function(t2) {
            return e3(t2);
          };
        };
      }, 7473: (e2) => {
        var t2 = Function.prototype.toString;
        e2.exports = function(e3) {
          if (null != e3) {
            try {
              return t2.call(e3);
            } catch (e4) {
            }
            try {
              return e3 + "";
            } catch (e4) {
            }
          }
          return "";
        };
      }, 7534: (e2, t2, r2) => {
        var n2 = r2(2552), o2 = r2(346);
        e2.exports = function(e3) {
          return o2(e3) && "[object Arguments]" == n2(e3);
        };
      }, 7670: (e2, t2, r2) => {
        var n2 = r2(2651);
        e2.exports = function(e3) {
          var t3 = n2(this, e3).delete(e3);
          return this.size -= t3 ? 1 : 0, t3;
        };
      }, 7828: (e2, t2, r2) => {
        var n2 = r2(9325).Uint8Array;
        e2.exports = n2;
      }, 8096: (e2) => {
        e2.exports = function(e3, t2) {
          for (var r2 = -1, n2 = Array(e3); ++r2 < e3; ) n2[r2] = t2(r2);
          return n2;
        };
      }, 8223: (e2, t2, r2) => {
        var n2 = r2(6110)(r2(9325), "Map");
        e2.exports = n2;
      }, 8303: (e2, t2, r2) => {
        var n2 = r2(6110)(r2(9325), "WeakMap");
        e2.exports = n2;
      }, 8655: (e2, t2, r2) => {
        var n2 = r2(6025);
        e2.exports = function(e3) {
          return n2(this.__data__, e3) > -1;
        };
      }, 8859: (e2, t2, r2) => {
        var n2 = r2(3661), o2 = r2(1380), a = r2(1459);
        function i(e3) {
          var t3 = -1, r3 = null == e3 ? 0 : e3.length;
          for (this.__data__ = new n2(); ++t3 < r3; ) this.add(e3[t3]);
        }
        i.prototype.add = i.prototype.push = o2, i.prototype.has = a, e2.exports = i;
      }, 8984: (e2, t2, r2) => {
        var n2 = r2(5527), o2 = r2(3650), a = Object.prototype.hasOwnProperty;
        e2.exports = function(e3) {
          if (!n2(e3)) return o2(e3);
          var t3 = [];
          for (var r3 in Object(e3)) a.call(e3, r3) && "constructor" != r3 && t3.push(r3);
          return t3;
        };
      }, 9155: (t2) => {
        "use strict";
        t2.exports = e;
      }, 9219: (e2) => {
        e2.exports = function(e3, t2) {
          return e3.has(t2);
        };
      }, 9325: (e2, t2, r2) => {
        var n2 = r2(4840), o2 = "object" == typeof self && self && self.Object === Object && self, a = n2 || o2 || Function("return this")();
        e2.exports = a;
      }, 9350: (e2) => {
        var t2 = Object.prototype.toString;
        e2.exports = function(e3) {
          return t2.call(e3);
        };
      }, 9770: (e2) => {
        e2.exports = function(e3, t2) {
          for (var r2 = -1, n2 = null == e3 ? 0 : e3.length, o2 = 0, a = []; ++r2 < n2; ) {
            var i = e3[r2];
            t2(i, r2, e3) && (a[o2++] = i);
          }
          return a;
        };
      }, 9817: (e2) => {
        e2.exports = function(e3) {
          return this.__data__.has(e3);
        };
      }, 9905: (e2, t2, r2) => {
        "use strict";
        r2.d(t2, { default: () => A });
        var n2 = r2(3146), o2 = r2.n(n2);
        const a = function(e3) {
          return new RegExp(/<[a-z][\s\S]*>/i).test(e3);
        }, i = function(e3, t3) {
          return Math.floor(Math.random() * (t3 - e3 + 1)) + e3;
        };
        var s = "TYPE_CHARACTER", u = "REMOVE_CHARACTER", c = "REMOVE_ALL", p = "REMOVE_LAST_VISIBLE_NODE", l = "PAUSE_FOR", f = "CALL_FUNCTION", v = "ADD_HTML_TAG_ELEMENT", d = "CHANGE_DELETE_SPEED", h = "CHANGE_DELAY", y = "CHANGE_CURSOR", b = "PASTE_STRING", m = "HTML_TAG";
        function _(e3) {
          return _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, _(e3);
        }
        function g(e3, t3) {
          var r3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var n3 = Object.getOwnPropertySymbols(e3);
            t3 && (n3 = n3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), r3.push.apply(r3, n3);
          }
          return r3;
        }
        function w(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var r3 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? g(Object(r3), true).forEach(function(t4) {
              O(e3, t4, r3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r3)) : g(Object(r3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(r3, t4));
            });
          }
          return e3;
        }
        function x(e3) {
          return function(e4) {
            if (Array.isArray(e4)) return j(e4);
          }(e3) || function(e4) {
            if ("undefined" != typeof Symbol && null != e4[Symbol.iterator] || null != e4["@@iterator"]) return Array.from(e4);
          }(e3) || function(e4, t3) {
            if (e4) {
              if ("string" == typeof e4) return j(e4, t3);
              var r3 = {}.toString.call(e4).slice(8, -1);
              return "Object" === r3 && e4.constructor && (r3 = e4.constructor.name), "Map" === r3 || "Set" === r3 ? Array.from(e4) : "Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? j(e4, t3) : void 0;
            }
          }(e3) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function j(e3, t3) {
          (null == t3 || t3 > e3.length) && (t3 = e3.length);
          for (var r3 = 0, n3 = Array(t3); r3 < t3; r3++) n3[r3] = e3[r3];
          return n3;
        }
        function E(e3, t3) {
          for (var r3 = 0; r3 < t3.length; r3++) {
            var n3 = t3[r3];
            n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(e3, T(n3.key), n3);
          }
        }
        function O(e3, t3, r3) {
          return (t3 = T(t3)) in e3 ? Object.defineProperty(e3, t3, { value: r3, enumerable: true, configurable: true, writable: true }) : e3[t3] = r3, e3;
        }
        function T(e3) {
          var t3 = function(e4) {
            if ("object" != _(e4) || !e4) return e4;
            var t4 = e4[Symbol.toPrimitive];
            if (void 0 !== t4) {
              var r3 = t4.call(e4, "string");
              if ("object" != _(r3)) return r3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e4);
          }(e3);
          return "symbol" == _(t3) ? t3 : t3 + "";
        }
        const A = function() {
          function e3(t4, r4) {
            var _2 = this;
            if (function(e4, t5) {
              if (!(e4 instanceof t5)) throw new TypeError("Cannot call a class as a function");
            }(this, e3), O(this, "state", { cursorAnimation: null, lastFrameTime: null, pauseUntil: null, eventQueue: [], eventLoop: null, eventLoopPaused: false, reverseCalledEvents: [], calledEvents: [], visibleNodes: [], initialOptions: null, elements: { container: null, wrapper: document.createElement("span"), cursor: document.createElement("span") } }), O(this, "options", { strings: null, cursor: "|", delay: "natural", pauseFor: 1500, deleteSpeed: "natural", loop: false, autoStart: false, devMode: false, skipAddStyles: false, wrapperClassName: "Typewriter__wrapper", cursorClassName: "Typewriter__cursor", stringSplitter: null, onCreateTextNode: null, onRemoveNode: null }), O(this, "setupWrapperElement", function() {
              _2.state.elements.container && (_2.state.elements.wrapper.className = _2.options.wrapperClassName, _2.state.elements.cursor.className = _2.options.cursorClassName, _2.state.elements.cursor.innerHTML = _2.options.cursor, _2.state.elements.container.innerHTML = "", _2.state.elements.container.appendChild(_2.state.elements.wrapper), _2.state.elements.container.appendChild(_2.state.elements.cursor));
            }), O(this, "start", function() {
              return _2.state.eventLoopPaused = false, _2.runEventLoop(), _2;
            }), O(this, "pause", function() {
              return _2.state.eventLoopPaused = true, _2;
            }), O(this, "stop", function() {
              return _2.state.eventLoop && ((0, n2.cancel)(_2.state.eventLoop), _2.state.eventLoop = null), _2;
            }), O(this, "pauseFor", function(e4) {
              return _2.addEventToQueue(l, { ms: e4 }), _2;
            }), O(this, "typeOutAllStrings", function() {
              return "string" == typeof _2.options.strings ? (_2.typeString(_2.options.strings).pauseFor(_2.options.pauseFor), _2) : (_2.options.strings.forEach(function(e4) {
                _2.typeString(e4).pauseFor(_2.options.pauseFor).deleteAll(_2.options.deleteSpeed);
              }), _2);
            }), O(this, "typeString", function(e4) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              if (a(e4)) return _2.typeOutHTMLString(e4, t5);
              if (e4) {
                var r5 = (_2.options || {}).stringSplitter, n3 = "function" == typeof r5 ? r5(e4) : e4.split("");
                _2.typeCharacters(n3, t5);
              }
              return _2;
            }), O(this, "pasteString", function(e4) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              return a(e4) ? _2.typeOutHTMLString(e4, t5, true) : (e4 && _2.addEventToQueue(b, { character: e4, node: t5 }), _2);
            }), O(this, "typeOutHTMLString", function(e4) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r5 = arguments.length > 2 ? arguments[2] : void 0, n3 = function(e5) {
                var t6 = document.createElement("div");
                return t6.innerHTML = e5, t6.childNodes;
              }(e4);
              if (n3.length > 0) for (var o3 = 0; o3 < n3.length; o3++) {
                var a2 = n3[o3], i2 = a2.innerHTML;
                a2 && 3 !== a2.nodeType ? (a2.innerHTML = "", _2.addEventToQueue(v, { node: a2, parentNode: t5 }), r5 ? _2.pasteString(i2, a2) : _2.typeString(i2, a2)) : a2.textContent && (r5 ? _2.pasteString(a2.textContent, t5) : _2.typeString(a2.textContent, t5));
              }
              return _2;
            }), O(this, "deleteAll", function() {
              var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
              return _2.addEventToQueue(c, { speed: e4 }), _2;
            }), O(this, "changeDeleteSpeed", function(e4) {
              if (!e4) throw new Error("Must provide new delete speed");
              return _2.addEventToQueue(d, { speed: e4 }), _2;
            }), O(this, "changeDelay", function(e4) {
              if (!e4) throw new Error("Must provide new delay");
              return _2.addEventToQueue(h, { delay: e4 }), _2;
            }), O(this, "changeCursor", function(e4) {
              if (!e4) throw new Error("Must provide new cursor");
              return _2.addEventToQueue(y, { cursor: e4 }), _2;
            }), O(this, "deleteChars", function(e4) {
              if (!e4) throw new Error("Must provide amount of characters to delete");
              for (var t5 = 0; t5 < e4; t5++) _2.addEventToQueue(u);
              return _2;
            }), O(this, "callFunction", function(e4, t5) {
              if (!e4 || "function" != typeof e4) throw new Error("Callback must be a function");
              return _2.addEventToQueue(f, { cb: e4, thisArg: t5 }), _2;
            }), O(this, "typeCharacters", function(e4) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              if (!e4 || !Array.isArray(e4)) throw new Error("Characters must be an array");
              return e4.forEach(function(e5) {
                _2.addEventToQueue(s, { character: e5, node: t5 });
              }), _2;
            }), O(this, "removeCharacters", function(e4) {
              if (!e4 || !Array.isArray(e4)) throw new Error("Characters must be an array");
              return e4.forEach(function() {
                _2.addEventToQueue(u);
              }), _2;
            }), O(this, "addEventToQueue", function(e4, t5) {
              var r5 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return _2.addEventToStateProperty(e4, t5, r5, "eventQueue");
            }), O(this, "addReverseCalledEvent", function(e4, t5) {
              var r5 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return _2.options.loop ? _2.addEventToStateProperty(e4, t5, r5, "reverseCalledEvents") : _2;
            }), O(this, "addEventToStateProperty", function(e4, t5) {
              var r5 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n3 = arguments.length > 3 ? arguments[3] : void 0, o3 = { eventName: e4, eventArgs: t5 || {} };
              return _2.state[n3] = r5 ? [o3].concat(x(_2.state[n3])) : [].concat(x(_2.state[n3]), [o3]), _2;
            }), O(this, "runEventLoop", function() {
              _2.state.lastFrameTime || (_2.state.lastFrameTime = Date.now());
              var e4 = Date.now(), t5 = e4 - _2.state.lastFrameTime;
              if (!_2.state.eventQueue.length) {
                if (!_2.options.loop) return;
                _2.state.eventQueue = x(_2.state.calledEvents), _2.state.calledEvents = [], _2.options = w({}, _2.state.initialOptions);
              }
              if (_2.state.eventLoop = o2()(_2.runEventLoop), !_2.state.eventLoopPaused) {
                if (_2.state.pauseUntil) {
                  if (e4 < _2.state.pauseUntil) return;
                  _2.state.pauseUntil = null;
                }
                var r5, n3 = x(_2.state.eventQueue), a2 = n3.shift();
                if (!(t5 <= (r5 = a2.eventName === p || a2.eventName === u ? "natural" === _2.options.deleteSpeed ? i(40, 80) : _2.options.deleteSpeed : "natural" === _2.options.delay ? i(120, 160) : _2.options.delay))) {
                  var g3 = a2.eventName, j2 = a2.eventArgs;
                  switch (_2.logInDevMode({ currentEvent: a2, state: _2.state, delay: r5 }), g3) {
                    case b:
                    case s:
                      var E2 = j2.character, O2 = j2.node, T2 = document.createTextNode(E2), A2 = T2;
                      _2.options.onCreateTextNode && "function" == typeof _2.options.onCreateTextNode && (A2 = _2.options.onCreateTextNode(E2, T2)), A2 && (O2 ? O2.appendChild(A2) : _2.state.elements.wrapper.appendChild(A2)), _2.state.visibleNodes = [].concat(x(_2.state.visibleNodes), [{ type: "TEXT_NODE", character: E2, node: A2 }]);
                      break;
                    case u:
                      n3.unshift({ eventName: p, eventArgs: { removingCharacterNode: true } });
                      break;
                    case l:
                      var S = a2.eventArgs.ms;
                      _2.state.pauseUntil = Date.now() + parseInt(S);
                      break;
                    case f:
                      var N = a2.eventArgs, P = N.cb, C = N.thisArg;
                      P.call(C, { elements: _2.state.elements });
                      break;
                    case v:
                      var L = a2.eventArgs, k = L.node, D = L.parentNode;
                      D ? D.appendChild(k) : _2.state.elements.wrapper.appendChild(k), _2.state.visibleNodes = [].concat(x(_2.state.visibleNodes), [{ type: m, node: k, parentNode: D || _2.state.elements.wrapper }]);
                      break;
                    case c:
                      var M = _2.state.visibleNodes, R = j2.speed, F = [];
                      R && F.push({ eventName: d, eventArgs: { speed: R, temp: true } });
                      for (var z = 0, Q = M.length; z < Q; z++) F.push({ eventName: p, eventArgs: { removingCharacterNode: false } });
                      R && F.push({ eventName: d, eventArgs: { speed: _2.options.deleteSpeed, temp: true } }), n3.unshift.apply(n3, F);
                      break;
                    case p:
                      var I = a2.eventArgs.removingCharacterNode;
                      if (_2.state.visibleNodes.length) {
                        var U = _2.state.visibleNodes.pop(), H = U.type, q = U.node, B = U.character;
                        _2.options.onRemoveNode && "function" == typeof _2.options.onRemoveNode && _2.options.onRemoveNode({ node: q, character: B }), q && q.parentNode.removeChild(q), H === m && I && n3.unshift({ eventName: p, eventArgs: {} });
                      }
                      break;
                    case d:
                      _2.options.deleteSpeed = a2.eventArgs.speed;
                      break;
                    case h:
                      _2.options.delay = a2.eventArgs.delay;
                      break;
                    case y:
                      _2.options.cursor = a2.eventArgs.cursor, _2.state.elements.cursor.innerHTML = a2.eventArgs.cursor;
                  }
                  _2.options.loop && (a2.eventName === p || a2.eventArgs && a2.eventArgs.temp || (_2.state.calledEvents = [].concat(x(_2.state.calledEvents), [a2]))), _2.state.eventQueue = n3, _2.state.lastFrameTime = e4;
                }
              }
            }), t4) if ("string" == typeof t4) {
              var g2 = document.querySelector(t4);
              if (!g2) throw new Error("Could not find container element");
              this.state.elements.container = g2;
            } else this.state.elements.container = t4;
            r4 && (this.options = w(w({}, this.options), r4)), this.state.initialOptions = w({}, this.options), this.init();
          }
          var t3, r3;
          return t3 = e3, (r3 = [{ key: "init", value: function() {
            var e4, t4;
            this.setupWrapperElement(), this.addEventToQueue(y, { cursor: this.options.cursor }, true), this.addEventToQueue(c, null, true), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || (e4 = ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}", (t4 = document.createElement("style")).appendChild(document.createTextNode(e4)), document.head.appendChild(t4), window.___TYPEWRITER_JS_STYLES_ADDED___ = true), true === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start();
          } }, { key: "logInDevMode", value: function(e4) {
            this.options.devMode && console.log(e4);
          } }]) && E(t3.prototype, r3), Object.defineProperty(t3, "prototype", { writable: false }), e3;
        }();
      }, 9935: (e2) => {
        e2.exports = function() {
          return false;
        };
      } }, r = {};
      function n(e2) {
        var o2 = r[e2];
        if (void 0 !== o2) return o2.exports;
        var a = r[e2] = { id: e2, loaded: false, exports: {} };
        return t[e2].call(a.exports, a, a.exports, n), a.loaded = true, a.exports;
      }
      n.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return n.d(t2, { a: t2 }), t2;
      }, n.d = (e2, t2) => {
        for (var r2 in t2) n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e2) {
          if ("object" == typeof window) return window;
        }
      }(), n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n.nmd = (e2) => (e2.paths = [], e2.children || (e2.children = []), e2);
      var o = {};
      return (() => {
        "use strict";
        n.d(o, { default: () => h });
        var e2 = n(9155), t2 = n.n(e2), r2 = n(9905), a = n(2404), i = n.n(a);
        function s(e3) {
          return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, s(e3);
        }
        function u(e3, t3) {
          for (var r3 = 0; r3 < t3.length; r3++) {
            var n2 = t3[r3];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e3, v(n2.key), n2);
          }
        }
        function c(e3, t3) {
          return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, c(e3, t3);
        }
        function p(e3) {
          if (void 0 === e3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function l() {
          try {
            var e3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
          } catch (e4) {
          }
          return (l = function() {
            return !!e3;
          })();
        }
        function f(e3) {
          return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, f(e3);
        }
        function v(e3) {
          var t3 = function(e4) {
            if ("object" != s(e4) || !e4) return e4;
            var t4 = e4[Symbol.toPrimitive];
            if (void 0 !== t4) {
              var r3 = t4.call(e4, "string");
              if ("object" != s(r3)) return r3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e4);
          }(e3);
          return "symbol" == s(t3) ? t3 : t3 + "";
        }
        var d = function(e3) {
          !function(e4, t3) {
            if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), Object.defineProperty(e4, "prototype", { writable: false }), t3 && c(e4, t3);
          }(d2, e3);
          var n2, o2, a2 = function(e4) {
            var t3 = l();
            return function() {
              var r3, n3 = f(e4);
              if (t3) {
                var o3 = f(this).constructor;
                r3 = Reflect.construct(n3, arguments, o3);
              } else r3 = n3.apply(this, arguments);
              return function(e5, t4) {
                if (t4 && ("object" == s(t4) || "function" == typeof t4)) return t4;
                if (void 0 !== t4) throw new TypeError("Derived constructors may only return object or undefined");
                return p(e5);
              }(this, r3);
            };
          }(d2);
          function d2() {
            var e4, t3, r3, n3;
            !function(e5, t4) {
              if (!(e5 instanceof t4)) throw new TypeError("Cannot call a class as a function");
            }(this, d2);
            for (var o3 = arguments.length, i2 = new Array(o3), s2 = 0; s2 < o3; s2++) i2[s2] = arguments[s2];
            return t3 = p(e4 = a2.call.apply(a2, [this].concat(i2))), n3 = { instance: null }, (r3 = v(r3 = "state")) in t3 ? Object.defineProperty(t3, r3, { value: n3, enumerable: true, configurable: true, writable: true }) : t3[r3] = n3, e4;
          }
          return n2 = d2, (o2 = [{ key: "componentDidMount", value: function() {
            var e4 = this, t3 = new r2.default(this.typewriter, this.props.options);
            this.setState({ instance: t3 }, function() {
              var r3 = e4.props.onInit;
              r3 && r3(t3);
            });
          } }, { key: "componentDidUpdate", value: function(e4) {
            i()(this.props.options, e4.options) || this.setState({ instance: new r2.default(this.typewriter, this.props.options) });
          } }, { key: "componentWillUnmount", value: function() {
            this.state.instance && this.state.instance.stop();
          } }, { key: "render", value: function() {
            var e4 = this, r3 = this.props.component;
            return t2().createElement(r3, { ref: function(t3) {
              return e4.typewriter = t3;
            }, className: "Typewriter", "data-testid": "typewriter-wrapper" });
          } }]) && u(n2.prototype, o2), Object.defineProperty(n2, "prototype", { writable: false }), d2;
        }(e2.Component);
        d.defaultProps = { component: "div" };
        const h = d;
      })(), o.default;
    })());
  }
});
export default require_react2();
//# sourceMappingURL=typewriter-effect.js.map
