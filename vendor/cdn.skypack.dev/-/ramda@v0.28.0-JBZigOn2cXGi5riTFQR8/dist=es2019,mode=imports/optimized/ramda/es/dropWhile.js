import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import {
  _ as _xfBase,
  a as _dispatchable,
} from "../../common/_xfBase-47118e3a.js";
import slice2 from "./slice.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_checkForMethod-9f9acae8.js";
import "../../common/_curry3-716aebc1.js";
var XDropWhile = /* @__PURE__ */ function () {
  function XDropWhile2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile2.prototype["@@transducer/init"] = _xfBase.init;
  XDropWhile2.prototype["@@transducer/result"] = _xfBase.result;
  XDropWhile2.prototype["@@transducer/step"] = function (result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf["@@transducer/step"](result, input);
  };
  return XDropWhile2;
}();
var _xdropWhile = /* @__PURE__ */ _curry2(function _xdropWhile2(f, xf) {
  return new XDropWhile(f, xf);
});
var dropWhile = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(
    ["dropWhile"],
    _xdropWhile,
    function dropWhile2(pred, xs) {
      var idx = 0;
      var len = xs.length;
      while (idx < len && pred(xs[idx])) {
        idx += 1;
      }
      return slice2(idx, Infinity, xs);
    },
  ),
);
export default dropWhile;
