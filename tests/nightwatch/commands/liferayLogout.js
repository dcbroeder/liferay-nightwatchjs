exports.command = function(server, username, password) {
    var self = this;
    return self.url(server+"/c/portal/logout")
      .waitForElementVisible("#p_p_id_com_liferay_product_navigation_user_personal_bar_web_portlet_ProductNavigationUserPersonalBarPortlet_")
      .assert.visible("#p_p_id_com_liferay_product_navigation_user_personal_bar_web_portlet_ProductNavigationUserPersonalBarPortlet_ .sign-in");
};
