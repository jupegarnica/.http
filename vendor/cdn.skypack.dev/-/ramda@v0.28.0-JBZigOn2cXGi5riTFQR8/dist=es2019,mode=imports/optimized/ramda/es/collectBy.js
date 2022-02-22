import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import { _ as _reduce } from "../../common/_reduce-6079ab80.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_arity-fefc01f2.js";
var collectBy = /* @__PURE__ */ _curry2(function collectBy2(fn, list) {
  var group = _reduce(
    function (o, x) {
      var tag2 = fn(x);
      if (o[tag2] === void 0) {
        o[tag2] = [];
      }
      o[tag2].push(x);
      return o;
    },
    {},
    list,
  );
  var newList = [];
  for (var tag in group) {
    newList.push(group[tag]);
  }
  return newList;
});
export default collectBy;
