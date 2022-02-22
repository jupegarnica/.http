function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function (path, base) {
      return commonjsRequire(
        path,
        base === void 0 || base === null ? module.path : base,
      );
    },
  },
    fn(module, module.exports),
    module.exports;
}
function commonjsRequire() {
  throw new Error(
    "Dynamic requires are not currently supported by @rollup/plugin-commonjs",
  );
}
var stampit_min = createCommonjsModule(function (module) {
  !function () {
    var u,
      c,
      a,
      s,
      f,
      y = "properties",
      l = "deepProperties",
      b = "propertyDescriptors",
      d = "staticProperties",
      O = "staticDeepProperties",
      h = "staticPropertyDescriptors",
      g = "configuration",
      m = "deepConfiguration",
      P = "deepProps",
      A = "deepStatics",
      j = "deepConf",
      v = "initializers",
      _ = "methods",
      w = "composers",
      D = "compose";
    function S(r2) {
      return Object.getOwnPropertyNames(r2).concat(
        Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(r2) : [],
      );
    }
    function r(r2, t2) {
      return Array.prototype.slice.call(arguments, 2).reduce(r2, t2);
    }
    var x = r.bind(0, function r2(t2, e2) {
      if (e2) {
        for (var n2 = S(e2), o2 = 0; o2 < n2.length; o2 += 1) {
          Object.defineProperty(
            t2,
            n2[o2],
            Object.getOwnPropertyDescriptor(e2, n2[o2]),
          );
        }
      }
      return t2;
    });
    function C(r2) {
      return typeof r2 == "function";
    }
    function N(r2) {
      return r2 && typeof r2 == "object" || C(r2);
    }
    function z(r2) {
      return r2 && typeof r2 == "object" && r2.__proto__ == Object.prototype;
    }
    var E = r.bind(0, function r2(t2, e2) {
      if (e2 === u) {
        return t2;
      }
      if (Array.isArray(e2)) {
        return (Array.isArray(t2) ? t2 : []).concat(e2);
      }
      if (!z(e2)) {
        return e2;
      }
      for (var n2, o2, i = S(e2), p = 0; p < i.length;) {
        n2 = i[p++],
          (o2 = Object.getOwnPropertyDescriptor(e2, n2)).hasOwnProperty("value")
            ? o2.value !== u &&
              (t2[n2] = r2(
                z(t2[n2]) || Array.isArray(e2[n2]) ? t2[n2] : {},
                e2[n2],
              ))
            : Object.defineProperty(t2, n2, o2);
      }
      return t2;
    });
    function I() {
      return (c = Array.prototype.concat.apply([], arguments).filter(
          function (r2, t2, e2) {
            return C(r2) && e2.indexOf(r2) === t2;
          },
        )).length
        ? c
        : u;
    }
    function t(r2) {
      return c = function r3() {
        return function r4(t2) {
          var e2,
            n2,
            o2 = r4[D] || {},
            i = { __proto__: o2[_] },
            p = o2[v],
            c2 = Array.prototype.slice.apply(arguments),
            a2 = o2[l];
          if (
            a2 && E(i, a2),
              (a2 = o2[y]) && x(i, a2),
              (a2 = o2[b]) && Object.defineProperties(i, a2),
              !p || !p.length
          ) {
            return i;
          }
          for (t2 === u && (t2 = {}), o2 = 0; o2 < p.length;) {
            C(e2 = p[o2++]) &&
              (i =
                (n2 = e2.call(i, t2, { instance: i, stamp: r4, args: c2 })) ===
                    u
                  ? i
                  : n2);
          }
          return i;
        };
      }(),
        (a = r2[O]) && E(c, a),
        (a = r2[d]) && x(c, a),
        (a = r2[h]) && Object.defineProperties(c, a),
        a = C(c[D]) ? c[D] : R,
        x(
          c[D] = function () {
            return a.apply(this, arguments);
          },
          r2,
        ),
        c;
    }
    function e(e2, n2) {
      function r2(r3, t3) {
        N(n2[r3]) && (N(e2[r3]) || (e2[r3] = {}), (t3 || x)(e2[r3], n2[r3]));
      }
      function t2(r3) {
        (c = I(e2[r3], n2[r3])) && (e2[r3] = c);
      }
      return n2 && N(n2 = n2[D] || n2) &&
        (r2(_),
          r2(y),
          r2(l, E),
          r2(b),
          r2(d),
          r2(O, E),
          r2(h),
          r2(g),
          r2(m, E),
          t2(v),
          t2(w)),
        e2;
    }
    function R() {
      return t(Array.prototype.concat.apply([this], arguments).reduce(e, {}));
    }
    function V(r2) {
      return C(r2) && C(r2[D]);
    }
    var n = {};
    function o(r2, t2) {
      return function () {
        return (s = {})[r2] = t2.apply(
          u,
          Array.prototype.concat.apply([{}], arguments),
        ),
          ((c = this) && c[D] || a).call(c, s);
      };
    }
    n[_] = o(_, x),
      n[y] = n.props = o(y, x),
      n[v] = n.init = o(v, I),
      n[w] = o(w, I),
      n[l] = n[P] = o(l, E),
      n[d] = n.statics = o(d, x),
      n[O] = n[A] = o(O, E),
      n[g] = n.conf = o(g, x),
      n[m] = n[j] = o(m, E),
      n[b] = o(b, x),
      n[h] = o(h, x),
      a = n[D] = x(function r2() {
        for (
          var t2, e2, n2 = 0, o2 = [], i = arguments, p = this;
          n2 < i.length;
        ) {
          N(t2 = i[n2++]) &&
            o2.push(
              V(t2)
                ? t2
                : ((s = {})[_] = (e2 = t2)[_] || u,
                  a = e2.props,
                  s[y] = N((c = e2[y]) || a) ? x({}, a, c) : u,
                  s[v] = I(e2.init, e2[v]),
                  s[w] = I(e2[w]),
                  a = e2[P],
                  s[l] = N((c = e2[l]) || a) ? E({}, a, c) : u,
                  s[b] = e2[b],
                  a = e2.statics,
                  s[d] = N((c = e2[d]) || a) ? x({}, a, c) : u,
                  a = e2[A],
                  s[O] = N((c = e2[O]) || a) ? E({}, a, c) : u,
                  c = e2[h],
                  s[h] = N((a = e2.name && { name: { value: e2.name } }) || c)
                    ? x({}, c, a)
                    : u,
                  a = e2.conf,
                  s[g] = N((c = e2[g]) || a) ? x({}, a, c) : u,
                  a = e2[j],
                  s[m] = N((c = e2[m]) || a) ? E({}, a, c) : u,
                  s),
            );
        }
        if (
          t2 = R.apply(p || f, o2),
            p && o2.unshift(p),
            Array.isArray(i = t2[D][w])
        ) {
          for (n2 = 0; n2 < i.length;) {
            t2 = V(p = i[n2++]({ stamp: t2, composables: o2 })) ? p : t2;
          }
        }
        return t2;
      }, n),
      n.create = function () {
        return this.apply(u, arguments);
      },
      (s = {})[d] = n,
      f = R(s),
      a[D] = a.bind(),
      a.version = "4.3.2",
      module.exports = a;
  }();
});
var compose = stampit_min.compose;
var composers = stampit_min.composers;
var conf = stampit_min.conf;
var configuration = stampit_min.configuration;
var deepConf = stampit_min.deepConf;
var deepConfiguration = stampit_min.deepConfiguration;
var deepProperties = stampit_min.deepProperties;
var deepProps = stampit_min.deepProps;
var deepStatics = stampit_min.deepStatics;
export default stampit_min;
var init = stampit_min.init;
var initializers = stampit_min.initializers;
var methods = stampit_min.methods;
var properties = stampit_min.properties;
var propertyDescriptors = stampit_min.propertyDescriptors;
var props = stampit_min.props;
var staticDeepProperties = stampit_min.staticDeepProperties;
var staticProperties = stampit_min.staticProperties;
var staticPropertyDescriptors = stampit_min.staticPropertyDescriptors;
var statics = stampit_min.statics;
var version = stampit_min.version;
export {
  compose,
  composers,
  conf,
  configuration,
  deepConf,
  deepConfiguration,
  deepProperties,
  deepProps,
  deepStatics,
  init,
  initializers,
  methods,
  properties,
  propertyDescriptors,
  props,
  stampit_min as __moduleExports,
  staticDeepProperties,
  staticProperties,
  staticPropertyDescriptors,
  statics,
  version,
};
