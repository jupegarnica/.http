import {_ as _curry1} from "../../common/_curry1-a6784b40.js";
import lens2 from "./lens.js";
import nth2 from "./nth.js";
import update2 from "./update.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "./map.js";
import "../../common/_xfBase-47118e3a.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_map-855e0a50.js";
import "../../common/_reduce-6079ab80.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_arity-fefc01f2.js";
import "./curryN.js";
import "../../common/_curryN-f6b52a3c.js";
import "./keys.js";
import "../../common/_has-ef506577.js";
import "../../common/_isArguments-6faa657b.js";
import "../../common/_curry3-716aebc1.js";
import "./adjust.js";
import "../../common/_concat-9dee354c.js";
import "./always.js";
var lensIndex = /* @__PURE__ */ _curry1(function lensIndex2(n) {
  return lens2(nth2(n), update2(n));
});
export default lensIndex;
