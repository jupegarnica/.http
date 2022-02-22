import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import { _ as _isFunction } from "../../common/_isFunction-f2ef089d.js";
import curryN2 from "./curryN.js";
import toString2 from "./toString.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_curryN-f6b52a3c.js";
import "../../common/_toString-2b74d5dd.js";
import "../../common/_includes-6b736d1d.js";
import "../../common/_indexOf-a6922268.js";
import "./equals.js";
import "../../common/_includesWith-ddfe560f.js";
import "../../common/_has-ef506577.js";
import "../../common/_objectIs-99c5251f.js";
import "./keys.js";
import "../../common/_isArguments-6faa657b.js";
import "./type.js";
import "../../common/_map-855e0a50.js";
import "./reject.js";
import "../../common/_complement-ae234b25.js";
import "./filter.js";
import "../../common/_xfBase-47118e3a.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_filter-40fab1d6.js";
import "../../common/_isObject-755da5cf.js";
import "../../common/_reduce-6079ab80.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
var invoker = /* @__PURE__ */ _curry2(function invoker2(arity, method) {
  return curryN2(arity + 1, function () {
    var target = arguments[arity];
    if (target != null && _isFunction(target[method])) {
      return target[method].apply(
        target,
        Array.prototype.slice.call(arguments, 0, arity),
      );
    }
    throw new TypeError(
      toString2(target) + ' does not have a method named "' + method + '"',
    );
  });
});
export default invoker;
