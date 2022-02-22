import { _ as _curry1 } from "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var keysIn = /* @__PURE__ */ _curry1(function keysIn2(obj) {
  var prop;
  var ks = [];
  for (prop in obj) {
    ks[ks.length] = prop;
  }
  return ks;
});
export default keysIn;
