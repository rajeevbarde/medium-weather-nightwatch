const HomePage = require("../Scenarios/PageLibrary/Home");

let home;

module.exports = {
    'Go to openweathermap.org': function (browser) {
        home = new HomePage(browser);
        home.visitHomePage();
    },

    'Verify valid city name - Tokyo': function (browser) {
        home.setCity("tokyo")
        browser.expect.element("//div[@id='forecast-list']").text.to.contain('Tokyo, JP');
    },
};