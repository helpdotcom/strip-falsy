'use strict'

var test = require('tap').test
var strip = require('./')

test('stripFalsy', function(t) {
  t.plan(5)
  t.deepEqual(strip(null), {})
  t.deepEqual(strip('test'), {})
  t.deepEqual(strip(13), {})
  t.deepEqual(strip(), {})

  var input = {
    a: false
  , b: 0
  , c: null
  , d: undefined
  , e: ''
  , f: 'biscuits'
  , g: '0'
  }

  var exp = {
    f: 'biscuits'
  , g: '0'
  }

  t.deepEqual(strip(input), exp)
})
