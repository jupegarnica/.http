import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _reduce} from "../../common/_reduce-6079ab80.js";
import ap2 from "./ap.js";
import curryN2 from "./curryN.js";
import map2 from "./map.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_concat-9dee354c.js";
import "../../common/_xfBase-47118e3a.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_map-855e0a50.js";
import "../../common/_curryN-f6b52a3c.js";
import "./keys.js";
import "../../common/_has-ef506577.js";
import "../../common/_isArguments-6faa657b.js";
var liftN = /* @__PURE__ */ _curry2(function liftN2(arity, fn) {
  var lifted = curryN2(arity, fn);
  return curryN2(arity, function() {
    return _reduce(ap2, map2(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});
export default liftN;
