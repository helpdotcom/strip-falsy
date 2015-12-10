'use strict'

var phr = require('phr')
var ITER = 1e6

function strip(obj) {
  var keys = Object.keys(obj)
  var len = keys.length
  while (len--) {
    var val = obj[keys[len]]
    if (!val)
      delete obj[keys[len]]
  }
  return obj
}

function stripCreate(obj) {
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

var t = process.hrtime()

// delete
for (var i = 0; i < ITER; i++) {
  var input = {
    a: false
  , b: 0
  , c: null
  , d: undefined
  , e: ''
  , f: 'biscuits'
  , g: '0'
  }
  strip(input)
}

t = process.hrtime(t)
console.log('delete', phr(t), 'ns/op')

t = process.hrtime()
// create new object
for (var i = 0; i < ITER; i++) {
  var input = {
    a: false
  , b: 0
  , c: null
  , d: undefined
  , e: ''
  , f: 'biscuits'
  , g: '0'
  }
  stripCreate(input)
}

t = process.hrtime(t)
console.log('new object', phr(t), 'ns/op')
