'use strict';

var randomNatural = require('random-natural');

var MIN = 1;
var MAX = 12;

var months = [
  { name: 'January', short: 'Jan', number: 1, days: 31 },
  // Not messing with leap years...
  { name: 'February', short: 'Feb', number: 2, days: 28 },
  { name: 'March', short: 'Mar', number: 3, days: 31 },
  { name: 'April', short: 'Apr', number: 4, days: 30 },
  { name: 'May', short: 'May', number: 5, days: 31 },
  { name: 'June', short: 'Jun', number: 6, days: 30 },
  { name: 'July', short: 'Jul', number: 7, days: 31 },
  { name: 'August', short: 'Aug', number: 8, days: 31 },
  { name: 'September', short: 'Sep', number: 9, days: 30 },
  { name: 'October', short: 'Oct', number: 10, days: 31 },
  { name: 'November', short: 'Nov', number: 11, days: 30 },
  { name: 'December', short: 'Dec', number: 12, days: 31 }
];

module.exports = function (options) {

  options = options || {};

  var min = options.min ? randomNatural.fixme(options.min, MIN, MAX, true) : MIN;
  var max = options.max ? randomNatural.fixme(options.max, MIN, MAX, false) : MAX;

  var index = randomNatural({
      min: min,
      max: max,
      inspected: true
    }) - 1;


  var month = months[index];
  return options.raw ? month : month.number;

};

module.exports.months = months;
