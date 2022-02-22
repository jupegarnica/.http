import {_ as _arity} from "../../common/_arity-fefc01f2.js";
import {_ as _curry1} from "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var once = /* @__PURE__ */ _curry1(function once2(fn) {
  var called = false;
  var result;
  return _arity(fn.length, function() {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});
export default once;
