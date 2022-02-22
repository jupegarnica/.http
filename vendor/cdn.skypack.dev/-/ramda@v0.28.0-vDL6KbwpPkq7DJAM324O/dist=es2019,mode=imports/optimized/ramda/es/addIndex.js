import { _ as _concat } from "../../common/_concat-9dee354c.js";
import { _ as _curry1 } from "../../common/_curry1-a6784b40.js";
import curryN2 from "./curryN.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_curryN-f6b52a3c.js";
var addIndex = /* @__PURE__ */ _curry1(function addIndex2(fn) {
  return curryN2(fn.length, function () {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function () {
      var result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});
export default addIndex;
