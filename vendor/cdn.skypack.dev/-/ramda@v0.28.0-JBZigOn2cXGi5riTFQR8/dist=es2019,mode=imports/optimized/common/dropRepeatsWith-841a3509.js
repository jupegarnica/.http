import {_ as _curry2} from "./_curry2-21fa898b.js";
import {_ as _xfBase, a as _dispatchable} from "./_xfBase-47118e3a.js";
import last2 from "../ramda/es/last.js";
var XDropRepeatsWith = /* @__PURE__ */ function() {
  function XDropRepeatsWith2(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = void 0;
    this.seenFirstValue = false;
  }
  XDropRepeatsWith2.prototype["@@transducer/init"] = _xfBase.init;
  XDropRepeatsWith2.prototype["@@transducer/result"] = _xfBase.result;
  XDropRepeatsWith2.prototype["@@transducer/step"] = function(result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf["@@transducer/step"](result, input);
  };
  return XDropRepeatsWith2;
}();
var _xdropRepeatsWith = /* @__PURE__ */ _curry2(function _xdropRepeatsWith2(pred, xf) {
  return new XDropRepeatsWith(pred, xf);
});
var dropRepeatsWith = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xdropRepeatsWith, function dropRepeatsWith2(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;
  if (len !== 0) {
    result[0] = list[0];
    while (idx < len) {
      if (!pred(last2(result), list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
  }
  return result;
}));
export {_xdropRepeatsWith as _, dropRepeatsWith as d};
export default null;
