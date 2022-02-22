import {_ as _curry3} from "../../common/_curry3-716aebc1.js";
import always2 from "./always.js";
import over2 from "./over.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
var set = /* @__PURE__ */ _curry3(function set2(lens, v, x) {
  return over2(lens, always2(v), x);
});
export default set;
