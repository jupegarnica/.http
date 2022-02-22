import {_ as _reduce, a as _xwrap} from "../../common/_reduce-6079ab80.js";
import curryN2 from "./curryN.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_curryN-f6b52a3c.js";
var transduce = /* @__PURE__ */ curryN2(4, function transduce2(xf, fn, acc, list) {
  return _reduce(xf(typeof fn === "function" ? _xwrap(fn) : fn), acc, list);
});
export default transduce;
