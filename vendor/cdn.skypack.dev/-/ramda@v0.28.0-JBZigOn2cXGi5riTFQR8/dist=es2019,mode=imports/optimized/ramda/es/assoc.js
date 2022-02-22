import {_ as _curry3} from "../../common/_curry3-716aebc1.js";
import assocPath2 from "./assocPath.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_has-ef506577.js";
import "../../common/_isInteger-6ed45b32.js";
import "../../common/_assoc-b7e88c54.js";
import "../../common/_isArray-3f7112bf.js";
import "./isNil.js";
var assoc = /* @__PURE__ */ _curry3(function assoc2(prop, val, obj) {
  return assocPath2([prop], val, obj);
});
export default assoc;
