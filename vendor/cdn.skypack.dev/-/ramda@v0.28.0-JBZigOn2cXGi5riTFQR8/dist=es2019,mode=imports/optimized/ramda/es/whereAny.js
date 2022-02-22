import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import { _ as _has } from "../../common/_has-ef506577.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var whereAny = /* @__PURE__ */ _curry2(function whereAny2(spec, testObj) {
  for (var prop in spec) {
    if (_has(prop, spec) && spec[prop](testObj[prop])) {
      return true;
    }
  }
  return false;
});
export default whereAny;
