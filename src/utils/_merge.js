const _merge = (old, updated) => {
  var o = {};
  old.forEach(function (v) {
    const key = Object.keys(v)[0]
    o[key] = v;
  })
  updated.forEach(function (v) {
    const key = Object.keys(v)[0]
    o[key] = v;
  })
  var r = [];
  for (var p in o) {
    if (o.hasOwnProperty(p))
      r.push(o[p]);
  }
  return r;
}
export default _merge
