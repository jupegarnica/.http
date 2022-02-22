import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import { _ as _includesWith } from "../../common/_includesWith-ddfe560f.js";
import { _ as _has } from "../../common/_has-ef506577.js";
import { _ as _objectIs } from "../../common/_objectIs-99c5251f.js";
import keys2 from "./keys.js";
import type2 from "./type.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArguments-6faa657b.js";
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}
function _functionName(f) {
  var match = String(f).match(/^function (\w*)/);
  return match == null ? "" : match[1];
}
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
  if (_objectIs(a, b)) {
    return true;
  }
  var typeA = type2(a);
  if (typeA !== type2(b)) {
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
      if (!(typeof a === typeof b && _objectIs(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case "Date":
      if (!_objectIs(a.valueOf(), b.valueOf())) {
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
  var keysA = keys2(a);
  if (keysA.length !== keys2(b).length) {
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
export default equals;
