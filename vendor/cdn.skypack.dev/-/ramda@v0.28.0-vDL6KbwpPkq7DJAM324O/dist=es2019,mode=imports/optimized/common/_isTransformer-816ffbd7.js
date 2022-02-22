function _isTransformer(obj) {
  return obj != null && typeof obj["@@transducer/step"] === "function";
}
export {_isTransformer as _};
export default null;
