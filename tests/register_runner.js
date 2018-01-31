var properties = require ('../Properties'),
    Register = require ('./register_testcases');

//Test runner

Register.testOpenPage();

Register.testRegisterValidUser();
Register.testDoLogout();
