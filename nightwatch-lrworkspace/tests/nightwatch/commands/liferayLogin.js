exports.command = function(server, username, password) {
    var self = this;
    return self.url(server+"/c/portal/login")
      .waitForElementVisible("#_com_liferay_login_web_portlet_LoginPortlet_login")
      .clearValue('#_com_liferay_login_web_portlet_LoginPortlet_login')
      .setValue('#_com_liferay_login_web_portlet_LoginPortlet_login', username).pause(1000)
      .setValue('#_com_liferay_login_web_portlet_LoginPortlet_password', password).pause(1000)
      .execute('$("form#_com_liferay_login_web_portlet_LoginPortlet_loginForm").submit()')
      .waitForElementVisible(".personal-menu-dropdown")
      .assert.visible(".personal-menu-dropdown");
};
