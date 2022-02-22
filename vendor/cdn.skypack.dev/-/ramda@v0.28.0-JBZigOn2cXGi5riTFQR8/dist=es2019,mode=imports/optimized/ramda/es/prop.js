import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _isInteger} from "../../common/_isInteger-6ed45b32.js";
import nth2 from "./nth.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isString-bd8a5e0f.js";
var prop = /* @__PURE__ */ _curry2(function prop2(p, obj) {
  if (obj == null) {
    return;
  }
  return _isInteger(p) ? nth2(p, obj) : obj[p];
});
export default prop;
