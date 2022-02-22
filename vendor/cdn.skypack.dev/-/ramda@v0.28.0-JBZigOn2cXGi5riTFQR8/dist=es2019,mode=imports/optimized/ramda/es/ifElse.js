import {_ as _curry3} from "../../common/_curry3-716aebc1.js";
import curryN2 from "./curryN.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_curryN-f6b52a3c.js";
var ifElse = /* @__PURE__ */ _curry3(function ifElse2(condition, onTrue, onFalse) {
  return curryN2(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});
export default ifElse;
