import {_ as _checkForMethod} from "../../common/_checkForMethod-9f9acae8.js";
import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var forEach = /* @__PURE__ */ _curry2(/* @__PURE__ */ _checkForMethod("forEach", function forEach2(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));
export default forEach;
