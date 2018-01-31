var properties = require ('../Properties'),
    HomePage = require ('../Templates/HomePage'),
    LoginPage = require ('../Templates/LoginPage'),
    RegisterPage = require ('../Templates/RegisterPage');

exports.testOpenPage = function openWebPage(){
  HomePage.openHomePage();
}

exports.testRegisterValidUser = function registerValidUser(){
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
