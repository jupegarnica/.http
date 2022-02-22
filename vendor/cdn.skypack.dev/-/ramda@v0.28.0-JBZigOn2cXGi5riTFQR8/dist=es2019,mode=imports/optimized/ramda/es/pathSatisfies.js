import { _ as _curry3 } from "../../common/_curry3-716aebc1.js";
import path2 from "./path.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "./paths.js";
import "../../common/_isInteger-6ed45b32.js";
import "./nth.js";
import "../../common/_isString-bd8a5e0f.js";
var pathSatisfies = /* @__PURE__ */ _curry3(
  function pathSatisfies2(pred, propPath, obj) {
    return pred(path2(propPath, obj));
  },
);
export default pathSatisfies;
