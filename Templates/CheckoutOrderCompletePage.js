var webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    basePage = require('./BasePage'),
    properties = require ('../Properties'),
    By = webdriver.By,
    until = webdriver.until;

    class CheckoutOrderComplete extends basePage{

      clickCustomerService(){
        let customerS = driver.findElement(By.css("#center_column > div > a"));
        customerS.click();
      }

      clickBackToOrders(){
        let back = driver.findElement(By.css("#center_column > p.cart_navigation.exclusive > a"));
        back.click();
      }

    }
    module.exports = new CheckoutOrderComplete();
