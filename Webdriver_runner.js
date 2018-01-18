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

function getTextMenu(){
    HomePage.getMenuOptionText(properties.MainMenuOption);
}

function checkOut(){
  HomePage.openCartPreview();
  HomePage.clickCheckoutButton();
  HomePage.goBack();
  HomePage.goForward();
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

function add1Product(){
  HomePage.openWomenMenu();
  HomePage.clickWomenOption(properties.Product.productOption);
  ProductsList.findProduct(properties.Product.productName);
  ProductsList.openProductHover(properties.Product.productName);
  ProductsList.actionOnProduct(properties.Product.action);
  ProductDetail.clickAddToCart();
  driver.sleep(2000);
  //ProductDetail.layerCloseConfirmation();
  ProductDetail.layerContinueShopping();
  driver.sleep(2000);
  HomePage.clickLogo();
}

function addProducts(){
  properties.Products.forEach(function(product){
    HomePage.openWomenMenu();
    HomePage.clickWomenOption(product.productOption);
    ProductsList.findProduct(product.productName);
    ProductsList.openProductHover(product.productName);
    ProductsList.actionOnProduct(product.action);
    ProductDetail.clickAddToCart();
    driver.sleep(2000);
    ProductDetail.layerCloseConfirmation();
    driver.sleep(1000);
    HomePage.clickLogo();
  });

}




//Test runner

openWebPage();

//getTextMenu();

//addProduct();
//clickSubcategoryOnProductList();
// sortProductList();
// changeProductListView();
add1Product();
checkOut();
// addProducts();

//closeDriver();
