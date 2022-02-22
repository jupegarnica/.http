import { _ as _curry3 } from "../../common/_curry3-716aebc1.js";
import equals2 from "./equals.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_includesWith-ddfe560f.js";
import "../../common/_has-ef506577.js";
import "../../common/_objectIs-99c5251f.js";
import "./keys.js";
import "../../common/_isArguments-6faa657b.js";
import "./type.js";
var eqProps = /* @__PURE__ */ _curry3(function eqProps2(prop, obj1, obj2) {
  return equals2(obj1[prop], obj2[prop]);
});
export default eqProps;
