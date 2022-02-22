import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var sortBy = /* @__PURE__ */ _curry2(function sortBy2(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});
export default sortBy;
