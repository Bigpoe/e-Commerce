var properties = require ('../Properties'),
    HomePage = require ('../Templates/HomePage'),
    LoginPage = require ('../Templates/LoginPage');

//Tests Suites

exports.testOpenPage = function openWebPage(){
  HomePage.openHomePage();
}

exports.testValidLogin = function doLogin(){
    HomePage.clickLogin();
    LoginPage.fillEmail(properties.Login.UserName);
    LoginPage.fillPassword(properties.Login.Password);
    LoginPage.clickSignIn();
}

exports.testDoLogout = function doLogOut(){
    HomePage.clickLogOut();
}

exports.testCloseDriver = function closeDriver(){
  HomePage.closeDriver();
}


//
// function getElementText(){
//   HomePage.getButtonLoginText();
// }
//
// function getTextMenu(){
//     HomePage.getMenuOptionText(properties.MainMenuOption);
// }
//
// function clickSubcategoryOnProductList(){
//   HomePage.clickOnMainMenu(properties.MainMenuOption);
//   ProductsList.clickSubcategory(properties.SubcategoryName);
// }
//
// function sortProductList(){
//   HomePage.clickOnMainMenu(properties.MainMenuOption);
//   ProductsList.sortListBy(properties.SortList);
// }
//
// function changeProductListView(){
//   HomePage.clickOnMainMenu(properties.MainMenuOption);
//   ProductsList.clickListView();
// }
//

//

//
//
//
// //Test runner
//
// openWebPage();
//
// //getTextMenu();
//
// //registerNewUser();
// doLogin();
// //doLogOut();
// //clickSubcategoryOnProductList();
// // sortProductList();
// // changeProductListView();
// add1Product();
// checkOut();
// // addProducts();
//
// //closeDriver();
