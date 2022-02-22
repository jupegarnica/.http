import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import curryN2 from "./curryN.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_curryN-f6b52a3c.js";
var useWith = /* @__PURE__ */ _curry2(function useWith2(fn, transformers) {
  return curryN2(transformers.length, function () {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(
      this,
      args.concat(Array.prototype.slice.call(arguments, transformers.length)),
    );
  });
});
export default useWith;
