import { _ as _curry1 } from "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var toPairsIn = /* @__PURE__ */ _curry1(function toPairsIn2(obj) {
  var pairs = [];
  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }
  return pairs;
});
export default toPairsIn;
