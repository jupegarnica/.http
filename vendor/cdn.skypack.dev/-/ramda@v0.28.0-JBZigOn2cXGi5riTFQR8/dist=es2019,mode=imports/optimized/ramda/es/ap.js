import {_ as _concat} from "../../common/_concat-9dee354c.js";
import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _reduce} from "../../common/_reduce-6079ab80.js";
import map2 from "./map.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_xfBase-47118e3a.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_map-855e0a50.js";
import "./curryN.js";
import "../../common/_curryN-f6b52a3c.js";
import "./keys.js";
import "../../common/_has-ef506577.js";
import "../../common/_isArguments-6faa657b.js";
var ap = /* @__PURE__ */ _curry2(function ap2(applyF, applyX) {
  return typeof applyX["fantasy-land/ap"] === "function" ? applyX["fantasy-land/ap"](applyF) : typeof applyF.ap === "function" ? applyF.ap(applyX) : typeof applyF === "function" ? function(x) {
    return applyF(x)(applyX(x));
  } : _reduce(function(acc, f) {
    return _concat(acc, map2(f, applyX));
  }, [], applyF);
});
export default ap;
