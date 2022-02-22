var F = function () {
  return false;
};
var T = function () {
  return true;
};
var __ = {
  "@@functional/placeholder": true,
};
function _isPlaceholder(a) {
  return a != null && typeof a === "object" &&
    a["@@functional/placeholder"] === true;
}
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b)
          ? f2
          : _isPlaceholder(a)
          ? _curry1(function (_a) {
            return fn(_a, b);
          })
          : _isPlaceholder(b)
          ? _curry1(function (_b) {
            return fn(a, _b);
          })
          : fn(a, b);
    }
  };
}
var add = /* @__PURE__ */ _curry2(function add2(a, b) {
  return Number(a) + Number(b);
});
function _concat(set1, set22) {
  set1 = set1 || [];
  set22 = set22 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set22.length;
  var result = [];
  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set22[idx];
    idx += 1;
  }
  return result;
}
function _arity(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error(
        "First argument to _arity must be a non-negative integer no greater than ten",
      );
  }
}
function _curryN(length3, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length3;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (
        combinedIdx < received.length &&
        (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)
      ) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0
      ? fn.apply(this, combined)
      : _arity(left, _curryN(length3, combined, fn));
  };
}
var curryN = /* @__PURE__ */ _curry2(function curryN2(length3, fn) {
  if (length3 === 1) {
    return _curry1(fn);
  }
  return _arity(length3, _curryN(length3, [], fn));
});
var addIndex = /* @__PURE__ */ _curry1(function addIndex2(fn) {
  return curryN(fn.length, function () {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function () {
      var result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});
function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b)
          ? f3
          : _isPlaceholder(a)
          ? _curry2(function (_a, _c) {
            return fn(_a, b, _c);
          })
          : _isPlaceholder(b)
          ? _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          })
          : _curry1(function (_c) {
            return fn(a, b, _c);
          });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c)
          ? f3
          : _isPlaceholder(a) && _isPlaceholder(b)
          ? _curry2(function (_a, _b) {
            return fn(_a, _b, c);
          })
          : _isPlaceholder(a) && _isPlaceholder(c)
          ? _curry2(function (_a, _c) {
            return fn(_a, b, _c);
          })
          : _isPlaceholder(b) && _isPlaceholder(c)
          ? _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          })
          : _isPlaceholder(a)
          ? _curry1(function (_a) {
            return fn(_a, b, c);
          })
          : _isPlaceholder(b)
          ? _curry1(function (_b) {
            return fn(a, _b, c);
          })
          : _isPlaceholder(c)
          ? _curry1(function (_c) {
            return fn(a, b, _c);
          })
          : fn(a, b, c);
    }
  };
}
var adjust = /* @__PURE__ */ _curry3(function adjust2(idx, fn, list) {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }
  var start = idx < 0 ? list.length : 0;
  var _idx = start + idx;
  var _list = _concat(list);
  _list[_idx] = fn(list[_idx]);
  return _list;
});
var _isArray = Array.isArray || function _isArray2(val) {
  return val != null && val.length >= 0 &&
    Object.prototype.toString.call(val) === "[object Array]";
};
function _isTransformer(obj) {
  return obj != null && typeof obj["@@transducer/step"] === "function";
}
function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === "function") {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}
function _reduced(x) {
  return x && x["@@transducer/reduced"] ? x : {
    "@@transducer/value": x,
    "@@transducer/reduced": true,
  };
}
var _xfBase = {
  init: function () {
    return this.xf["@@transducer/init"]();
  },
  result: function (result) {
    return this.xf["@@transducer/result"](result);
  },
};
var XAll = /* @__PURE__ */ function () {
  function XAll2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll2.prototype["@@transducer/init"] = _xfBase.init;
  XAll2.prototype["@@transducer/result"] = function (result) {
    if (this.all) {
      result = this.xf["@@transducer/step"](result, true);
    }
    return this.xf["@@transducer/result"](result);
  };
  XAll2.prototype["@@transducer/step"] = function (result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = _reduced(this.xf["@@transducer/step"](result, false));
    }
    return result;
  };
  return XAll2;
}();
var _xall = /* @__PURE__ */ _curry2(function _xall2(f, xf) {
  return new XAll(f, xf);
});
var all = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["all"], _xall, function all2(fn, list) {
    var idx = 0;
    while (idx < list.length) {
      if (!fn(list[idx])) {
        return false;
      }
      idx += 1;
    }
    return true;
  }),
);
var max = /* @__PURE__ */ _curry2(function max2(a, b) {
  return b > a ? b : a;
});
function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}
function _isString(x) {
  return Object.prototype.toString.call(x) === "[object String]";
}
var _isArrayLike = /* @__PURE__ */ _curry1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== "object") {
    return false;
  }
  if (_isString(x)) {
    return false;
  }
  if (x.nodeType === 1) {
    return !!x.length;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
var XWrap = /* @__PURE__ */ function () {
  function XWrap2(fn) {
    this.f = fn;
  }
  XWrap2.prototype["@@transducer/init"] = function () {
    throw new Error("init not implemented on XWrap");
  };
  XWrap2.prototype["@@transducer/result"] = function (acc) {
    return acc;
  };
  XWrap2.prototype["@@transducer/step"] = function (acc, x) {
    return this.f(acc, x);
  };
  return XWrap2;
}();
function _xwrap(fn) {
  return new XWrap(fn);
}
var bind = /* @__PURE__ */ _curry2(function bind2(fn, thisObj) {
  return _arity(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});
function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf["@@transducer/step"](acc, list[idx]);
    if (acc && acc["@@transducer/reduced"]) {
      acc = acc["@@transducer/value"];
      break;
    }
    idx += 1;
  }
  return xf["@@transducer/result"](acc);
}
function _iterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf["@@transducer/step"](acc, step.value);
    if (acc && acc["@@transducer/reduced"]) {
      acc = acc["@@transducer/value"];
      break;
    }
    step = iter.next();
  }
  return xf["@@transducer/result"](acc);
}
function _methodReduce(xf, acc, obj, methodName) {
  return xf["@@transducer/result"](
    obj[methodName](bind(xf["@@transducer/step"], xf), acc),
  );
}
var symIterator = typeof Symbol !== "undefined"
  ? Symbol.iterator
  : "@@iterator";
function _reduce(fn, acc, list) {
  if (typeof fn === "function") {
    fn = _xwrap(fn);
  }
  if (_isArrayLike(list)) {
    return _arrayReduce(fn, acc, list);
  }
  if (typeof list["fantasy-land/reduce"] === "function") {
    return _methodReduce(fn, acc, list, "fantasy-land/reduce");
  }
  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }
  if (typeof list.next === "function") {
    return _iterableReduce(fn, acc, list);
  }
  if (typeof list.reduce === "function") {
    return _methodReduce(fn, acc, list, "reduce");
  }
  throw new TypeError("reduce: list must be array or iterable");
}
var XMap = /* @__PURE__ */ function () {
  function XMap2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap2.prototype["@@transducer/init"] = _xfBase.init;
  XMap2.prototype["@@transducer/result"] = _xfBase.result;
  XMap2.prototype["@@transducer/step"] = function (result, input) {
    return this.xf["@@transducer/step"](result, this.f(input));
  };
  return XMap2;
}();
var _xmap = /* @__PURE__ */ _curry2(function _xmap2(f, xf) {
  return new XMap(f, xf);
});
function _has(prop3, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop3);
}
var toString = Object.prototype.toString;
var _isArguments = /* @__PURE__ */ function () {
  return toString.call(arguments) === "[object Arguments]"
    ? function _isArguments2(x) {
      return toString.call(x) === "[object Arguments]";
    }
    : function _isArguments2(x) {
      return _has("callee", x);
    };
}();
var hasEnumBug = !/* @__PURE__ */ {
  toString: null,
}.propertyIsEnumerable("toString");
var nonEnumerableProps = [
  "constructor",
  "valueOf",
  "isPrototypeOf",
  "toString",
  "propertyIsEnumerable",
  "hasOwnProperty",
  "toLocaleString",
];
var hasArgsEnumBug = /* @__PURE__ */ function () {
  return arguments.propertyIsEnumerable("length");
}();
var contains = function contains2(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};
var keys = typeof Object.keys === "function" && !hasArgsEnumBug
  ? /* @__PURE__ */ _curry1(function keys2(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
  })
  : /* @__PURE__ */ _curry1(function keys3(obj) {
    if (Object(obj) !== obj) {
      return [];
    }
    var prop3, nIdx;
    var ks = [];
    var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
    for (prop3 in obj) {
      if (_has(prop3, obj) && (!checkArgsLength || prop3 !== "length")) {
        ks[ks.length] = prop3;
      }
    }
    if (hasEnumBug) {
      nIdx = nonEnumerableProps.length - 1;
      while (nIdx >= 0) {
        prop3 = nonEnumerableProps[nIdx];
        if (_has(prop3, obj) && !contains(ks, prop3)) {
          ks[ks.length] = prop3;
        }
        nIdx -= 1;
      }
    }
    return ks;
  });
var map = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(
    ["fantasy-land/map", "map"],
    _xmap,
    function map2(fn, functor) {
      switch (Object.prototype.toString.call(functor)) {
        case "[object Function]":
          return curryN(functor.length, function () {
            return fn.call(this, functor.apply(this, arguments));
          });
        case "[object Object]":
          return _reduce(
            function (acc, key) {
              acc[key] = fn(functor[key]);
              return acc;
            },
            {},
            keys(functor),
          );
        default:
          return _map(fn, functor);
      }
    },
  ),
);
var _isInteger = Number.isInteger || function _isInteger2(n) {
  return n << 0 === n;
};
var nth = /* @__PURE__ */ _curry2(function nth2(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});
var paths = /* @__PURE__ */ _curry2(function paths2(pathsArray, obj) {
  return pathsArray.map(function (paths3) {
    var val = obj;
    var idx = 0;
    var p;
    while (idx < paths3.length) {
      if (val == null) {
        return;
      }
      p = paths3[idx];
      val = _isInteger(p) ? nth(p, val) : val[p];
      idx += 1;
    }
    return val;
  });
});
var path = /* @__PURE__ */ _curry2(function path2(pathAr, obj) {
  return paths([pathAr], obj)[0];
});
var prop = /* @__PURE__ */ _curry2(function prop2(p, obj) {
  return path([p], obj);
});
var pluck = /* @__PURE__ */ _curry2(function pluck2(p, list) {
  return map(prop(p), list);
});
var reduce = /* @__PURE__ */ _curry3(_reduce);
var allPass = /* @__PURE__ */ _curry1(function allPass2(preds) {
  return curryN(reduce(max, 0, pluck("length", preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});
var always = /* @__PURE__ */ _curry1(function always2(val) {
  return function () {
    return val;
  };
});
var and = /* @__PURE__ */ _curry2(function and2(a, b) {
  return a && b;
});
var XAny = /* @__PURE__ */ function () {
  function XAny2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny2.prototype["@@transducer/init"] = _xfBase.init;
  XAny2.prototype["@@transducer/result"] = function (result) {
    if (!this.any) {
      result = this.xf["@@transducer/step"](result, false);
    }
    return this.xf["@@transducer/result"](result);
  };
  XAny2.prototype["@@transducer/step"] = function (result, input) {
    if (this.f(input)) {
      this.any = true;
      result = _reduced(this.xf["@@transducer/step"](result, true));
    }
    return result;
  };
  return XAny2;
}();
var _xany = /* @__PURE__ */ _curry2(function _xany2(f, xf) {
  return new XAny(f, xf);
});
var any = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["any"], _xany, function any2(fn, list) {
    var idx = 0;
    while (idx < list.length) {
      if (fn(list[idx])) {
        return true;
      }
      idx += 1;
    }
    return false;
  }),
);
var anyPass = /* @__PURE__ */ _curry1(function anyPass2(preds) {
  return curryN(reduce(max, 0, pluck("length", preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});
var ap = /* @__PURE__ */ _curry2(function ap2(applyF, applyX) {
  return typeof applyX["fantasy-land/ap"] === "function"
    ? applyX["fantasy-land/ap"](applyF)
    : typeof applyF.ap === "function"
    ? applyF.ap(applyX)
    : typeof applyF === "function"
    ? function (x) {
      return applyF(x)(applyX(x));
    }
    : _reduce(
      function (acc, f) {
        return _concat(acc, map(f, applyX));
      },
      [],
      applyF,
    );
});
function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
}
var XAperture = /* @__PURE__ */ function () {
  function XAperture2(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture2.prototype["@@transducer/init"] = _xfBase.init;
  XAperture2.prototype["@@transducer/result"] = function (result) {
    this.acc = null;
    return this.xf["@@transducer/result"](result);
  };
  XAperture2.prototype["@@transducer/step"] = function (result, input) {
    this.store(input);
    return this.full
      ? this.xf["@@transducer/step"](result, this.getCopy())
      : result;
  };
  XAperture2.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture2.prototype.getCopy = function () {
    return _concat(
      Array.prototype.slice.call(this.acc, this.pos),
      Array.prototype.slice.call(this.acc, 0, this.pos),
    );
  };
  return XAperture2;
}();
var _xaperture = /* @__PURE__ */ _curry2(function _xaperture2(n, xf) {
  return new XAperture(n, xf);
});
var aperture = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], _xaperture, _aperture),
);
var append = /* @__PURE__ */ _curry2(function append2(el, list) {
  return _concat(list, [el]);
});
var apply = /* @__PURE__ */ _curry2(function apply2(fn, args) {
  return fn.apply(this, args);
});
var values = /* @__PURE__ */ _curry1(function values2(obj) {
  var props3 = keys(obj);
  var len = props3.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props3[idx]];
    idx += 1;
  }
  return vals;
});
function mapValues(fn, obj) {
  return keys(obj).reduce(function (acc, key) {
    acc[key] = fn(obj[key]);
    return acc;
  }, {});
}
var applySpec = /* @__PURE__ */ _curry1(function applySpec2(spec) {
  spec = mapValues(function (v) {
    return typeof v == "function" ? v : applySpec2(v);
  }, spec);
  return curryN(reduce(max, 0, pluck("length", values(spec))), function () {
    var args = arguments;
    return mapValues(function (f) {
      return apply(f, args);
    }, spec);
  });
});
var applyTo = /* @__PURE__ */ _curry2(function applyTo2(x, f) {
  return f(x);
});
var ascend = /* @__PURE__ */ _curry3(function ascend2(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});
var assoc = /* @__PURE__ */ _curry3(function assoc2(prop3, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop3] = val;
  return result;
});
var isNil = /* @__PURE__ */ _curry1(function isNil2(x) {
  return x == null;
});
var assocPath = /* @__PURE__ */ _curry3(function assocPath2(path3, val, obj) {
  if (path3.length === 0) {
    return val;
  }
  var idx = path3[0];
  if (path3.length > 1) {
    var nextObj = !isNil(obj) && _has(idx, obj)
      ? obj[idx]
      : _isInteger(path3[1])
      ? []
      : {};
    val = assocPath2(Array.prototype.slice.call(path3, 1), val, nextObj);
  }
  if (_isInteger(idx) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return assoc(idx, val, obj);
  }
});
var nAry = /* @__PURE__ */ _curry2(function nAry2(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.call(this);
      };
    case 1:
      return function (a0) {
        return fn.call(this, a0);
      };
    case 2:
      return function (a0, a1) {
        return fn.call(this, a0, a1);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.call(this, a0, a1, a2);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.call(this, a0, a1, a2, a3);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.call(this, a0, a1, a2, a3, a4);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.call(this, a0, a1, a2, a3, a4, a5);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      };
    default:
      throw new Error(
        "First argument to nAry must be a non-negative integer no greater than ten",
      );
  }
});
var binary = /* @__PURE__ */ _curry1(function binary2(fn) {
  return nAry(2, fn);
});
function _isFunction(x) {
  var type3 = Object.prototype.toString.call(x);
  return type3 === "[object Function]" || type3 === "[object AsyncFunction]" ||
    type3 === "[object GeneratorFunction]" ||
    type3 === "[object AsyncGeneratorFunction]";
}
var liftN = /* @__PURE__ */ _curry2(function liftN2(arity, fn) {
  var lifted = curryN(arity, fn);
  return curryN(arity, function () {
    return _reduce(
      ap,
      map(lifted, arguments[0]),
      Array.prototype.slice.call(arguments, 1),
    );
  });
});
var lift = /* @__PURE__ */ _curry1(function lift2(fn) {
  return liftN(fn.length, fn);
});
var both = /* @__PURE__ */ _curry2(function both2(f, g) {
  return _isFunction(f)
    ? function _both() {
      return f.apply(this, arguments) && g.apply(this, arguments);
    }
    : lift(and)(f, g);
});
var curry = /* @__PURE__ */ _curry1(function curry2(fn) {
  return curryN(fn.length, fn);
});
var call = /* @__PURE__ */ curry(function call2(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});
function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;
    while (idx < ilen) {
      if (_isArrayLike(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
}
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
  return map(f, _flatCat(xf));
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
      return _makeFlat(false)(map(fn, monad));
    },
  ),
);
var clamp = /* @__PURE__ */ _curry3(function clamp2(min3, max3, value) {
  if (min3 > max3) {
    throw new Error(
      "min must not be greater than max in clamp(min, max, value)",
    );
  }
  return value < min3 ? min3 : value > max3 ? max3 : value;
});
function _cloneRegExp(pattern) {
  return new RegExp(
    pattern.source,
    (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") +
      (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") +
      (pattern.unicode ? "u" : ""),
  );
}
var type = /* @__PURE__ */ _curry1(function type2(val) {
  return val === null
    ? "Null"
    : val === void 0
    ? "Undefined"
    : Object.prototype.toString.call(val).slice(8, -1);
});
function _clone(value, refFrom, refTo, deep) {
  var copy = function copy2(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (var key in value) {
      copiedValue[key] = deep
        ? _clone(value[key], refFrom, refTo, true)
        : value[key];
    }
    return copiedValue;
  };
  switch (type(value)) {
    case "Object":
      return copy({});
    case "Array":
      return copy([]);
    case "Date":
      return new Date(value.valueOf());
    case "RegExp":
      return _cloneRegExp(value);
    default:
      return value;
  }
}
var clone = /* @__PURE__ */ _curry1(function clone2(value) {
  return value != null && typeof value.clone === "function"
    ? value.clone()
    : _clone(value, [], [], true);
});
var comparator = /* @__PURE__ */ _curry1(function comparator2(pred) {
  return function (a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});
var not = /* @__PURE__ */ _curry1(function not2(a) {
  return !a;
});
var complement = /* @__PURE__ */ lift(not);
function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}
function _checkForMethod(methodname, fn) {
  return function () {
    var length3 = arguments.length;
    if (length3 === 0) {
      return fn();
    }
    var obj = arguments[length3 - 1];
    return _isArray(obj) || typeof obj[methodname] !== "function"
      ? fn.apply(this, arguments)
      : obj[methodname].apply(
        obj,
        Array.prototype.slice.call(arguments, 0, length3 - 1),
      );
  };
}
var slice = /* @__PURE__ */ _curry3(
  /* @__PURE__ */ _checkForMethod(
    "slice",
    function slice2(fromIndex, toIndex, list) {
      return Array.prototype.slice.call(list, fromIndex, toIndex);
    },
  ),
);
var tail = /* @__PURE__ */ _curry1(
  /* @__PURE__ */ _checkForMethod("tail", /* @__PURE__ */ slice(1, Infinity)),
);
function pipe() {
  if (arguments.length === 0) {
    throw new Error("pipe requires at least one argument");
  }
  return _arity(
    arguments[0].length,
    reduce(_pipe, arguments[0], tail(arguments)),
  );
}
var reverse = /* @__PURE__ */ _curry1(function reverse2(list) {
  return _isString(list)
    ? list.split("").reverse().join("")
    : Array.prototype.slice.call(list, 0).reverse();
});
function compose() {
  if (arguments.length === 0) {
    throw new Error("compose requires at least one argument");
  }
  return pipe.apply(this, reverse(arguments));
}
function composeK() {
  if (arguments.length === 0) {
    throw new Error("composeK requires at least one argument");
  }
  var init2 = Array.prototype.slice.call(arguments);
  var last2 = init2.pop();
  return compose(compose.apply(this, map(chain, init2)), last2);
}
function _pipeP(f, g) {
  return function () {
    var ctx = this;
    return f.apply(ctx, arguments).then(function (x) {
      return g.call(ctx, x);
    });
  };
}
function pipeP() {
  if (arguments.length === 0) {
    throw new Error("pipeP requires at least one argument");
  }
  return _arity(
    arguments[0].length,
    reduce(_pipeP, arguments[0], tail(arguments)),
  );
}
function composeP() {
  if (arguments.length === 0) {
    throw new Error("composeP requires at least one argument");
  }
  return pipeP.apply(this, reverse(arguments));
}
var head = /* @__PURE__ */ nth(0);
function _identity(x) {
  return x;
}
var identity = /* @__PURE__ */ _curry1(_identity);
var pipeWith = /* @__PURE__ */ _curry2(function pipeWith2(xf, list) {
  if (list.length <= 0) {
    return identity;
  }
  var headList = head(list);
  var tailList = tail(list);
  return _arity(headList.length, function () {
    return _reduce(
      function (result, f) {
        return xf.call(this, f, result);
      },
      headList.apply(this, arguments),
      tailList,
    );
  });
});
var composeWith = /* @__PURE__ */ _curry2(function composeWith2(xf, list) {
  return pipeWith.apply(this, [xf, reverse(list)]);
});
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}
function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}
function _functionName(f) {
  var match3 = String(f).match(/^function (\w*)/);
  return match3 == null ? "" : match3[1];
}
function _objectIs(a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  } else {
    return a !== a && b !== b;
  }
}
var _objectIs$1 = typeof Object.is === "function" ? Object.is : _objectIs;
function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);
  var b = _arrayFromIterator(bIterator);
  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }
  return !_includesWith(
    function (b2, aItem) {
      return !_includesWith(eq, aItem, b2);
    },
    b,
    a,
  );
}
function _equals(a, b, stackA, stackB) {
  if (_objectIs$1(a, b)) {
    return true;
  }
  var typeA = type(a);
  if (typeA !== type(b)) {
    return false;
  }
  if (a == null || b == null) {
    return false;
  }
  if (
    typeof a["fantasy-land/equals"] === "function" ||
    typeof b["fantasy-land/equals"] === "function"
  ) {
    return typeof a["fantasy-land/equals"] === "function" &&
      a["fantasy-land/equals"](b) &&
      typeof b["fantasy-land/equals"] === "function" &&
      b["fantasy-land/equals"](a);
  }
  if (typeof a.equals === "function" || typeof b.equals === "function") {
    return typeof a.equals === "function" && a.equals(b) &&
      typeof b.equals === "function" && b.equals(a);
  }
  switch (typeA) {
    case "Arguments":
    case "Array":
    case "Object":
      if (
        typeof a.constructor === "function" &&
        _functionName(a.constructor) === "Promise"
      ) {
        return a === b;
      }
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof a === typeof b && _objectIs$1(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case "Date":
      if (!_objectIs$1(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case "Error":
      return a.name === b.name && a.message === b.message;
    case "RegExp":
      if (
        !(a.source === b.source && a.global === b.global &&
          a.ignoreCase === b.ignoreCase && a.multiline === b.multiline &&
          a.sticky === b.sticky && a.unicode === b.unicode)
      ) {
        return false;
      }
      break;
  }
  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }
  switch (typeA) {
    case "Map":
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(
        a.entries(),
        b.entries(),
        stackA.concat([a]),
        stackB.concat([b]),
      );
    case "Set":
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(
        a.values(),
        b.values(),
        stackA.concat([a]),
        stackB.concat([b]),
      );
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return false;
  }
  var keysA = keys(a);
  if (keysA.length !== keys(b).length) {
    return false;
  }
  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (
      !(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))
    ) {
      return false;
    }
    idx -= 1;
  }
  return true;
}
var equals = /* @__PURE__ */ _curry2(function equals2(a, b) {
  return _equals(a, b, [], []);
});
function _indexOf(list, a, idx) {
  var inf, item;
  if (typeof list.indexOf === "function") {
    switch (typeof a) {
      case "number":
        if (a === 0) {
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === "number" && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        return list.indexOf(a, idx);
      case "string":
      case "boolean":
      case "function":
      case "undefined":
        return list.indexOf(a, idx);
      case "object":
        if (a === null) {
          return list.indexOf(a, idx);
        }
    }
  }
  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}
function _includes(a, list) {
  return _indexOf(list, a, 0) >= 0;
}
function _quote(s) {
  var escaped = s.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(
    /\f/g,
    "\\f",
  ).replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(
    /\v/g,
    "\\v",
  ).replace(/\0/g, "\\0");
  return '"' + escaped.replace(/"/g, '\\"') + '"';
}
var pad = function pad2(n) {
  return (n < 10 ? "0" : "") + n;
};
var _toISOString = typeof Date.prototype.toISOString === "function"
  ? function _toISOString2(d) {
    return d.toISOString();
  }
  : function _toISOString3(d) {
    return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" +
      pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" +
      pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "." +
      (d.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
  };
function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}
function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
}
function _isObject(x) {
  return Object.prototype.toString.call(x) === "[object Object]";
}
var XFilter = /* @__PURE__ */ function () {
  function XFilter2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter2.prototype["@@transducer/init"] = _xfBase.init;
  XFilter2.prototype["@@transducer/result"] = _xfBase.result;
  XFilter2.prototype["@@transducer/step"] = function (result, input) {
    return this.f(input) ? this.xf["@@transducer/step"](result, input) : result;
  };
  return XFilter2;
}();
var _xfilter = /* @__PURE__ */ _curry2(function _xfilter2(f, xf) {
  return new XFilter(f, xf);
});
var filter = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(
    ["filter"],
    _xfilter,
    function (pred, filterable) {
      return _isObject(filterable)
        ? _reduce(
          function (acc, key) {
            if (pred(filterable[key])) {
              acc[key] = filterable[key];
            }
            return acc;
          },
          {},
          keys(filterable),
        )
        : _filter(pred, filterable);
    },
  ),
);
var reject = /* @__PURE__ */ _curry2(function reject2(pred, filterable) {
  return filter(_complement(pred), filterable);
});
function _toString(x, seen) {
  var recur = function recur2(y) {
    var xs = seen.concat([x]);
    return _includes(y, xs) ? "<Circular>" : _toString(y, xs);
  };
  var mapPairs = function (obj, keys4) {
    return _map(function (k) {
      return _quote(k) + ": " + recur(obj[k]);
    }, keys4.slice().sort());
  };
  switch (Object.prototype.toString.call(x)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + _map(recur, x).join(", ") +
        "))";
    case "[object Array]":
      return "[" + _map(recur, x).concat(mapPairs(
        x,
        reject(function (k) {
          return /^\d+$/.test(k);
        }, keys(x)),
      )).join(", ") + "]";
    case "[object Boolean]":
      return typeof x === "object"
        ? "new Boolean(" + recur(x.valueOf()) + ")"
        : x.toString();
    case "[object Date]":
      return "new Date(" +
        (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) +
        ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof x === "object"
        ? "new Number(" + recur(x.valueOf()) + ")"
        : 1 / x === -Infinity
        ? "-0"
        : x.toString(10);
    case "[object String]":
      return typeof x === "object"
        ? "new String(" + recur(x.valueOf()) + ")"
        : _quote(x);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof x.toString === "function") {
        var repr = x.toString();
        if (repr !== "[object Object]") {
          return repr;
        }
      }
      return "{" + mapPairs(x, keys(x)).join(", ") + "}";
  }
}
var toString$1 = /* @__PURE__ */ _curry1(function toString2(val) {
  return _toString(val, []);
});
var concat = /* @__PURE__ */ _curry2(function concat2(a, b) {
  if (_isArray(a)) {
    if (_isArray(b)) {
      return a.concat(b);
    }
    throw new TypeError(toString$1(b) + " is not an array");
  }
  if (_isString(a)) {
    if (_isString(b)) {
      return a + b;
    }
    throw new TypeError(toString$1(b) + " is not a string");
  }
  if (a != null && _isFunction(a["fantasy-land/concat"])) {
    return a["fantasy-land/concat"](b);
  }
  if (a != null && _isFunction(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(
    toString$1(a) +
      ' does not have a method named "concat" or "fantasy-land/concat"',
  );
});
var cond = /* @__PURE__ */ _curry1(function cond2(pairs) {
  var arity = reduce(
    max,
    0,
    map(function (pair3) {
      return pair3[0].length;
    }, pairs),
  );
  return _arity(arity, function () {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});
var constructN = /* @__PURE__ */ _curry2(function constructN2(n, Fn) {
  if (n > 10) {
    throw new Error("Constructor with greater than ten arguments");
  }
  if (n === 0) {
    return function () {
      return new Fn();
    };
  }
  return curry(nAry(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case 1:
        return new Fn($0);
      case 2:
        return new Fn($0, $1);
      case 3:
        return new Fn($0, $1, $2);
      case 4:
        return new Fn($0, $1, $2, $3);
      case 5:
        return new Fn($0, $1, $2, $3, $4);
      case 6:
        return new Fn($0, $1, $2, $3, $4, $5);
      case 7:
        return new Fn($0, $1, $2, $3, $4, $5, $6);
      case 8:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case 9:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});
var construct = /* @__PURE__ */ _curry1(function construct2(Fn) {
  return constructN(Fn.length, Fn);
});
var contains$1 = /* @__PURE__ */ _curry2(_includes);
var converge = /* @__PURE__ */ _curry2(function converge2(after, fns) {
  return curryN(reduce(max, 0, pluck("length", fns)), function () {
    var args = arguments;
    var context = this;
    return after.apply(
      context,
      _map(function (fn) {
        return fn.apply(context, args);
      }, fns),
    );
  });
});
var XReduceBy = /* @__PURE__ */ function () {
  function XReduceBy2(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy2.prototype["@@transducer/init"] = _xfBase.init;
  XReduceBy2.prototype["@@transducer/result"] = function (result) {
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
  XReduceBy2.prototype["@@transducer/step"] = function (result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };
  return XReduceBy2;
}();
var _xreduceBy = /* @__PURE__ */ _curryN(
  4,
  [],
  function _xreduceBy2(valueFn, valueAcc, keyFn, xf) {
    return new XReduceBy(valueFn, valueAcc, keyFn, xf);
  },
);
var reduceBy = /* @__PURE__ */ _curryN(
  4,
  [],
  /* @__PURE__ */ _dispatchable(
    [],
    _xreduceBy,
    function reduceBy2(valueFn, valueAcc, keyFn, list) {
      return _reduce(
        function (acc, elt) {
          var key = keyFn(elt);
          acc[key] = valueFn(
            _has(key, acc) ? acc[key] : _clone(valueAcc, [], [], false),
            elt,
          );
          return acc;
        },
        {},
        list,
      );
    },
  ),
);
var countBy = /* @__PURE__ */ reduceBy(function (acc, elem) {
  return acc + 1;
}, 0);
var dec = /* @__PURE__ */ add(-1);
var defaultTo = /* @__PURE__ */ _curry2(function defaultTo2(d, v) {
  return v == null || v !== v ? d : v;
});
var descend = /* @__PURE__ */ _curry3(function descend2(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});
var _Set = /* @__PURE__ */ function () {
  function _Set2() {
    this._nativeSet = typeof Set === "function" ? new Set() : null;
    this._items = {};
  }
  _Set2.prototype.add = function (item) {
    return !hasOrAdd(item, true, this);
  };
  _Set2.prototype.has = function (item) {
    return hasOrAdd(item, false, this);
  };
  return _Set2;
}();
function hasOrAdd(item, shouldAdd, set3) {
  var type3 = typeof item;
  var prevSize, newSize;
  switch (type3) {
    case "string":
    case "number":
      if (item === 0 && 1 / item === -Infinity) {
        if (set3._items["-0"]) {
          return true;
        } else {
          if (shouldAdd) {
            set3._items["-0"] = true;
          }
          return false;
        }
      }
      if (set3._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set3._nativeSet.size;
          set3._nativeSet.add(item);
          newSize = set3._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set3._nativeSet.has(item);
        }
      } else {
        if (!(type3 in set3._items)) {
          if (shouldAdd) {
            set3._items[type3] = {};
            set3._items[type3][item] = true;
          }
          return false;
        } else if (item in set3._items[type3]) {
          return true;
        } else {
          if (shouldAdd) {
            set3._items[type3][item] = true;
          }
          return false;
        }
      }
    case "boolean":
      if (type3 in set3._items) {
        var bIdx = item ? 1 : 0;
        if (set3._items[type3][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set3._items[type3][bIdx] = true;
          }
          return false;
        }
      } else {
        if (shouldAdd) {
          set3._items[type3] = item ? [false, true] : [true, false];
        }
        return false;
      }
    case "function":
      if (set3._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set3._nativeSet.size;
          set3._nativeSet.add(item);
          newSize = set3._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set3._nativeSet.has(item);
        }
      } else {
        if (!(type3 in set3._items)) {
          if (shouldAdd) {
            set3._items[type3] = [item];
          }
          return false;
        }
        if (!_includes(item, set3._items[type3])) {
          if (shouldAdd) {
            set3._items[type3].push(item);
          }
          return false;
        }
        return true;
      }
    case "undefined":
      if (set3._items[type3]) {
        return true;
      } else {
        if (shouldAdd) {
          set3._items[type3] = true;
        }
        return false;
      }
    case "object":
      if (item === null) {
        if (!set3._items["null"]) {
          if (shouldAdd) {
            set3._items["null"] = true;
          }
          return false;
        }
        return true;
      }
    default:
      type3 = Object.prototype.toString.call(item);
      if (!(type3 in set3._items)) {
        if (shouldAdd) {
          set3._items[type3] = [item];
        }
        return false;
      }
      if (!_includes(item, set3._items[type3])) {
        if (shouldAdd) {
          set3._items[type3].push(item);
        }
        return false;
      }
      return true;
  }
}
var difference = /* @__PURE__ */ _curry2(function difference2(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  var secondLen = second.length;
  var toFilterOut = new _Set();
  for (var i = 0; i < secondLen; i += 1) {
    toFilterOut.add(second[i]);
  }
  while (idx < firstLen) {
    if (toFilterOut.add(first[idx])) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});
var differenceWith = /* @__PURE__ */ _curry3(
  function differenceWith2(pred, first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    while (idx < firstLen) {
      if (
        !_includesWith(pred, first[idx], second) &&
        !_includesWith(pred, first[idx], out)
      ) {
        out.push(first[idx]);
      }
      idx += 1;
    }
    return out;
  },
);
var dissoc = /* @__PURE__ */ _curry2(function dissoc2(prop3, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop3];
  return result;
});
var remove = /* @__PURE__ */ _curry3(function remove2(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});
var update = /* @__PURE__ */ _curry3(function update2(idx, x, list) {
  return adjust(idx, always(x), list);
});
var dissocPath = /* @__PURE__ */ _curry2(function dissocPath2(path3, obj) {
  switch (path3.length) {
    case 0:
      return obj;
    case 1:
      return _isInteger(path3[0]) && _isArray(obj)
        ? remove(path3[0], 1, obj)
        : dissoc(path3[0], obj);
    default:
      var head2 = path3[0];
      var tail2 = Array.prototype.slice.call(path3, 1);
      if (obj[head2] == null) {
        return obj;
      } else if (_isInteger(head2) && _isArray(obj)) {
        return update(head2, dissocPath2(tail2, obj[head2]), obj);
      } else {
        return assoc(head2, dissocPath2(tail2, obj[head2]), obj);
      }
  }
});
var divide = /* @__PURE__ */ _curry2(function divide2(a, b) {
  return a / b;
});
var XDrop = /* @__PURE__ */ function () {
  function XDrop2(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop2.prototype["@@transducer/init"] = _xfBase.init;
  XDrop2.prototype["@@transducer/result"] = _xfBase.result;
  XDrop2.prototype["@@transducer/step"] = function (result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf["@@transducer/step"](result, input);
  };
  return XDrop2;
}();
var _xdrop = /* @__PURE__ */ _curry2(function _xdrop2(n, xf) {
  return new XDrop(n, xf);
});
var drop = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["drop"], _xdrop, function drop2(n, xs) {
    return slice(Math.max(0, n), Infinity, xs);
  }),
);
var XTake = /* @__PURE__ */ function () {
  function XTake2(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake2.prototype["@@transducer/init"] = _xfBase.init;
  XTake2.prototype["@@transducer/result"] = _xfBase.result;
  XTake2.prototype["@@transducer/step"] = function (result, input) {
    this.i += 1;
    var ret = this.n === 0
      ? result
      : this.xf["@@transducer/step"](result, input);
    return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
  };
  return XTake2;
}();
var _xtake = /* @__PURE__ */ _curry2(function _xtake2(n, xf) {
  return new XTake(n, xf);
});
var take = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["take"], _xtake, function take2(n, xs) {
    return slice(0, n < 0 ? Infinity : n, xs);
  }),
);
function dropLast(n, xs) {
  return take(n < xs.length ? xs.length - n : 0, xs);
}
var XDropLast = /* @__PURE__ */ function () {
  function XDropLast2(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast2.prototype["@@transducer/init"] = _xfBase.init;
  XDropLast2.prototype["@@transducer/result"] = function (result) {
    this.acc = null;
    return this.xf["@@transducer/result"](result);
  };
  XDropLast2.prototype["@@transducer/step"] = function (result, input) {
    if (this.full) {
      result = this.xf["@@transducer/step"](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast2.prototype.store = function (input) {
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
var dropLast$1 = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], _xdropLast, dropLast),
);
function dropLastWhile(pred, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && pred(xs[idx])) {
    idx -= 1;
  }
  return slice(0, idx + 1, xs);
}
var XDropLastWhile = /* @__PURE__ */ function () {
  function XDropLastWhile2(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile2.prototype["@@transducer/init"] = _xfBase.init;
  XDropLastWhile2.prototype["@@transducer/result"] = function (result) {
    this.retained = null;
    return this.xf["@@transducer/result"](result);
  };
  XDropLastWhile2.prototype["@@transducer/step"] = function (result, input) {
    return this.f(input)
      ? this.retain(result, input)
      : this.flush(result, input);
  };
  XDropLastWhile2.prototype.flush = function (result, input) {
    result = _reduce(this.xf["@@transducer/step"], result, this.retained);
    this.retained = [];
    return this.xf["@@transducer/step"](result, input);
  };
  XDropLastWhile2.prototype.retain = function (result, input) {
    this.retained.push(input);
    return result;
  };
  return XDropLastWhile2;
}();
var _xdropLastWhile = /* @__PURE__ */ _curry2(
  function _xdropLastWhile2(fn, xf) {
    return new XDropLastWhile(fn, xf);
  },
);
var dropLastWhile$1 = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], _xdropLastWhile, dropLastWhile),
);
var XDropRepeatsWith = /* @__PURE__ */ function () {
  function XDropRepeatsWith2(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = void 0;
    this.seenFirstValue = false;
  }
  XDropRepeatsWith2.prototype["@@transducer/init"] = _xfBase.init;
  XDropRepeatsWith2.prototype["@@transducer/result"] = _xfBase.result;
  XDropRepeatsWith2.prototype["@@transducer/step"] = function (result, input) {
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
var _xdropRepeatsWith = /* @__PURE__ */ _curry2(
  function _xdropRepeatsWith2(pred, xf) {
    return new XDropRepeatsWith(pred, xf);
  },
);
var last = /* @__PURE__ */ nth(-1);
var dropRepeatsWith = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(
    [],
    _xdropRepeatsWith,
    function dropRepeatsWith2(pred, list) {
      var result = [];
      var idx = 1;
      var len = list.length;
      if (len !== 0) {
        result[0] = list[0];
        while (idx < len) {
          if (!pred(last(result), list[idx])) {
            result[result.length] = list[idx];
          }
          idx += 1;
        }
      }
      return result;
    },
  ),
);
var dropRepeats = /* @__PURE__ */ _curry1(
  /* @__PURE__ */ _dispatchable(
    [],
    /* @__PURE__ */ _xdropRepeatsWith(equals),
    /* @__PURE__ */ dropRepeatsWith(equals),
  ),
);
var XDropWhile = /* @__PURE__ */ function () {
  function XDropWhile2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile2.prototype["@@transducer/init"] = _xfBase.init;
  XDropWhile2.prototype["@@transducer/result"] = _xfBase.result;
  XDropWhile2.prototype["@@transducer/step"] = function (result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf["@@transducer/step"](result, input);
  };
  return XDropWhile2;
}();
var _xdropWhile = /* @__PURE__ */ _curry2(function _xdropWhile2(f, xf) {
  return new XDropWhile(f, xf);
});
var dropWhile = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(
    ["dropWhile"],
    _xdropWhile,
    function dropWhile2(pred, xs) {
      var idx = 0;
      var len = xs.length;
      while (idx < len && pred(xs[idx])) {
        idx += 1;
      }
      return slice(idx, Infinity, xs);
    },
  ),
);
var or = /* @__PURE__ */ _curry2(function or2(a, b) {
  return a || b;
});
var either = /* @__PURE__ */ _curry2(function either2(f, g) {
  return _isFunction(f)
    ? function _either() {
      return f.apply(this, arguments) || g.apply(this, arguments);
    }
    : lift(or)(f, g);
});
var empty = /* @__PURE__ */ _curry1(function empty2(x) {
  return x != null && typeof x["fantasy-land/empty"] === "function"
    ? x["fantasy-land/empty"]()
    : x != null && x.constructor != null &&
        typeof x.constructor["fantasy-land/empty"] === "function"
    ? x.constructor["fantasy-land/empty"]()
    : x != null && typeof x.empty === "function"
    ? x.empty()
    : x != null && x.constructor != null &&
        typeof x.constructor.empty === "function"
    ? x.constructor.empty()
    : _isArray(x)
    ? []
    : _isString(x)
    ? ""
    : _isObject(x)
    ? {}
    : _isArguments(x)
    ? function () {
      return arguments;
    }()
    : void 0;
});
var takeLast = /* @__PURE__ */ _curry2(function takeLast2(n, xs) {
  return drop(n >= 0 ? xs.length - n : 0, xs);
});
var endsWith = /* @__PURE__ */ _curry2(function (suffix, list) {
  return equals(takeLast(suffix.length, list), suffix);
});
var eqBy = /* @__PURE__ */ _curry3(function eqBy2(f, x, y) {
  return equals(f(x), f(y));
});
var eqProps = /* @__PURE__ */ _curry3(function eqProps2(prop3, obj1, obj2) {
  return equals(obj1[prop3], obj2[prop3]);
});
var evolve = /* @__PURE__ */ _curry2(function evolve2(transformations, object) {
  var result = object instanceof Array ? [] : {};
  var transformation, key, type3;
  for (key in object) {
    transformation = transformations[key];
    type3 = typeof transformation;
    result[key] = type3 === "function"
      ? transformation(object[key])
      : transformation && type3 === "object"
      ? evolve2(transformation, object[key])
      : object[key];
  }
  return result;
});
var XFind = /* @__PURE__ */ function () {
  function XFind2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind2.prototype["@@transducer/init"] = _xfBase.init;
  XFind2.prototype["@@transducer/result"] = function (result) {
    if (!this.found) {
      result = this.xf["@@transducer/step"](result, void 0);
    }
    return this.xf["@@transducer/result"](result);
  };
  XFind2.prototype["@@transducer/step"] = function (result, input) {
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
var find = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["find"], _xfind, function find2(fn, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (fn(list[idx])) {
        return list[idx];
      }
      idx += 1;
    }
  }),
);
var XFindIndex = /* @__PURE__ */ function () {
  function XFindIndex2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex2.prototype["@@transducer/init"] = _xfBase.init;
  XFindIndex2.prototype["@@transducer/result"] = function (result) {
    if (!this.found) {
      result = this.xf["@@transducer/step"](result, -1);
    }
    return this.xf["@@transducer/result"](result);
  };
  XFindIndex2.prototype["@@transducer/step"] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf["@@transducer/step"](result, this.idx));
    }
    return result;
  };
  return XFindIndex2;
}();
var _xfindIndex = /* @__PURE__ */ _curry2(function _xfindIndex2(f, xf) {
  return new XFindIndex(f, xf);
});
var findIndex = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], _xfindIndex, function findIndex2(fn, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (fn(list[idx])) {
        return idx;
      }
      idx += 1;
    }
    return -1;
  }),
);
var XFindLast = /* @__PURE__ */ function () {
  function XFindLast2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast2.prototype["@@transducer/init"] = _xfBase.init;
  XFindLast2.prototype["@@transducer/result"] = function (result) {
    return this.xf["@@transducer/result"](
      this.xf["@@transducer/step"](result, this.last),
    );
  };
  XFindLast2.prototype["@@transducer/step"] = function (result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };
  return XFindLast2;
}();
var _xfindLast = /* @__PURE__ */ _curry2(function _xfindLast2(f, xf) {
  return new XFindLast(f, xf);
});
var findLast = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], _xfindLast, function findLast2(fn, list) {
    var idx = list.length - 1;
    while (idx >= 0) {
      if (fn(list[idx])) {
        return list[idx];
      }
      idx -= 1;
    }
  }),
);
var XFindLastIndex = /* @__PURE__ */ function () {
  function XFindLastIndex2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex2.prototype["@@transducer/init"] = _xfBase.init;
  XFindLastIndex2.prototype["@@transducer/result"] = function (result) {
    return this.xf["@@transducer/result"](
      this.xf["@@transducer/step"](result, this.lastIdx),
    );
  };
  XFindLastIndex2.prototype["@@transducer/step"] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };
  return XFindLastIndex2;
}();
var _xfindLastIndex = /* @__PURE__ */ _curry2(function _xfindLastIndex2(f, xf) {
  return new XFindLastIndex(f, xf);
});
var findLastIndex = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(
    [],
    _xfindLastIndex,
    function findLastIndex2(fn, list) {
      var idx = list.length - 1;
      while (idx >= 0) {
        if (fn(list[idx])) {
          return idx;
        }
        idx -= 1;
      }
      return -1;
    },
  ),
);
var flatten = /* @__PURE__ */ _curry1(/* @__PURE__ */ _makeFlat(true));
var flip = /* @__PURE__ */ _curry1(function flip2(fn) {
  return curryN(fn.length, function (a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});
var forEach = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _checkForMethod("forEach", function forEach2(fn, list) {
    var len = list.length;
    var idx = 0;
    while (idx < len) {
      fn(list[idx]);
      idx += 1;
    }
    return list;
  }),
);
var forEachObjIndexed = /* @__PURE__ */ _curry2(
  function forEachObjIndexed2(fn, obj) {
    var keyList = keys(obj);
    var idx = 0;
    while (idx < keyList.length) {
      var key = keyList[idx];
      fn(obj[key], key, obj);
      idx += 1;
    }
    return obj;
  },
);
var fromPairs = /* @__PURE__ */ _curry1(function fromPairs2(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});
var groupBy = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _checkForMethod(
    "groupBy",
    /* @__PURE__ */ reduceBy(function (acc, item) {
      if (acc == null) {
        acc = [];
      }
      acc.push(item);
      return acc;
    }, null),
  ),
);
var groupWith = /* @__PURE__ */ _curry2(function (fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});
var gt = /* @__PURE__ */ _curry2(function gt2(a, b) {
  return a > b;
});
var gte = /* @__PURE__ */ _curry2(function gte2(a, b) {
  return a >= b;
});
var hasPath = /* @__PURE__ */ _curry2(function hasPath2(_path, obj) {
  if (_path.length === 0 || isNil(obj)) {
    return false;
  }
  var val = obj;
  var idx = 0;
  while (idx < _path.length) {
    if (!isNil(val) && _has(_path[idx], val)) {
      val = val[_path[idx]];
      idx += 1;
    } else {
      return false;
    }
  }
  return true;
});
var has = /* @__PURE__ */ _curry2(function has2(prop3, obj) {
  return hasPath([prop3], obj);
});
var hasIn = /* @__PURE__ */ _curry2(function hasIn2(prop3, obj) {
  return prop3 in obj;
});
var identical = /* @__PURE__ */ _curry2(_objectIs$1);
var ifElse = /* @__PURE__ */ _curry3(
  function ifElse2(condition, onTrue, onFalse) {
    return curryN(
      Math.max(condition.length, onTrue.length, onFalse.length),
      function _ifElse() {
        return condition.apply(this, arguments)
          ? onTrue.apply(this, arguments)
          : onFalse.apply(this, arguments);
      },
    );
  },
);
var inc = /* @__PURE__ */ add(1);
var includes = /* @__PURE__ */ _curry2(_includes);
var indexBy = /* @__PURE__ */ reduceBy(function (acc, elem) {
  return elem;
}, null);
var indexOf = /* @__PURE__ */ _curry2(function indexOf2(target, xs) {
  return typeof xs.indexOf === "function" && !_isArray(xs)
    ? xs.indexOf(target)
    : _indexOf(xs, target, 0);
});
var init = /* @__PURE__ */ slice(0, -1);
var innerJoin = /* @__PURE__ */ _curry3(function innerJoin2(pred, xs, ys) {
  return _filter(function (x) {
    return _includesWith(pred, x, ys);
  }, xs);
});
var insert = /* @__PURE__ */ _curry3(function insert2(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});
var insertAll = /* @__PURE__ */ _curry3(function insertAll2(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(
    Array.prototype.slice.call(list, 0, idx),
    elts,
    Array.prototype.slice.call(list, idx),
  );
});
var uniqBy = /* @__PURE__ */ _curry2(function uniqBy2(fn, list) {
  var set3 = new _Set();
  var result = [];
  var idx = 0;
  var appliedItem, item;
  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set3.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});
var uniq = /* @__PURE__ */ uniqBy(identity);
var intersection = /* @__PURE__ */ _curry2(
  function intersection2(list1, list2) {
    var lookupList, filteredList;
    if (list1.length > list2.length) {
      lookupList = list1;
      filteredList = list2;
    } else {
      lookupList = list2;
      filteredList = list1;
    }
    return uniq(_filter(flip(_includes)(lookupList), filteredList));
  },
);
var intersperse = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _checkForMethod(
    "intersperse",
    function intersperse2(separator, list) {
      var out = [];
      var idx = 0;
      var length3 = list.length;
      while (idx < length3) {
        if (idx === length3 - 1) {
          out.push(list[idx]);
        } else {
          out.push(list[idx], separator);
        }
        idx += 1;
      }
      return out;
    },
  ),
);
function _objectAssign(target) {
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  var output = Object(target);
  var idx = 1;
  var length3 = arguments.length;
  while (idx < length3) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (_has(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
}
var _objectAssign$1 = typeof Object.assign === "function"
  ? Object.assign
  : _objectAssign;
var objOf = /* @__PURE__ */ _curry2(function objOf2(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});
var _stepCatArray = {
  "@@transducer/init": Array,
  "@@transducer/step": function (xs, x) {
    xs.push(x);
    return xs;
  },
  "@@transducer/result": _identity,
};
var _stepCatString = {
  "@@transducer/init": String,
  "@@transducer/step": function (a, b) {
    return a + b;
  },
  "@@transducer/result": _identity,
};
var _stepCatObject = {
  "@@transducer/init": Object,
  "@@transducer/step": function (result, input) {
    return _objectAssign$1(
      result,
      _isArrayLike(input) ? objOf(input[0], input[1]) : input,
    );
  },
  "@@transducer/result": _identity,
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
  return _isTransformer(acc)
    ? _reduce(xf(acc), acc["@@transducer/init"](), list)
    : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
});
var invert = /* @__PURE__ */ _curry1(function invert2(obj) {
  var props3 = keys(obj);
  var len = props3.length;
  var idx = 0;
  var out = {};
  while (idx < len) {
    var key = props3[idx];
    var val = obj[key];
    var list = _has(val, out) ? out[val] : out[val] = [];
    list[list.length] = key;
    idx += 1;
  }
  return out;
});
var invertObj = /* @__PURE__ */ _curry1(function invertObj2(obj) {
  var props3 = keys(obj);
  var len = props3.length;
  var idx = 0;
  var out = {};
  while (idx < len) {
    var key = props3[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});
var invoker = /* @__PURE__ */ _curry2(function invoker2(arity, method) {
  return curryN(arity + 1, function () {
    var target = arguments[arity];
    if (target != null && _isFunction(target[method])) {
      return target[method].apply(
        target,
        Array.prototype.slice.call(arguments, 0, arity),
      );
    }
    throw new TypeError(
      toString$1(target) + ' does not have a method named "' + method + '"',
    );
  });
});
var is = /* @__PURE__ */ _curry2(function is2(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});
var isEmpty = /* @__PURE__ */ _curry1(function isEmpty2(x) {
  return x != null && equals(x, empty(x));
});
var join = /* @__PURE__ */ invoker(1, "join");
var juxt = /* @__PURE__ */ _curry1(function juxt2(fns) {
  return converge(function () {
    return Array.prototype.slice.call(arguments, 0);
  }, fns);
});
var keysIn = /* @__PURE__ */ _curry1(function keysIn2(obj) {
  var prop3;
  var ks = [];
  for (prop3 in obj) {
    ks[ks.length] = prop3;
  }
  return ks;
});
var lastIndexOf = /* @__PURE__ */ _curry2(function lastIndexOf2(target, xs) {
  if (typeof xs.lastIndexOf === "function" && !_isArray(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (equals(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});
function _isNumber(x) {
  return Object.prototype.toString.call(x) === "[object Number]";
}
var length = /* @__PURE__ */ _curry1(function length2(list) {
  return list != null && _isNumber(list.length) ? list.length : NaN;
});
var lens = /* @__PURE__ */ _curry2(function lens2(getter, setter) {
  return function (toFunctorFn) {
    return function (target) {
      return map(function (focus) {
        return setter(focus, target);
      }, toFunctorFn(getter(target)));
    };
  };
});
var lensIndex = /* @__PURE__ */ _curry1(function lensIndex2(n) {
  return lens(nth(n), update(n));
});
var lensPath = /* @__PURE__ */ _curry1(function lensPath2(p) {
  return lens(path(p), assocPath(p));
});
var lensProp = /* @__PURE__ */ _curry1(function lensProp2(k) {
  return lens(prop(k), assoc(k));
});
var lt = /* @__PURE__ */ _curry2(function lt2(a, b) {
  return a < b;
});
var lte = /* @__PURE__ */ _curry2(function lte2(a, b) {
  return a <= b;
});
var mapAccum = /* @__PURE__ */ _curry3(function mapAccum2(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});
var mapAccumRight = /* @__PURE__ */ _curry3(
  function mapAccumRight2(fn, acc, list) {
    var idx = list.length - 1;
    var result = [];
    var tuple = [acc];
    while (idx >= 0) {
      tuple = fn(tuple[0], list[idx]);
      result[idx] = tuple[1];
      idx -= 1;
    }
    return [tuple[0], result];
  },
);
var mapObjIndexed = /* @__PURE__ */ _curry2(function mapObjIndexed2(fn, obj) {
  return _reduce(
    function (acc, key) {
      acc[key] = fn(obj[key], key, obj);
      return acc;
    },
    {},
    keys(obj),
  );
});
var match = /* @__PURE__ */ _curry2(function match2(rx, str) {
  return str.match(rx) || [];
});
var mathMod = /* @__PURE__ */ _curry2(function mathMod2(m, p) {
  if (!_isInteger(m)) {
    return NaN;
  }
  if (!_isInteger(p) || p < 1) {
    return NaN;
  }
  return (m % p + p) % p;
});
var maxBy = /* @__PURE__ */ _curry3(function maxBy2(f, a, b) {
  return f(b) > f(a) ? b : a;
});
var sum = /* @__PURE__ */ reduce(add, 0);
var mean = /* @__PURE__ */ _curry1(function mean2(list) {
  return sum(list) / list.length;
});
var median = /* @__PURE__ */ _curry1(function median2(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return mean(
    Array.prototype.slice.call(list, 0).sort(function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }).slice(idx, idx + width),
  );
});
var memoizeWith = /* @__PURE__ */ _curry2(function memoizeWith2(mFn, fn) {
  var cache = {};
  return _arity(fn.length, function () {
    var key = mFn.apply(this, arguments);
    if (!_has(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});
var merge = /* @__PURE__ */ _curry2(function merge2(l, r) {
  return _objectAssign$1({}, l, r);
});
var mergeAll = /* @__PURE__ */ _curry1(function mergeAll2(list) {
  return _objectAssign$1.apply(null, [{}].concat(list));
});
var mergeWithKey = /* @__PURE__ */ _curry3(function mergeWithKey2(fn, l, r) {
  var result = {};
  var k;
  for (k in l) {
    if (_has(k, l)) {
      result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }
  for (k in r) {
    if (_has(k, r) && !_has(k, result)) {
      result[k] = r[k];
    }
  }
  return result;
});
var mergeDeepWithKey = /* @__PURE__ */ _curry3(
  function mergeDeepWithKey2(fn, lObj, rObj) {
    return mergeWithKey(
      function (k, lVal, rVal) {
        if (_isObject(lVal) && _isObject(rVal)) {
          return mergeDeepWithKey2(fn, lVal, rVal);
        } else {
          return fn(k, lVal, rVal);
        }
      },
      lObj,
      rObj,
    );
  },
);
var mergeDeepLeft = /* @__PURE__ */ _curry2(
  function mergeDeepLeft2(lObj, rObj) {
    return mergeDeepWithKey(
      function (k, lVal, rVal) {
        return lVal;
      },
      lObj,
      rObj,
    );
  },
);
var mergeDeepRight = /* @__PURE__ */ _curry2(
  function mergeDeepRight2(lObj, rObj) {
    return mergeDeepWithKey(
      function (k, lVal, rVal) {
        return rVal;
      },
      lObj,
      rObj,
    );
  },
);
var mergeDeepWith = /* @__PURE__ */ _curry3(
  function mergeDeepWith2(fn, lObj, rObj) {
    return mergeDeepWithKey(
      function (k, lVal, rVal) {
        return fn(lVal, rVal);
      },
      lObj,
      rObj,
    );
  },
);
var mergeLeft = /* @__PURE__ */ _curry2(function mergeLeft2(l, r) {
  return _objectAssign$1({}, r, l);
});
var mergeRight = /* @__PURE__ */ _curry2(function mergeRight2(l, r) {
  return _objectAssign$1({}, l, r);
});
var mergeWith = /* @__PURE__ */ _curry3(function mergeWith2(fn, l, r) {
  return mergeWithKey(
    function (_, _l, _r) {
      return fn(_l, _r);
    },
    l,
    r,
  );
});
var min = /* @__PURE__ */ _curry2(function min2(a, b) {
  return b < a ? b : a;
});
var minBy = /* @__PURE__ */ _curry3(function minBy2(f, a, b) {
  return f(b) < f(a) ? b : a;
});
var modulo = /* @__PURE__ */ _curry2(function modulo2(a, b) {
  return a % b;
});
var move = /* @__PURE__ */ _curry3(function (from, to, list) {
  var length3 = list.length;
  var result = list.slice();
  var positiveFrom = from < 0 ? length3 + from : from;
  var positiveTo = to < 0 ? length3 + to : to;
  var item = result.splice(positiveFrom, 1);
  return positiveFrom < 0 || positiveFrom >= list.length || positiveTo < 0 ||
      positiveTo >= list.length
    ? list
    : [].concat(result.slice(0, positiveTo)).concat(item).concat(
      result.slice(positiveTo, list.length),
    );
});
var multiply = /* @__PURE__ */ _curry2(function multiply2(a, b) {
  return a * b;
});
var negate = /* @__PURE__ */ _curry1(function negate2(n) {
  return -n;
});
var none = /* @__PURE__ */ _curry2(function none2(fn, input) {
  return all(_complement(fn), input);
});
var nthArg = /* @__PURE__ */ _curry1(function nthArg2(n) {
  var arity = n < 0 ? 1 : n + 1;
  return curryN(arity, function () {
    return nth(n, arguments);
  });
});
var o = /* @__PURE__ */ _curry3(function o2(f, g, x) {
  return f(g(x));
});
function _of(x) {
  return [x];
}
var of = /* @__PURE__ */ _curry1(_of);
var omit = /* @__PURE__ */ _curry2(function omit2(names, obj) {
  var result = {};
  var index = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    index[names[idx]] = 1;
    idx += 1;
  }
  for (var prop3 in obj) {
    if (!index.hasOwnProperty(prop3)) {
      result[prop3] = obj[prop3];
    }
  }
  return result;
});
var once = /* @__PURE__ */ _curry1(function once2(fn) {
  var called = false;
  var result;
  return _arity(fn.length, function () {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});
function _assertPromise(name, p) {
  if (p == null || !_isFunction(p.then)) {
    throw new TypeError(
      "`" + name + "` expected a Promise, received " + _toString(p, []),
    );
  }
}
var otherwise = /* @__PURE__ */ _curry2(function otherwise2(f, p) {
  _assertPromise("otherwise", p);
  return p.then(null, f);
});
var Identity = function (x) {
  return {
    value: x,
    map: function (f) {
      return Identity(f(x));
    },
  };
};
var over = /* @__PURE__ */ _curry3(function over2(lens3, f, x) {
  return lens3(function (y) {
    return Identity(f(y));
  })(x).value;
});
var pair = /* @__PURE__ */ _curry2(function pair2(fst, snd) {
  return [fst, snd];
});
function _createPartialApplicator(concat3) {
  return _curry2(function (fn, args) {
    return _arity(Math.max(0, fn.length - args.length), function () {
      return fn.apply(this, concat3(args, arguments));
    });
  });
}
var partial = /* @__PURE__ */ _createPartialApplicator(_concat);
var partialRight = /* @__PURE__ */ _createPartialApplicator(
  /* @__PURE__ */ flip(_concat),
);
var partition = /* @__PURE__ */ juxt([filter, reject]);
var pathEq = /* @__PURE__ */ _curry3(function pathEq2(_path, val, obj) {
  return equals(path(_path, obj), val);
});
var pathOr = /* @__PURE__ */ _curry3(function pathOr2(d, p, obj) {
  return defaultTo(d, path(p, obj));
});
var pathSatisfies = /* @__PURE__ */ _curry3(
  function pathSatisfies2(pred, propPath, obj) {
    return pred(path(propPath, obj));
  },
);
var pick = /* @__PURE__ */ _curry2(function pick2(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});
var pickAll = /* @__PURE__ */ _curry2(function pickAll2(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});
var pickBy = /* @__PURE__ */ _curry2(function pickBy2(test3, obj) {
  var result = {};
  for (var prop3 in obj) {
    if (test3(obj[prop3], prop3, obj)) {
      result[prop3] = obj[prop3];
    }
  }
  return result;
});
function pipeK() {
  if (arguments.length === 0) {
    throw new Error("pipeK requires at least one argument");
  }
  return composeK.apply(this, reverse(arguments));
}
var prepend = /* @__PURE__ */ _curry2(function prepend2(el, list) {
  return _concat([el], list);
});
var product = /* @__PURE__ */ reduce(multiply, 1);
var useWith = /* @__PURE__ */ _curry2(function useWith2(fn, transformers) {
  return curryN(transformers.length, function () {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(
      this,
      args.concat(Array.prototype.slice.call(arguments, transformers.length)),
    );
  });
});
var project = /* @__PURE__ */ useWith(_map, [pickAll, identity]);
var propEq = /* @__PURE__ */ _curry3(function propEq2(name, val, obj) {
  return equals(val, obj[name]);
});
var propIs = /* @__PURE__ */ _curry3(function propIs2(type3, name, obj) {
  return is(type3, obj[name]);
});
var propOr = /* @__PURE__ */ _curry3(function propOr2(val, p, obj) {
  return pathOr(val, [p], obj);
});
var propSatisfies = /* @__PURE__ */ _curry3(
  function propSatisfies2(pred, name, obj) {
    return pred(obj[name]);
  },
);
var props = /* @__PURE__ */ _curry2(function props2(ps, obj) {
  return ps.map(function (p) {
    return path([p], obj);
  });
});
var range = /* @__PURE__ */ _curry2(function range2(from, to) {
  if (!(_isNumber(from) && _isNumber(to))) {
    throw new TypeError("Both arguments to range must be numbers");
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});
var reduceRight = /* @__PURE__ */ _curry3(function reduceRight2(fn, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn(list[idx], acc);
    idx -= 1;
  }
  return acc;
});
var reduceWhile = /* @__PURE__ */ _curryN(
  4,
  [],
  function _reduceWhile(pred, fn, a, list) {
    return _reduce(
      function (acc, x) {
        return pred(acc, x) ? fn(acc, x) : _reduced(acc);
      },
      a,
      list,
    );
  },
);
var reduced = /* @__PURE__ */ _curry1(_reduced);
var times = /* @__PURE__ */ _curry2(function times2(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;
  if (len < 0 || isNaN(len)) {
    throw new RangeError("n must be a non-negative number");
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});
var repeat = /* @__PURE__ */ _curry2(function repeat2(value, n) {
  return times(always(value), n);
});
var replace = /* @__PURE__ */ _curry3(
  function replace2(regex, replacement, str) {
    return str.replace(regex, replacement);
  },
);
var scan = /* @__PURE__ */ _curry3(function scan2(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [acc];
  while (idx < len) {
    acc = fn(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
});
var sequence = /* @__PURE__ */ _curry2(function sequence2(of2, traversable) {
  return typeof traversable.sequence === "function"
    ? traversable.sequence(of2)
    : reduceRight(
      function (x, acc) {
        return ap(map(prepend, x), acc);
      },
      of2([]),
      traversable,
    );
});
var set = /* @__PURE__ */ _curry3(function set2(lens3, v, x) {
  return over(lens3, always(v), x);
});
var sort = /* @__PURE__ */ _curry2(function sort2(comparator3, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator3);
});
var sortBy = /* @__PURE__ */ _curry2(function sortBy2(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});
var sortWith = /* @__PURE__ */ _curry2(function sortWith2(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var result = 0;
    var i = 0;
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }
    return result;
  });
});
var split = /* @__PURE__ */ invoker(1, "split");
var splitAt = /* @__PURE__ */ _curry2(function splitAt2(index, array) {
  return [slice(0, index, array), slice(index, length(array), array)];
});
var splitEvery = /* @__PURE__ */ _curry2(function splitEvery2(n, list) {
  if (n <= 0) {
    throw new Error("First argument to splitEvery must be a positive integer");
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(slice(idx, idx += n, list));
  }
  return result;
});
var splitWhen = /* @__PURE__ */ _curry2(function splitWhen2(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];
  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }
  return [prefix, Array.prototype.slice.call(list, idx)];
});
var startsWith = /* @__PURE__ */ _curry2(function (prefix, list) {
  return equals(take(prefix.length, list), prefix);
});
var subtract = /* @__PURE__ */ _curry2(function subtract2(a, b) {
  return Number(a) - Number(b);
});
var symmetricDifference = /* @__PURE__ */ _curry2(
  function symmetricDifference2(list1, list2) {
    return concat(difference(list1, list2), difference(list2, list1));
  },
);
var symmetricDifferenceWith = /* @__PURE__ */ _curry3(
  function symmetricDifferenceWith2(pred, list1, list2) {
    return concat(
      differenceWith(pred, list1, list2),
      differenceWith(pred, list2, list1),
    );
  },
);
var takeLastWhile = /* @__PURE__ */ _curry2(function takeLastWhile2(fn, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && fn(xs[idx])) {
    idx -= 1;
  }
  return slice(idx + 1, Infinity, xs);
});
var XTakeWhile = /* @__PURE__ */ function () {
  function XTakeWhile2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile2.prototype["@@transducer/init"] = _xfBase.init;
  XTakeWhile2.prototype["@@transducer/result"] = _xfBase.result;
  XTakeWhile2.prototype["@@transducer/step"] = function (result, input) {
    return this.f(input)
      ? this.xf["@@transducer/step"](result, input)
      : _reduced(result);
  };
  return XTakeWhile2;
}();
var _xtakeWhile = /* @__PURE__ */ _curry2(function _xtakeWhile2(f, xf) {
  return new XTakeWhile(f, xf);
});
var takeWhile = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(
    ["takeWhile"],
    _xtakeWhile,
    function takeWhile2(fn, xs) {
      var idx = 0;
      var len = xs.length;
      while (idx < len && fn(xs[idx])) {
        idx += 1;
      }
      return slice(0, idx, xs);
    },
  ),
);
var XTap = /* @__PURE__ */ function () {
  function XTap2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTap2.prototype["@@transducer/init"] = _xfBase.init;
  XTap2.prototype["@@transducer/result"] = _xfBase.result;
  XTap2.prototype["@@transducer/step"] = function (result, input) {
    this.f(input);
    return this.xf["@@transducer/step"](result, input);
  };
  return XTap2;
}();
var _xtap = /* @__PURE__ */ _curry2(function _xtap2(f, xf) {
  return new XTap(f, xf);
});
var tap = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], _xtap, function tap2(fn, x) {
    fn(x);
    return x;
  }),
);
function _isRegExp(x) {
  return Object.prototype.toString.call(x) === "[object RegExp]";
}
var test = /* @__PURE__ */ _curry2(function test2(pattern, str) {
  if (!_isRegExp(pattern)) {
    throw new TypeError(
      "\u2018test\u2019 requires a value of type RegExp as its first argument; received " +
        toString$1(pattern),
    );
  }
  return _cloneRegExp(pattern).test(str);
});
var andThen = /* @__PURE__ */ _curry2(function andThen2(f, p) {
  _assertPromise("andThen", p);
  return p.then(f);
});
var toLower = /* @__PURE__ */ invoker(0, "toLowerCase");
var toPairs = /* @__PURE__ */ _curry1(function toPairs2(obj) {
  var pairs = [];
  for (var prop3 in obj) {
    if (_has(prop3, obj)) {
      pairs[pairs.length] = [prop3, obj[prop3]];
    }
  }
  return pairs;
});
var toPairsIn = /* @__PURE__ */ _curry1(function toPairsIn2(obj) {
  var pairs = [];
  for (var prop3 in obj) {
    pairs[pairs.length] = [prop3, obj[prop3]];
  }
  return pairs;
});
var toUpper = /* @__PURE__ */ invoker(0, "toUpperCase");
var transduce = /* @__PURE__ */ curryN(
  4,
  function transduce2(xf, fn, acc, list) {
    return _reduce(xf(typeof fn === "function" ? _xwrap(fn) : fn), acc, list);
  },
);
var transpose = /* @__PURE__ */ _curry1(function transpose2(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === "undefined") {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});
var traverse = /* @__PURE__ */ _curry3(function traverse2(of2, f, traversable) {
  return typeof traversable["fantasy-land/traverse"] === "function"
    ? traversable["fantasy-land/traverse"](f, of2)
    : sequence(of2, map(f, traversable));
});
var ws =
  "	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
var zeroWidth = "\u200B";
var hasProtoTrim = typeof String.prototype.trim === "function";
var trim = !hasProtoTrim || /* @__PURE__ */ ws.trim() ||
    !/* @__PURE__ */ zeroWidth.trim()
  ? /* @__PURE__ */ _curry1(function trim2(str) {
    var beginRx = new RegExp("^[" + ws + "][" + ws + "]*");
    var endRx = new RegExp("[" + ws + "][" + ws + "]*$");
    return str.replace(beginRx, "").replace(endRx, "");
  })
  : /* @__PURE__ */ _curry1(function trim3(str) {
    return str.trim();
  });
var tryCatch = /* @__PURE__ */ _curry2(function _tryCatch(tryer, catcher) {
  return _arity(tryer.length, function () {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, _concat([e], arguments));
    }
  });
});
var unapply = /* @__PURE__ */ _curry1(function unapply2(fn) {
  return function () {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});
var unary = /* @__PURE__ */ _curry1(function unary2(fn) {
  return nAry(1, fn);
});
var uncurryN = /* @__PURE__ */ _curry2(function uncurryN2(depth, fn) {
  return curryN(depth, function () {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === "function") {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(
        this,
        Array.prototype.slice.call(arguments, idx, endIdx),
      );
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});
var unfold = /* @__PURE__ */ _curry2(function unfold2(fn, seed) {
  var pair3 = fn(seed);
  var result = [];
  while (pair3 && pair3.length) {
    result[result.length] = pair3[0];
    pair3 = fn(pair3[1]);
  }
  return result;
});
var union = /* @__PURE__ */ _curry2(/* @__PURE__ */ compose(uniq, _concat));
var uniqWith = /* @__PURE__ */ _curry2(function uniqWith2(pred, list) {
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
});
var unionWith = /* @__PURE__ */ _curry3(
  function unionWith2(pred, list1, list2) {
    return uniqWith(pred, _concat(list1, list2));
  },
);
var unless = /* @__PURE__ */ _curry3(function unless2(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});
var unnest = /* @__PURE__ */ chain(_identity);
var until = /* @__PURE__ */ _curry3(function until2(pred, fn, init2) {
  var val = init2;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});
var valuesIn = /* @__PURE__ */ _curry1(function valuesIn2(obj) {
  var prop3;
  var vs = [];
  for (prop3 in obj) {
    vs[vs.length] = obj[prop3];
  }
  return vs;
});
var Const = function (x) {
  return {
    value: x,
    "fantasy-land/map": function () {
      return this;
    },
  };
};
var view = /* @__PURE__ */ _curry2(function view2(lens3, x) {
  return lens3(Const)(x).value;
});
var when = /* @__PURE__ */ _curry3(function when2(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});
var where = /* @__PURE__ */ _curry2(function where2(spec, testObj) {
  for (var prop3 in spec) {
    if (_has(prop3, spec) && !spec[prop3](testObj[prop3])) {
      return false;
    }
  }
  return true;
});
var whereEq = /* @__PURE__ */ _curry2(function whereEq2(spec, testObj) {
  return where(map(equals, spec), testObj);
});
var without = /* @__PURE__ */ _curry2(function (xs, list) {
  return reject(flip(_includes)(xs), list);
});
var xor = /* @__PURE__ */ _curry2(function xor2(a, b) {
  return Boolean(!a ^ !b);
});
var xprod = /* @__PURE__ */ _curry2(function xprod2(a, b) {
  var idx = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = [];
  while (idx < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
});
var zip = /* @__PURE__ */ _curry2(function zip2(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});
var zipObj = /* @__PURE__ */ _curry2(function zipObj2(keys4, values3) {
  var idx = 0;
  var len = Math.min(keys4.length, values3.length);
  var out = {};
  while (idx < len) {
    out[keys4[idx]] = values3[idx];
    idx += 1;
  }
  return out;
});
var zipWith = /* @__PURE__ */ _curry3(function zipWith2(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});
var thunkify = /* @__PURE__ */ _curry1(function thunkify2(fn) {
  return curryN(fn.length, function createThunk() {
    var fnArgs = arguments;
    return function invokeThunk() {
      return fn.apply(this, fnArgs);
    };
  });
});
export {
  __,
  add,
  addIndex,
  adjust,
  all,
  allPass,
  always,
  and,
  andThen,
  any,
  anyPass,
  ap,
  aperture,
  append,
  apply,
  applySpec,
  applyTo,
  ascend,
  assoc,
  assocPath,
  binary,
  bind,
  both,
  call,
  chain,
  clamp,
  clone,
  comparator,
  complement,
  compose,
  composeK,
  composeP,
  composeWith,
  concat,
  cond,
  construct,
  constructN,
  contains$1 as contains,
  converge,
  countBy,
  curry,
  curryN,
  dec,
  defaultTo,
  descend,
  difference,
  differenceWith,
  dissoc,
  dissocPath,
  divide,
  drop,
  dropLast$1 as dropLast,
  dropLastWhile$1 as dropLastWhile,
  dropRepeats,
  dropRepeatsWith,
  dropWhile,
  either,
  empty,
  endsWith,
  eqBy,
  eqProps,
  equals,
  evolve,
  F,
  filter,
  find,
  findIndex,
  findLast,
  findLastIndex,
  flatten,
  flip,
  forEach,
  forEachObjIndexed,
  fromPairs,
  groupBy,
  groupWith,
  gt,
  gte,
  has,
  hasIn,
  hasPath,
  head,
  identical,
  identity,
  ifElse,
  inc,
  includes,
  indexBy,
  indexOf,
  init,
  innerJoin,
  insert,
  insertAll,
  intersection,
  intersperse,
  into,
  invert,
  invertObj,
  invoker,
  is,
  isEmpty,
  isNil,
  join,
  juxt,
  keys,
  keysIn,
  last,
  lastIndexOf,
  length,
  lens,
  lensIndex,
  lensPath,
  lensProp,
  lift,
  liftN,
  lt,
  lte,
  map,
  mapAccum,
  mapAccumRight,
  mapObjIndexed,
  match,
  mathMod,
  max,
  maxBy,
  mean,
  median,
  memoizeWith,
  merge,
  mergeAll,
  mergeDeepLeft,
  mergeDeepRight,
  mergeDeepWith,
  mergeDeepWithKey,
  mergeLeft,
  mergeRight,
  mergeWith,
  mergeWithKey,
  min,
  minBy,
  modulo,
  move,
  multiply,
  nAry,
  negate,
  none,
  not,
  nth,
  nthArg,
  o,
  objOf,
  of,
  omit,
  once,
  or,
  otherwise,
  over,
  pair,
  partial,
  partialRight,
  partition,
  path,
  pathEq,
  pathOr,
  paths,
  pathSatisfies,
  pick,
  pickAll,
  pickBy,
  pipe,
  pipeK,
  pipeP,
  pipeWith,
  pluck,
  prepend,
  product,
  project,
  prop,
  propEq,
  propIs,
  propOr,
  props,
  propSatisfies,
  range,
  reduce,
  reduceBy,
  reduced,
  reduceRight,
  reduceWhile,
  reject,
  remove,
  repeat,
  replace,
  reverse,
  scan,
  sequence,
  set,
  slice,
  sort,
  sortBy,
  sortWith,
  split,
  splitAt,
  splitEvery,
  splitWhen,
  startsWith,
  subtract,
  sum,
  symmetricDifference,
  symmetricDifferenceWith,
  T,
  tail,
  take,
  takeLast,
  takeLastWhile,
  takeWhile,
  tap,
  test,
  thunkify,
  times,
  toLower,
  toPairs,
  toPairsIn,
  toString$1 as toString,
  toUpper,
  transduce,
  transpose,
  traverse,
  trim,
  tryCatch,
  type,
  unapply,
  unary,
  uncurryN,
  unfold,
  union,
  unionWith,
  uniq,
  uniqBy,
  uniqWith,
  unless,
  unnest,
  until,
  update,
  useWith,
  values,
  valuesIn,
  view,
  when,
  where,
  whereEq,
  without,
  xor,
  xprod,
  zip,
  zipObj,
  zipWith,
};
export default null;
