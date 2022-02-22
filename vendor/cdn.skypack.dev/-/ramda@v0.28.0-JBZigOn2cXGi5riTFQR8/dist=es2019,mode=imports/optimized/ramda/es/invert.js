import {_ as _curry1} from "../../common/_curry1-a6784b40.js";
import {_ as _has} from "../../common/_has-ef506577.js";
import keys2 from "./keys.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArguments-6faa657b.js";
var invert = /* @__PURE__ */ _curry1(function invert2(obj) {
  var props = keys2(obj);
  var len = props.length;
  var idx = 0;
  var out = {};
  while (idx < len) {
    var key = props[idx];
    var val = obj[key];
    var list = _has(val, out) ? out[val] : out[val] = [];
    list[list.length] = key;
    idx += 1;
  }
  return out;
});
export default invert;
