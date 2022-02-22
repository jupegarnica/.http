import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import isNil2 from "./isNil.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var hasIn = /* @__PURE__ */ _curry2(function hasIn2(prop, obj) {
  if (isNil2(obj)) {
    return false;
  }
  return prop in obj;
});
export default hasIn;
