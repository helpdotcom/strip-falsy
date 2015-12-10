# strip-falsy

[![Build Status](https://travis-ci.org/helpdotcom/strip-falsy.svg)](https://travis-ci.org/helpdotcom/strip-falsy)
[![Coverage Status](https://coveralls.io/repos/helpdotcom/strip-falsy/badge.svg?branch=master&service=github)](https://coveralls.io/github/helpdotcom/strip-falsy?branch=master)

Strip falsy properties from an object.

**Note: The package actually creates a new object that has all of the**
**non-falsy properties of the input instead of deleting the properties.**
**This is done for performance reasons.**

## Install

```bash
$ npm install --save strip-falsy
```

## Usage

```js
var strip = require('strip-falsy')
var input = {
  a: false
, b: 0
, c: null
, d: undefined
, e: ''
, f: 'biscuits'
, g: '0'
}
var out = strip(input)
// => { f: 'biscuits', g: '0' }
```

## Test

```bash
$ npm test
```

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
