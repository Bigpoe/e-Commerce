var webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    basePage = require('./BasePage'),
    properties = require ('../Properties'),
    By = webdriver.By,
    until = webdriver.until;


  class CartView extends basePage{

    clickProductImage(){
      let productImage = driver.findElement(By.css("#product_4_16_0_0 > td.cart_product > a > img"));
      productImage.click();
    }

    clickProductName(){
      let productoName = driver.findElement(By.css("#product_4_16_0_0 > td.cart_description > p"));
      productoName.click();
    }

    productoAmount(){
      let amount = driver.findElement(By.css("#product_4_16_0_0 > td.cart_quantity.text-center > input.cart_quantity_input.form-control.grey"));
      amount.sendKeys("3");
    }

    quantityDown(){
      let removeButton = driver.findElement(By.id('cart_quantity_up_4_16_0_0'));
      removeButton.click();
    }

    quantityUp(){
      let addButton = driver.findElement(By.id('cart_quantity_up_4_16_0_0'));
      addButton.click();
    }

    removeProduct(){
      let remove = driver.findElement(By.id('4_16_0_0'));
      remove.click();
    }

    clickCheckoutButton(){
      let checkout = driver.findElement(By.css("#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium"));
      checkout.click();
    }

  }

  module.exports = new CartView();
