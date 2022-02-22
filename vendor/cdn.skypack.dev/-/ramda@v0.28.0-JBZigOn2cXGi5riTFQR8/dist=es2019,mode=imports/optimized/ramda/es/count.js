import {_ as _reduce} from "../../common/_reduce-6079ab80.js";
import curry2 from "./curry.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_curry2-21fa898b.js";
import "./curryN.js";
import "../../common/_curryN-f6b52a3c.js";
var count = /* @__PURE__ */ curry2(function(pred, list) {
  return _reduce(function(a, e) {
    return pred(e) ? a + 1 : a;
  }, 0, list);
});
export default count;
