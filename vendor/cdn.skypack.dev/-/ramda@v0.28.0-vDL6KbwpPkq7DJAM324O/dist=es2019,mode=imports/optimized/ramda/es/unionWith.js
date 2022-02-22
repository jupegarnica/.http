import {_ as _concat} from "../../common/_concat-9dee354c.js";
import {_ as _curry3} from "../../common/_curry3-716aebc1.js";
import uniqWith2 from "./uniqWith.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_xfBase-47118e3a.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_includesWith-ddfe560f.js";
var unionWith = /* @__PURE__ */ _curry3(function unionWith2(pred, list1, list2) {
  return uniqWith2(pred, _concat(list1, list2));
});
export default unionWith;
