var webdriver = require('selenium-webdriver');
var properties = require('../Properties');
var driver = new webdriver.Builder().forBrowser('chrome').build();

class BasePage {
  constructor() {
    global.driver = driver;
    driver.manage().window().setSize(1400, 1000);
  }

  openHomePage(){
    driver.get(properties.URL);
    //driver.wait(until.titleIs('Submitted Successfully!'), 3000);
  }

  closeDriver(){
    driver.sleep(4000);
    driver.quit();
  }
}

module.exports = BasePage;
