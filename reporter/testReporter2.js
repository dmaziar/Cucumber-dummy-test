let util = require('util'),
    events = require('events'),
    Allure = require('allure-js-commons'),
    AllureRuntime = require('allure-js-commons/runtime'),
    allure = new Allure(),
    id =0;

function getTags (tags) {
    let tagsString,
        defectsString
    if (tags.length !==0) {
        for (let i = 0; i<tags.length; i++) {

        }
    }
}

let testReporter2 = function(options) {
    allure.setOptions({ targetDir: options.outputDir || 'allure-results' })

    this.on('suite:start', function(suit) {
        if (suit.parent === null) {
            allure.startSuite(suit.title);
        } else {
            allure.startCase(suit.title+id);
            const currentTest = allure.getCurrentTest()
            currentTest.addLabel('issue', "http://www.google.com")
            currentTest.addLabel('testId','Test testId')
            currentTest.setDescription('test description', 'test')
            currentTest.addParameter('environment-variable', 'URL', process.env.URL)
            currentTest.addParameter('environment-variable', 'Feature name', suit.specs[0])
            console.log(suit)
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
