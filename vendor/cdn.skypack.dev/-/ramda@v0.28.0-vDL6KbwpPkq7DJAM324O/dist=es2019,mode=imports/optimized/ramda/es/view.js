import { _ as _curry2 } from "../../common/_curry2-21fa898b.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
var Const = function (x) {
  return {
    value: x,
    "fantasy-land/map": function () {
      return this;
    },
  };
};
var view = /* @__PURE__ */ _curry2(function view2(lens, x) {
  return lens(Const)(x).value;
});
export default view;
