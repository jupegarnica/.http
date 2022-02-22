import {_ as _arity} from "../../common/_arity-fefc01f2.js";
import {_ as _curry1} from "../../common/_curry1-a6784b40.js";
import map2 from "./map.js";
import max2 from "./max.js";
import reduce2 from "./reduce.js";
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
import "./curryN.js";
import "../../common/_curryN-f6b52a3c.js";
import "./keys.js";
import "../../common/_has-ef506577.js";
import "../../common/_isArguments-6faa657b.js";
import "../../common/_curry3-716aebc1.js";
var cond = /* @__PURE__ */ _curry1(function cond2(pairs) {
  var arity = reduce2(max2, 0, map2(function(pair) {
    return pair[0].length;
  }, pairs));
  return _arity(arity, function() {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});
export default cond;
