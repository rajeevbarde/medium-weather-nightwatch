const HomePage = require("../Scenarios/PageLibrary/Home");

module.exports = {
    'Verify Element on top black band - metric(°C)/imperial(°F), Sign in/up': function (browser) {

        let home = new HomePage(browser);
        home.visitHomePage();

        browser.expect.element("//span[@id='metric']").text.to.contain('°C')
        browser.expect.element("//span[@id='imperial']").text.to.contain('°F')

        browser.expect.element("(//a[@class='pull-right'])[1]").text.to.contain('Sign Up')
        browser.expect.element("(//a[@class='pull-right'])[2]").text.to.contain('Sign In')
    },

    'Verify Logo and main menu informations': +function (browser) {
        browser.expect.element("//a[@class='navbar-brand']/img").to.have.attribute('src').which.contains('/themes/openweathermap/assets/vendor/owm/img/logo_OpenWeatherMap_orange.svg')
        browser.expect.element("//a[@class='navbar-brand']/img").to.have.attribute('alt').which.contains('openweathermap')

        let menu_items = ['Weather', 'Maps', 'Guide', 'API', 'Price', 'Partners', 'Stations', 'Widgets', 'Blog', ''];
        browser.elements("css selector", "ul.nav.navbar-nav.navbar-right > li", (li_items) => {

            for (let i = 0; i < li_items.value.length; i++) {
                browser.elementIdText(li_items.value[i].ELEMENT, (res) => {
                    let answer = menu_items.includes(res.value);
                    browser.assert.ok(answer, "[" + res.value + "] exist in main menu!")
                });
            }
        })
    },

    'Verify banner information': +function (browser) {
        browser.expect.element("//h2[@class='jumbotron__title']").text.to.contain('We Deliver 2 Billion Forecasts Per Day')
        browser.expect.element("//h4[@class='jumbotron__description']").text.to.contain('2,000 new subscribers a day | 1,500,000 customers | 20+ weather APIs')
    },

    'Verify current weather Banner & left weather section': +function (browser) {
        browser.expect.element("//h2[@class='widget__title']").text.to.contain('Current weather and forecasts in your city')
        browser.expect.element("//h2[@class='weather-widget__city-name']").text.to.contain('Weather in')   
        
        let table_items = ['Wind','Cloudiness','Pressure','Humidity','Sunrise','Sunset','Geo coords'];
        browser.elements("xpath", "//tr[@class='weather-widget__item']/td[1]", (td_items) => {

            for (let i = 0; i < td_items.value.length; i++) {
                browser.elementIdText(td_items.value[i].ELEMENT, (res) => {
                    let answer = table_items.includes(res.value);
                    browser.assert.ok(answer, "[" + res.value + "] exist in table!")
                });
            }
        })
    },

    'Verify middle weather section': +function (browser) {
        browser.expect.element("(//li[@class='widget-tabs__item'])[2]").text.to.contain('Daily')
        browser
            .click("(//li[@class='widget-tabs__item'])[2]")
            .waitForElementVisible("//*[contains(text(),'Daily weather and forecasts in')]")

        browser.expect.element("(//li[@class='widget-tabs__item'])[3]").text.to.contain('Hourly')
        browser
            .click("(//li[@class='widget-tabs__item'])[3]")
            .waitForElementVisible("//*[contains(text(),'Hourly weather and forecasts')]")

        browser.expect.element("(//li[@class='widget-tabs__item'])[4]").text.to.contain('Chart')
        browser
            .click("(//li[@class='widget-tabs__item'])[4]")
            .waitForElementVisible("//*[contains(text(),'Chart weather and forecasts')]")

        browser.expect.element("(//li[@class='widget-tabs__item'])[5]").text.to.contain('Map')
        browser
            .click("(//li[@class='widget-tabs__item'])[5]")
            .waitForElementVisible("//*[contains(text(),'Map weather and forecasts')]")

        browser.expect.element("(//li[@class='widget-tabs__item'])[1]").text.to.contain('Main')
        browser
            .click("(//li[@class='widget-tabs__item'])[1]")
            .waitForElementVisible("//*[contains(text(),'Weather and forecasts')]")
    }
};