import { _ as _checkForMethod } from "../../common/_checkForMethod-9f9acae8.js";
import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import reduceBy2 from "./reduceBy.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_clone-7429370f.js";
import "../../common/_cloneRegExp-a38a2fe4.js";
import "./type.js";
import "../../common/_curryN-f6b52a3c.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_xfBase-47118e3a.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_has-ef506577.js";
import "../../common/_reduce-6079ab80.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_reduced-43259614.js";
var groupBy = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _checkForMethod(
    "groupBy",
    /* @__PURE__ */ reduceBy2(function (acc, item) {
      acc.push(item);
      return acc;
    }, []),
  ),
);
export default groupBy;
