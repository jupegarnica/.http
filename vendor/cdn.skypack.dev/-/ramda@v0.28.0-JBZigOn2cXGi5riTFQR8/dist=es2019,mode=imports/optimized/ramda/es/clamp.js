import { _ as _curry3 } from "../../common/_curry3-716aebc1.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
var clamp = /* @__PURE__ */ _curry3(function clamp2(min, max, value) {
  if (min > max) {
    throw new Error(
      "min must not be greater than max in clamp(min, max, value)",
    );
  }
  return value < min ? min : value > max ? max : value;
});
export default clamp;
