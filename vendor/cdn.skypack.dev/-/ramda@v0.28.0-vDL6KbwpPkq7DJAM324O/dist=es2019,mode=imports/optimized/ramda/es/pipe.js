import {_ as _arity} from "../../common/_arity-fefc01f2.js";
import reduce2 from "./reduce.js";
import tail2 from "./tail.js";
import "../../common/_curry3-716aebc1.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_reduce-6079ab80.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_checkForMethod-9f9acae8.js";
import "./slice.js";
function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
}
function pipe() {
  if (arguments.length === 0) {
    throw new Error("pipe requires at least one argument");
  }
  return _arity(arguments[0].length, reduce2(_pipe, arguments[0], tail2(arguments)));
}
export default pipe;
