var webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    basePage = require('./BasePage'),
    properties = require ('../Properties'),
    By = webdriver.By,
    until = webdriver.until;

    class Checkout3Address extends basePage{

      selectDeliveryAddress(dAddress){
        let address = driver.findElement(By.id('id_address_delivery'));
        address.sendKeys(dAddress);
      }

      checkDeliveryAsBilling(){
        let deliveryAsBilling = driver.findElement(By.id('addressesAreEquals'));
        deliveryAsBilling.click();
      }

      updateDeliveryAddres(){
        let updateDelivery = driver.findElement(By.css("#address_delivery > li.address_update > a"));
        updateDelivery.click();
      }

      updateBillingAddres(){
        let updateBilling = driver.findElement(By.css("#address_invoice > li.address_update > a"));
        updateBilling.click();
      }

      clickNewAddress(){
        let newAdrress = driver.findElement(By.css("#center_column > form > div > p > a"));
        newAdrress.click();
      }

      addComments(notes){
        let comments = driver.findElement(By.css("#ordermsg > textarea"));
        comments.sendKeys(notes);
      }

      clickContinueCheckout(){
        let checkout = driver.findElement(By.css("#center_column > form > p > button"));
        checkout.click();
        let title = driver.wait(until.elementLocated(By.className("page-heading")),2000).getText().then(text => {
          assert.equal("SHIPPING",text);
          console.log("Title view is: " + text);
        });
      }

    }
    module.exports = new Checkout3Address();
