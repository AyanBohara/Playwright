import { test, expect } from '@playwright/test';
test('Handling the multiform', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/multiform');
    await page.locator('#firstName').fill('John');
    await page.locator('#lastName').fill('Doe');
})