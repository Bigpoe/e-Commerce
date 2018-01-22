var webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    basePage = require('./BasePage'),
    properties = require ('../Properties'),
    By = webdriver.By,
    until = webdriver.until;

    class Checkout5Payment extends basePage{

      clickPayByBankWire(){
        let bankWire = driver.findElement(By.css("#HOOK_PAYMENT > div:nth-child(1) > div > p > a"));
        bankWire.click();
        let title = driver.wait(until.elementLocated(By.className("page-heading")),2000).getText().then(text => {
          assert.equal("ORDER SUMMARY",text);
          console.log("Title view is: " + text);
        });
      }

      clickPayByCheck(){
        let check = driver.findElement(By.css("#HOOK_PAYMENT > div:nth-child(2) > div > p > a"));
        check.click();
        let title = driver.wait(until.elementLocated(By.className("page-heading")),2000).getText().then(text => {
          assert.equal("ORDER SUMMARY",text);
          console.log("Title view is: " + text);
        });
      }

      clickContinueShoppping(){
        let continueB = driver.findElement(By.css("#center_column > div > p > a"));
        continueB.click();
      }

    }
    module.exports = new Checkout5Payment();
