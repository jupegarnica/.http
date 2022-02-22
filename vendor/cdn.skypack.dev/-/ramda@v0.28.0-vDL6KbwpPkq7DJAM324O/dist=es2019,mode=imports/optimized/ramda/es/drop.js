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
var XDrop = /* @__PURE__ */ function () {
  function XDrop2(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop2.prototype["@@transducer/init"] = _xfBase.init;
  XDrop2.prototype["@@transducer/result"] = _xfBase.result;
  XDrop2.prototype["@@transducer/step"] = function (result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf["@@transducer/step"](result, input);
  };
  return XDrop2;
}();
var _xdrop = /* @__PURE__ */ _curry2(function _xdrop2(n, xf) {
  return new XDrop(n, xf);
});
var drop = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["drop"], _xdrop, function drop2(n, xs) {
    return slice2(Math.max(0, n), Infinity, xs);
  }),
);
export default drop;
