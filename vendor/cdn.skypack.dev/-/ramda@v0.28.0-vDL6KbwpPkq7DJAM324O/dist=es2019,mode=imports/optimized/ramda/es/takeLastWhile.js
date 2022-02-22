import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import slice2 from "./slice.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_checkForMethod-9f9acae8.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_curry3-716aebc1.js";
var takeLastWhile = /* @__PURE__ */ _curry2(function takeLastWhile2(fn, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && fn(xs[idx])) {
    idx -= 1;
  }
  return slice2(idx + 1, Infinity, xs);
});
export default takeLastWhile;
