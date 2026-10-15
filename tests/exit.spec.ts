import { test, expect } from '@playwright/test';
test('Tesing Exit Intent', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/exit-intent');
    await page.mouse.move(500, 300);
    // await page.waitForTimeout(2000);

    await page.mouse.move(0, 0);
    await page.waitForTimeout(2000);


    await expect(page.locator('#exit-modal')).toBeVisible();


})