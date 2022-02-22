import {_ as _curry1} from "../../common/_curry1-a6784b40.js";
import {_ as _isArguments} from "../../common/_isArguments-6faa657b.js";
import {_ as _isArray} from "../../common/_isArray-3f7112bf.js";
import {_ as _isObject} from "../../common/_isObject-755da5cf.js";
import {_ as _isString} from "../../common/_isString-bd8a5e0f.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_has-ef506577.js";
function _isTypedArray(val) {
  var type = Object.prototype.toString.call(val);
  return type === "[object Uint8ClampedArray]" || type === "[object Int8Array]" || type === "[object Uint8Array]" || type === "[object Int16Array]" || type === "[object Uint16Array]" || type === "[object Int32Array]" || type === "[object Uint32Array]" || type === "[object Float32Array]" || type === "[object Float64Array]" || type === "[object BigInt64Array]" || type === "[object BigUint64Array]";
}
var empty = /* @__PURE__ */ _curry1(function empty2(x) {
  return x != null && typeof x["fantasy-land/empty"] === "function" ? x["fantasy-land/empty"]() : x != null && x.constructor != null && typeof x.constructor["fantasy-land/empty"] === "function" ? x.constructor["fantasy-land/empty"]() : x != null && typeof x.empty === "function" ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === "function" ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? "" : _isObject(x) ? {} : _isArguments(x) ? function() {
    return arguments;
  }() : _isTypedArray(x) ? x.constructor.from("") : void 0;
});
export default empty;
