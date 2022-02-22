import {_ as _includesWith} from "../../common/_includesWith-ddfe560f.js";
import {_ as _curry3} from "../../common/_curry3-716aebc1.js";
import {_ as _filter} from "../../common/_filter-40fab1d6.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
var innerJoin = /* @__PURE__ */ _curry3(function innerJoin2(pred, xs, ys) {
  return _filter(function(x) {
    return _includesWith(pred, x, ys);
  }, xs);
});
export default innerJoin;
