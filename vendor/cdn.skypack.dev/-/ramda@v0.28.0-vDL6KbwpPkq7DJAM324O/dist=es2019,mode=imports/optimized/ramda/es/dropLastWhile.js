import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import {
  _ as _xfBase,
  a as _dispatchable,
} from "../../common/_xfBase-47118e3a.js";
import slice2 from "./slice.js";
import { _ as _reduce } from "../../common/_reduce-6079ab80.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_checkForMethod-9f9acae8.js";
import "../../common/_curry3-716aebc1.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_arity-fefc01f2.js";
function dropLastWhile(pred, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && pred(xs[idx])) {
    idx -= 1;
  }
  return slice2(0, idx + 1, xs);
}
var XDropLastWhile = /* @__PURE__ */ function () {
  function XDropLastWhile2(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile2.prototype["@@transducer/init"] = _xfBase.init;
  XDropLastWhile2.prototype["@@transducer/result"] = function (result) {
    this.retained = null;
    return this.xf["@@transducer/result"](result);
  };
  XDropLastWhile2.prototype["@@transducer/step"] = function (result, input) {
    return this.f(input)
      ? this.retain(result, input)
      : this.flush(result, input);
  };
  XDropLastWhile2.prototype.flush = function (result, input) {
    result = _reduce(this.xf["@@transducer/step"], result, this.retained);
    this.retained = [];
    return this.xf["@@transducer/step"](result, input);
  };
  XDropLastWhile2.prototype.retain = function (result, input) {
    this.retained.push(input);
    return result;
  };
  return XDropLastWhile2;
}();
var _xdropLastWhile = /* @__PURE__ */ _curry2(
  function _xdropLastWhile2(fn, xf) {
    return new XDropLastWhile(fn, xf);
  },
);
var dropLastWhile$1 = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], _xdropLastWhile, dropLastWhile),
);
export default dropLastWhile$1;
