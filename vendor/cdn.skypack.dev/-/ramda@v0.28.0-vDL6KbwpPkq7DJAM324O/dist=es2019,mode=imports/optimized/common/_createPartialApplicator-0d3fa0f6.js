import {_ as _arity} from "./_arity-fefc01f2.js";
import {_ as _curry2} from "./_curry2-21fa898b.js";
function _createPartialApplicator(concat) {
  return _curry2(function(fn, args) {
    return _arity(Math.max(0, fn.length - args.length), function() {
      return fn.apply(this, concat(args, arguments));
    });
  });
}
export {_createPartialApplicator as _};
export default null;
