const HomePage = require("../Scenarios/PageLibrary/Home");

let home;
module.exports = {
    'Go to openweathermap.org': function (browser) {
        home = new HomePage(browser);
        home.visitHomePage();
    },

    'Verify invalid city name - Neverland': function (browser) {
        
        home.setCity("Neverland")
        browser.expect.element("//div[@role='alert']").text.to.contain('Not found');
    },



};