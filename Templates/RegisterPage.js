var webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    basePage = require('./BasePage'),
    properties = require ('../Properties'),
    By = webdriver.By,
    until = webdriver.until;

    class Register extends basePage{

      genderMr(title){
        let mr = driver.findElement(By.id('uniform-id_gender1'));
        mr.click();
      }

      genderMrs(title){
        let mrs = driver.findElement(By.id('uniform-id_gender2'));
        mr.click();
      }

      firstName(firstName){
        let name = driver.findElement(By.id('customer_firstname'));
        name.sendKeys();
      }

      lastName(lastName){
        let name = driver.findElement(By.id('customer_lastname'));
        name.sendKeys();
      }

      email(email){
        let emailField = driver.findElement(By.id('email')).getText();.then(prepopulatedEmail => {
          assert.equal(email, prepopulatedEmail);
          console.log(email + prepopulatedEmail);
        });
      }

      password(password){
        let pass = driver.findElement(By.id('passwd'));
        pass.sendKeys();
      }

      dateDay(dayDate){
        let day = driver.findElement(By.id('days'));
        day.sendKeys();
      }

      dateMonth(monthDate){
        let month = driver.findElement(By.id('months'));
        month.sendKeys();
      }

      dateYear(yearDate){
        let year = driver.findElement(By.id('years'));
        year.sendKeys();
      }

      newsLetterCheck(news){
        let newsLetter = driver.findElement(By.id('newsletter'));
        newsLetter.click();
      }

      specialOffersCheck(offers){
        let specialOffers = driver.findElement(By.id('optin'));
        specialOffers.click();
      }

      addressFirstName(addressFN){
        let name = driver.findElement(By.id('firstname'));
        name.sendKeys();
      }

      addressLastName(addressLN){
        let lName = driver.findElement(By.id('lastname'));
        lName.sendKeys();
      }

      company(companyN){
        let company = driver.findElement(By.id('company'));
        company.sendKeys();
      }

      address1(addrrs1){
        let address1 = driver.findElement(By.id('address1'));
        address1.sendKeys();
      }

      address2(addrrs2){
        let address2 = driver.findElement(By.id('address2'));
        address2.sendKeys();
      }

      city(cityName){
        let city = driver.findElement(By.id('city'));
        city.sendKeys();
      }

      state(stateName){
        let state = driver.findElement(By.id('id_state'));
        state.sendKeys();
      }

      zipCode(zcode){
        let zip = driver.findElement(By.id('postcode'));
        zip.sendKeys();
      }

      country(contryName){
        let country = driver.findElement(By.id('id_country'));
        country.sendKeys();
      }

      additionalInfo(AddInf){
        let info = driver.findElement(By.id('other'));
        info.sendKeys();
      }

      homePhone(hmPhn){
        let homeP = driver.findElement(By.id('phone'));
        homeP.sendKeys();
      }

      mobilePhone(mblPhn){
        let mobileP = driver.findElement(By.id('phone_mobile'));
        mobileP.sendKeys();
      }

      aliasAddress(nick){
        let allias = driver.findElement(By.id('alias'));
        allias.sendKeys();
      }

      registerButton(){
        let register = driver.findElement(By.id('submitAccount'));
        register.click();
      }

    }

    module.exports = new Register();
