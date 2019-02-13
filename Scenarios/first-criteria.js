const HomePage = require("../Scenarios/PageLibrary/Home");

module.exports = {

    'Go to openweathermap.org': function (browser) {
        home = new HomePage(browser);
        home.visitHomePage();
    },

    'Verify cookie privacy law notice': function (browser) {
        let cookie_panel = "//p[@class='stick-footer-panel__description']";
        browser.expect.element(cookie_panel).text.to.contain('We use cookies to enhance your experience of our site. By using openweathermap.org, you agree to our privacy policy');
    },

    'Verify Elements on top black band - metric(°C)/imperial(°F), Sign in/up': function (browser) {

        let metric = "//span[@id='metric']";
        let imperial = "//span[@id='imperial']";

        browser.expect.element(metric).text.to.contain('°C')
        browser.expect.element(imperial).text.to.contain('°F')

        let signUp = "(//a[@class='pull-right'])[1]";
        let signIn = "(//a[@class='pull-right'])[2]";

        browser.expect.element(signUp).text.to.contain('Sign Up')
        browser.expect.element(signIn).text.to.contain('Sign In')
    },

    'Verify Logo and main menu items': function (browser) {

        let site_logo = "//a[@class='navbar-brand']/img";

        browser.expect.element(site_logo).to.have.attribute('src').which.contains('/themes/openweathermap/assets/vendor/owm/img/logo_OpenWeatherMap_orange.svg')
        browser.expect.element(site_logo).to.have.attribute('alt').which.contains('openweathermap')

        let menu_items = ['Weather', 'Maps', 'Guide', 'API', 'Price', 'Partners', 'Stations', 'Widgets', 'Blog', ''];
        let menu_items_selector = "ul.nav.navbar-nav.navbar-right > li";

        browser.elements("css selector", menu_items_selector, (li_items) => {
            for (let i = 0; i < li_items.value.length; i++) {
                browser.elementIdText(li_items.value[i].ELEMENT, (res) => {
                    let answer = menu_items.includes(res.value);
                    browser.assert.ok(answer, "[" + res.value + "] exist in main menu!")
                });
            }
        })
    },

    'Verify banner information': function (browser) {
        
        let banner_title = "//h2[@class='jumbotron__title']";
        let banner_desc = "//h4[@class='jumbotron__description']";

        browser.expect.element(banner_title).text.to.contain('We Deliver 2 Billion Forecasts Per Day')
        browser.expect.element(banner_desc).text.to.contain('2,000 new subscribers a day | 1,500,000 customers | 20+ weather APIs')
    },

    'Verify current weather Banner & left weather section': function (browser) {
        
        let orange_banner = "//h2[@class='widget__title']";
        let left_widget_text = "//h2[@class='weather-widget__city-name']";

        browser.expect.element(orange_banner).text.to.contain('Current weather and forecasts in your city')
        browser.expect.element(left_widget_text).text.to.contain('Weather in')

        let table_items = ['Wind', 'Cloudiness', 'Pressure', 'Humidity', 'Sunrise', 'Sunset', 'Geo coords'];
        let table_1col = "//tr[@class='weather-widget__item']/td[1]";
        browser.elements("xpath", table_1col, (td_items) => {

            for (let i = 0; i < td_items.value.length; i++) {
                browser.elementIdText(td_items.value[i].ELEMENT, (res) => {
                    let answer = table_items.includes(res.value);
                    browser.assert.ok(answer, "[" + res.value + "] exist in table!")
                });
            }
        })
    },

    'Verify all important headers in the page': function (browser) {
        
        let sentinal2 = "(//h2[contains(@class,'owm-agro__title')])[1]";
        let agromonitoring = "(//h2[contains(@class,'owm-agro__title')])[2]";
        
        browser.expect.element(sentinal2).text.to.contain('Sentinel-2 via Openweather API');
        browser.expect.element(agromonitoring).text.to.contain('APIs for Agriculture on agromonitoring.com');

        let weather20 = "//h2[@class='owm-weathermap__title']";
        let wea20_forecast = "(//div[@class='owm-weathermap__title']//a)[1]";
        let wea20_15layer = "(//div[@class='owm-weathermap__title']//a)[2]";
        let wea20_interactive = "(//div[@class='owm-weathermap__title']//a)[3]";
        
        browser.expect.element(weather20).text.to.contain('Weather maps 2.0');
        browser.expect.element(wea20_forecast).text.to.contain('Forecast & Historical weather map');
        browser.expect.element(wea20_15layer).text.to.contain('15 Weather map layers');
        browser.expect.element(wea20_interactive).text.to.contain('Interactive current weather map');

        let campaign_management = "(//div[@class='services-item']//h3)[1]";
        let github_repo = "(//div[@class='services-item']//h3)[2]";
        let dev_api = "(//div[@class='services-item']//h3)[3]";
        let waether_stations = "(//div[@class='services-item']//h3)[4]";

        browser.expect.element(campaign_management).text.to.contain('Google Weather-Based Campaign Management with OpenWeatherMap API');
        browser.expect.element(github_repo).text.to.contain('2500+ OpenWeatherMap weather API repositories on GitHub');
        browser.expect.element(dev_api).text.to.contain('Weather APIs for developers');
        browser.expect.element(waether_stations).text.to.contain('Connect your weather station to OpenWeatherMap');

        let bug_alert = "(//div[@class='alert alert-info'])[1]";
        browser.expect.element(bug_alert).text.to.contain('Found a bug? Have a question or idea? Welcome to Support center');
    },

    'Verify all orange buttons labels': function (browser) {
        
        let orange_button = "//a[contains(@class,'btn-orange')]";
        let button_text = ["More weather in your city", "How to start", "Move to agromonitoring.com", "Read more", "View solutions", "Try Free APIs", "Connect"];
        
        browser.elements("xpath", orange_button, (td_items) => {

            for (let i = 0; i < td_items.value.length; i++) {
                browser.elementIdText(td_items.value[i].ELEMENT, (res) => {
                    let answer = button_text.includes(res.value);
                    browser.assert.ok(answer, "[" + res.value + "] text exist in orange button!")
                });
            }
        })


    },

    'Verify middle weather section': function (browser) {
        browser.expect.element("(//li[@class='widget-tabs__item'])[2]").text.to.contain('Daily');
        browser.expect.element("(//li[@class='widget-tabs__item'])[3]").text.to.contain('Hourly');
        browser.expect.element("(//li[@class='widget-tabs__item'])[4]").text.to.contain('Chart');
        browser.expect.element("(//li[@class='widget-tabs__item'])[5]").text.to.contain('Map');
        browser.expect.element("(//li[@class='widget-tabs__item'])[1]").text.to.contain('Main');
    }
};