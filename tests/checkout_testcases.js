var properties = require ('../Properties'),
    HomePage = require ('../Templates/HomePage'),
    CartView = require ('../Templates/CartViewPage'),
    Checkout3Address = require ('../Templates/Checkout3AddressPage'),
    Checkout4Shipping = require ('../Templates/Checkout4ShippingPage'),
    Checkout5Payment = require ('../Templates/Checkout5PaymentPage'),
    Checkout5OrderSummary = require ('../Templates/Checkout5OrderSummaryPage'),
    CheckoutOrderComplete = require ('../Templates/CheckoutOrderCompletePage'),
    addProductTestcases = require ('./addProduct_testcases');

//Tests Suites

exports.testOpenPage = function openWebPage(){
  HomePage.openHomePage();
}

exports.testCheckOut = function checkOut(){
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
// 
// exports.testAddProductAndCheckout = function addProductAndCheckout(){
//   addProductTestcases.testAdd1Product();
//   checkOut();
//   //
//   // HomePage.openCartPreview();
//   // HomePage.clickCheckoutButton();
//   // CartView.clickCheckoutButton();
//   // Checkout3Address.clickContinueCheckout();
//   // Checkout4Shipping.checkTermsOfService();
//   // Checkout4Shipping.clickContinueCheckout();
//   // Checkout5Payment.clickPayByBankWire();
//   // Checkout5OrderSummary.clickConfirmOrder();
//   // CheckoutOrderComplete.clickBackToOrders();
// }
