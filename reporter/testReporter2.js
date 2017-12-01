let util = require('util'),
    events = require('events');
let Allure = require('allure-js-commons');
let allure = Object.create(Allure);


let testReporter2 = function(options) {
    this.on('suite:start', function(suit) {
      console.log('Suit start');
      allure.getCurrentSuite(suit.cid);
      console.log(suit)
    });

    this.on('suite:end', function() {
      console.log('Suit end');
    });
};


util.inherits(testReporter2, events.EventEmitter);

module.exports = testReporter2;
