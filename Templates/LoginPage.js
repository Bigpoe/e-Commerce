var webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    basePage = require('./BasePage'),
    properties = require ('../Properties'),
    By = webdriver.By,
    until = webdriver.until;

    class Login extends basePage{

      registerEmail(rEmail){
        let email = driver.findElement(By.id('email_create'));
        email.sendKeys(rEmail);
      }

      clickCreateAccount(){
        let createAccount = driver.findElement(By.id('SubmitCreate'));
        createAccount.click();
        driver.wait(until.elementLocated(By.css("#noSlide > h1")),5000).getText().then(title =>{
          assert.equal("CREATE AN ACCOUNT",title);
          console.log("Title view " + title);
        });
      }

      fillEmail(lEmail){
        let email = driver.findElement(By.id('email'));
        email.sendKeys(lEmail);
      }

      fillPassword(pss){
        let password = driver.findElement(By.id('passwd'));
        password.sendKeys(pss);
      }

      clickForgotPassword(){
        let forgotP = driver.findElement(By.css("#login_form > div > p.lost_password.form-group > a"));
        forgotP.click();
      }

      clickSignIn(){
        let signInButton = driver.findElement(By.id('SubmitLogin'));
        signInButton.click();
      }

      loginErrorMessage(){
        let text = driver.findElement(By.css("#center_column > div.alert.alert-danger > ol > li")).getText().then(textValue => {
          assert.equal("Authentication failed.", textValue);
          console.log(textValue);
        });
      }

      registerErrorMessage(){
        let text = driver.findElement(By.css("#create_account_error > ol > li")).getText().then(textValue => {
          assert.equal("Invalid email address.", textValue);
          console.log(textValue);
        });
      }

    }

  module.exports = new Login();
