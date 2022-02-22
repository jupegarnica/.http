import { _ as _curryN } from "../../common/_curryN-f6b52a3c.js";
import { _ as _reduce } from "../../common/_reduce-6079ab80.js";
import { _ as _reduced } from "../../common/_reduced-43259614.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_curry2-21fa898b.js";
var reduceWhile = /* @__PURE__ */ _curryN(
  4,
  [],
  function _reduceWhile(pred, fn, a, list) {
    return _reduce(
      function (acc, x) {
        return pred(acc, x) ? fn(acc, x) : _reduced(acc);
      },
      a,
      list,
    );
  },
);
export default reduceWhile;
