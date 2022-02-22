import { _ as _curry1 } from "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var ws =
  "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
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
export default trim;
