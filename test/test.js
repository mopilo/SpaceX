var expect = require('chai').expect;
var cal = require('../lib/actions');
//this test applies to all functions in cal
describe('royalty()',  async function () {
  it('should return balance from a trip ',  async function () {
    
    // 1. ARRANGE
    var wallet = 3000;
    var fare = 200;
    var tripBal = wallet - fare;

    // 2. ACT
    var result =  await cal.royalty(wallet, fare).then(function (re) {
        return re
    });

    // 3. ASSERT
    expect(result).to.be.eql(tripBal);

  });
});