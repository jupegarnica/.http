import { _ as _isFunction } from "./_isFunction-f2ef089d.js";
import { _ as _toString } from "./_toString-2b74d5dd.js";
function _assertPromise(name, p) {
  if (p == null || !_isFunction(p.then)) {
    throw new TypeError(
      "`" + name + "` expected a Promise, received " + _toString(p, []),
    );
  }
}
export { _assertPromise as _ };
export default null;
