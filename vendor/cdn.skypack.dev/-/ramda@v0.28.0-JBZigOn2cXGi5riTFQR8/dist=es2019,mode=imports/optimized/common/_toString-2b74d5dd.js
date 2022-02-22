import { _ as _includes } from "./_includes-6b736d1d.js";
import { _ as _map } from "./_map-855e0a50.js";
import keys2 from "../ramda/es/keys.js";
import reject2 from "../ramda/es/reject.js";
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
function _toString(x, seen) {
  var recur = function recur2(y) {
    var xs = seen.concat([x]);
    return _includes(y, xs) ? "<Circular>" : _toString(y, xs);
  };
  var mapPairs = function (obj, keys3) {
    return _map(function (k) {
      return _quote(k) + ": " + recur(obj[k]);
    }, keys3.slice().sort());
  };
  switch (Object.prototype.toString.call(x)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + _map(recur, x).join(", ") +
        "))";
    case "[object Array]":
      return "[" + _map(recur, x).concat(mapPairs(
        x,
        reject2(function (k) {
          return /^\d+$/.test(k);
        }, keys2(x)),
      )).join(", ") + "]";
    case "[object Boolean]":
      return typeof x === "object"
        ? "new Boolean(" + recur(x.valueOf()) + ")"
        : x.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(x.valueOf())
        ? recur(NaN)
        : _quote(_toISOString(x))) +
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
      return "{" + mapPairs(x, keys2(x)).join(", ") + "}";
  }
}
export { _toString as _ };
export default null;
