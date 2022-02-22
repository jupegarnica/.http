function _complement(f) {
  return function() {
    return !f.apply(this, arguments);
  };
}
export {_complement as _};
export default null;
