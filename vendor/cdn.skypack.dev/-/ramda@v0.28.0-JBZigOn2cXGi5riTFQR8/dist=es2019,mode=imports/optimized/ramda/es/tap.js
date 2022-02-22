import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _xfBase, a as _dispatchable} from "../../common/_xfBase-47118e3a.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
var XTap = /* @__PURE__ */ function() {
  function XTap2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTap2.prototype["@@transducer/init"] = _xfBase.init;
  XTap2.prototype["@@transducer/result"] = _xfBase.result;
  XTap2.prototype["@@transducer/step"] = function(result, input) {
    this.f(input);
    return this.xf["@@transducer/step"](result, input);
  };
  return XTap2;
}();
var _xtap = /* @__PURE__ */ _curry2(function _xtap2(f, xf) {
  return new XTap(f, xf);
});
var tap = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xtap, function tap2(fn, x) {
  fn(x);
  return x;
}));
export default tap;
