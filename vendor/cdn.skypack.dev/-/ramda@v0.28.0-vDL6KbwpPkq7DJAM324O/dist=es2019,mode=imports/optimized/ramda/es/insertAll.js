import { _ as _curry3 } from "../../common/_curry3-716aebc1.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
var insertAll = /* @__PURE__ */ _curry3(function insertAll2(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(
    Array.prototype.slice.call(list, 0, idx),
    elts,
    Array.prototype.slice.call(list, idx),
  );
});
export default insertAll;
