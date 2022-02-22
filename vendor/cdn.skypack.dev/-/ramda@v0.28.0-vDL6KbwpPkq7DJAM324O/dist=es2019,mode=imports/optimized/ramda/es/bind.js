import { _ as _arity } from "../../common/_arity-fefc01f2.js";
import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var bind = /* @__PURE__ */ _curry2(function bind2(fn, thisObj) {
  return _arity(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});
export default bind;
