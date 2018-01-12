var webdriver = require('selenium-webdriver'),
    basePage = require('./BasePage'),
    properties = require ('../Properties'),
    By = webdriver.By,
    until = webdriver.until;

    class ProductDetail extends basePage{

      clickAddToCart(){
        let addTocart = driver.wait(until.elementLocated(By.id('add_to_cart')), 3000);
        addTocart.click();
      }

      closeConfirmation(){        
        let xButton = driver.wait(until.elementLocated(By.className("cross")), 3000);
        xButton.click();
      }
    }
//ableToSwitchToFrame
    module.exports = new ProductDetail();
