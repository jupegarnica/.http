import { _ as _curry1 } from "../../common/_curry1-a6784b40.js";
import { _ as _isNumber } from "../../common/_isNumber-30ee9efb.js";
import "../../common/_isPlaceholder-69544913.js";
var length = /* @__PURE__ */ _curry1(function length2(list) {
  return list != null && _isNumber(list.length) ? list.length : NaN;
});
export default length;
