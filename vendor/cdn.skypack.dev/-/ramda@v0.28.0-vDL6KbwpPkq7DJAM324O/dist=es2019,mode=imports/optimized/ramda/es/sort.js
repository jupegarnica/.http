import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var sort = /* @__PURE__ */ _curry2(function sort2(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});
export default sort;
