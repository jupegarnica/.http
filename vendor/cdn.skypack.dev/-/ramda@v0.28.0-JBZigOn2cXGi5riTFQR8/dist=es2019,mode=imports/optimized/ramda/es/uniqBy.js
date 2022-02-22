import {_ as _Set} from "../../common/_Set-d915dfa1.js";
import {_ as _curry2} from "../../common/_curry2-21fa898b.js";
import {_ as _xfBase, a as _dispatchable} from "../../common/_xfBase-47118e3a.js";
import "../../common/_includes-6b736d1d.js";
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
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
var XUniqBy = /* @__PURE__ */ function() {
  function XUniqBy2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.set = new _Set();
  }
  XUniqBy2.prototype["@@transducer/init"] = _xfBase.init;
  XUniqBy2.prototype["@@transducer/result"] = _xfBase.result;
  XUniqBy2.prototype["@@transducer/step"] = function(result, input) {
    return this.set.add(this.f(input)) ? this.xf["@@transducer/step"](result, input) : result;
  };
  return XUniqBy2;
}();
var _xuniqBy = /* @__PURE__ */ _curry2(function _xuniqBy2(f, xf) {
  return new XUniqBy(f, xf);
});
var uniqBy = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xuniqBy, function(fn, list) {
  var set = new _Set();
  var result = [];
  var idx = 0;
  var appliedItem, item;
  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
}));
export default uniqBy;
