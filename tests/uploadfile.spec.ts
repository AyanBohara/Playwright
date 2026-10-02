import { test, expect } from '@playwright/test';
test('Uploading a file', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/file-upload')
    const uploadFile = page.locator('//*[@id="uploadFile"]');
    await page.waitForTimeout(5000);
    await uploadFile.setInputFiles('C:/Users/DELL/Desktop/my-qa-roadmap.pdf');
    await page.waitForTimeout(5000);
    await page.locator('#upload-btn').click();
    await expect(page.locator('#upload-success')).toBeVisible();


})