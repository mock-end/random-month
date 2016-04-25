var expect = require('chai').expect;

describe('random-month: ', function () {

  var randomMonth = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {

      expect(randomMonth()).to.be.within(1, 12);

      expect(randomMonth({ min: 10 })).to.be.within(10, 12);
      expect(randomMonth({ max: 10 })).to.be.within(1, 10);

      expect(randomMonth({
        min: 10,
        max: 10,
        raw: true
      })).to.be.eql({
        name: 'October',
        short: 'Oct',
        number: 10,
        days: 31
      });
    }
  });
});
