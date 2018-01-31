var properties = require ('../Properties'),
    Checkout = require ('./checkout_testcases'),
    AddProduct = require ('./addProduct_testcases');

//Test runner

Checkout.testOpenPage();

//Checkout.testCheckOut();
AddProduct.testAdd1Product();
Checkout.testCheckOut();
