import { _ as _arity } from "../../common/_arity-fefc01f2.js";
import { _ as _curry1 } from "../../common/_curry1-a6784b40.js";
import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import { _ as _curryN } from "../../common/_curryN-f6b52a3c.js";
import "../../common/_isPlaceholder-69544913.js";
var curryN = /* @__PURE__ */ _curry2(function curryN2(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});
export default curryN;
