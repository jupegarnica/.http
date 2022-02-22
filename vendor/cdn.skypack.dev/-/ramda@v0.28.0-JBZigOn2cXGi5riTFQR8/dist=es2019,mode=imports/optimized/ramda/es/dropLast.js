import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _xfBase, a as _dispatchable} from "../../common/_xfBase-47118e3a.js";
import take2 from "./take.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_reduced-43259614.js";
import "./slice.js";
import "../../common/_checkForMethod-9f9acae8.js";
import "../../common/_curry3-716aebc1.js";
function dropLast(n, xs) {
  return take2(n < xs.length ? xs.length - n : 0, xs);
}
var XDropLast = /* @__PURE__ */ function() {
  function XDropLast2(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast2.prototype["@@transducer/init"] = _xfBase.init;
  XDropLast2.prototype["@@transducer/result"] = function(result) {
    this.acc = null;
    return this.xf["@@transducer/result"](result);
  };
  XDropLast2.prototype["@@transducer/step"] = function(result, input) {
    if (this.full) {
      result = this.xf["@@transducer/step"](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast2.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  return XDropLast2;
}();
var _xdropLast = /* @__PURE__ */ _curry2(function _xdropLast2(n, xf) {
  return new XDropLast(n, xf);
});
var dropLast$1 = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xdropLast, dropLast));
export default dropLast$1;
