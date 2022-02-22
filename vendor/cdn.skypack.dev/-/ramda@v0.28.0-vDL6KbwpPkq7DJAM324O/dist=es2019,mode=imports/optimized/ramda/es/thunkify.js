import curryN2 from "./curryN.js";
import {_ as _curry1} from "../../common/_curry1-a6784b40.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curryN-f6b52a3c.js";
var thunkify = /* @__PURE__ */ _curry1(function thunkify2(fn) {
  return curryN2(fn.length, function createThunk() {
    var fnArgs = arguments;
    return function invokeThunk() {
      return fn.apply(this, fnArgs);
    };
  });
});
export default thunkify;
