module.exports = {
    'Go to openweathermap.org': function (browser) {
        browser
            .url('https://openweathermap.org/')
            .waitForElementVisible("//a[@href='/stations']"); //wait for page to load
    },

    'Enter invalid city name - Neverland': function (browser) {
        browser
            .waitForElementVisible("//input[@id='q' and @placeholder='Your city name']")
            .setValue("//input[@id='q' and @placeholder='Your city name']", "Neverland")
            .click("//form[@id='searchform']//button[@type='submit']")

        browser.expect.element("//div[@role='alert']").text.to.contain('Not found');
    },



};