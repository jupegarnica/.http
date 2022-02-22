import { _ as _curry3 } from "../../common/_curry3-716aebc1.js";
import mergeWithKey2 from "./mergeWithKey.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_has-ef506577.js";
var mergeWith = /* @__PURE__ */ _curry3(function mergeWith2(fn, l, r) {
  return mergeWithKey2(
    function (_, _l, _r) {
      return fn(_l, _r);
    },
    l,
    r,
  );
});
export default mergeWith;
