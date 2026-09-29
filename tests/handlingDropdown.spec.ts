import { test, expect } from '@playwright/test';
test('Handling Drag and Drop', async ({ page }) => {
    await page.goto("https://practice.rcvacademy.com/drag-drop");
    await page.locator('//*[@id="drag-item-2"]').dragTo(page.locator('#col-inprogress'))
    await page.waitForTimeout(5000);
    await page.locator('//*[@id="drag-item-2"]').dragTo(page.locator('#col-done'))
    await page.waitForTimeout(5000);

    await page.locator('//*[@id="drag-item-3"]').dragTo(page.locator('//*[@id="col-done"]'));
    await page.waitForTimeout(5000);
    await expect(page.locator('#drag-status')).toHaveText("✅ \"Update docs\" moved to Done");

    await page.locator('#drag-source-box').dragTo(page.locator('#drag-target-box'))
});

