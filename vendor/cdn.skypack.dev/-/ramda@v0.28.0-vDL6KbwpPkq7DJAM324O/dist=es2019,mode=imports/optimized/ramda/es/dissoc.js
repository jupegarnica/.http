import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import dissocPath2 from "./dissocPath.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isInteger-6ed45b32.js";
import "../../common/_isArray-3f7112bf.js";
import "./remove.js";
import "../../common/_curry3-716aebc1.js";
import "./assoc.js";
import "./assocPath.js";
import "../../common/_has-ef506577.js";
import "../../common/_assoc-b7e88c54.js";
import "./isNil.js";
var dissoc = /* @__PURE__ */ _curry2(function dissoc2(prop, obj) {
  return dissocPath2([prop], obj);
});
export default dissoc;
