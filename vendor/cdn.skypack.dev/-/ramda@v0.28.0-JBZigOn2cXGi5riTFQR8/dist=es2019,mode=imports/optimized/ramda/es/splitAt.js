import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import length2 from "./length.js";
import slice2 from "./slice.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isNumber-30ee9efb.js";
import "../../common/_checkForMethod-9f9acae8.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_curry3-716aebc1.js";
var splitAt = /* @__PURE__ */ _curry2(function splitAt2(index, array) {
  return [slice2(0, index, array), slice2(index, length2(array), array)];
});
export default splitAt;
