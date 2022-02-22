import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import {
  _ as _xfBase,
  a as _dispatchable,
} from "../../common/_xfBase-47118e3a.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
var XFindLast = /* @__PURE__ */ function () {
  function XFindLast2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast2.prototype["@@transducer/init"] = _xfBase.init;
  XFindLast2.prototype["@@transducer/result"] = function (result) {
    return this.xf["@@transducer/result"](
      this.xf["@@transducer/step"](result, this.last),
    );
  };
  XFindLast2.prototype["@@transducer/step"] = function (result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };
  return XFindLast2;
}();
var _xfindLast = /* @__PURE__ */ _curry2(function _xfindLast2(f, xf) {
  return new XFindLast(f, xf);
});
var findLast = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], _xfindLast, function findLast2(fn, list) {
    var idx = list.length - 1;
    while (idx >= 0) {
      if (fn(list[idx])) {
        return list[idx];
      }
      idx -= 1;
    }
  }),
);
export default findLast;
