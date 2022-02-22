import {_ as _arity} from "../../common/_arity-fefc01f2.js";
import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import head2 from "./head.js";
import {_ as _reduce} from "../../common/_reduce-6079ab80.js";
import tail2 from "./tail.js";
import identity2 from "./identity.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "./nth.js";
import "../../common/_isString-bd8a5e0f.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isArray-3f7112bf.js";
import "./bind.js";
import "../../common/_checkForMethod-9f9acae8.js";
import "./slice.js";
import "../../common/_curry3-716aebc1.js";
import "../../common/_identity-7918716e.js";
var pipeWith = /* @__PURE__ */ _curry2(function pipeWith2(xf, list) {
  if (list.length <= 0) {
    return identity2;
  }
  var headList = head2(list);
  var tailList = tail2(list);
  return _arity(headList.length, function() {
    return _reduce(function(result, f) {
      return xf.call(this, f, result);
    }, headList.apply(this, arguments), tailList);
  });
});
export default pipeWith;
