import pipe2 from "./pipe.js";
import reverse2 from "./reverse.js";
import "../../common/_arity-fefc01f2.js";
import "./reduce.js";
import "../../common/_curry3-716aebc1.js";
import "../../common/_curry1-a6784b40.js";
import "../../common/_isPlaceholder-69544913.js";
import "../../common/_curry2-21fa898b.js";
import "../../common/_reduce-6079ab80.js";
import "../../common/_isArrayLike-9455bd24.js";
import "../../common/_isArray-3f7112bf.js";
import "../../common/_isString-bd8a5e0f.js";
import "./bind.js";
import "./tail.js";
import "../../common/_checkForMethod-9f9acae8.js";
import "./slice.js";
function compose() {
  if (arguments.length === 0) {
    throw new Error("compose requires at least one argument");
  }
  return pipe2.apply(this, reverse2(arguments));
}
export default compose;
