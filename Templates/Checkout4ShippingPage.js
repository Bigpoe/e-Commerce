var webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    basePage = require('./BasePage'),
    properties = require ('../Properties'),
    By = webdriver.By,
    until = webdriver.until;

    class Checkout4Shipping extends basePage{

      checkTermsOfService(){
        let terms = driver.findElement(By.id('cgv'));
        terms.click();
      }

      clickReadTerms(){
        let readTerms = dirver.findElement(By.css("#form > div > p.checkbox > a"));
        readTerms.click();
      }

      clickContinueShoppping(){
        let continueB = driver.findElement(By.css("#form > p > a"));
        continueB.click();
      }

      clickContinueCheckout(){
        let checkout = driver.findElement(By.name("processCarrier"));
        checkout.click();
        let title = driver.wait(until.elementLocated(By.className("page-heading")),2000).getText().then(text => {
          assert.equal("PLEASE CHOOSE YOUR PAYMENT METHOD",text);
          console.log("Title view is: " + text);
        });
      }

    }
    module.exports = new Checkout4Shipping();
