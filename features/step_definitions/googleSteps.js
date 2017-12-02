let {defineSupportCode} = require('cucumber');
let assert = require('assert');
let googlePage = require('../../pages/google.page')

defineSupportCode(function({Given, Then, When}) {
  Given(/^google is opened$/, function () {
      googlePage.open()
  });

  When(/^search for nordea$/, function () {
     googlePage.searchFld.waitForVisible()
     googlePage.searchFld.setValue('Nordea')
     googlePage.form.submitForm()
  });

  Then(/^nordea is on the first place$/, function () {
     googlePage.results[0].waitForVisible()
     assert.equal(googlePage.results[0].getText(), 'https://www.nordea.dk1/')
  });
})
