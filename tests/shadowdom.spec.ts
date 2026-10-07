import { test, expect } from '@playwright/test';
test('Shadow testing', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/shadow-dom');
    await page.locator('#shadow-input').fill('Hola');
    await page.locator('#shadow-password').fill('Hola');
    await page.getByRole('button', { name: 'Sign In (Shadow)' }).click()
    await page.waitForTimeout(2000);
    await expect(page.locator('#shadow-login-msg'))
        .toBeVisible();

    //2nd test
    const addProduct = page.locator('#shadow-increment')

    for (let i = 0; i < 5; i++) {
        await addProduct.click()
        await page.waitForTimeout(2000);

    }
    await page.locator('#nested-shadow-input').fill('Ayan')

})