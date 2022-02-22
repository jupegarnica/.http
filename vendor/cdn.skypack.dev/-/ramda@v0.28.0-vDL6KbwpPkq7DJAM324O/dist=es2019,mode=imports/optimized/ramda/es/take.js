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
var XTake = /* @__PURE__ */ function () {
  function XTake2(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake2.prototype["@@transducer/init"] = _xfBase.init;
  XTake2.prototype["@@transducer/result"] = _xfBase.result;
  XTake2.prototype["@@transducer/step"] = function (result, input) {
    this.i += 1;
    var ret = this.n === 0
      ? result
      : this.xf["@@transducer/step"](result, input);
    return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
  };
  return XTake2;
}();
var _xtake = /* @__PURE__ */ _curry2(function _xtake2(n, xf) {
  return new XTake(n, xf);
});
var take = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["take"], _xtake, function take2(n, xs) {
    return slice2(0, n < 0 ? Infinity : n, xs);
  }),
);
export default take;
