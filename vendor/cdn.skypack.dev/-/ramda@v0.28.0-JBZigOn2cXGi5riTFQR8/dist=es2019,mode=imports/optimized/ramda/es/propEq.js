import {_ as _curry3} from "../../common/_curry3-716aebc1.js";
import prop2 from "./prop.js";
import equals2 from "./equals.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_isInteger-6ed45b32.js";
import "./nth.js";
import "../../common/_isString-bd8a5e0f.js";
import "../../common/_includesWith-ddfe560f.js";
import "../../common/_has-ef506577.js";
import "../../common/_objectIs-99c5251f.js";
import "./keys.js";
import "../../common/_isArguments-6faa657b.js";
import "./type.js";
var propEq = /* @__PURE__ */ _curry3(function propEq2(name, val, obj) {
  return equals2(val, prop2(name, obj));
});
export default propEq;
