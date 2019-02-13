const HomePage = require("../Scenarios/PageLibrary/Home");

let home;

module.exports = {
    'Go to openweathermap.org': function (browser) {
        home = new HomePage(browser);
        home.visitHomePage();
    },

    'Verify valid city name - Tokyo': function (browser) {

        let forecast_selector = "//div[@id='forecast-list']";

        home.setCity("tokyo")
        browser.expect.element(forecast_selector).text.to.contain('Tokyo, JP');
    },
};