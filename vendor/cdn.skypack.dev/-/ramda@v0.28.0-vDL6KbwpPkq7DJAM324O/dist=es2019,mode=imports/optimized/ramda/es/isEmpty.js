import {_ as _curry1} from "../../common/_curry1-a6784b40.js";
import empty2 from "./empty.js";
import equals2 from "./equals.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArguments-6faa657b.js";
import "../../common/_has-ef506577.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isObject-755da5cf.js";
import "../../common/_isString-bd8a5e0f.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_includesWith-ddfe560f.js";
import "../../common/_objectIs-99c5251f.js";
import "./keys.js";
import "./type.js";
var isEmpty = /* @__PURE__ */ _curry1(function isEmpty2(x) {
  return x != null && equals2(x, empty2(x));
});
export default isEmpty;
