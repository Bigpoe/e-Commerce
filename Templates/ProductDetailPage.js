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

      layerCloseConfirmation(){
        let xButton = driver.wait(until.elementLocated(By.className("cross")), 3000);
        xButton.click();
      }

      layerContinueShopping(){
        let contButton = driver.findElement(By.css("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span"));
        contButton.click();
        //span[title=Continue shopping]    
      }
    }
//ableToSwitchToFrame
    module.exports = new ProductDetail();
