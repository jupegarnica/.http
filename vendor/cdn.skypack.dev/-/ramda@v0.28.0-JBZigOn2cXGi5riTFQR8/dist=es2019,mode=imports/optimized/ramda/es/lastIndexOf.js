import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import { _ as _isArray } from "../../common/_isArray-3f7112bf.js";
import equals2 from "./equals.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_includesWith-ddfe560f.js";
import "../../common/_has-ef506577.js";
import "../../common/_objectIs-99c5251f.js";
import "./keys.js";
import "../../common/_isArguments-6faa657b.js";
import "./type.js";
var lastIndexOf = /* @__PURE__ */ _curry2(function lastIndexOf2(target, xs) {
  if (typeof xs.lastIndexOf === "function" && !_isArray(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (equals2(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});
export default lastIndexOf;
