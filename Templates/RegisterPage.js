var webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    basePage = require('./BasePage'),
    properties = require ('../Properties'),
    By = webdriver.By,
    until = webdriver.until;

    class Register extends basePage{

      genderMr(){
        let mr = driver.findElement(By.id('uniform-id_gender1'));
        mr.click();
      }

      genderMrs(){
        let mrs = driver.findElement(By.id('uniform-id_gender2'));
        mr.click();
      }

      firstName(){
        let name = driver.findElement(By.id('customer_firstname'));
        name.sendKeys();
      }

      lastName(){
        let name = driver.findElement(By.id('customer_lastname'));
        name.sendKeys();
      }

      email(email){
        let emailField = driver.findElement(By.id('email')).getText();.then(prepopulatedEmail => {
          assert.equal(email, prepopulatedEmail);
          console.log(email + prepopulatedEmail);
        });
      }

      dateDay(){

      }

      dateMonth(){

      }

      dateYear(){
        
      }

    }

    module.exports = new Register();
