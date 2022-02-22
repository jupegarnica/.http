function _reduced(x) {
  return x && x["@@transducer/reduced"] ? x : {
    "@@transducer/value": x,
    "@@transducer/reduced": true,
  };
}
export { _reduced as _ };
export default null;
