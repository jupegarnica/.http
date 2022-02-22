import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import slice2 from "./slice.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_checkForMethod-9f9acae8.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_curry3-716aebc1.js";
var splitEvery = /* @__PURE__ */ _curry2(function splitEvery2(n, list) {
  if (n <= 0) {
    throw new Error("First argument to splitEvery must be a positive integer");
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(slice2(idx, idx += n, list));
  }
  return result;
});
export default splitEvery;
