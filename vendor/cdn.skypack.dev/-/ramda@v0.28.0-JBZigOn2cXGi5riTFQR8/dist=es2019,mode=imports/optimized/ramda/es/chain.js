import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import {
  _ as _xfBase,
  a as _dispatchable,
} from "../../common/_xfBase-47118e3a.js";
import { _ as _makeFlat } from "../../common/_makeFlat-50135e4b.js";
import { _ as _isArrayLike } from "../../common/_isArrayLike-9455bd24.js";
import { _ as _reduce } from "../../common/_reduce-6079ab80.js";
import map2 from "./map.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "../../common/_arity-fefc01f2.js";
import "../../common/_map-855e0a50.js";
import "./curryN.js";
import "../../common/_curryN-f6b52a3c.js";
import "./keys.js";
import "../../common/_has-ef506577.js";
import "../../common/_isArguments-6faa657b.js";
function _forceReduced(x) {
  return {
    "@@transducer/value": x,
    "@@transducer/reduced": true,
  };
}
var preservingReduced = function (xf) {
  return {
    "@@transducer/init": _xfBase.init,
    "@@transducer/result": function (result) {
      return xf["@@transducer/result"](result);
    },
    "@@transducer/step": function (result, input) {
      var ret = xf["@@transducer/step"](result, input);
      return ret["@@transducer/reduced"] ? _forceReduced(ret) : ret;
    },
  };
};
var _flatCat = function _xcat(xf) {
  var rxf = preservingReduced(xf);
  return {
    "@@transducer/init": _xfBase.init,
    "@@transducer/result": function (result) {
      return rxf["@@transducer/result"](result);
    },
    "@@transducer/step": function (result, input) {
      return !_isArrayLike(input)
        ? _reduce(rxf, result, [input])
        : _reduce(rxf, result, input);
    },
  };
};
var _xchain = /* @__PURE__ */ _curry2(function _xchain2(f, xf) {
  return map2(f, _flatCat(xf));
});
var chain = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(
    ["fantasy-land/chain", "chain"],
    _xchain,
    function chain2(fn, monad) {
      if (typeof monad === "function") {
        return function (x) {
          return fn(monad(x))(x);
        };
      }
      return _makeFlat(false)(map2(fn, monad));
    },
  ),
);
export default chain;
