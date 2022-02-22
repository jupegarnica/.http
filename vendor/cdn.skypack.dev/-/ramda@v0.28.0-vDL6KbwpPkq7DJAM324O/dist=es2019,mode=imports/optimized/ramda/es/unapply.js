import {_ as _curry1} from "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var unapply = /* @__PURE__ */ _curry1(function unapply2(fn) {
  return function() {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});
export default unapply;
