var webdriver = require('selenium-webdriver'),
    basePage = require('./BasePage'),
    properties = require ('../Properties'),
    By = webdriver.By,
    until = webdriver.until;

    class ProductsList extends basePage{

      clickSubcategory(subcategoryName){
        let selectSubcategory = driver.findElement(By.linkText(subcategoryName));
        selectSubcategory.click();
      }
      sortListBy(sort){
        let sortList = driver.findElement(By.id('selectProductSort'));
        sortList.sendKeys(sort);
      }

      clickGridView(){
        let gridView = driver.findElement(By.id('grid'));
        gridView.click();
      }

      clickListView(){
        let listView = driver.findElement(By.id('list'));
        listView.click();
      }

      findProduct(productName){
        let selectElement = driver.findElement(By.linkText(productName));
        driver.executeScript("arguments[0].scrollIntoView()", selectElement);
      }

      openProductHover(productName){
        const showOptions = driver.findElement(By.linkText(productName));
        driver.actions()
        .mouseMove(showOptions)
        .perform();

        /*driver.wait(until.elementLocated(By.linkText("Add to cart")),3000).getText().then(function(text){
          console.log("The text is: " + text);
        });*/
      }

      actionOnProduct(action){
        //Select an option from the options displayed
        const actionButton = driver.wait(until.elementLocated(By.linkText(action)), 2000);
        actionButton.click();

      }

    }
    module.exports = new ProductsList();
