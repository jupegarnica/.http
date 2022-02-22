import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import { _ as _isArray } from "../../common/_isArray-3f7112bf.js";
import { _ as _map } from "../../common/_map-855e0a50.js";
import { _ as _assoc } from "../../common/_assoc-b7e88c54.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isInteger-6ed45b32.js";
var unwind = /* @__PURE__ */ _curry2(function (key, object) {
  if (!(key in object && _isArray(object[key]))) {
    return [object];
  }
  return _map(function (item) {
    return _assoc(key, item, object);
  }, object[key]);
});
export default unwind;
