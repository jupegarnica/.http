import {_ as _arity} from "../../common/_arity-fefc01f2.js";
import {_ as _concat} from "../../common/_concat-9dee354c.js";
import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var tryCatch = /* @__PURE__ */ _curry2(function _tryCatch(tryer, catcher) {
  return _arity(tryer.length, function() {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, _concat([e], arguments));
    }
  });
});
export default tryCatch;
