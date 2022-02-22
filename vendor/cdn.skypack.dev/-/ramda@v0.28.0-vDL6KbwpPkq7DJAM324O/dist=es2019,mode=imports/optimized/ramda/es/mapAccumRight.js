import { _ as _curry3 } from "../../common/_curry3-716aebc1.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
var mapAccumRight = /* @__PURE__ */ _curry3(
  function mapAccumRight2(fn, acc, list) {
    var idx = list.length - 1;
    var result = [];
    var tuple = [acc];
    while (idx >= 0) {
      tuple = fn(tuple[0], list[idx]);
      result[idx] = tuple[1];
      idx -= 1;
    }
    return [tuple[0], result];
  },
);
export default mapAccumRight;
