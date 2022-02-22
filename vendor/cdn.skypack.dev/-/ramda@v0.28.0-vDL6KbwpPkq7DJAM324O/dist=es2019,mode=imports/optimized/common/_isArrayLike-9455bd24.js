import { _ as _curry1 } from "./_curry1-a6784b40.js";
import { _ as _isArray } from "./_isArray-3f7112bf.js";
import { _ as _isString } from "./_isString-bd8a5e0f.js";
var _isArrayLike = /* @__PURE__ */ _curry1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== "object") {
    return false;
  }
  if (_isString(x)) {
    return false;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
export { _isArrayLike as _ };
export default null;
