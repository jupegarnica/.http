import {_ as _curryN} from "../../common/_curryN-f6b52a3c.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_isPlaceholder-69544913.js";
var splitWhenever = /* @__PURE__ */ _curryN(2, [], function splitWhenever2(pred, list) {
  var acc = [];
  var curr = [];
  for (var i = 0; i < list.length; i = i + 1) {
    if (!pred(list[i])) {
      curr.push(list[i]);
    }
    if ((i < list.length - 1 && pred(list[i + 1]) || i === list.length - 1) && curr.length > 0) {
      acc.push(curr);
      curr = [];
    }
  }
  return acc;
});
export default splitWhenever;
