# random-month

> Generate a random month.

  
[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-month/blob/master/LICENSE)
  
[![build:?](https://img.shields.io/travis/mock-end/random-month/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-month)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-month/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-month)
  
  
## Install
  
```
$ npm install --save random-month 
```
  
## Usage
  
```js
var randomMonth = require('random-month');
  
// API
// - randomMonth([options]);
  
// options
// - raw
// - min
// - max
```

By default, returns just the month number from `1` to `12`. 

```js
randomMonth();
// => 10
```

Optionally specify raw to get the whole month object:

```js
randomMonth({ raw: true });
// => {name: 'October', short: 'Oct', number: 10, days: 31}
```

Optionally specify min, max, or both to limit the range.

```js
randomMonth({ min: 10 });
// => 11

randomMonth({ max: 10 });
// => 7

randomMonth({ min: 3, max: 9 });
// => 6
```

## Related
  
- [random-year](https://github.com/mock-end/random-year) - Generate a random year.
- [random-day](https://github.com/mock-end/random-day) - Generate a random day of a month.
- [random-hour](https://github.com/mock-end/random-hour) - Generate a random hour.
- [random-minute](https://github.com/mock-end/random-minute) - Generate a random minute.
- [random-second](https://github.com/mock-end/random-second) - Generate a random second.
- [random-millisecond](https://github.com/mock-end/random-millisecond) - Generate a random millisecond.
- [random-weekday](https://github.com/mock-end/random-weekday) - Generate a random weekday.
- [random-datetime](https://github.com/mock-end/random-datetime) - Generate a random date. 
- [random-ampm](https://github.com/mock-end/random-ampm) - Return am or pm. Very simple.
- [random-timestamps](https://github.com/mock-end/random-timestamps) - Generate a timestamp. 
- [random-hammertime](https://github.com/mock-end/random-hammertime) - Generate a random hammertime.   

  
## Contributing
  
Pull requests and stars are highly welcome.
  
For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-month/issues/new).
