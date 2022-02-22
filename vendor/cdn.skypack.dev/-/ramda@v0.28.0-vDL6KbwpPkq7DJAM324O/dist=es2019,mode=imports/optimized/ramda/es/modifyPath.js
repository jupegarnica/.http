import {_ as _curry3} from "../../common/_curry3-716aebc1.js";
import {_ as _isArray} from "../../common/_isArray-3f7112bf.js";
import {_ as _isObject} from "../../common/_isObject-755da5cf.js";
import {_ as _has} from "../../common/_has-ef506577.js";
import {_ as _assoc} from "../../common/_assoc-b7e88c54.js";
import {_ as _isInteger} from "../../common/_isInteger-6ed45b32.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
function _modify(prop, fn, obj) {
  if (_isInteger(prop) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[prop] = fn(arr[prop]);
    return arr;
  }
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = fn(result[prop]);
  return result;
}
var modifyPath = /* @__PURE__ */ _curry3(function modifyPath2(path, fn, object) {
  if (!_isObject(object) && !_isArray(object) || path.length === 0) {
    return object;
  }
  var idx = path[0];
  if (!_has(idx, object)) {
    return object;
  }
  if (path.length === 1) {
    return _modify(idx, fn, object);
  }
  var val = modifyPath2(Array.prototype.slice.call(path, 1), fn, object[idx]);
  if (val === object[idx]) {
    return object;
  }
  return _assoc(idx, val, object);
});
export default modifyPath;
