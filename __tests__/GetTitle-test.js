var HomePage = require ('../HomePage');
    // WomenEveningDresses = require ('../WomenEveningDressesPage'),
    // ProductDetail = require ('../ProducDetailPage');

jest.setTimeout(20000);

describe("Home Page", () => {
  it ('Title should be My Store', () => {
    HomePage.openHomePage();
    return HomePage.getTitle().then(title => {
      expect(title).toBe("My Store")
    })
  })

  it ('Login title should be My Store', () => {
    HomePage.clickLogin();
    return HomePage.getTitle().then(title => {
      expect(title).toBe("Login - My Store")
    })
  })

})
