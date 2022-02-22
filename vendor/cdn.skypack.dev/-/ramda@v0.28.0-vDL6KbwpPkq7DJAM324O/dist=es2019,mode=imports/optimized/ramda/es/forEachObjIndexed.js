import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import keys2 from "./keys.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_has-ef506577.js";
import "../../common/_isArguments-6faa657b.js";
var forEachObjIndexed = /* @__PURE__ */ _curry2(
  function forEachObjIndexed2(fn, obj) {
    var keyList = keys2(obj);
    var idx = 0;
    while (idx < keyList.length) {
      var key = keyList[idx];
      fn(obj[key], key, obj);
      idx += 1;
    }
    return obj;
  },
);
export default forEachObjIndexed;
