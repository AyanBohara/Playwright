import { test, expect } from '@playwright/test';
test('Testing the tooltips', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/tooltips');
    await page.locator('#dom-tooltip-btn').hover();
    await page.waitForTimeout(2000);
    await page.locator('#tooltip-btn-1').hover()
    await page.locator('//*[@id="tooltip-img-1"]/img').hover()
})