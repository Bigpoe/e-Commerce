var webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    basePage = require('./BasePage'),
    properties = require ('../Properties'),
    By = webdriver.By,
    until = webdriver.until;

    class MyAccount extends basePage{

      clickOrderHtory(){
        let history = driver.findElement(By.css("#center_column > div > div:nth-child(1) > ul > li:nth-child(1) > a"));
        history.click();
      }

      clickCreditSlip(){
        let creditSlip = driver.findElement(By.css("#center_column > div > div:nth-child(1) > ul > li:nth-child(2) > a"));
        creditSlip.click();
      }

      clickMyAddresses(){
        let addresses = driver.findElement(By.css("#center_column > div > div:nth-child(1) > ul > li:nth-child(3) > a"));
        addresses.click();
      }

      clickPersonalInfo(){
        let info = driver.findElement(By.css("#center_column > div > div:nth-child(1) > ul > li:nth-child(4) > a"));
        info.click();
      }

      clickMyWishhlist(){
        let wishlist = driver.findElement(By.css("#center_column > div > div:nth-child(1) > ul > li:nth-child(5) > a"));
        wishlist.click();
      }

      clickHome(){
        let backHome = driver.findElement(By.css("#center_column > ul > li > a"));
        backHome.click();
      }

    }
    module.exports = new MyAccount();
