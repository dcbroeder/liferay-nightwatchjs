module.exports = {
  '@disabled': true,
  'Edit home header': function(browser) {
      var now = new Date();

      browser
        .liferayLogin(browser.globals.server.hostport, browser.globals.users.admin.email, browser.globals.users.admin.password)

        browser.url(browser.globals.server.hostport+browser.globals.urls.home).pause(1000)
        .click(".lexicon-icon-pencil")
        .waitForElementVisible("[data-editable-id='element-text']")
        .click("[data-editable-id='element-text']").pause(1000)
        .click("[data-editable-id='element-text']").pause(1000)
        .click("[data-type='editor']")
        .setValue("[data-editable-id='element-text']>div",now).pause(500)
        //.keys(...).pause(500)
        .click(".component-heading")
        .click(".btn-primary").pause(1000);

      browser.expect.element(".alert.alert-success").to.be.present;
      browser.expect.element("h1.component-heading").text.to.contain(now);

      browser.liferayLogout(browser.globals.server.hostport)
      browser.end();
  }
}
