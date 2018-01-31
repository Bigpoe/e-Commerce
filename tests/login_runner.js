var properties = require ('../Properties'),
    Login = require ('./login_testcases');

//Test runner

Login.testOpenPage();

Login.testValidLogin();
Login.testDoLogout();
