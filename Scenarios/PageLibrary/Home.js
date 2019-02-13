class Home {

    constructor(_browser)
    {
        this.browser = _browser;
    }

    visitHomePage()
    {
        let weather_url = 'https://openweathermap.org/';
        let waitForPageLoad_selector = "//a[@href='/stations']";

        this.browser
        .url(weather_url)
        .waitForElementVisible(waitForPageLoad_selector);

        return this;
    }

    setCity(city_value)
    {
        let input_selector = "//input[@id='q' and @placeholder='Your city name']";
        let submit_selector = "//form[@id='searchform']//button[@type='submit']";

        this.browser
            .waitForElementVisible(input_selector)
            .setValue(input_selector, city_value)
            .click(submit_selector)
    }
}

module.exports = Home;