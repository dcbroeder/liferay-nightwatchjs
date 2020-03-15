module.exports = {
  'Check Names': function(browser) {
      var currentYear = new Date().getFullYear();
      browser
        .liferayLogin(browser.globals.server.hostport, browser.globals.users.admin.email, browser.globals.users.admin.password)

      browser.url(browser.globals.server.hostport+browser.globals.urls.yearApp)
        .setValue('input[name="firstName"]', browser.globals.mocks.firstName).pause(500)
        .setValue('input[name="lastName"]', browser.globals.mocks.lastName).pause(500)
        .click('input[type="submit"]')
        .waitForElementVisible(".user-greeting");

      browser.expect.element(".user-greeting").text.to.contain("Greetings, "+browser.globals.mocks.firstName+" "+browser.globals.mocks.lastName+"!");
      browser.expect.element(".user-greeting-date").text.to.contain(currentYear);

      browser.liferayLogout(browser.globals.server.hostport)
      browser.end();
  }
}
