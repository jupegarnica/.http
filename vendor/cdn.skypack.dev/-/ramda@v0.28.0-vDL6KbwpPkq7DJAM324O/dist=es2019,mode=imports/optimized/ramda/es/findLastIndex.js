import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import {
  _ as _xfBase,
  a as _dispatchable,
} from "../../common/_xfBase-47118e3a.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
var XFindLastIndex = /* @__PURE__ */ function () {
  function XFindLastIndex2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex2.prototype["@@transducer/init"] = _xfBase.init;
  XFindLastIndex2.prototype["@@transducer/result"] = function (result) {
    return this.xf["@@transducer/result"](
      this.xf["@@transducer/step"](result, this.lastIdx),
    );
  };
  XFindLastIndex2.prototype["@@transducer/step"] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };
  return XFindLastIndex2;
}();
var _xfindLastIndex = /* @__PURE__ */ _curry2(function _xfindLastIndex2(f, xf) {
  return new XFindLastIndex(f, xf);
});
var findLastIndex = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(
    [],
    _xfindLastIndex,
    function findLastIndex2(fn, list) {
      var idx = list.length - 1;
      while (idx >= 0) {
        if (fn(list[idx])) {
          return idx;
        }
        idx -= 1;
      }
      return -1;
    },
  ),
);
export default findLastIndex;
