import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import mergeDeepWithKey2 from "./mergeDeepWithKey.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry3-716aebc1.js";
import "../../common/_isObject-755da5cf.js";
import "./mergeWithKey.js";
import "../../common/_has-ef506577.js";
var mergeDeepLeft = /* @__PURE__ */ _curry2(function mergeDeepLeft2(lObj, rObj) {
  return mergeDeepWithKey2(function(k, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});
export default mergeDeepLeft;
