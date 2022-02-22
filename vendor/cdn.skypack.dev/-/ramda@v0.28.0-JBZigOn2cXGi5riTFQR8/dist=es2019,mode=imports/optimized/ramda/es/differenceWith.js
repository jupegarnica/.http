import {_ as _includesWith} from "../../common/_includesWith-ddfe560f.js";
import {_ as _curry3} from "../../common/_curry3-716aebc1.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
var differenceWith = /* @__PURE__ */ _curry3(function differenceWith2(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_includesWith(pred, first[idx], second) && !_includesWith(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});
export default differenceWith;
