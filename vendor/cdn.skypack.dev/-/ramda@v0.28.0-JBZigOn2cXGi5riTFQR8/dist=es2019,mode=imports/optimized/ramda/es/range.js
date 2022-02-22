import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _isNumber} from "../../common/_isNumber-30ee9efb.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var range = /* @__PURE__ */ _curry2(function range2(from, to) {
  if (!(_isNumber(from) && _isNumber(to))) {
    throw new TypeError("Both arguments to range must be numbers");
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});
export default range;
