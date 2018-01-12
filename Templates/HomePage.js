var webdriver = require('selenium-webdriver'),
    basePage = require('./BasePage'),
    properties = require ('../Properties'),
    By = webdriver.By,
    until = webdriver.until;

    class Home extends basePage{

      getTitle(){
        return driver.getTitle();
      }

      clickLogo(){
        const logo = driver.wait(until.elementLocated(By.id('header_logo')),3000);
        logo.click();
      }

      clickContactUs(){
        const contactButton = driver.wait(until.elementLocated(By.linkText('Contact us')), 2000);
        contactButton.click();
      }

      clickLogin(){
        const loginButton = driver.wait(until.elementLocated(By.className("login")), 2000);
        loginButton.click();
      }

      getButtonLoginText(){
        driver.findElement(By.className("g-opacity-transition frontHero__loginButton g-button-transparent-inverted sc-button sc-button-medium loginButton")).getText().then(function(text){
          console.log("The text in the button is:" + text);
        });
      }

      openCartPreview(){
        const openCart = driver.findElement(By.css("#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a"));
        driver.actions()
        .mouseMove(openCart)
        //.click()
        .perform();
      }

      clickCheckoutButton(){
        const checkoutButton = driver.wait(until.elementLocated(By.linkText("Check out")),3000).then(function(text){
          console.log("Display checkout button " + text);
        });
        //checkoutButton.click();

        //driver.findElement(By.id('button_order_cart'));

        /*let cartAction = driver.findElement(By.id('button_order_cart'));
        driver.actions()
        .mouseMove(cartAction)
        .click()
        .perform();*/
      }

      clickOnMainMenu(mainMenuOption){
        let menuOption = driver.findElement(By.linkText(mainMenuOption));
        menuOption.click();
      }

      openWomenMenu(){
        //Go to the WOMEN menu activated by hover over and open it
        let womenMenu = driver.findElement(By.linkText("WOMEN"));
        driver.actions()
        .mouseMove(womenMenu)
        .perform();

        driver.wait(until.elementLocated(By.linkText("TOPS")),3000).getText().then(function(text){
          console.log("The text is: " + text);
        });
      }

      clickWomenOption(productOption){
        //Select an option from the options displayed

        let womenSubMenu = driver.findElement(By.linkText(productOption));
        driver.actions()
        .mouseMove(womenSubMenu)
        .click()
        .perform();
      }

      openDressesMenu(){
        //Go to the DRESSES menu activated by hover over and open it

        let dressesMenu = driver.findElement(By.css("#block_top_menu > ul > li:nth-child(2) > a"));
        driver.actions()
        .mouseMove(dressesMenu)
        .perform();
        driver.sleep(1000);
      }

      clickDressesButton(productOption){
        //Select an option from the options displayed

        let dressesSubMenu = driver.findElement(By.linkText(productOption));
        driver.actions()
        .mouseMove(dressesSubMenu)
        .click()
        .perform();
      }

      clickTshirtsButton(){
        driver.findElement(By.css("#block_top_menu > ul > li:nth-child(3) > a")).click();
      }

      clickHomeSlider(){
        const homeSiler = driver.wait(until.elementLocated(By.className("homeslider-container")), 2000);
        homeSiler.click();
      }

      clickNextBanner(){
        const nextBanner = driver.wait(until.elementLocated(By.className("bx-next")), 2000);
        nextBanner.click();
      }

      clickPreviousBanner(){
        const previousBanner = driver.wait(until.elementLocated(By.className("bx-prev")), 2000);
        previousBanner.click();
      }

      clickSmallSlider1(){
        const smallSiler1 = driver.wait(until.elementLocated(By.className("htmlcontent-item-1 col-xs-4")), 2000);
        smallSiler1.click();
      }

      clickSmallSlider2(){
        const smallSiler2 = driver.wait(until.elementLocated(By.className("htmlcontent-item-2 col-xs-4")), 2000);
        smallSiler2.click();
      }


    }
module.exports = new Home();
