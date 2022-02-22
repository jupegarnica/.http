import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import curryN2 from "./curryN.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_curryN-f6b52a3c.js";
var uncurryN = /* @__PURE__ */ _curry2(function uncurryN2(depth, fn) {
  return curryN2(depth, function() {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === "function") {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});
export default uncurryN;
