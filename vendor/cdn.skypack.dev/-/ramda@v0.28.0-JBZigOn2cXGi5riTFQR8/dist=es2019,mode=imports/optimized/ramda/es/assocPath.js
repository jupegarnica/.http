import { _ as _curry3 } from "../../common/_curry3-716aebc1.js";
import { _ as _has } from "../../common/_has-ef506577.js";
import { _ as _isInteger } from "../../common/_isInteger-6ed45b32.js";
import { _ as _assoc } from "../../common/_assoc-b7e88c54.js";
import isNil2 from "./isNil.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_isArray-3f7112bf.js";
var assocPath = /* @__PURE__ */ _curry3(function assocPath2(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = !isNil2(obj) && _has(idx, obj)
      ? obj[idx]
      : _isInteger(path[1])
      ? []
      : {};
    val = assocPath2(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  return _assoc(idx, val, obj);
});
export default assocPath;
