import {_ as _curry3} from "../../common/_curry3-716aebc1.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
var unless = /* @__PURE__ */ _curry3(function unless2(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});
export default unless;
