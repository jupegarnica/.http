import {_ as _curry1} from "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var type = /* @__PURE__ */ _curry1(function type2(val) {
  return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
});
export default type;
