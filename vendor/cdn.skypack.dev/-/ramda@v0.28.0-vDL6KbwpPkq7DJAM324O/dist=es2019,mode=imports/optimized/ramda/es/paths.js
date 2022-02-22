import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _isInteger} from "../../common/_isInteger-6ed45b32.js";
import nth2 from "./nth.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isString-bd8a5e0f.js";
var paths = /* @__PURE__ */ _curry2(function paths2(pathsArray, obj) {
  return pathsArray.map(function(paths3) {
    var val = obj;
    var idx = 0;
    var p;
    while (idx < paths3.length) {
      if (val == null) {
        return;
      }
      p = paths3[idx];
      val = _isInteger(p) ? nth2(p, val) : val[p];
      idx += 1;
    }
    return val;
  });
});
export default paths;
