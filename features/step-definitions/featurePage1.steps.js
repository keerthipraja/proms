import { Given, Then, When } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
    login: LoginPage
}
Given(/^I  on the (\w+) page$/, async (page) => {
    await pages[page].open()
});
