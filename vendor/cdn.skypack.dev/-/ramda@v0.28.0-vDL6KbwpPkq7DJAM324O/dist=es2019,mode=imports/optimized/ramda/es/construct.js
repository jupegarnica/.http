import {_ as _curry1} from "../../common/_curry1-a6784b40.js";
import constructN2 from "./constructN.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "./curry.js";
import "./curryN.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_curryN-f6b52a3c.js";
import "./nAry.js";
var construct = /* @__PURE__ */ _curry1(function construct2(Fn) {
  return constructN2(Fn.length, Fn);
});
export default construct;
