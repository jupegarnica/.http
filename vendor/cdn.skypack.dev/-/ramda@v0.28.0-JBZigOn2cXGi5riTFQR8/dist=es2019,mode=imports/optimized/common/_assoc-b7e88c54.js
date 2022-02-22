import {_ as _isArray} from "./_isArray-3f7112bf.js";
import {_ as _isInteger} from "./_isInteger-6ed45b32.js";
function _assoc(prop, val, obj) {
  if (_isInteger(prop) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[prop] = val;
    return arr;
  }
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
}
export {_assoc as _};
export default null;
