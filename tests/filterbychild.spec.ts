import { test, expect } from '@playwright/test';

test("Child/Descendent add to cart based on name", async ({ page }) => {

    // await page.goto('https://www.saucedemo.com/inventory.html');
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();

    const backpack = page.locator('.inventory_item').filter({
        has: page.getByRole('button', {
            name: 'View details for Sauce Labs Backpack'
        })
    });

    await backpack.getByRole('button', {
        name: 'Add to cart'
    }).click();




})