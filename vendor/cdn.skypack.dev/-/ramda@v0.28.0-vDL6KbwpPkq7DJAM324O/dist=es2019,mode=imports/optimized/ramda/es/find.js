import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _xfBase, a as _dispatchable} from "../../common/_xfBase-47118e3a.js";
import {_ as _reduced} from "../../common/_reduced-43259614.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
var XFind = /* @__PURE__ */ function() {
  function XFind2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind2.prototype["@@transducer/init"] = _xfBase.init;
  XFind2.prototype["@@transducer/result"] = function(result) {
    if (!this.found) {
      result = this.xf["@@transducer/step"](result, void 0);
    }
    return this.xf["@@transducer/result"](result);
  };
  XFind2.prototype["@@transducer/step"] = function(result, input) {
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf["@@transducer/step"](result, input));
    }
    return result;
  };
  return XFind2;
}();
var _xfind = /* @__PURE__ */ _curry2(function _xfind2(f, xf) {
  return new XFind(f, xf);
});
var find = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["find"], _xfind, function find2(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));
export default find;
