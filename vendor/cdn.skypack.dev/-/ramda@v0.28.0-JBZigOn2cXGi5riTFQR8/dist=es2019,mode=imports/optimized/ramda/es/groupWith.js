import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var groupWith = /* @__PURE__ */ _curry2(function (fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});
export default groupWith;
