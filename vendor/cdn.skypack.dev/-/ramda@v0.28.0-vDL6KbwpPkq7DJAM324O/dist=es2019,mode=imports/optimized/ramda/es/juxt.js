import { _ as _curry1 } from "../../common/_curry1-a6784b40.js";
import converge2 from "./converge.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_map-855e0a50.js";
import "./curryN.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_curryN-f6b52a3c.js";
import "./max.js";
import "./pluck.js";
import "./map.js";
import "../../common/_xfBase-47118e3a.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_reduce-6079ab80.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "./keys.js";
import "../../common/_has-ef506577.js";
import "../../common/_isArguments-6faa657b.js";
import "./prop.js";
import "../../common/_isInteger-6ed45b32.js";
import "./nth.js";
import "./reduce.js";
import "../../common/_curry3-716aebc1.js";
var juxt = /* @__PURE__ */ _curry1(function juxt2(fns) {
  return converge2(function () {
    return Array.prototype.slice.call(arguments, 0);
  }, fns);
});
export default juxt;
