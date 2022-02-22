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
    var f,
      p = "roperties",
      c = "ropertyDescriptors",
      t = "static",
      a = "onfiguration",
      s = "p" + p,
      l = "deepP" + p,
      y = "p" + c,
      d = t + "P" + p,
      m = t + "DeepP" + p,
      v = t + "P" + c,
      h = "c" + a,
      P = "deepC" + a,
      _ = "deepProps",
      b = "deepStatics",
      g = "deepConf",
      O = "initializers",
      w = "methods",
      A = "composers",
      D = "compose",
      r = "object",
      S = "length",
      n = Object,
      j = Array.isArray,
      x = n.defineProperties,
      C = n.defineProperty,
      N = n.getOwnPropertyDescriptor,
      e = n.getOwnPropertySymbols,
      z = Array.prototype,
      o = z.concat,
      E = z.slice;
    function I(t2) {
      return n.getOwnPropertyNames(t2).concat(e ? e(t2) : []);
    }
    function i(t2, r2) {
      return E.call(arguments, 2).reduce(t2, r2);
    }
    var R = i.bind(0, function t2(r2, n2) {
      if (n2) {
        for (var e2, o2 = I(n2), i2 = 0; i2 < o2.length; i2 += 1) {
          e2 = N(n2, o2[i2]), C(r2, o2[i2], e2);
        }
      }
      return r2;
    });
    function V(t2) {
      return typeof t2 == "function";
    }
    function k(t2) {
      return t2 && typeof t2 == r || V(t2);
    }
    function q(t2) {
      return t2 && typeof t2 == r && t2.__proto__ == n.prototype;
    }
    var B = i.bind(0, function t2(r2, n2) {
      if (n2 === f) {
        return r2;
      }
      if (j(n2)) {
        return (j(r2) ? r2 : []).concat(n2);
      }
      if (!q(n2)) {
        return n2;
      }
      for (var e2, o2, i2 = I(n2), u2 = 0; u2 < i2[S];) {
        e2 = i2[u2++],
          (o2 = N(n2, e2)).hasOwnProperty("value")
            ? o2.value !== f &&
              (r2[e2] = t2(q(r2[e2]) || j(n2[e2]) ? r2[e2] : {}, n2[e2]))
            : C(r2, e2, o2);
      }
      return r2;
    });
    function F() {
      return (p = o.apply([], arguments).filter(function (t2, r2, n2) {
          return V(t2) && n2.indexOf(t2) === r2;
        }))[S]
        ? p
        : f;
    }
    function u(t2) {
      return p = function t3() {
        return function t4(r2) {
          var n2,
            e2,
            o2 = t4[D] || {},
            i2 = { __proto__: o2[w] },
            u2 = o2[O],
            p2 = E.apply(arguments),
            c2 = o2[l];
          if (
            c2 && B(i2, c2),
              (c2 = o2[s]) && R(i2, c2),
              (c2 = o2[y]) && x(i2, c2),
              !u2 || !u2[S]
          ) {
            return i2;
          }
          for (r2 === f && (r2 = {}), o2 = 0; o2 < u2[S];) {
            V(n2 = u2[o2++]) &&
              (i2 = (e2 = n2.call(i2, r2, {
                  instance: i2,
                  stamp: t4,
                  args: p2,
                })) === f
                ? i2
                : e2);
          }
          return i2;
        };
      }(),
        (c = t2[m]) && B(p, c),
        (c = t2[d]) && R(p, c),
        (c = t2[v]) && x(p, c),
        c = V(p[D]) ? p[D] : H,
        R(
          p[D] = function () {
            return c.apply(this, arguments);
          },
          t2,
        ),
        p;
    }
    function G(n2, e2) {
      function t2(t3, r3) {
        k(e2[t3]) && (k(n2[t3]) || (n2[t3] = {}), (r3 || R)(n2[t3], e2[t3]));
      }
      function r2(t3) {
        (p = F(n2[t3], e2[t3])) && (n2[t3] = p);
      }
      return e2 && k(e2 = e2[D] || e2) &&
        (t2(w),
          t2(s),
          t2(l, B),
          t2(y),
          t2(d),
          t2(m, B),
          t2(v),
          t2(h),
          t2(P, B),
          r2(O),
          r2(A)),
        n2;
    }
    function H() {
      return u(o.apply([this], arguments).reduce(G, {}));
    }
    function J(t2) {
      return V(t2) && V(t2[D]);
    }
    var K = {};
    function L(t2, r2) {
      return function () {
        return (a = {})[t2] = r2.apply(f, o.apply([{}], arguments)),
          ((p = this) && p[D] || c).call(p, a);
      };
    }
    K[w] = L(w, R),
      K[s] = K.props = L(s, R),
      K[O] = K.init = L(O, F),
      K[A] = L(A, F),
      K[l] = K[_] = L(l, B),
      K[d] = K.statics = L(d, R),
      K[m] = K[b] = L(m, B),
      K[h] = K.conf = L(h, R),
      K[P] = K[g] = L(P, B),
      K[y] = L(y, R),
      K[v] = L(v, R),
      c = K[D] = R(function t2() {
        for (
          var r2, n2, e2 = 0, o2 = [], i2 = arguments, u2 = this;
          e2 < i2[S];
        ) {
          k(r2 = i2[e2++]) &&
            o2.push(
              J(r2)
                ? r2
                : ((a = {})[w] = (n2 = r2)[w] || f,
                  c = n2.props,
                  a[s] = k((p = n2[s]) || c) ? R({}, c, p) : f,
                  a[O] = F(n2.init, n2[O]),
                  a[A] = F(n2[A]),
                  c = n2[_],
                  a[l] = k((p = n2[l]) || c) ? B({}, c, p) : f,
                  a[y] = n2[y],
                  c = n2.statics,
                  a[d] = k((p = n2[d]) || c) ? R({}, c, p) : f,
                  c = n2[b],
                  a[m] = k((p = n2[m]) || c) ? B({}, c, p) : f,
                  p = n2[v],
                  a[v] = k((c = n2.name && { name: { value: n2.name } }) || p)
                    ? R({}, p, c)
                    : f,
                  c = n2.conf,
                  a[h] = k((p = n2[h]) || c) ? R({}, c, p) : f,
                  c = n2[g],
                  a[P] = k((p = n2[P]) || c) ? B({}, c, p) : f,
                  a),
            );
        }
        if (r2 = H.apply(u2 || z, o2), u2 && o2.unshift(u2), j(i2 = r2[D][A])) {
          for (e2 = 0; e2 < i2[S];) {
            r2 = J(u2 = i2[e2++]({ stamp: r2, composables: o2 })) ? u2 : r2;
          }
        }
        return r2;
      }, K),
      K["create"] = function () {
        return this.apply(f, arguments);
      },
      (a = {})[d] = K,
      z = H(a),
      c[D] = c.bind(),
      c.version = "4.3.1",
      module.exports = c;
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
