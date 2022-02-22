import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import drop2 from "./drop.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_xfBase-47118e3a.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
import "./slice.js";
import "../../common/_checkForMethod-9f9acae8.js";
import "../../common/_curry3-716aebc1.js";
var takeLast = /* @__PURE__ */ _curry2(function takeLast2(n, xs) {
  return drop2(n >= 0 ? xs.length - n : 0, xs);
});
export default takeLast;
