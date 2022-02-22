import {_ as _curry1} from "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var transpose = /* @__PURE__ */ _curry1(function transpose2(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === "undefined") {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});
export default transpose;
