import {_ as _clone} from "../../common/_clone-7429370f.js";
import {_ as _curry3} from "../../common/_curry3-716aebc1.js";
import {_ as _isTransformer} from "../../common/_isTransformer-816ffbd7.js";
import {_ as _reduce} from "../../common/_reduce-6079ab80.js";
import {_ as _objectAssign} from "../../common/_objectAssign-4e7711ea.js";
import {_ as _identity} from "../../common/_identity-7918716e.js";
import {_ as _isArrayLike} from "../../common/_isArrayLike-9455bd24.js";
import objOf2 from "./objOf.js";
import "../../common/_cloneRegExp-a38a2fe4.js";
import "./type.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "./bind.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_has-ef506577.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isString-bd8a5e0f.js";
var _stepCatArray = {
  "@@transducer/init": Array,
  "@@transducer/step": function(xs, x) {
    xs.push(x);
    return xs;
  },
  "@@transducer/result": _identity
};
var _stepCatString = {
  "@@transducer/init": String,
  "@@transducer/step": function(a, b) {
    return a + b;
  },
  "@@transducer/result": _identity
};
var _stepCatObject = {
  "@@transducer/init": Object,
  "@@transducer/step": function(result, input) {
    return _objectAssign(result, _isArrayLike(input) ? objOf2(input[0], input[1]) : input);
  },
  "@@transducer/result": _identity
};
function _stepCat(obj) {
  if (_isTransformer(obj)) {
    return obj;
  }
  if (_isArrayLike(obj)) {
    return _stepCatArray;
  }
  if (typeof obj === "string") {
    return _stepCatString;
  }
  if (typeof obj === "object") {
    return _stepCatObject;
  }
  throw new Error("Cannot create transformer for " + obj);
}
var into = /* @__PURE__ */ _curry3(function into2(acc, xf, list) {
  return _isTransformer(acc) ? _reduce(xf(acc), acc["@@transducer/init"](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
});
export default into;
