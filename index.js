'use strict';

module.exports = function unique(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('array-unique expects an array.');
  }
  return arr.filter((val, index) => arr.indexOf(val) === index);
};
