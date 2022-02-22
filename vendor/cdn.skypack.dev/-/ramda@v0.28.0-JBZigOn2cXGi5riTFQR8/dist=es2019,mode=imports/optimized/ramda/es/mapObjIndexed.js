import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _reduce} from "../../common/_reduce-6079ab80.js";
import keys2 from "./keys.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_has-ef506577.js";
import "../../common/_isArguments-6faa657b.js";
var mapObjIndexed = /* @__PURE__ */ _curry2(function mapObjIndexed2(fn, obj) {
  return _reduce(function(acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, keys2(obj));
});
export default mapObjIndexed;
