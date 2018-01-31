var properties = require ('./Properties'),
    HomePage = require ('./Templates/HomePage'),
    LoginPage = require ('./Templates/LoginPage'),
    RegisterPage = require ('./Templates/RegisterPage'),
    ProductsList = require ('./Templates/ProductsListPage'),
    ProductDetail = require ('./Templates/ProductDetailPage'),
    CartView = require ('./Templates/CartViewPage'),
    Checkout3Address = require ('./Templates/Checkout3AddressPage'),
    Checkout4Shipping = require ('./Templates/Checkout4ShippingPage'),
    Checkout5Payment = require ('./Templates/Checkout5PaymentPage'),
    Checkout5OrderSummary = require ('./Templates/Checkout5OrderSummaryPage'),
    CheckoutOrderComplete = require ('./Templates/CheckoutOrderCompletePage');

//Tests Suites

function openWebPage(){
  HomePage.openHomePage();
}

function closeDriver(){
  HomePage.closeDriver();
}

function doLogin(){
    HomePage.clickLogin();
    LoginPage.fillEmail(properties.Login.UserName);
    LoginPage.fillPassword(properties.Login.Password);
    LoginPage.clickSignIn();
}


function doLogOut(){
    HomePage.clickLogOut();
}

function registerNewUser(){
  HomePage.clickLogin();
  LoginPage.registerEmail(properties.RegisterForm.Email);
  LoginPage.clickCreateAccount();
  driver.sleep(2000);
  RegisterPage.genderMr();
  RegisterPage.firstName(properties.RegisterForm.FirstName);
  RegisterPage.lastName(properties.RegisterForm.LastName);
  RegisterPage.password(properties.RegisterForm.Password);
  RegisterPage.dateDay(properties.RegisterForm.DayDate);
  RegisterPage.dateMonth(properties.RegisterForm.MonthDate);
  RegisterPage.dateYear(properties.RegisterForm.YearDate);
  RegisterPage.addressFirstName(properties.RegisterForm.AddressLastName);
  RegisterPage.addressLastName(properties.RegisterForm.AddressLastName);
  RegisterPage.company(properties.RegisterForm.Company);
  RegisterPage.address1(properties.RegisterForm.Address);
  RegisterPage.city(properties.RegisterForm.City);
  RegisterPage.state(properties.RegisterForm.State);
  RegisterPage.zipCode(properties.RegisterForm.Zip);
  RegisterPage.country(properties.RegisterForm.Country);
  RegisterPage.additionalInfo(properties.RegisterForm.AditionalInfo);
  RegisterPage.homePhone(properties.RegisterForm.HomePhone);
  RegisterPage.mobilePhone(properties.RegisterForm.MobilePhone);
  RegisterPage.aliasAddress(properties.RegisterForm.Alias);
  RegisterPage.registerButton();
}

function getElementText(){
  HomePage.getButtonLoginText();
}

function getTextMenu(){
    HomePage.getMenuOptionText(properties.MainMenuOption);
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
  ProductDetail.layerCloseConfirmation();
  //ProductDetail.layerContinueShopping();
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

function checkOut(){
  HomePage.openCartPreview();
  HomePage.clickCheckoutButton();
  CartView.clickCheckoutButton();
  Checkout3Address.clickContinueCheckout();
  Checkout4Shipping.checkTermsOfService();
  Checkout4Shipping.clickContinueCheckout();
  Checkout5Payment.clickPayByBankWire();
  Checkout5OrderSummary.clickConfirmOrder();
  CheckoutOrderComplete.clickBackToOrders();
}



//Test runner

openWebPage();

//getTextMenu();

//registerNewUser();
doLogin();
//doLogOut();
//clickSubcategoryOnProductList();
// sortProductList();
// changeProductListView();
add1Product();
checkOut();
// addProducts();

//closeDriver();
