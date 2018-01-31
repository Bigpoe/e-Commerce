var webdriver = require('selenium-webdriver'),
    properties = require ('../Properties'),
    HomePage = require ('../HomePage'),
    ProductsList = require ('../ProductsListPage'),
    ProductDetail = require ('../ProductDetailPage'),
    By = webdriver.By,
    until = webdriver.until;


// describe("Home Page", () => {
//   it ('Title should be My Store', () => {
//     HomePage.openHomePage();
//     return HomePage.getTitle().then(title => {
//       expect(title).toBe("My Store")
//     })
//   })

jest.setTimeout(8000);

beforeAll(() =>{
  HomePage.openHomePage();
});

afterAll(() =>{
  driver.sleep(3000);
  driver.quit();
});

  describe("Home Page", () => {

    test ('Title should be My Store', () => {
      //HomePage.openHomePage();
      return HomePage.getTitle().then(title => {
        expect(title).toBe("My Store")
      })
    });

    test("Open Women menu and select an option", () => {
      HomePage.openWomenMenu();
      const openMenu = driver.wait(until.elementLocated(By.linkText("TOPS")),2000);
      return openMenu.getText().then(text => {
        expect(text).toBe("TOPS")


      //return driver.wait(until.elementLocated(By.linkText("TOPS")),2000).getText().then(text => {

      //return driver.wait(until.elementLocated(By.linkText("TOPS")),2000).getText().then(text => {
        //expect(text).toBe("TOPS")

        //console.log("The text is: " + text);
      })
    });

    test("Click women menu option", () => {
      HomePage.clickWomenOption(properties.Products.productOption);
      const title = driver.getTitle().then(title => {
        expect(title).toBe("Evening Dresses - My Store")
      })
      // return ProductsList.getTitle().then(title => {
      //   expect(title).toBe("Evening Dresses - My Store")
      // })
    })

  // test ('Login titlw should be My Store', () => {
  //   HomePage.clickLogin();
  //   return HomePage.getTitle().then(title => {
  //     expect(title).toBe("Login - My Store")
  //   })
  // });

})



console.log();
