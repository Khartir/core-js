var classof = require('core-js-internals/classof');
var ITERATOR = require('core-js-internals/well-known-symbol')('iterator');
var Iterators = require('../internals/iterators');

module.exports = require('../internals/core').isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};