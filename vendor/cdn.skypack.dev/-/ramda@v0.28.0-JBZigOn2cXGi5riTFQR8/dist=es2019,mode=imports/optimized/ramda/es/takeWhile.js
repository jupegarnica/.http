import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import {
  _ as _xfBase,
  a as _dispatchable,
} from "../../common/_xfBase-47118e3a.js";
import { _ as _reduced } from "../../common/_reduced-43259614.js";
import slice2 from "./slice.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_checkForMethod-9f9acae8.js";
import "../../common/_curry3-716aebc1.js";
var XTakeWhile = /* @__PURE__ */ function () {
  function XTakeWhile2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile2.prototype["@@transducer/init"] = _xfBase.init;
  XTakeWhile2.prototype["@@transducer/result"] = _xfBase.result;
  XTakeWhile2.prototype["@@transducer/step"] = function (result, input) {
    return this.f(input)
      ? this.xf["@@transducer/step"](result, input)
      : _reduced(result);
  };
  return XTakeWhile2;
}();
var _xtakeWhile = /* @__PURE__ */ _curry2(function _xtakeWhile2(f, xf) {
  return new XTakeWhile(f, xf);
});
var takeWhile = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(
    ["takeWhile"],
    _xtakeWhile,
    function takeWhile2(fn, xs) {
      var idx = 0;
      var len = xs.length;
      while (idx < len && fn(xs[idx])) {
        idx += 1;
      }
      return slice2(0, idx, xs);
    },
  ),
);
export default takeWhile;
