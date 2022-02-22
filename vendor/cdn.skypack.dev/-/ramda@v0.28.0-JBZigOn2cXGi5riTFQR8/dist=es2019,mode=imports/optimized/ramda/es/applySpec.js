import { _ as _curry1 } from "../../common/_curry1-a6784b40.js";
import { _ as _isArray } from "../../common/_isArray-3f7112bf.js";
import apply2 from "./apply.js";
import curryN2 from "./curryN.js";
import max2 from "./max.js";
import pluck2 from "./pluck.js";
import reduce2 from "./reduce.js";
import keys2 from "./keys.js";
import values2 from "./values.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_curryN-f6b52a3c.js";
import "./map.js";
import "../../common/_xfBase-47118e3a.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_map-855e0a50.js";
import "../../common/_reduce-6079ab80.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "./prop.js";
import "../../common/_isInteger-6ed45b32.js";
import "./nth.js";
import "../../common/_curry3-716aebc1.js";
import "../../common/_has-ef506577.js";
import "../../common/_isArguments-6faa657b.js";
function mapValues(fn, obj) {
  return _isArray(obj) ? obj.map(fn) : keys2(obj).reduce(function (acc, key) {
    acc[key] = fn(obj[key]);
    return acc;
  }, {});
}
var applySpec = /* @__PURE__ */ _curry1(function applySpec2(spec) {
  spec = mapValues(function (v) {
    return typeof v == "function" ? v : applySpec2(v);
  }, spec);
  return curryN2(
    reduce2(max2, 0, pluck2("length", values2(spec))),
    function () {
      var args = arguments;
      return mapValues(function (f) {
        return apply2(f, args);
      }, spec);
    },
  );
});
export default applySpec;
