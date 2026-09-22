import test, { expect } from "@playwright/test";

test("Locator and and or", async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').and(page.locator("#user-name")).fill('standard_user');
    await page.getByPlaceholder('Password').and(page.locator("#password")).fill('secret_sauce');

    // await page.getByText('login-button').or(page.locator('#login-button')).click();

    await page.getByRole('button', { name: 'Login' }).or(page.locator('#login-button')).click();



})