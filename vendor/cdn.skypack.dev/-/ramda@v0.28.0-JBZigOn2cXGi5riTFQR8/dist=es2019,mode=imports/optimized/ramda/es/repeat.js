import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import always2 from "./always.js";
import times2 from "./times.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var repeat = /* @__PURE__ */ _curry2(function repeat2(value, n) {
  return times2(always2(value), n);
});
export default repeat;
