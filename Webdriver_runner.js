var properties = require ('./Properties'),
    HomePage = require ('./Templates/HomePage'),
    ProductsList = require ('./Templates/ProductsListPage'),
    ProductDetail = require ('./Templates/ProductDetailPage');

//Tests Suites

function openWebPage(){
  HomePage.openHomePage();
}

function closeDriver(){
  HomePage.closeDriver();
}

function doLogOut(){
    HomePage.clickLogin();
}

function doLogin(){
    HomePage.clickLogin();
    LoginPage.fillEmail();
    LoginPage.clickContiuneButton();
    LoginPage.fillPassword();
    LoginPage.clickLoginButton();
}

function getElementText(){
  HomePage.getButtonLoginText();
}

function clickSubcategoryOnProductList(){
  HomePage.clickOnMainMenu(properties.MainMenuOption);
  ProductsList.clickSubcategory(properties.SubcategoryName);
}

function sortProductList(){
  HomePage.clickOnMainMenu(properties.MainMenuOption);
  ProductsList.sortListBy(properties.SortList);
}

function changeProductListView(){
  HomePage.clickOnMainMenu(properties.MainMenuOption);
  ProductsList.clickListView();
}


// function addProduct(){
//   HomePage.openWomenMenu();
//   HomePage.clickWomenOption();
//   ProductsList.findProduct();
//   ProductsList.openProductHover();
//   ProductsList.actionOnProduct();
//   ProductDetail.clickAddToCart();
//   ProductDetail.closeConfirmation();
// }

function addProducts(){
  properties.Products.forEach(function(product){
    HomePage.openWomenMenu();
    HomePage.clickWomenOption(product.productOption);
    ProductsList.findProduct(product.productName);
    ProductsList.openProductHover(product.productName);
    ProductsList.actionOnProduct(product.action);
    ProductDetail.clickAddToCart();
    driver.sleep(2000);
    ProductDetail.closeConfirmation();
    driver.sleep(2000);
    HomePage.clickLogo();
  });

}




//Run tests
openWebPage();
//addProduct();
//clickSubcategoryOnProductList();
// sortProductList();
// changeProductListView();
addProducts();


//closeDriver();
