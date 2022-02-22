import {_ as _checkForMethod} from "../../common/_checkForMethod-9f9acae8.js";
import {_ as _curry3} from "../../common/_curry3-716aebc1.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
var slice = /* @__PURE__ */ _curry3(/* @__PURE__ */ _checkForMethod("slice", function slice2(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));
export default slice;
