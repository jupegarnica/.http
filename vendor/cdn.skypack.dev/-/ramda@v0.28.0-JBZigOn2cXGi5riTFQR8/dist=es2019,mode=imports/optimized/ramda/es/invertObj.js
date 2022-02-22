import { _ as _curry1 } from "../../common/_curry1-a6784b40.js";
import keys2 from "./keys.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_has-ef506577.js";
import "../../common/_isArguments-6faa657b.js";
var invertObj = /* @__PURE__ */ _curry1(function invertObj2(obj) {
  var props = keys2(obj);
  var len = props.length;
  var idx = 0;
  var out = {};
  while (idx < len) {
    var key = props[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});
export default invertObj;
