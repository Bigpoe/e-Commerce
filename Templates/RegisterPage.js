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
        name.sendKeys(firstName);
      }

      lastName(lastName){
        let name = driver.findElement(By.id('customer_lastname'));
        name.sendKeys(lastName);
      }

      email(email){
        let emailField = driver.findElement(By.id('email')).getText().then(prepopulatedEmail => {
          assert.equal(email, prepopulatedEmail);
          console.log(email + prepopulatedEmail);
        });
      }

      password(password){
        let pass = driver.findElement(By.id('passwd'));
        pass.sendKeys(password);
      }

      dateDay(dayDate){
        let day = driver.findElement(By.id('days'));
        day.sendKeys(dayDate);
      }

      dateMonth(monthDate){
        let month = driver.findElement(By.id('months'));
        month.sendKeys(monthDate);
      }

      dateYear(yearDate){
        let year = driver.findElement(By.id('years'));
        year.sendKeys(yearDate);
      }

      newsLetterCheck(news){
        let newsLetter = driver.findElement(By.id('newsletter'));
        newsLetter.click(news);
      }

      specialOffersCheck(offers){
        let specialOffers = driver.findElement(By.id('optin'));
        specialOffers.click(offers);
      }

      addressFirstName(addressFN){
        let name = driver.findElement(By.id('firstname'));
        name.sendKeys(addressFN);
      }

      addressLastName(addressLN){
        let lName = driver.findElement(By.id('lastname'));
        lName.sendKeys(addressLN);
      }

      company(companyN){
        let company = driver.findElement(By.id('company'));
        company.sendKeys(companyN);
      }

      address1(addrrs1){
        let address1 = driver.findElement(By.id('address1'));
        address1.sendKeys(addrrs1);
      }

      address2(addrrs2){
        let address2 = driver.findElement(By.id('address2'));
        address2.sendKeys(addrrs2);
      }

      city(cityName){
        let city = driver.findElement(By.id('city'));
        city.sendKeys(cityName);
      }

      state(stateName){
        let state = driver.findElement(By.id('id_state'));
        state.sendKeys(stateName);
      }

      zipCode(zcode){
        let zip = driver.findElement(By.id('postcode'));
        zip.sendKeys(zcode);
      }

      country(contryName){
        let country = driver.findElement(By.id('id_country'));
        country.sendKeys(contryName);
      }

      additionalInfo(AddInf){
        let info = driver.findElement(By.id('other'));
        info.sendKeys(AddInf);
      }

      homePhone(hmPhn){
        let homeP = driver.findElement(By.id('phone'));
        homeP.sendKeys(hmPhn);
      }

      mobilePhone(mblPhn){
        let mobileP = driver.findElement(By.id('phone_mobile'));
        mobileP.sendKeys(mblPhn);
      }

      aliasAddress(nick){
        let allias = driver.findElement(By.id('alias'));
        allias.sendKeys(nick);
      }

      registerButton(){
        let register = driver.findElement(By.id('submitAccount'));
        register.click();
        driver.findElement((By.css("#center_column > h1"))).getText().then(accountView =>{
          console.log("Account created " + accountView);
        });
      }



    }

    module.exports = new Register();
