import { _ as _complement } from "../../common/_complement-ae234b25.js";
import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import all2 from "./all.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_xfBase-47118e3a.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_reduced-43259614.js";
var none = /* @__PURE__ */ _curry2(function none2(fn, input) {
  return all2(_complement(fn), input);
});
export default none;
