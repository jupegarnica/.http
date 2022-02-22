import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import concat2 from "./concat.js";
import difference2 from "./difference.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isFunction-f2ef089d.js";
import "../../common/_isString-bd8a5e0f.js";
import "./toString.js";
import "../../common/_toString-2b74d5dd.js";
import "../../common/_includes-6b736d1d.js";
import "../../common/_indexOf-a6922268.js";
import "./equals.js";
import "../../common/_includesWith-ddfe560f.js";
import "../../common/_has-ef506577.js";
import "../../common/_objectIs-99c5251f.js";
import "./keys.js";
import "../../common/_isArguments-6faa657b.js";
import "./type.js";
import "../../common/_map-855e0a50.js";
import "./reject.js";
import "../../common/_complement-ae234b25.js";
import "./filter.js";
import "../../common/_xfBase-47118e3a.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_filter-40fab1d6.js";
import "../../common/_isObject-755da5cf.js";
import "../../common/_reduce-6079ab80.js";
import "../../common/_isArrayLike-9455bd24.js";
import "./bind.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_Set-d915dfa1.js";
var symmetricDifference = /* @__PURE__ */ _curry2(
  function symmetricDifference2(list1, list2) {
    return concat2(difference2(list1, list2), difference2(list2, list1));
  },
);
export default symmetricDifference;
