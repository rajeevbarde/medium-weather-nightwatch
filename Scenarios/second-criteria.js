const HomePage = require("../Scenarios/PageLibrary/Home");

let home;
module.exports = {
    'Go to openweathermap.org': function (browser) {
        home = new HomePage(browser);
        home.visitHomePage();
    },

    'Verify invalid city name - Neverland': function (browser) {

        let alert_selector = "//div[@role='alert']";
        
        home.setCity("Neverland")
        browser.expect.element(alert_selector).text.to.contain('Not found');
    },



};