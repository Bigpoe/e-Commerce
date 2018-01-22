var webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    basePage = require('./BasePage'),
    properties = require ('../Properties'),
    By = webdriver.By,
    until = webdriver.until;

    class Checkout5OrderSummary extends basePage{

      clickContinueShoppping(){
        let continueB = driver.findElement(By.css("#cart_navigation > a"));
        continueB.click();
      }

      clickConfirmOrder(){
        let confirmOrder = driver.findElement(By.css("#cart_navigation > button"));
        confirmOrder.click();
        let title = driver.wait(until.elementLocated(By.className("page-heading")),2000).getText().then(text => {
          assert.equal("ORDER CONFIRMATION",text);
          console.log("Title view is: " + text);
        });
      }

    }
    module.exports = new Checkout5OrderSummary();
