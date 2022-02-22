import { _ as _isArray } from "./_isArray-3f7112bf.js";
import { _ as _isTransformer } from "./_isTransformer-816ffbd7.js";
function _dispatchable(methodNames, transducerCreator, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }
    var obj = arguments[arguments.length - 1];
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === "function") {
          return obj[methodNames[idx]].apply(
            obj,
            Array.prototype.slice.call(arguments, 0, -1),
          );
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = transducerCreator.apply(
          null,
          Array.prototype.slice.call(arguments, 0, -1),
        );
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}
var _xfBase = {
  init: function () {
    return this.xf["@@transducer/init"]();
  },
  result: function (result) {
    return this.xf["@@transducer/result"](result);
  },
};
export { _dispatchable as a, _xfBase as _ };
export default null;
