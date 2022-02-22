import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import { _ as _isArray } from "../../common/_isArray-3f7112bf.js";
import { _ as _isObject } from "../../common/_isObject-755da5cf.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var evolve = /* @__PURE__ */ _curry2(function evolve2(transformations, object) {
  if (!_isObject(object) && !_isArray(object)) {
    return object;
  }
  var result = object instanceof Array ? [] : {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === "function"
      ? transformation(object[key])
      : transformation && type === "object"
      ? evolve2(transformation, object[key])
      : object[key];
  }
  return result;
});
export default evolve;
