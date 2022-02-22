import { _ as _curry1 } from "../../common/_curry1-a6784b40.js";
import { a as _dispatchable } from "../../common/_xfBase-47118e3a.js";
import {
  _ as _xdropRepeatsWith,
  d as dropRepeatsWith,
} from "../../common/dropRepeatsWith-841a3509.js";
import equals2 from "./equals.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isTransformer-816ffbd7.js";
import "../../common/_curry2-21fa898b.js";
import "./last.js";
import "./nth.js";
import "../../common/_isString-bd8a5e0f.js";
import "../../common/_includesWith-ddfe560f.js";
import "../../common/_has-ef506577.js";
import "../../common/_objectIs-99c5251f.js";
import "./keys.js";
import "../../common/_isArguments-6faa657b.js";
import "./type.js";
var dropRepeats = /* @__PURE__ */ _curry1(
  /* @__PURE__ */ _dispatchable(
    [],
    /* @__PURE__ */ _xdropRepeatsWith(equals2),
    /* @__PURE__ */ dropRepeatsWith(equals2),
  ),
);
export default dropRepeats;
