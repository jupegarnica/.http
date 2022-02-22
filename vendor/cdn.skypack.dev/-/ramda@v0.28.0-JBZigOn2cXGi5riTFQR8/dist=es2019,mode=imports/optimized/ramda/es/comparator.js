import { _ as _curry1 } from "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var comparator = /* @__PURE__ */ _curry1(function comparator2(pred) {
  return function (a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});
export default comparator;
