# array-no-repeat [![Build Status](https://travis-ci.org/vivekimsit/array-no-repeat.svg?branch=master)](https://travis-ci.org/vivekimsit/array-no-repeat)

> Create an array of unique values, in order, from the input arrays.


## Install

```
$ npm install --save array-no-repeat
```


## Usage

```js
const unique = require('array-no-repeat');

unique([1, 2, 3]);
//=> [1, 2, 3]

unique(['foo', 'foo', 'bar']);
//=> ['foo', 'bar']
```


## License

MIT © [Vivek Poddar](https://www.vivekpoddar.com)
