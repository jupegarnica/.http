import {_ as _curry1} from "../../common/_curry1-a6784b40.js";
import curryN2 from "./curryN.js";
import nth2 from "./nth.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_curryN-f6b52a3c.js";
import "../../common/_isString-bd8a5e0f.js";
var nthArg = /* @__PURE__ */ _curry1(function nthArg2(n) {
  var arity = n < 0 ? 1 : n + 1;
  return curryN2(arity, function() {
    return nth2(n, arguments);
  });
});
export default nthArg;
