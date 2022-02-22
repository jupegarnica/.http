import { _ as _curry1 } from "../../common/_curry1-a6784b40.js";
import curryN2 from "./curryN.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_curryN-f6b52a3c.js";
var flip = /* @__PURE__ */ _curry1(function flip2(fn) {
  return curryN2(fn.length, function (a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});
export default flip;
