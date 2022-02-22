import { _ as _clone } from "../../common/_clone-7429370f.js";
import { _ as _curry1 } from "../../common/_curry1-a6784b40.js";
import "../../common/_cloneRegExp-a38a2fe4.js";
import "./type.js";
import "../../common/_isPlaceholder-69544913.js";
var clone = /* @__PURE__ */ _curry1(function clone2(value) {
  return value != null && typeof value.clone === "function"
    ? value.clone()
    : _clone(value, [], [], true);
});
export default clone;
