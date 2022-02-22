import {_ as _clone} from "../../common/_clone-7429370f.js";
import {_ as _curryN} from "../../common/_curryN-f6b52a3c.js";
import {_ as _xfBase, a as _dispatchable} from "../../common/_xfBase-47118e3a.js";
import {_ as _has} from "../../common/_has-ef506577.js";
import {_ as _reduce} from "../../common/_reduce-6079ab80.js";
import {_ as _reduced} from "../../common/_reduced-43259614.js";
import "../../common/_cloneRegExp-a38a2fe4.js";
import "./type.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_curry2-21fa898b.js";
var XReduceBy = /* @__PURE__ */ function() {
  function XReduceBy2(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy2.prototype["@@transducer/init"] = _xfBase.init;
  XReduceBy2.prototype["@@transducer/result"] = function(result) {
    var key;
    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf["@@transducer/step"](result, this.inputs[key]);
        if (result["@@transducer/reduced"]) {
          result = result["@@transducer/value"];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf["@@transducer/result"](result);
  };
  XReduceBy2.prototype["@@transducer/step"] = function(result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };
  return XReduceBy2;
}();
var _xreduceBy = /* @__PURE__ */ _curryN(4, [], function _xreduceBy2(valueFn, valueAcc, keyFn, xf) {
  return new XReduceBy(valueFn, valueAcc, keyFn, xf);
});
var reduceBy = /* @__PURE__ */ _curryN(4, [], /* @__PURE__ */ _dispatchable([], _xreduceBy, function reduceBy2(valueFn, valueAcc, keyFn, list) {
  return _reduce(function(acc, elt) {
    var key = keyFn(elt);
    var value = valueFn(_has(key, acc) ? acc[key] : _clone(valueAcc, [], [], false), elt);
    if (value && value["@@transducer/reduced"]) {
      return _reduced(acc);
    }
    acc[key] = value;
    return acc;
  }, {}, list);
}));
export default reduceBy;
