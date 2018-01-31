var properties = require ('../Properties'),
    HomePage = require ('../Templates/HomePage'),
    ProductsList = require ('../Templates/ProductsListPage'),
    ProductDetail = require ('../Templates/ProductDetailPage');

//Tests Suites
exports.testOpenPage = function openWebPage(){
  HomePage.openHomePage();
}

exports.testAdd1Product = function add1Product(){
  HomePage.openWomenMenu();
  HomePage.clickWomenOption(properties.Product.productOption);
  ProductsList.findProduct(properties.Product.productName);
  ProductsList.openProductHover(properties.Product.productName);
  ProductsList.actionOnProduct(properties.Product.action);
  ProductDetail.clickAddToCart();
  driver.sleep(2000);
  ProductDetail.layerCloseConfirmation();
  //ProductDetail.layerContinueShopping();
  driver.sleep(2000);
  HomePage.clickLogo();
}

exports.testAddProducts = function addProducts(){
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
