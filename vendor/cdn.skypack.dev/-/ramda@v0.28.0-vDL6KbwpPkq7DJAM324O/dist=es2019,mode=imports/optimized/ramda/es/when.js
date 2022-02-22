import { _ as _curry3 } from "../../common/_curry3-716aebc1.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
var when = /* @__PURE__ */ _curry3(function when2(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});
export default when;
