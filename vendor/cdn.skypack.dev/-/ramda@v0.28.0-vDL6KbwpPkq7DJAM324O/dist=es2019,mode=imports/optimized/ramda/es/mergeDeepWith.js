import {_ as _curry3} from "../../common/_curry3-716aebc1.js";
import mergeDeepWithKey2 from "./mergeDeepWithKey.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_isObject-755da5cf.js";
import "./mergeWithKey.js";
import "../../common/_has-ef506577.js";
var mergeDeepWith = /* @__PURE__ */ _curry3(function mergeDeepWith2(fn, lObj, rObj) {
  return mergeDeepWithKey2(function(k, lVal, rVal) {
    return fn(lVal, rVal);
  }, lObj, rObj);
});
export default mergeDeepWith;
