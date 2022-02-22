import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _xfBase, a as _dispatchable} from "../../common/_xfBase-47118e3a.js";
import {_ as _includesWith} from "../../common/_includesWith-ddfe560f.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
var XUniqWith = /* @__PURE__ */ function() {
  function XUniqWith2(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.items = [];
  }
  XUniqWith2.prototype["@@transducer/init"] = _xfBase.init;
  XUniqWith2.prototype["@@transducer/result"] = _xfBase.result;
  XUniqWith2.prototype["@@transducer/step"] = function(result, input) {
    if (_includesWith(this.pred, input, this.items)) {
      return result;
    } else {
      this.items.push(input);
      return this.xf["@@transducer/step"](result, input);
    }
  };
  return XUniqWith2;
}();
var _xuniqWith = /* @__PURE__ */ _curry2(function _xuniqWith2(pred, xf) {
  return new XUniqWith(pred, xf);
});
var uniqWith = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xuniqWith, function(pred, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var item;
  while (idx < len) {
    item = list[idx];
    if (!_includesWith(pred, item, result)) {
      result[result.length] = item;
    }
    idx += 1;
  }
  return result;
}));
export default uniqWith;
