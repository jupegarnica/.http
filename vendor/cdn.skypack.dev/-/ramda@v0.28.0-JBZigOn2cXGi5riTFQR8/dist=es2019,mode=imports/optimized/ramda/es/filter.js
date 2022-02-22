import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import {
  _ as _xfBase,
  a as _dispatchable,
} from "../../common/_xfBase-47118e3a.js";
import { _ as _filter } from "../../common/_filter-40fab1d6.js";
import { _ as _isObject } from "../../common/_isObject-755da5cf.js";
import { _ as _reduce } from "../../common/_reduce-6079ab80.js";
import keys2 from "./keys.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_has-ef506577.js";
import "../../common/_isArguments-6faa657b.js";
var XFilter = /* @__PURE__ */ function () {
  function XFilter2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter2.prototype["@@transducer/init"] = _xfBase.init;
  XFilter2.prototype["@@transducer/result"] = _xfBase.result;
  XFilter2.prototype["@@transducer/step"] = function (result, input) {
    return this.f(input) ? this.xf["@@transducer/step"](result, input) : result;
  };
  return XFilter2;
}();
var _xfilter = /* @__PURE__ */ _curry2(function _xfilter2(f, xf) {
  return new XFilter(f, xf);
});
var filter = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(
    ["fantasy-land/filter", "filter"],
    _xfilter,
    function (pred, filterable) {
      return _isObject(filterable)
        ? _reduce(
          function (acc, key) {
            if (pred(filterable[key])) {
              acc[key] = filterable[key];
            }
            return acc;
          },
          {},
          keys2(filterable),
        )
        : _filter(pred, filterable);
    },
  ),
);
export default filter;
