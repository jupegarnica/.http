import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _isInteger} from "../../common/_isInteger-6ed45b32.js";
import {_ as _isArray} from "../../common/_isArray-3f7112bf.js";
import remove2 from "./remove.js";
import assoc2 from "./assoc.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry3-716aebc1.js";
import "./assocPath.js";
import "../../common/_has-ef506577.js";
import "../../common/_assoc-b7e88c54.js";
import "./isNil.js";
function _dissoc(prop, obj) {
  if (obj == null) {
    return obj;
  }
  if (_isInteger(prop) && _isArray(obj)) {
    return remove2(prop, 1, obj);
  }
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
}
function _shallowCloneObject(prop, obj) {
  if (_isInteger(prop) && _isArray(obj)) {
    return [].concat(obj);
  }
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  return result;
}
var dissocPath = /* @__PURE__ */ _curry2(function dissocPath2(path, obj) {
  if (obj == null) {
    return obj;
  }
  switch (path.length) {
    case 0:
      return obj;
    case 1:
      return _dissoc(path[0], obj);
    default:
      var head = path[0];
      var tail = Array.prototype.slice.call(path, 1);
      if (obj[head] == null) {
        return _shallowCloneObject(head, obj);
      } else {
        return assoc2(head, dissocPath2(tail, obj[head]), obj);
      }
  }
});
export default dissocPath;
