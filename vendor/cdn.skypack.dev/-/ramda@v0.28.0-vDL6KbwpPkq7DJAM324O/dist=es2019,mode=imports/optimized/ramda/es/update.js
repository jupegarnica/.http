import { _ as _curry3 } from "../../common/_curry3-716aebc1.js";
import adjust2 from "./adjust.js";
import always2 from "./always.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_concat-9dee354c.js";
var update = /* @__PURE__ */ _curry3(function update2(idx, x, list) {
  return adjust2(idx, always2(x), list);
});
export default update;
