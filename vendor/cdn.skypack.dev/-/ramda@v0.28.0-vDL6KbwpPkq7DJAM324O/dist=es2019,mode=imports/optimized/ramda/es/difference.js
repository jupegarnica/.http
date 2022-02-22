import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import { _ as _Set } from "../../common/_Set-d915dfa1.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_includes-6b736d1d.js";
import "../../common/_indexOf-a6922268.js";
import "./equals.js";
import "../../common/_includesWith-ddfe560f.js";
import "../../common/_has-ef506577.js";
import "../../common/_objectIs-99c5251f.js";
import "./keys.js";
import "../../common/_isArguments-6faa657b.js";
import "./type.js";
var difference = /* @__PURE__ */ _curry2(function difference2(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  var secondLen = second.length;
  var toFilterOut = new _Set();
  for (var i = 0; i < secondLen; i += 1) {
    toFilterOut.add(second[i]);
  }
  while (idx < firstLen) {
    if (toFilterOut.add(first[idx])) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});
export default difference;
