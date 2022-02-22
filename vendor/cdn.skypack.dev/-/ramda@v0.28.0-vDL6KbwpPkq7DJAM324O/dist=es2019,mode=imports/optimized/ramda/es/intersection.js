import {_ as _includes} from "../../common/_includes-6b736d1d.js";
import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _filter} from "../../common/_filter-40fab1d6.js";
import flip2 from "./flip.js";
import uniq2 from "./uniq.js";
import "../../common/_indexOf-a6922268.js";
import "./equals.js";
import "../../common/_includesWith-ddfe560f.js";
import "../../common/_has-ef506577.js";
import "../../common/_objectIs-99c5251f.js";
import "./keys.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArguments-6faa657b.js";
import "./type.js";
import "./curryN.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_curryN-f6b52a3c.js";
import "./identity.js";
import "../../common/_identity-7918716e.js";
import "./uniqBy.js";
import "../../common/_Set-d915dfa1.js";
import "../../common/_xfBase-47118e3a.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
var intersection = /* @__PURE__ */ _curry2(function intersection2(list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  return uniq2(_filter(flip2(_includes)(lookupList), filteredList));
});
export default intersection;
