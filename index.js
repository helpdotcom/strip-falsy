'use strict'

// While one may think that this should be implemented by deleting
// the properties not needed, it is actually significantly slower
// to delete the properties than it is to create a new object.
// Especially in node v4+. Checkout bench.js for more details.

module.exports = function stripFalsy(obj) {
  // if null, or not an object, return empty object
  if (!obj || typeof obj !== 'object')
    return {}

  var o = {}
  var keys = Object.keys(obj)
  var len = keys.length
  while (len--) {
    var val = obj[keys[len]]
    if (val) {
      o[keys[len]] = obj[keys[len]]
    }
  }
  return o
}
