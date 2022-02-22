import {_ as _curry1} from "../../common/_curry1-a6784b40.js";
import {_ as _isString} from "../../common/_isString-bd8a5e0f.js";
import "../../common/_isPlaceholder-69544913.js";
var reverse = /* @__PURE__ */ _curry1(function reverse2(list) {
  return _isString(list) ? list.split("").reverse().join("") : Array.prototype.slice.call(list, 0).reverse();
});
export default reverse;
