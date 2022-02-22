import { _ as _curry1 } from "../../common/_curry1-a6784b40.js";
import keys2 from "./keys.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_has-ef506577.js";
import "../../common/_isArguments-6faa657b.js";
var values = /* @__PURE__ */ _curry1(function values2(obj) {
  var props = keys2(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});
export default values;
