import { test, expect } from '@playwright/test';

test("Login using CSS and Xpath", async ({ page }) => {

    await page.goto('https://demo.openemr.io/a/openemr/interface/login/login.php?site=default');

    await page.locator("xpath=//*//input[@id='authUser']").fill('receptionist');
    await page.locator("css=#clearPass").fill('receptionist');
    await page.locator("css=#login-button").click();


})