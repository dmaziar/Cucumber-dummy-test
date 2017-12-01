let util = require('util'),
    events = require('events');
let Allure = require('allure-js-commons');
let allure = new Allure();
let id =0;

let testReporter2 = function(options) {
    allure.setOptions({ targetDir: options.outputDir || 'allure-results' })

    this.on('suite:start', function(suit) {
        if (suit.parent === null) {
            console.log('Suit')
            allure.startSuite(suit.title);
        } else {
            console.log('Case')
            allure.startCase(suit.title+id);
        }
        id++;
        console.log('Suit start');
    });

    this.on('suite:end', function(suit) {
        console.log('Suit end');
        if (suit.parent === null) {
            allure.endSuite();
        } else {
            allure.endCase()
        }
    });

    this.on('test:start', function (test) {
        test.parent = 'ddfgdfgdg'
        console.log('This is a step'+test.parent)
        allure.startStep(test.title)
        allure.endStep()
    });

    this.on('test:end', function (){

    });
};


util.inherits(testReporter2, events.EventEmitter);

module.exports = testReporter2;
