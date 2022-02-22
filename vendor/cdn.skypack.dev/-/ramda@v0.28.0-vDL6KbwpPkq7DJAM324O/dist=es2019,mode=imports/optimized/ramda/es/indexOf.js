import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import { _ as _indexOf } from "../../common/_indexOf-a6922268.js";
import { _ as _isArray } from "../../common/_isArray-3f7112bf.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "./equals.js";
import "../../common/_includesWith-ddfe560f.js";
import "../../common/_has-ef506577.js";
import "../../common/_objectIs-99c5251f.js";
import "./keys.js";
import "../../common/_isArguments-6faa657b.js";
import "./type.js";
var indexOf = /* @__PURE__ */ _curry2(function indexOf2(target, xs) {
  return typeof xs.indexOf === "function" && !_isArray(xs)
    ? xs.indexOf(target)
    : _indexOf(xs, target, 0);
});
export default indexOf;
