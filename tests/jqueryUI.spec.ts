import { test, expect } from '@playwright/test';
test('Testing the jquery UI', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/jquery-menu');
    const fileNAme = page.locator('//*[@id="menu-file-link"]');
    await expect(fileNAme).toBeVisible();
    await fileNAme.hover();
    await page.waitForTimeout(3000);
    await page.locator('#menu-new').hover();
    await page.waitForTimeout(3000);
    const documentItem = page.getByText('Document', { exact: true });
    await expect(documentItem).toBeVisible();
})