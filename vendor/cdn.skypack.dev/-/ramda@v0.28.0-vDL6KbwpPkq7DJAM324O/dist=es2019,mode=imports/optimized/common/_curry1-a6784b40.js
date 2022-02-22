import { _ as _isPlaceholder } from "./_isPlaceholder-69544913.js";
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}
export { _curry1 as _ };
export default null;
