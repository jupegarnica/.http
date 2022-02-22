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
var XAny = /* @__PURE__ */ function () {
  function XAny2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny2.prototype["@@transducer/init"] = _xfBase.init;
  XAny2.prototype["@@transducer/result"] = function (result) {
    if (!this.any) {
      result = this.xf["@@transducer/step"](result, false);
    }
    return this.xf["@@transducer/result"](result);
  };
  XAny2.prototype["@@transducer/step"] = function (result, input) {
    if (this.f(input)) {
      this.any = true;
      result = _reduced(this.xf["@@transducer/step"](result, true));
    }
    return result;
  };
  return XAny2;
}();
var _xany = /* @__PURE__ */ _curry2(function _xany2(f, xf) {
  return new XAny(f, xf);
});
var any = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["any"], _xany, function any2(fn, list) {
    var idx = 0;
    while (idx < list.length) {
      if (fn(list[idx])) {
        return true;
      }
      idx += 1;
    }
    return false;
  }),
);
export default any;
