let util = require('util'),
    events = require('events'),
    Allure = require('allure-js-commons'),
    AllureRuntime = require('allure-js-commons/runtime'),
    allureRuntime = new AllureRuntime(),
    allure = new Allure(),
    id =0;

let testReporter2 = function(options) {
    allure.setOptions({ targetDir: options.outputDir || 'allure-results' })

    this.on('suite:start', function(suit) {
        if (suit.parent === null) {
            allure.startSuite(suit.title);
        } else {
            // allureRuntime.addLabel('Bug','123456')
            allure.startCase(suit.title+id);
        }
        id++;
    });

    this.on('suite:end', function(suit) {
        if (suit.parent === null) {
            allure.endSuite();
        } else {
            allure.endCase('passed')
        }
    });

    this.on('test:start', function (test) {
        allure.startStep(test.title)
    });

    this.on('test:pass', () => {
        allure.endStep('passed')
    })

    this.on('test:fail', function(test) {
        const status = test.err.stack.includes('AssertionError [ERR_ASSERTION]') === true ? 'failed' : 'broken'
        allure.endStep(status)
        allure.endCase(status, test.err)
    });
};


util.inherits(testReporter2, events.EventEmitter);

module.exports = testReporter2;
