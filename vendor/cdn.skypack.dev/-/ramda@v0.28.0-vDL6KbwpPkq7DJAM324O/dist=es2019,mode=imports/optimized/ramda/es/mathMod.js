import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _isInteger} from "../../common/_isInteger-6ed45b32.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var mathMod = /* @__PURE__ */ _curry2(function mathMod2(m, p) {
  if (!_isInteger(m)) {
    return NaN;
  }
  if (!_isInteger(p) || p < 1) {
    return NaN;
  }
  return (m % p + p) % p;
});
export default mathMod;
