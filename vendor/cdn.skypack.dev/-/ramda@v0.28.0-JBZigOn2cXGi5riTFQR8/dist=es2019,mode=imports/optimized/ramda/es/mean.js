import {_ as _curry1} from "../../common/_curry1-a6784b40.js";
import sum2 from "./sum.js";
import "../../common/_isPlaceholder-69544913.js";
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
var mean = /* @__PURE__ */ _curry1(function mean2(list) {
  return sum2(list) / list.length;
});
export default mean;
