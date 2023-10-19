import { LoginPage } from "./pages/login_page";

const loginPage = new LoginPage()


it('login test', function(){
    loginPage.navigate();
    loginPage.enterUserName();
    loginPage.enterPassword();
    loginPage.clickLogin();
})