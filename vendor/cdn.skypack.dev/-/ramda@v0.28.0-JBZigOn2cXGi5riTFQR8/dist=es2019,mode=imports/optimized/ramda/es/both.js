import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import { _ as _isFunction } from "../../common/_isFunction-f2ef089d.js";
import and2 from "./and.js";
import lift2 from "./lift.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "./liftN.js";
import "../../common/_reduce-6079ab80.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_arity-fefc01f2.js";
import "./ap.js";
import "../../common/_concat-9dee354c.js";
import "./map.js";
import "../../common/_xfBase-47118e3a.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_map-855e0a50.js";
import "./curryN.js";
import "../../common/_curryN-f6b52a3c.js";
import "./keys.js";
import "../../common/_has-ef506577.js";
import "../../common/_isArguments-6faa657b.js";
var both = /* @__PURE__ */ _curry2(function both2(f, g) {
  return _isFunction(f)
    ? function _both() {
      return f.apply(this, arguments) && g.apply(this, arguments);
    }
    : lift2(and2)(f, g);
});
export default both;
