import {_ as _curry1} from "../../common/_curry1-a6784b40.js";
import {_ as _has} from "../../common/_has-ef506577.js";
import "../../common/_isPlaceholder-69544913.js";
var toPairs = /* @__PURE__ */ _curry1(function toPairs2(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (_has(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
});
export default toPairs;
