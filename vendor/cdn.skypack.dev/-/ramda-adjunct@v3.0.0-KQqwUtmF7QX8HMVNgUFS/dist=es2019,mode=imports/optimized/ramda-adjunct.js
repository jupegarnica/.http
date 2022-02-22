import {
  __,
  addIndex,
  all,
  allPass,
  always,
  and,
  anyPass,
  ap as ap$2,
  append,
  apply,
  bind,
  both,
  comparator,
  complement,
  compose,
  concat as concat$1,
  converge,
  curry,
  curryN,
  defaultTo,
  dissocPath,
  divide,
  dropLastWhile,
  dropWhile,
  either,
  empty as empty$1,
  equals as equals$1,
  F,
  filter,
  find,
  flip,
  fromPairs,
  gt,
  gte,
  has,
  hasIn,
  head,
  identical,
  identity,
  ifElse,
  includes,
  init,
  insert,
  intersection,
  invoker,
  is,
  isEmpty,
  isNil,
  join,
  last,
  length,
  lensIndex,
  lensPath,
  lt,
  lte as lte$1,
  map as map$1,
  mergeAll,
  mergeLeft,
  mergeRight,
  modulo,
  nAry,
  nth,
  nthArg,
  of as of$1,
  or,
  over,
  partial,
  path,
  pathEq,
  pathOr,
  pathSatisfies,
  pickBy,
  pipe,
  prop,
  propEq,
  propOr,
  props,
  range,
  reduce,
  reduced,
  reduceRight,
  reject,
  remove,
  replace,
  reverse,
  slice,
  sort,
  split,
  subtract,
  tap,
  toPairs,
  toString,
  transpose,
  traverse,
  type as type$1,
  unapply,
  unary,
  uniq,
  uniqWith,
  useWith,
  values,
  view,
  when,
  zip,
} from "/-/ramda@v0.28.0-JBZigOn2cXGi5riTFQR8/dist=es2019,mode=imports/optimized/ramda.js";
var stubUndefined = always(void 0);
var isUndefined = equals$1(stubUndefined());
var isNotUndefined = complement(isUndefined);
var isNull = equals$1(null);
var isNotNull = complement(isNull);
var isNotNil = complement(isNil);
var GeneratorFunction = null;
var legacyCheck = null;
try {
  GeneratorFunction = new Function("return function* () {}")().constructor;
  legacyCheck = is(GeneratorFunction);
} catch (e) {
  legacyCheck = F;
}
var isGeneratorFunction = curryN(
  1,
  either(pipe(type$1, identical("GeneratorFunction")), legacyCheck),
);
var isAsyncFunction = curryN(1, pipe(type$1, identical("AsyncFunction")));
var isFunction = anyPass([
  pipe(type$1, identical("Function")),
  isGeneratorFunction,
  isAsyncFunction,
]);
var isArray = curryN(
  1,
  isFunction(Array.isArray) ? Array.isArray : pipe(type$1, identical("Array")),
);
var isIterable = curryN(1, function (val) {
  if (typeof Symbol === "undefined") {
    return false;
  }
  return hasIn(Symbol.iterator, Object(val)) &&
    isFunction(val[Symbol.iterator]);
});
var isEmptyArray = both(isArray, isEmpty);
var isNotArray = complement(isArray);
var isNotEmpty = complement(isEmpty);
var isNonEmptyArray = both(isArray, isNotEmpty);
var isBoolean = curryN(1, pipe(type$1, identical("Boolean")));
var isNotBoolean = complement(isBoolean);
var isNilOrEmpty = curryN(1, either(isNil, isEmpty));
var isString = curryN(1, pipe(type$1, identical("String")));
var isEmptyString = equals$1("");
var isNotString = complement(isString);
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (obj2) {
        return typeof obj2;
      }
      : function (obj2) {
        return obj2 && typeof Symbol == "function" &&
            obj2.constructor === Symbol && obj2 !== Symbol.prototype
          ? "symbol"
          : typeof obj2;
      },
    _typeof(obj);
}
var isOfTypeObject = function isOfTypeObject2(val) {
  return _typeof(val) === "object";
};
var isObj = curryN(1, both(isNotNull, either(isOfTypeObject, isFunction)));
var isNotObj = complement(isObj);
var isNonEmptyString = allPass([isString, isNotObj, isNotEmpty]);
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (obj2) {
        return typeof obj2;
      }
      : function (obj2) {
        return obj2 && typeof Symbol == "function" &&
            obj2.constructor === Symbol && obj2 !== Symbol.prototype
          ? "symbol"
          : typeof obj2;
      },
    _typeof$1(obj);
}
var isArrayLike = curryN(1, function (val) {
  if (isArray(val)) {
    return true;
  }
  if (!val) {
    return false;
  }
  if (isString(val)) {
    return false;
  }
  if (_typeof$1(val) !== "object") {
    return false;
  }
  if (val.nodeType === 1) {
    return !!val.length;
  }
  if (val.length === 0) {
    return true;
  }
  if (val.length > 0) {
    return has(0, val) && has(val.length - 1, val);
  }
  return false;
});
var isNotArrayLike = complement(isArrayLike);
var isNotGeneratorFunction = complement(isGeneratorFunction);
var isNotAsyncFunction = complement(isAsyncFunction);
var isNotFunction = complement(isFunction);
var isObjLike = curryN(1, both(isNotNull, isOfTypeObject));
var isNotObjLike = complement(isObjLike);
var isObject = pipe(type$1, identical("Object"));
var isObjectConstructor = pipe(toString, equals$1(toString(Object)));
var hasObjectConstructor = pathSatisfies(
  both(isFunction, isObjectConstructor),
  ["constructor"],
);
var isPlainObj = curryN(1, function (val) {
  if (!isObjLike(val) || !isObject(val)) {
    return false;
  }
  var proto = Object.getPrototypeOf(val);
  if (isNull(proto)) {
    return true;
  }
  return hasObjectConstructor(proto);
});
var isNotPlainObj = complement(isPlainObj);
var isDate = curryN(1, pipe(type$1, identical("Date")));
var isNotDate = complement(isDate);
var isNumber = curryN(1, pipe(type$1, identical("Number")));
var isNaNPonyfill = both(isNumber, isNaN);
var isNaNPonyfill$1 = curryN(1, isNaNPonyfill);
var _isNaN = isFunction(Number.isNaN)
  ? curryN(1, Number.isNaN)
  : isNaNPonyfill$1;
var isNotNaN = complement(_isNaN);
var isValidDate = curryN(
  1,
  both(isDate, pipe(invoker(0, "getTime"), isNotNaN)),
);
var isNotValidDate = complement(isValidDate);
var isNotNumber = complement(isNumber);
var isPositive = both(isNumber, lt(0));
var isNegative = curryN(1, both(isNumber, gt(0)));
var isPositiveZero = identical(0);
var isNegativeZero = identical(-0);
var isNotNilOrEmpty = complement(isNilOrEmpty);
var isNonPositive = curryN(1, both(isNumber, flip(lte$1)(0)));
var isNonNegative = curryN(1, both(isNumber, flip(gte)(0)));
var isMap = curryN(1, pipe(type$1, identical("Map")));
var isNotMap = complement(isMap);
var isFinitePonyfill = both(isNumber, isFinite);
var isFinitePonyfill$1 = curryN(1, isFinitePonyfill);
var _isFinite = isFunction(Number.isFinite)
  ? curryN(1, bind(Number.isFinite, Number))
  : isFinitePonyfill$1;
var isNotFinite = complement(_isFinite);
var isIntegerPonyfill = both(
  _isFinite,
  converge(equals$1, [Math.floor, identity]),
);
var isIntegerPonyfill$1 = curryN(1, isIntegerPonyfill);
var isInteger = isFunction(Number.isInteger)
  ? curryN(1, bind(Number.isInteger, Number))
  : isIntegerPonyfill$1;
var toInteger32 = curryN(1, function (val) {
  return val >> 0;
});
var isInteger32 = curryN(1, function (val) {
  return toInteger32(val) === val;
});
var isNotInteger = complement(isInteger);
var isBigInt = curryN(1, pipe(type$1, identical("BigInt")));
var isFloat = both(_isFinite, complement(isInteger));
var isNotFloat = curryN(1, complement(isFloat));
var isValidNumber = curryN(1, either(isInteger, isFloat));
var isNotValidNumber = complement(isValidNumber);
var isOdd = curryN(
  1,
  both(isInteger, pipe(flip(modulo)(2), complement(equals$1)(0))),
);
var isEven = curryN(1, both(isInteger, complement(isOdd)));
var isPair = curryN(1, both(isArray, pipe(length, equals$1(2))));
var isNotPair = complement(isPair);
var isThenable = pathSatisfies(isFunction, ["then"]);
var isPromise = curryN(
  1,
  both(isObj, pipe(toString, equals$1("[object Promise]"))),
);
var isTrue = identical(true);
var isFalse = identical(false);
var isTruthy = curryN(1, Boolean);
var isFalsy = complement(isTruthy);
var isRegExp = curryN(1, pipe(type$1, identical("RegExp")));
var isNotRegExp = complement(isRegExp);
var isSet = curryN(1, pipe(type$1, identical("Set")));
var isNotSet = complement(isSet);
var isSparseArray = both(
  isArray,
  converge(complement(identical), [pipe(values, length), length]),
);
function _typeof$2(obj) {
  "@babel/helpers - typeof";
  return _typeof$2 =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (obj2) {
        return typeof obj2;
      }
      : function (obj2) {
        return obj2 && typeof Symbol == "function" &&
            obj2.constructor === Symbol && obj2 !== Symbol.prototype
          ? "symbol"
          : typeof obj2;
      },
    _typeof$2(obj);
}
var isSymbol = curryN(1, function (val) {
  return _typeof$2(val) === "symbol" ||
    _typeof$2(val) === "object" && type$1(val) === "Symbol";
});
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
var isSafeIntegerPonyfill = both(isInteger, function (value) {
  return Math.abs(value) <= MAX_SAFE_INTEGER;
});
var isSafeIntegerPonyfill$1 = curryN(1, isSafeIntegerPonyfill);
var isSafeInteger = isFunction(Number.isSafeInteger)
  ? curryN(1, bind(Number.isSafeInteger, Number))
  : isSafeIntegerPonyfill$1;
var isIndexed = curryN(1, either(isString, isArray));
var isError = curryN(1, pipe(type$1, identical("Error")));
var isNaturalNumber = curryN(1, both(isInteger, complement(isNegative)));
var isPrimitive = both(
  isNotObj,
  anyPass([
    isString,
    isNumber,
    isBigInt,
    isBoolean,
    isUndefined,
    isNull,
    isSymbol,
  ]),
);
var isNotPrimitive = curryN(1, complement(isPrimitive));
var isSentinelValue = curryN(1, function (val) {
  return isInteger32(val) && ~val === 0;
});
var stubNull = always(null);
var stubObj = function stubObj2() {
  return {};
};
var stubString = always("");
var stubArray = function stubArray2() {
  return [];
};
var noop = always(stubUndefined());
var equals = "fantasy-land/equals";
var lte = "fantasy-land/lte";
var concat = "fantasy-land/concat";
var empty = "fantasy-land/empty";
var map = "fantasy-land/map";
var contramap = "fantasy-land/contramap";
var ap = "fantasy-land/ap";
var of = "fantasy-land/of";
var chain = "fantasy-land/chain";
var isFunctor = either(
  pathSatisfies(isFunction, ["map"]),
  pathSatisfies(isFunction, [map]),
);
var isApply = both(
  isFunctor,
  either(pathSatisfies(isFunction, ["ap"]), pathSatisfies(isFunction, [ap])),
);
var ap$1 = curryN(2, function (applyF, applyX) {
  if (!isApply(applyF) || !isApply(applyX)) {
    return ap$2(applyF, applyX);
  }
  try {
    return applyF.ap(applyX);
  } catch (e) {
    return applyX.ap(applyF);
  }
});
var liftFN = curry(function (arity, fn) {
  var lifted = curryN(arity, fn);
  return curryN(arity, function () {
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    var accumulator = map$1(lifted, head(args));
    var apps = slice(1, Infinity, args);
    return reduce(ap$1, accumulator, apps);
  });
});
var liftF = curryN(1, function (fn) {
  return liftFN(fn.length, fn);
});
var catamorphism = curry(function (leftFn, rightFn, catamorphicObj) {
  if (isFunction(catamorphicObj.matchWith)) {
    return catamorphicObj.matchWith({
      Ok: function Ok(_ref) {
        var value2 = _ref.value;
        return rightFn(value2);
      },
      Error: function Error2(_ref2) {
        var value2 = _ref2.value;
        return leftFn(value2);
      },
      Just: function Just(_ref3) {
        var value2 = _ref3.value;
        return rightFn(value2);
      },
      Nothing: function Nothing() {
        return leftFn(void 0);
      },
      Success: function Success(_ref4) {
        var value2 = _ref4.value;
        return rightFn(value2);
      },
      Failure: function Failure(_ref5) {
        var value2 = _ref5.value;
        return leftFn(value2);
      },
    });
  }
  if (isFunction(catamorphicObj.cata)) {
    return catamorphicObj.cata(leftFn, rightFn);
  }
  if (isFunction(catamorphicObj.getOrElse)) {
    var elseValue = "RA.cata".concat(Math.random());
    var value = catamorphicObj.getOrElse(elseValue);
    return value === elseValue ? leftFn() : rightFn(value);
  }
  return catamorphicObj.either(leftFn, rightFn);
});
var weave = curryN(2, function (fn, config) {
  return curryN(fn.length, function () {
    return fn.apply(void 0, arguments).run(config);
  });
});
var weaveLazy = curryN(2, function (fn, configAccessor) {
  return curryN(fn.length, function () {
    return fn.apply(void 0, arguments).run(configAccessor());
  });
});
var curryRightN = curryN(2, function (arity, fn) {
  return curryN(arity, function wrapper() {
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    return fn.apply(this, reverse(args));
  });
});
var curryRight = converge(curryRightN, [length, identity]);
var allP = curryN(1, bind(Promise.all, Promise));
var catchP = invoker(1, "catch");
var rejectP = bind(Promise.reject, Promise);
var resolveP = bind(Promise.resolve, Promise);
var noneP = curryN(
  1,
  pipe(
    map$1(resolveP),
    map$1(function (p) {
      return p.then(rejectP, resolveP);
    }),
    allP,
  ),
);
var makeDelay = curry(function (settleFnPicker, opts) {
  var timeout;
  var value;
  if (isInteger(opts) && isNonNegative(opts)) {
    timeout = opts;
  } else {
    timeout = propOr(0, "timeout", opts);
    value = propOr(value, "value", opts);
  }
  return new Promise(function () {
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    var settleFn = settleFnPicker(args);
    setTimeout(partial(settleFn, [value]), timeout);
  });
});
var delayP = makeDelay(nth(0));
delayP.reject = makeDelay(nth(1));
var thenCatchP = invoker(2, "then");
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) {
    return;
  }
  if (typeof o === "string") {
    return _arrayLikeToArray(o, minLen);
  }
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) {
    n = o.constructor.name;
  }
  if (n === "Map" || n === "Set") {
    return Array.from(o);
  }
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
    return _arrayLikeToArray(o, minLen);
  }
}
function _iterableToArray(iter) {
  if (
    typeof Symbol !== "undefined" && iter[Symbol.iterator] != null ||
    iter["@@iterator"] != null
  ) {
    return Array.from(iter);
  }
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    return _arrayLikeToArray(arr);
  }
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) {
    len = arr.length;
  }
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var onFulfill = function onFulfill2(value) {
  return {
    status: "fulfilled",
    value,
  };
};
var onReject = function onReject2(reason) {
  return {
    status: "rejected",
    reason,
  };
};
var allSettledPonyfill = function allSettledPonyfill2(iterable) {
  var array = map$1(function (p) {
    return resolveP(p).then(onFulfill)["catch"](onReject);
  }, _toConsumableArray(iterable));
  return allP(array);
};
var allSettledPPonyfill = curryN(1, allSettledPonyfill);
var allSettledP = isFunction(Promise.allSettled)
  ? curryN(1, bind(Promise.allSettled, Promise))
  : allSettledPPonyfill;
var Y = curryN(1, function (le) {
  return function (f) {
    return f(f);
  }(function (g) {
    return le(function (x) {
      return g(g)(x);
    });
  });
});
var seq = curry(function (fns, x) {
  return tap(function (tx) {
    return map$1(function (fn) {
      return fn(tx);
    })(fns);
  })(x);
});
function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) ||
    _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) {
    return;
  }
  if (typeof o === "string") {
    return _arrayLikeToArray$1(o, minLen);
  }
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) {
    n = o.constructor.name;
  }
  if (n === "Map" || n === "Set") {
    return Array.from(o);
  }
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
    return _arrayLikeToArray$1(o, minLen);
  }
}
function _iterableToArray$1(iter) {
  if (
    typeof Symbol !== "undefined" && iter[Symbol.iterator] != null ||
    iter["@@iterator"] != null
  ) {
    return Array.from(iter);
  }
}
function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) {
    return _arrayLikeToArray$1(arr);
  }
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) {
    len = arr.length;
  }
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var byArity = comparator(function (a, b) {
  return a.length > b.length;
});
var getMaxArity = pipe(sort(byArity), head, prop("length"));
var iteratorFn = curry(function (args, accumulator, fn) {
  var result = fn.apply(void 0, _toConsumableArray$1(args));
  return isNotNil(result) ? reduced(result) : accumulator;
});
var dispatchImpl = function dispatchImpl2(functions) {
  var arity = getMaxArity(functions);
  return curryN(arity, function () {
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    return reduce(iteratorFn(args), void 0, functions);
  });
};
var dispatch = ifElse(isNonEmptyArray, dispatchImpl, stubUndefined);
var async = curryN(1, function (generatorFn) {
  function asyncWrapper() {
    var iterator = bind(generatorFn, this).apply(void 0, arguments);
    var handle = function handle2(result) {
      var resolved = resolveP(result.value);
      return result.done ? resolved : resolved.then(function (value) {
        return handle2(iterator.next(value));
      }, function (error) {
        return handle2(iterator["throw"](error));
      });
    };
    try {
      return handle(iterator.next());
    } catch (error) {
      return rejectP(error);
    }
  }
  if (generatorFn.length > 0) {
    return curryN(generatorFn.length, asyncWrapper);
  }
  return asyncWrapper;
});
function _typeof$3(obj) {
  "@babel/helpers - typeof";
  return _typeof$3 =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (obj2) {
        return typeof obj2;
      }
      : function (obj2) {
        return obj2 && typeof Symbol == "function" &&
            obj2.constructor === Symbol && obj2 !== Symbol.prototype
          ? "symbol"
          : typeof obj2;
      },
    _typeof$3(obj);
}
function _toConsumableArray$2(arr) {
  return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) ||
    _unsupportedIterableToArray$2(arr) || _nonIterableSpread$2();
}
function _nonIterableSpread$2() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function _unsupportedIterableToArray$2(o, minLen) {
  if (!o) {
    return;
  }
  if (typeof o === "string") {
    return _arrayLikeToArray$2(o, minLen);
  }
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) {
    n = o.constructor.name;
  }
  if (n === "Map" || n === "Set") {
    return Array.from(o);
  }
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
    return _arrayLikeToArray$2(o, minLen);
  }
}
function _iterableToArray$2(iter) {
  if (
    typeof Symbol !== "undefined" && iter[Symbol.iterator] != null ||
    iter["@@iterator"] != null
  ) {
    return Array.from(iter);
  }
}
function _arrayWithoutHoles$2(arr) {
  if (Array.isArray(arr)) {
    return _arrayLikeToArray$2(arr);
  }
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) {
    len = arr.length;
  }
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _defineProperties(target, props2) {
  for (var i = 0; i < props2.length; i++) {
    var descriptor = props2[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) {
      descriptor.writable = true;
    }
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) {
    _defineProperties(Constructor.prototype, protoProps);
  }
  if (staticProps) {
    _defineProperties(Constructor, staticProps);
  }
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) {
    _setPrototypeOf(subClass, superClass);
  }
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$3(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return self;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2)) {
      return Class2;
    }
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2)) {
        return _cache.get(Class2);
      }
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2) {
        _setPrototypeOf(instance, Class2.prototype);
      }
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) {
    return false;
  }
  if (Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy === "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
  return _getPrototypeOf(o);
}
var AggregatedError = /* @__PURE__ */ function (_Error) {
  _inherits(AggregatedError2, _Error);
  var _super = _createSuper(AggregatedError2);
  function AggregatedError2() {
    var _this;
    var errors = arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : [];
    var message = arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : "";
    _classCallCheck(this, AggregatedError2);
    _this = _super.call(this, message);
    _this.errors = errors;
    return _this;
  }
  return _createClass(AggregatedError2);
}(/* @__PURE__ */ _wrapNativeSuper(Error));
var anyPonyfill = function anyPonyfill2(iterable) {
  var exceptions = [];
  return new Promise(function (resolve, reject2) {
    var onReject3 = function onReject4(e) {
      exceptions.push(e);
      if (exceptions.length === iterable.length) {
        reject2(new AggregatedError(exceptions));
      }
    };
    map$1(function (p) {
      return resolveP(p).then(resolve)["catch"](onReject3);
    }, _toConsumableArray$2(iterable));
  });
};
var anyPPonyfill = curryN(1, anyPonyfill);
var anyP = isFunction(Promise.any)
  ? curryN(1, bind(Promise.any, Promise))
  : anyPPonyfill;
var compareLength = curry(function (comparator2, value, list2) {
  return compose(comparator2(value), length)(list2);
});
var lengthEq = compareLength(equals$1);
var lengthGte = compareLength(flip(gte));
function _toConsumableArray$3(arr) {
  return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) ||
    _unsupportedIterableToArray$3(arr) || _nonIterableSpread$3();
}
function _nonIterableSpread$3() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function _unsupportedIterableToArray$3(o, minLen) {
  if (!o) {
    return;
  }
  if (typeof o === "string") {
    return _arrayLikeToArray$3(o, minLen);
  }
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) {
    n = o.constructor.name;
  }
  if (n === "Map" || n === "Set") {
    return Array.from(o);
  }
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
    return _arrayLikeToArray$3(o, minLen);
  }
}
function _iterableToArray$3(iter) {
  if (
    typeof Symbol !== "undefined" && iter[Symbol.iterator] != null ||
    iter["@@iterator"] != null
  ) {
    return Array.from(iter);
  }
}
function _arrayWithoutHoles$3(arr) {
  if (Array.isArray(arr)) {
    return _arrayLikeToArray$3(arr);
  }
}
function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length) {
    len = arr.length;
  }
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var lastP = curryN(1, function (iterable) {
  var fulfilled = [];
  var rejected = [];
  var onFulfill3 = bind(fulfilled.push, fulfilled);
  var onReject3 = bind(rejected.push, rejected);
  var listOfPromises = map$1(function (p) {
    return resolveP(p).then(onFulfill3)["catch"](onReject3);
  }, _toConsumableArray$3(iterable));
  return allP(listOfPromises).then(function () {
    if (lengthEq(0, fulfilled) && lengthEq(0, rejected)) {
      return void 0;
    }
    if (lengthGte(1, fulfilled)) {
      return last(fulfilled);
    }
    return rejectP(rejected);
  });
});
var defaultWhen = curry(function (predicate, defaultVal, val) {
  return predicate(val) ? defaultVal : val;
});
var mapIndexed = addIndex(map$1);
var fnull = curry(function (fn, defaults) {
  return curryN(fn.length, function () {
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    var argsWithDefaults = mapIndexed(function (val, idx) {
      return defaultWhen(isNil, defaults[idx], val);
    }, args);
    return apply(fn, argsWithDefaults);
  });
});
var reduceIndexed = addIndex(reduce);
var filterIndexed = addIndex(filter);
var filterIndexed$1 = addIndex(filter);
var containsIndex = curry(function (indexes, val, index) {
  return includes(index, indexes);
});
var pickIndexes = curry(function (indexes, list2) {
  return filterIndexed$1(containsIndex(indexes), list2);
});
var list = unapply(identity);
var ensureArray = when(isNotArray, of$1);
var leftIdentitySemigroup = {
  concat: identity,
};
var concatAll = pipe(
  reduce(concat$1, leftIdentitySemigroup),
  when(identical(leftIdentitySemigroup), stubUndefined),
);
var concatRight = flip(concat$1);
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray$4(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function _unsupportedIterableToArray$4(o, minLen) {
  if (!o) {
    return;
  }
  if (typeof o === "string") {
    return _arrayLikeToArray$4(o, minLen);
  }
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) {
    n = o.constructor.name;
  }
  if (n === "Map" || n === "Set") {
    return Array.from(o);
  }
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
    return _arrayLikeToArray$4(o, minLen);
  }
}
function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length) {
    len = arr.length;
  }
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null
    ? null
    : typeof Symbol !== "undefined" && arr[Symbol.iterator] ||
      arr["@@iterator"];
  if (_i == null) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) {
        break;
      }
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) {
        _i["return"]();
      }
    } finally {
      if (_d) {
        throw _e;
      }
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) {
    return arr;
  }
}
var reduceP = curryN(3, function (fn, acc, list2) {
  return resolveP(list2).then(function (iterable) {
    var listLength = length(iterable);
    if (listLength === 0) {
      return acc;
    }
    var reducer = reduce(function (accP, currentValueP) {
      return accP.then(function (previousValue) {
        return allP([previousValue, currentValueP]);
      }).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          previousValue = _ref2[0],
          currentValue = _ref2[1];
        if (isUndefined(previousValue) && listLength === 1) {
          return currentValue;
        }
        return fn(previousValue, currentValue);
      });
    });
    return reducer(resolveP(acc), iterable);
  });
});
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) ||
    _unsupportedIterableToArray$5(arr, i) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function _unsupportedIterableToArray$5(o, minLen) {
  if (!o) {
    return;
  }
  if (typeof o === "string") {
    return _arrayLikeToArray$5(o, minLen);
  }
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) {
    n = o.constructor.name;
  }
  if (n === "Map" || n === "Set") {
    return Array.from(o);
  }
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
    return _arrayLikeToArray$5(o, minLen);
  }
}
function _arrayLikeToArray$5(arr, len) {
  if (len == null || len > arr.length) {
    len = arr.length;
  }
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i) {
  var _i = arr == null
    ? null
    : typeof Symbol !== "undefined" && arr[Symbol.iterator] ||
      arr["@@iterator"];
  if (_i == null) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) {
        break;
      }
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) {
        _i["return"]();
      }
    } finally {
      if (_d) {
        throw _e;
      }
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) {
    return arr;
  }
}
var flipArgs = pipe(reduceRight(concat$1, ""), equals$1("ba"))(["a", "b"]);
var reduceRightP = curryN(3, function (fn, acc, list2) {
  return resolveP(list2).then(function (iterable) {
    var listLength = length(iterable);
    if (listLength === 0) {
      return acc;
    }
    var reducer = reduceRight(function (arg1, arg2) {
      var accP;
      var currentValueP;
      if (flipArgs) {
        accP = arg1;
        currentValueP = arg2;
      } else {
        accP = arg2;
        currentValueP = arg1;
      }
      return accP.then(function (previousValue) {
        return allP([previousValue, currentValueP]);
      }).then(function (_ref) {
        var _ref2 = _slicedToArray$1(_ref, 2),
          previousValue = _ref2[0],
          currentValue = _ref2[1];
        if (isUndefined(previousValue) && listLength === 1) {
          return currentValue;
        }
        return fn(currentValue, previousValue);
      });
    });
    return reducer(resolveP(acc), iterable);
  });
});
var sliceFrom = slice(__, Infinity);
var sliceTo = slice(0);
var rejectIndexed = addIndex(reject);
var containsIndex$1 = curry(function (indexes, val, index) {
  return includes(index, indexes);
});
var omitIndexes = curry(function (indexes, list2) {
  return rejectIndexed(containsIndex$1(indexes), list2);
});
var compact = reject(isFalsy);
var appendFlipped = flip(append);
var included = flip(includes);
var move = curry(function (fromIdx, toIdx, list2) {
  return compose(insert(toIdx, nth(fromIdx, list2)), remove(fromIdx, 1))(list2);
});
var lengthGt = compareLength(flip(gt));
var lengthLt = compareLength(flip(lt));
var lengthLte = compareLength(flip(lte$1));
var lengthNotEq = compareLength(complement(equals$1));
var allEqual = curryN(1, pipe(uniq, lengthLte(1)));
var repeat = function repeat2(value, count) {
  var validCount = Number(count);
  if (validCount !== count) {
    validCount = 0;
  }
  if (isNegative(validCount)) {
    throw new RangeError("repeat count must be non-negative");
  }
  if (isNotFinite(validCount)) {
    throw new RangeError("repeat count must be less than infinity");
  }
  validCount = Math.floor(validCount);
  if (value.length === 0 || validCount === 0) {
    return "";
  }
  if (value.length * validCount >= 1 << 28) {
    throw new RangeError("repeat count must not overflow maximum string size");
  }
  var maxCount = value.length * validCount;
  validCount = Math.floor(Math.log(validCount) / Math.log(2));
  var result = value;
  while (validCount) {
    result += value;
    validCount -= 1;
  }
  result += result.substring(0, maxCount - result.length);
  return result;
};
var repeatStrPonyfill = curry(repeat);
var repeatStrInvoker = flip(invoker(1, "repeat"));
var repeatStr = isFunction(String.prototype.repeat)
  ? repeatStrInvoker
  : repeatStrPonyfill;
var allIdentical = curryN(1, pipe(uniqWith(identical), lengthLte(1)));
var allIdenticalTo = curry(function (val, list2) {
  return all(identical(val), list2);
});
var allEqualTo = curry(function (val, list2) {
  return all(equals$1(val), list2);
});
var makeFlat = function makeFlat2(recursive) {
  return function flatt(list2) {
    var value;
    var jlen;
    var j;
    var result = [];
    var idx = 0;
    while (idx < list2.length) {
      if (isArrayLike(list2[idx])) {
        value = recursive ? flatt(list2[idx]) : list2[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list2[idx];
      }
      idx += 1;
    }
    return result;
  };
};
function _toConsumableArray$4(arr) {
  return _arrayWithoutHoles$4(arr) || _iterableToArray$4(arr) ||
    _unsupportedIterableToArray$6(arr) || _nonIterableSpread$4();
}
function _nonIterableSpread$4() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function _unsupportedIterableToArray$6(o, minLen) {
  if (!o) {
    return;
  }
  if (typeof o === "string") {
    return _arrayLikeToArray$6(o, minLen);
  }
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) {
    n = o.constructor.name;
  }
  if (n === "Map" || n === "Set") {
    return Array.from(o);
  }
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
    return _arrayLikeToArray$6(o, minLen);
  }
}
function _iterableToArray$4(iter) {
  if (
    typeof Symbol !== "undefined" && iter[Symbol.iterator] != null ||
    iter["@@iterator"] != null
  ) {
    return Array.from(iter);
  }
}
function _arrayWithoutHoles$4(arr) {
  if (Array.isArray(arr)) {
    return _arrayLikeToArray$6(arr);
  }
}
function _arrayLikeToArray$6(arr, len) {
  if (len == null || len > arr.length) {
    len = arr.length;
  }
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var flatten1 = makeFlat(false);
var flattenDepth = curry(function (depth, list2) {
  var currentDept = depth;
  var flatList = _toConsumableArray$4(list2);
  while (currentDept > 0) {
    flatList = flatten1(flatList);
    currentDept -= 1;
  }
  return flatList;
});
function _toConsumableArray$5(arr) {
  return _arrayWithoutHoles$5(arr) || _iterableToArray$5(arr) ||
    _unsupportedIterableToArray$7(arr) || _nonIterableSpread$5();
}
function _nonIterableSpread$5() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function _unsupportedIterableToArray$7(o, minLen) {
  if (!o) {
    return;
  }
  if (typeof o === "string") {
    return _arrayLikeToArray$7(o, minLen);
  }
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) {
    n = o.constructor.name;
  }
  if (n === "Map" || n === "Set") {
    return Array.from(o);
  }
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
    return _arrayLikeToArray$7(o, minLen);
  }
}
function _iterableToArray$5(iter) {
  if (
    typeof Symbol !== "undefined" && iter[Symbol.iterator] != null ||
    iter["@@iterator"] != null
  ) {
    return Array.from(iter);
  }
}
function _arrayWithoutHoles$5(arr) {
  if (Array.isArray(arr)) {
    return _arrayLikeToArray$7(arr);
  }
}
function _arrayLikeToArray$7(arr, len) {
  if (len == null || len > arr.length) {
    len = arr.length;
  }
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var copyArray = function copyArray2(items, mapFn, thisArg) {
  var boundMapFn = isNotUndefined(thisArg) ? bind(mapFn, thisArg) : mapFn;
  return isNotUndefined(mapFn)
    ? _toConsumableArray$5(items).map(boundMapFn)
    : _toConsumableArray$5(items);
};
var fromArray = function fromArray2(items, mapFn, thisArg) {
  if (items == null) {
    throw new TypeError(
      "Array.from requires an array-like object - not null or undefined",
    );
  }
  if (isNotNil(mapFn) && isNotFunction(mapFn)) {
    throw new TypeError(
      "Array.from: when provided, the second argument must be a function",
    );
  }
  if (isIterable(items)) {
    return copyArray(items, mapFn, thisArg);
  }
  return [];
};
var fromPonyfill = curryN(1, fromArray);
var fromArray$1 = isFunction(Array.from) ? curryN(1, Array.from) : fromPonyfill;
var toArray = ifElse(isIterable, fromArray$1, values);
var allUnique = converge(lengthEq, [length, uniq]);
var notAllUnique = complement(allUnique);
function _toArray(arr) {
  return _arrayWithHoles$2(arr) || _iterableToArray$6(arr) ||
    _unsupportedIterableToArray$8(arr) || _nonIterableRest$2();
}
function _nonIterableRest$2() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function _unsupportedIterableToArray$8(o, minLen) {
  if (!o) {
    return;
  }
  if (typeof o === "string") {
    return _arrayLikeToArray$8(o, minLen);
  }
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) {
    n = o.constructor.name;
  }
  if (n === "Map" || n === "Set") {
    return Array.from(o);
  }
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
    return _arrayLikeToArray$8(o, minLen);
  }
}
function _arrayLikeToArray$8(arr, len) {
  if (len == null || len > arr.length) {
    len = arr.length;
  }
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArray$6(iter) {
  if (
    typeof Symbol !== "undefined" && iter[Symbol.iterator] != null ||
    iter["@@iterator"] != null
  ) {
    return Array.from(iter);
  }
}
function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr)) {
    return arr;
  }
}
var sortByProps = curry(function (props2, list2) {
  var firstTruthy = function firstTruthy2(_ref) {
    var _ref2 = _toArray(_ref), head2 = _ref2[0], tail = _ref2.slice(1);
    return reduce(either, head2, tail);
  };
  var makeComparator = function makeComparator2(propName) {
    return comparator(function (a, b) {
      return lt(prop(propName, a), prop(propName, b));
    });
  };
  return sort(firstTruthy(map$1(makeComparator, props2)), list2);
});
var skipTake = curry(function (n, list2) {
  return addIndex(filter)(pipe(nthArg(1), modulo(__, n), identical(0)))(list2);
});
var floor = curryN(1, bind(Math.floor, Math));
var rangeStep = curryN(3, function (step, from2, to) {
  var callback = step === 0 ? always(from2) : function (n) {
    return from2 + step * n;
  };
  var rangeEnd = step === 0 ? to - from2 : floor((to - from2) / step);
  return map$1(callback, range(0, rangeEnd));
});
var findOr = curry(function (defaultVal, fn, list2) {
  return pipe(find(fn), defaultTo(defaultVal))(list2);
});
var invokeArgs = curryN(3, function (mpath, args, obj) {
  var method = path(mpath, obj);
  var context = path(init(mpath), obj);
  if (isNotFunction(method)) {
    return void 0;
  }
  if (isEmptyArray(mpath)) {
    return void 0;
  }
  var boundMethod = bind(method, context);
  return apply(boundMethod, args);
});
var invoke = invokeArgs(__, [], __);
var paths = curry(function (ps, obj) {
  return ap$2([path(__, obj)], ps);
});
var renameKeysWith = curry(function (fn, obj) {
  return pipe(toPairs, map$1(over(lensIndex(0), fn)), fromPairs)(obj);
});
var valueOrKey = function valueOrKey2(keysMap) {
  return function (key) {
    if (has(key, keysMap)) {
      return keysMap[key];
    }
    return key;
  };
};
var renameKeys = curry(function (keysMap, obj) {
  return renameKeysWith(valueOrKey(keysMap), obj);
});
var renameKeyWith = curry(function (fn, key, obj) {
  return renameKeysWith(when(equals$1(key), fn), obj);
});
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
        target,
        Object.getOwnPropertyDescriptors(source),
      )
      : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var copyKeys = curryN(2, function (keysMap, obj) {
  return _objectSpread(_objectSpread({}, obj), renameKeys(keysMap, obj));
});
var mergeProps = curryN(2, pipe(props, mergeAll));
var mergePaths = curryN(2, pipe(paths, mergeAll));
var mergePath = curry(function (path2, source, obj) {
  return over(lensPath(path2), mergeLeft(source), obj);
});
var mergeProp = curry(function (p, subj, obj) {
  return mergePath(of$1(p), subj, obj);
});
var omitBy = useWith(pickBy, [complement, identity]);
var pathOrLazy = curryN(3, function (defaultFn, path2, obj) {
  return when(
    identical(defaultFn),
    partial(unary(defaultFn), [obj]),
    pathOr(defaultFn, path2, obj),
  );
});
var viewOr = curryN(3, function (defaultValue, lens, data) {
  return defaultTo(defaultValue, view(lens, data));
});
var spreadPath = curryN(2, converge(mergeRight, [dissocPath, pathOr({})]));
var spreadProp = curry(function (prop2, obj) {
  return spreadPath(of$1(prop2), obj);
});
var flattenPath = curry(function (path2, obj) {
  return mergeRight(obj, pathOr({}, path2, obj));
});
var flattenProp = curry(function (prop2, obj) {
  return flattenPath(of$1(prop2), obj);
});
var unzipObjWith = curryN(2, function (fn, obj) {
  return pipe(
    toPairs,
    map$1(pipe(flip, apply)(fn)),
    transpose,
    when(lengthEq(0), function () {
      return [[], []];
    }),
  )(obj);
});
var zipObjWith = curryN(3, function (fn, keys, values2) {
  return pipe(zip, map$1(apply(fn)), fromPairs)(values2, keys);
});
var isPrototypeOf = curry(function (type2, object) {
  return Boolean(invokeArgs(["prototype", "isPrototypeOf"], [object], type2));
});
var lensEq = curryN(3, function (lens, val, data) {
  return pipe(view(lens), equals$1(val))(data);
});
var lensNotEq = complement(lensEq);
var lensSatisfies = curryN(3, function (predicate, lens, data) {
  return pipe(view(lens), predicate, isTrue)(data);
});
var lensNotSatisfy = complement(lensSatisfies);
var type = either(path(["@@type"]), path(["constructor", "@@type"]));
var typeEquals = curry(function (typeIdent, monad) {
  return type(monad) === typeIdent;
});
var isSameType = curryN(2, useWith(equals$1, [type, type]));
var isNotSameType = complement(isSameType);
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var functorTrait = _defineProperty$1({}, map, function (fn) {
  return this.constructor[of](fn(this.value));
});
var applyTrait = _defineProperty$1({}, ap, function (applyWithFn) {
  var _this = this;
  return applyWithFn.map(function (fn) {
    return fn(_this.value);
  });
});
var setoidTrait = _defineProperty$1({}, equals, function (setoid) {
  return isSameType(this, setoid) && equals$1(this.value, setoid.value);
});
var semigroupTrait = _defineProperty$1({}, concat, function (semigroup) {
  var concatenatedValue = this.value;
  if (isString(this.value) || isNumber(this.value)) {
    concatenatedValue = this.value + semigroup.value;
  } else if (pathSatisfies(isFunction, ["value", concat], this)) {
    concatenatedValue = this.value[concat](semigroup.value);
  } else if (pathSatisfies(isFunction, ["value", "concat"], this)) {
    concatenatedValue = this.value.concat(semigroup.value);
  }
  return this.constructor[of](concatenatedValue);
});
var chainTrait = _defineProperty$1({}, chain, function (fn) {
  var newChain = fn(this.value);
  return isSameType(this, newChain) ? newChain : this;
});
var ordTrait = _defineProperty$1({}, lte, function (ord) {
  return isSameType(this, ord) && (this.value < ord.value || this[equals](ord));
});
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props2) {
  for (var i = 0; i < props2.length; i++) {
    var descriptor = props2[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) {
      descriptor.writable = true;
    }
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) {
    _defineProperties$1(Constructor.prototype, protoProps);
  }
  if (staticProps) {
    _defineProperties$1(Constructor, staticProps);
  }
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var Identity = /* @__PURE__ */ function (
  _fl$of,
  _fl$ap,
  _fl$map,
  _fl$equals,
  _fl$concat,
  _fl$chain,
  _fl$lte,
  _fl$empty,
  _fl$contramap,
) {
  function Identity2(value) {
    _classCallCheck$1(this, Identity2);
    this.value = value;
  }
  _createClass$1(Identity2, [{
    key: "get",
    value: function get() {
      return this.value;
    },
  }, {
    key: _fl$ap,
    value: function value(applyWithFn) {
      return applyTrait[ap].call(this, applyWithFn);
    },
  }, {
    key: "ap",
    value: function ap$12(applyWithFn) {
      return this[ap](applyWithFn);
    },
  }, {
    key: _fl$map,
    value: function value(fn) {
      return functorTrait[map].call(this, fn);
    },
  }, {
    key: "map",
    value: function map$12(fn) {
      return this[map](fn);
    },
  }, {
    key: _fl$equals,
    value: function value(setoid) {
      return setoidTrait[equals].call(this, setoid);
    },
  }, {
    key: "equals",
    value: function equals$12(setoid) {
      return this[equals](setoid);
    },
  }, {
    key: _fl$concat,
    value: function value(semigroup) {
      return semigroupTrait[concat].call(this, semigroup);
    },
  }, {
    key: "concat",
    value: function concat$12(semigroup) {
      return this[concat](semigroup);
    },
  }, {
    key: _fl$chain,
    value: function value(fn) {
      return chainTrait[chain].call(this, fn);
    },
  }, {
    key: "chain",
    value: function chain$1(fn) {
      return this[chain](fn);
    },
  }, {
    key: _fl$lte,
    value: function value(ord) {
      return ordTrait[lte].call(this, ord);
    },
  }, {
    key: "lte",
    value: function lte$12(ord) {
      return this[lte](ord);
    },
  }, {
    key: _fl$empty,
    value: function value() {
      return this.constructor.of(empty$1(this.value));
    },
  }, {
    key: "empty",
    value: function empty$12() {
      return this[empty]();
    },
  }, {
    key: _fl$contramap,
    value: function value(fn) {
      var _this = this;
      return this.constructor.of(function (value2) {
        return _this.value(fn(value2));
      });
    },
  }, {
    key: "contramap",
    value: function contramap$1(fn) {
      return this[contramap](fn);
    },
  }], [{
    key: _fl$of,
    value: function value(_value) {
      return new Identity2(_value);
    },
  }, {
    key: "of",
    value: function of2(value) {
      return new Identity2(value);
    },
  }, {
    key: "@@type",
    get: function get() {
      return "RA/Identity";
    },
  }]);
  return Identity2;
}(of, ap, map, equals, concat, chain, lte, empty, contramap);
var lensTraverse = curryN(1, function (of2) {
  return curry(function (toFunctorFn, target) {
    return Identity.of(traverse(of2, pipe(toFunctorFn, prop("value")), target));
  });
});
var isomorphic = function isomorphic2(to, from2) {
  var isomorphism = function isomorphism2(x) {
    return to(x);
  };
  isomorphism.from = from2;
  return isomorphism;
};
var isomorphisms = function isomorphisms2(to, from2) {
  return isomorphic(
    curry(function (toFunctorFn, target) {
      return map$1(from2, toFunctorFn(to(target)));
    }),
    curry(function (toFunctorFn, target) {
      return map$1(to, toFunctorFn(from2(target)));
    }),
  );
};
var from = curry(function (isomorphism, x) {
  return isomorphism.from(x);
});
var lensIso = curry(isomorphisms);
lensIso.from = from;
var propNotEq = complement(propEq);
var pathNotEq = complement(pathEq);
var inRangeImp = ifElse(gte, function () {
  throw new Error(
    "low must not be greater than high in inRange(low, high, value)",
  );
}, useWith(both, [lte$1, gt]));
var inRange = curry(function (low, high, value) {
  return inRangeImp(low, high)(value);
});
var notEqual = complement(equals$1);
var overlaps = curryN(2, function (list1, list2) {
  if (isEmpty(list1)) {
    return true;
  }
  return pipe(intersection, isNotEmpty)(list1, list2);
});
var notBoth = curry(compose(complement, both));
var nand = complement(and);
var neither = curry(compose(complement, either));
var nor = complement(or);
var notAllPass = curry(compose(complement, allPass));
var nonePass = curryN(1, compose(complement, anyPass));
var argsPass = curry(function (combiningPredicate, predicates) {
  return useWith(compose(combiningPredicate(isTruthy), list), predicates);
});
var dropArgs = nAry(0);
var round = curryN(1, bind(Math.round, Math));
var ceil = curryN(1, bind(Math.ceil, Math));
var divideNum = flip(divide);
var truncPonyfill = function truncPonyfill2(v) {
  var numV = Number(v);
  if (!_isFinite(numV)) {
    return numV;
  }
  return numV - numV % 1 || (numV < 0 ? -0 : numV === 0 ? numV : 0);
};
var truncPonyfill$1 = curryN(1, truncPonyfill);
var trunc = isFunction(Math.trunc)
  ? curryN(1, bind(Math.trunc, Math))
  : truncPonyfill$1;
var signPonyfill = function signPonyfill2(number) {
  return (number > 0) - (number < 0) || +number;
};
var signPonyfill$1 = curryN(1, signPonyfill);
var sign = isFunction(Math.sign)
  ? curryN(1, bind(Math.sign, Math))
  : signPonyfill$1;
var subtractNum = flip(subtract);
var toUinteger32 = curryN(1, function (val) {
  return val >>> 0;
});
var isCoercible = neither(
  isSymbol,
  both(isObj, neither(hasIn("toString"), hasIn("valueOf"))),
);
var toNumber = ifElse(isCoercible, Number, always(NaN));
var escapeRegExp = when(isString, replace(/[.*+?^${}()|[\]\\-]/g, "\\$&"));
var checkArguments = function checkArguments2(searchValue, replaceValue, str) {
  if (str == null || searchValue == null || replaceValue == null) {
    throw TypeError("Input values must not be `null` or `undefined`");
  }
};
var checkValue = function checkValue2(value, valueName) {
  if (typeof value !== "string") {
    if (!(value instanceof String)) {
      throw TypeError("`".concat(valueName, "` must be a string"));
    }
  }
};
var checkSearchValue = function checkSearchValue2(searchValue) {
  if (
    typeof searchValue !== "string" && !(searchValue instanceof String) &&
    !(searchValue instanceof RegExp)
  ) {
    throw TypeError("`searchValue` must be a string or an regexp");
  }
};
var replaceAll = function replaceAll2(searchValue, replaceValue, str) {
  checkArguments(searchValue, replaceValue, str);
  checkValue(str, "str");
  checkValue(replaceValue, "replaceValue");
  checkSearchValue(searchValue);
  var regexp = new RegExp(
    isRegExp(searchValue) ? searchValue : escapeRegExp(searchValue),
    "g",
  );
  return replace(regexp, replaceValue, str);
};
var replaceAllPonyfill = curryN(3, replaceAll);
var replaceAllInvoker = invoker(2, "replaceAll");
var replaceAll$1 = isFunction(String.prototype.replaceAll)
  ? replaceAllInvoker
  : replaceAllPonyfill;
var trimStart = replace(/^[\s\uFEFF\xA0]+/, "");
var trimStartPonyfill = trimStart;
var trimStartInvoker = invoker(0, "trimStart");
var trimStart$1 = isFunction(String.prototype.trimStart)
  ? trimStartInvoker
  : trimStartPonyfill;
var trimStart$2 = replace(/[\s\uFEFF\xA0]+$/, "");
var trimEndPonyfill = trimStart$2;
var trimEndInvoker = invoker(0, "trimEnd");
var trimEnd = isFunction(String.prototype.trimEnd)
  ? trimEndInvoker
  : trimEndPonyfill;
var trimCharsEnd = curry(function (chars, value) {
  return pipe(split(""), dropLastWhile(included(chars)), join(""))(value);
});
var trimCharsStart = curry(function (chars, value) {
  return pipe(split(""), dropWhile(included(chars)), join(""))(value);
});
var padStartPonyfill = function padStartPonyfill2(
  padString,
  targetLength,
  value,
) {
  var finalLength = targetLength >> 0;
  var finalPadString = String(isNotUndefined(padString) ? padString : " ");
  if (value.length >= finalLength) {
    return String(value);
  }
  finalLength -= value.length;
  if (finalLength > finalPadString.length) {
    var lenghtToPad = finalLength / finalPadString.length;
    finalPadString += isFunction(String.prototype.repeat)
      ? finalPadString.repeat(lenghtToPad)
      : repeat(finalPadString, lenghtToPad);
  }
  return finalPadString.slice(0, finalLength) + String(value);
};
var padStartInvoker = flip(invoker(2, "padStart"));
var padStartPonyfill$1 = curry(padStartPonyfill);
var padCharsStart = isFunction(String.prototype.padStart)
  ? padStartInvoker
  : padStartPonyfill$1;
var padEndPonyfill = function padEndPonyfill2(padString, targetLength, value) {
  var finalLength = targetLength >> 0;
  var finalPadString = String(isNotUndefined(padString) ? padString : " ");
  if (value.length > finalLength) {
    return String(value);
  }
  finalLength -= value.length;
  if (finalLength > finalPadString.length) {
    var remainingLength = finalLength / finalPadString.length;
    finalPadString += isFunction(String.prototype.repeat)
      ? finalPadString.repeat(remainingLength)
      : repeat(finalPadString, remainingLength);
  }
  return String(value) + finalPadString.slice(0, finalLength);
};
var padEndPonyfill$1 = curry(padEndPonyfill);
var padEndInvoker = flip(invoker(2, "padEnd"));
var padCharsEnd = isFunction(String.prototype.padEnd)
  ? padEndInvoker
  : padEndPonyfill$1;
var padEnd = padCharsEnd(" ");
var padStart = padCharsStart(" ");
export {
  _isFinite as isFinite,
  _isNaN as isNaN,
  allEqual,
  allEqualTo,
  allIdentical,
  allIdenticalTo,
  allP,
  allSettledP,
  allUnique,
  anyP,
  anyP as firstP,
  appendFlipped,
  argsPass,
  async,
  catamorphism as cata,
  catchP,
  ceil,
  compact,
  concatAll,
  concatRight,
  copyKeys,
  curryRight,
  curryRightN,
  defaultWhen,
  delayP,
  dispatch,
  divideNum,
  dropArgs,
  ensureArray,
  escapeRegExp,
  filterIndexed,
  findOr,
  flattenDepth,
  flattenPath,
  flattenProp,
  floor,
  fnull,
  Identity,
  included,
  inRange,
  invoke,
  invokeArgs,
  isArray,
  isArrayLike,
  isAsyncFunction,
  isBigInt,
  isBoolean,
  isDate,
  isEmptyArray,
  isEmptyString,
  isError,
  isEven,
  isFalse,
  isFalsy,
  isFloat,
  isFunction,
  isGeneratorFunction,
  isIndexed,
  isInteger,
  isInteger32,
  isInteger32 as isInt32,
  isIterable,
  isMap,
  isNaturalNumber,
  isNegative,
  isNegativeZero,
  isNilOrEmpty,
  isNonEmptyArray,
  isNonEmptyString,
  isNonNegative,
  isNonPositive,
  isNotArray,
  isNotArrayLike,
  isNotAsyncFunction,
  isNotBoolean,
  isNotDate,
  isNotEmpty,
  isNotFinite,
  isNotFloat,
  isNotFunction,
  isNotGeneratorFunction,
  isNotInteger,
  isNotMap,
  isNotNaN,
  isNotNil,
  isNotNilOrEmpty,
  isNotNull,
  isNotNumber,
  isNotObj,
  isNotObj as isNotObject,
  isNotObjLike,
  isNotObjLike as isNotObjectLike,
  isNotPair,
  isNotPlainObj,
  isNotPlainObj as isNotPlainObject,
  isNotPrimitive,
  isNotRegExp,
  isNotSet,
  isNotString,
  isNotUndefined,
  isNotValidDate,
  isNotValidDate as isInvalidDate,
  isNotValidNumber,
  isNull,
  isNumber,
  isObj,
  isObj as isObject,
  isObjLike,
  isObjLike as isObjectLike,
  isOdd,
  isPair,
  isPlainObj,
  isPlainObj as isPlainObject,
  isPositive,
  isPositiveZero,
  isPrimitive,
  isPromise,
  isPrototypeOf,
  isRegExp,
  isSafeInteger,
  isSentinelValue,
  isSet,
  isSparseArray,
  isString,
  isSymbol,
  isThenable,
  isTrue,
  isTruthy,
  isUndefined,
  isValidDate,
  isValidNumber,
  lastP,
  lengthEq,
  lengthGt,
  lengthGte,
  lengthLt,
  lengthLte,
  lengthNotEq,
  lensEq,
  lensIso,
  lensNotEq,
  lensNotSatisfy,
  lensSatisfies,
  lensTraverse,
  liftF,
  liftFN,
  list,
  mapIndexed,
  mergePath,
  mergePaths,
  mergeProp,
  mergeProps,
  move,
  nand,
  neither,
  noneP,
  nonePass,
  noop,
  nor,
  notAllPass,
  notAllUnique,
  notBoth,
  notEqual,
  omitBy,
  omitIndexes,
  overlaps,
  padCharsEnd,
  padCharsStart,
  padEnd,
  padStart,
  pathNotEq,
  pathOrLazy,
  paths,
  pickIndexes,
  propNotEq,
  rangeStep,
  reduceIndexed,
  reduceP,
  reduceRightP,
  rejectP,
  renameKeys,
  renameKeysWith,
  renameKeyWith,
  repeatStr,
  replaceAll$1 as replaceAll,
  resolveP,
  round,
  seq,
  seq as sequencing,
  sign,
  skipTake,
  sliceFrom,
  sliceTo,
  sortByProps,
  spreadPath,
  spreadProp,
  stubArray,
  stubNull,
  stubObj,
  stubObj as stubObject,
  stubString,
  stubUndefined,
  subtractNum,
  thenCatchP,
  toArray,
  toInteger32,
  toInteger32 as toInt32,
  toNumber,
  toUinteger32,
  toUinteger32 as toUint32,
  trimCharsEnd,
  trimCharsStart,
  trimEnd,
  trimEnd as trimRight,
  trimStart$1 as trimLeft,
  trimStart$1 as trimStart,
  trunc,
  unzipObjWith,
  viewOr,
  weave,
  weaveLazy,
  Y,
  zipObjWith,
};
export default null;
