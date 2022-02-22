import {_ as _arity} from "../../common/_arity-fefc01f2.js";
import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _has} from "../../common/_has-ef506577.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var memoizeWith = /* @__PURE__ */ _curry2(function memoizeWith2(mFn, fn) {
  var cache = {};
  return _arity(fn.length, function() {
    var key = mFn.apply(this, arguments);
    if (!_has(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});
export default memoizeWith;
