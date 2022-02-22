import { _ as _curry3 } from "../../common/_curry3-716aebc1.js";
import map2 from "./map.js";
import sequence2 from "./sequence.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
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
import "./ap.js";
import "../../common/_concat-9dee354c.js";
import "./prepend.js";
import "./reduceRight.js";
var traverse = /* @__PURE__ */ _curry3(function traverse2(of, f, traversable) {
  return typeof traversable["fantasy-land/traverse"] === "function"
    ? traversable["fantasy-land/traverse"](f, of)
    : typeof traversable.traverse === "function"
    ? traversable.traverse(f, of)
    : sequence2(of, map2(f, traversable));
});
export default traverse;
