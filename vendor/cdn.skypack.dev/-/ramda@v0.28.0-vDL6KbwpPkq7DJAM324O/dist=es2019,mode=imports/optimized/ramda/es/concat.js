import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _isArray} from "../../common/_isArray-3f7112bf.js";
import {_ as _isFunction} from "../../common/_isFunction-f2ef089d.js";
import {_ as _isString} from "../../common/_isString-bd8a5e0f.js";
import toString2 from "./toString.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_toString-2b74d5dd.js";
import "../../common/_includes-6b736d1d.js";
import "../../common/_indexOf-a6922268.js";
import "./equals.js";
import "../../common/_includesWith-ddfe560f.js";
import "../../common/_has-ef506577.js";
import "../../common/_objectIs-99c5251f.js";
import "./keys.js";
import "../../common/_isArguments-6faa657b.js";
import "./type.js";
import "../../common/_map-855e0a50.js";
import "./reject.js";
import "../../common/_complement-ae234b25.js";
import "./filter.js";
import "../../common/_xfBase-47118e3a.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_filter-40fab1d6.js";
import "../../common/_isObject-755da5cf.js";
import "../../common/_reduce-6079ab80.js";
import "../../common/_isArrayLike-9455bd24.js";
import "./bind.js";
import "../../common/_arity-fefc01f2.js";
var concat = /* @__PURE__ */ _curry2(function concat2(a, b) {
  if (_isArray(a)) {
    if (_isArray(b)) {
      return a.concat(b);
    }
    throw new TypeError(toString2(b) + " is not an array");
  }
  if (_isString(a)) {
    if (_isString(b)) {
      return a + b;
    }
    throw new TypeError(toString2(b) + " is not a string");
  }
  if (a != null && _isFunction(a["fantasy-land/concat"])) {
    return a["fantasy-land/concat"](b);
  }
  if (a != null && _isFunction(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(toString2(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});
export default concat;
