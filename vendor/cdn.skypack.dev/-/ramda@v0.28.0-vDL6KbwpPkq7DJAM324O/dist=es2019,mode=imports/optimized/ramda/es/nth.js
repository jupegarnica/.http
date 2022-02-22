import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import { _ as _isString } from "../../common/_isString-bd8a5e0f.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var nth = /* @__PURE__ */ _curry2(function nth2(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});
export default nth;
