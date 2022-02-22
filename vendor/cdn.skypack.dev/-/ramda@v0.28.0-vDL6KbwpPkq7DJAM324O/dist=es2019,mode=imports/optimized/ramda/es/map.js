import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _xfBase, a as _dispatchable} from "../../common/_xfBase-47118e3a.js";
import {_ as _map} from "../../common/_map-855e0a50.js";
import {_ as _reduce} from "../../common/_reduce-6079ab80.js";
import curryN2 from "./curryN.js";
import keys2 from "./keys.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_curryN-f6b52a3c.js";
import "../../common/_has-ef506577.js";
import "../../common/_isArguments-6faa657b.js";
var XMap = /* @__PURE__ */ function() {
  function XMap2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap2.prototype["@@transducer/init"] = _xfBase.init;
  XMap2.prototype["@@transducer/result"] = _xfBase.result;
  XMap2.prototype["@@transducer/step"] = function(result, input) {
    return this.xf["@@transducer/step"](result, this.f(input));
  };
  return XMap2;
}();
var _xmap = /* @__PURE__ */ _curry2(function _xmap2(f, xf) {
  return new XMap(f, xf);
});
var map = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["fantasy-land/map", "map"], _xmap, function map2(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case "[object Function]":
      return curryN2(functor.length, function() {
        return fn.call(this, functor.apply(this, arguments));
      });
    case "[object Object]":
      return _reduce(function(acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys2(functor));
    default:
      return _map(fn, functor);
  }
}));
export default map;
