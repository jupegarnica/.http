import { _ as _curry1 } from "../../common/_curry1-a6784b40.js";
import mean2 from "./mean.js";
import "../../common/_isPlaceholder-69544913.js";
import "./sum.js";
import "./add.js";
import "../../common/_curry2-21fa898b.js";
import "./reduce.js";
import "../../common/_curry3-716aebc1.js";
import "../../common/_reduce-6079ab80.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_arity-fefc01f2.js";
var median = /* @__PURE__ */ _curry1(function median2(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return mean2(
    Array.prototype.slice.call(list, 0).sort(function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }).slice(idx, idx + width),
  );
});
export default median;
