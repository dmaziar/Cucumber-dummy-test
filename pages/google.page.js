let Page = require('./page')

let GooglePage = Object.create(Page, {
    searchFld: {get: function (){ return browser.$('#lst-ib') }},
    form: {get: function (){ return browser.$('#tsf') }},
    results: {get: function () { return browser.$$('#res .rc cite') }},

    open: {value: function () {
       Page.open.call(this, '/')
    } }

})

module.exports = GooglePage;
