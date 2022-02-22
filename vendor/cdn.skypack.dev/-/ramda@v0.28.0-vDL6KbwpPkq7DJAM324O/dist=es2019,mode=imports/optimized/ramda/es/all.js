import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import {
  _ as _xfBase,
  a as _dispatchable,
} from "../../common/_xfBase-47118e3a.js";
import { _ as _reduced } from "../../common/_reduced-43259614.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
var XAll = /* @__PURE__ */ function () {
  function XAll2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll2.prototype["@@transducer/init"] = _xfBase.init;
  XAll2.prototype["@@transducer/result"] = function (result) {
    if (this.all) {
      result = this.xf["@@transducer/step"](result, true);
    }
    return this.xf["@@transducer/result"](result);
  };
  XAll2.prototype["@@transducer/step"] = function (result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = _reduced(this.xf["@@transducer/step"](result, false));
    }
    return result;
  };
  return XAll2;
}();
var _xall = /* @__PURE__ */ _curry2(function _xall2(f, xf) {
  return new XAll(f, xf);
});
var all = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["all"], _xall, function all2(fn, list) {
    var idx = 0;
    while (idx < list.length) {
      if (!fn(list[idx])) {
        return false;
      }
      idx += 1;
    }
    return true;
  }),
);
export default all;
