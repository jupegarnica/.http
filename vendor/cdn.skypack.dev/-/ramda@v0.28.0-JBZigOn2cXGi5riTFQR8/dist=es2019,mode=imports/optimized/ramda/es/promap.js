import {_ as _curry3} from "../../common/_curry3-716aebc1.js";
import {_ as _xfBase, a as _dispatchable} from "../../common/_xfBase-47118e3a.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
function _promap(f, g, profunctor) {
  return function(x) {
    return g(profunctor(f(x)));
  };
}
var XPromap = /* @__PURE__ */ function() {
  function XPromap2(f, g, xf) {
    this.xf = xf;
    this.f = f;
    this.g = g;
  }
  XPromap2.prototype["@@transducer/init"] = _xfBase.init;
  XPromap2.prototype["@@transducer/result"] = _xfBase.result;
  XPromap2.prototype["@@transducer/step"] = function(result, input) {
    return this.xf["@@transducer/step"](result, _promap(this.f, this.g, input));
  };
  return XPromap2;
}();
var _xpromap = /* @__PURE__ */ _curry3(function _xpromap2(f, g, xf) {
  return new XPromap(f, g, xf);
});
var promap = /* @__PURE__ */ _curry3(/* @__PURE__ */ _dispatchable(["fantasy-land/promap", "promap"], _xpromap, _promap));
export default promap;
