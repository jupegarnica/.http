import { _ as _curry1 } from "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var fromPairs = /* @__PURE__ */ _curry1(function fromPairs2(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});
export default fromPairs;
