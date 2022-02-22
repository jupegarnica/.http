import {_ as _curry3} from "../../common/_curry3-716aebc1.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
var maxBy = /* @__PURE__ */ _curry3(function maxBy2(f, a, b) {
  return f(b) > f(a) ? b : a;
});
export default maxBy;
