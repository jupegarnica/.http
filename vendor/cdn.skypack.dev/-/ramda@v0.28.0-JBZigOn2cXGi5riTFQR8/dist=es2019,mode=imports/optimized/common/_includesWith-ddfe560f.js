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
export { _includesWith as _ };
export default null;
