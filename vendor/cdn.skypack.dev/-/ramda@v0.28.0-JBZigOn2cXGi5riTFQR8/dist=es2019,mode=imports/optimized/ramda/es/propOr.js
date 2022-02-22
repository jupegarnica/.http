import {_ as _curry3} from "../../common/_curry3-716aebc1.js";
import defaultTo2 from "./defaultTo.js";
import prop2 from "./prop.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_isInteger-6ed45b32.js";
import "./nth.js";
import "../../common/_isString-bd8a5e0f.js";
var propOr = /* @__PURE__ */ _curry3(function propOr2(val, p, obj) {
  return defaultTo2(val, prop2(p, obj));
});
export default propOr;
