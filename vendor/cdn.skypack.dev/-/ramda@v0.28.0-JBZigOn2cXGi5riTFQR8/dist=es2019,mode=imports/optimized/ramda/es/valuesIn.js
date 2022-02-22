import {_ as _curry1} from "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var valuesIn = /* @__PURE__ */ _curry1(function valuesIn2(obj) {
  var prop;
  var vs = [];
  for (prop in obj) {
    vs[vs.length] = obj[prop];
  }
  return vs;
});
export default valuesIn;
