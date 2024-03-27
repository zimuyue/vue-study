export function forEachValueKey (obj, callback) {
  Object.keys(obj).forEach(key => callback(obj[key], key));
}

// forEachValueKey({
//   a: 1,
//   b: 2
// }, function (value, key) {
//   console.log(value, key)
// })