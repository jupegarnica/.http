import { _ as _checkForMethod } from "../../common/_checkForMethod-9f9acae8.js";
import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var intersperse = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _checkForMethod(
    "intersperse",
    function intersperse2(separator, list) {
      var out = [];
      var idx = 0;
      var length = list.length;
      while (idx < length) {
        if (idx === length - 1) {
          out.push(list[idx]);
        } else {
          out.push(list[idx], separator);
        }
        idx += 1;
      }
      return out;
    },
  ),
);
export default intersperse;
