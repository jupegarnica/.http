import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import { _ as _has } from "../../common/_has-ef506577.js";
import isNil2 from "./isNil.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var hasPath = /* @__PURE__ */ _curry2(function hasPath2(_path, obj) {
  if (_path.length === 0 || isNil2(obj)) {
    return false;
  }
  var val = obj;
  var idx = 0;
  while (idx < _path.length) {
    if (!isNil2(val) && _has(_path[idx], val)) {
      val = val[_path[idx]];
      idx += 1;
    } else {
      return false;
    }
  }
  return true;
});
export default hasPath;
