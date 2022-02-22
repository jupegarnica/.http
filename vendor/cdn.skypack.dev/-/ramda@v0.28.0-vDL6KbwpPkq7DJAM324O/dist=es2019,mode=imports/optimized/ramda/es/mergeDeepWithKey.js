import {_ as _curry3} from "../../common/_curry3-716aebc1.js";
import {_ as _isObject} from "../../common/_isObject-755da5cf.js";
import mergeWithKey2 from "./mergeWithKey.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_has-ef506577.js";
var mergeDeepWithKey = /* @__PURE__ */ _curry3(function mergeDeepWithKey2(fn, lObj, rObj) {
  return mergeWithKey2(function(k, lVal, rVal) {
    if (_isObject(lVal) && _isObject(rVal)) {
      return mergeDeepWithKey2(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});
export default mergeDeepWithKey;
