import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import path2 from "./path.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "./paths.js";
import "../../common/_isInteger-6ed45b32.js";
import "./nth.js";
import "../../common/_isString-bd8a5e0f.js";
var props = /* @__PURE__ */ _curry2(function props2(ps, obj) {
  return ps.map(function(p) {
    return path2([p], obj);
  });
});
export default props;
