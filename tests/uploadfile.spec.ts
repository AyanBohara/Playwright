import { test, expect } from '@playwright/test';
test('Uploading a file', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/file-upload')
    const uploadFile = page.locator('//*[@id="uploadFile"]');
    await page.waitForTimeout(3000);
    await uploadFile.setInputFiles('C:/Users/DELL/Desktop/my-qa-roadmap.pdf');
    await page.waitForTimeout(3000);
    await page.locator('#upload-btn').click();
    await expect(page.locator('#upload-success')).toBeVisible();

    const uploadMultipleFiles = page.locator("//*[@id='multi-file-input']");
    await uploadMultipleFiles.setInputFiles([
        'C:/Users/DELL/Pictures/Screenshots/Screenshot (1).png',
        'C:/Users/DELL/Desktop/my-qa-roadmap.pdf'
    ]);
    await page.waitForTimeout(3000);
    await uploadMultipleFiles.setInputFiles([]);
    await page.waitForTimeout(3000);
    await uploadMultipleFiles.setInputFiles('C:/Users/DELL/Desktop/my-qa-roadmap.pdf');
    await page.waitForTimeout(3000);
    await uploadMultipleFiles.setInputFiles([
        'C:/Users/DELL/Pictures/Screenshots/Screenshot (1).png',
        'C:/Users/DELL/Desktop/my-qa-roadmap.pdf'
    ]);

    await page.locator('#multi-upload-btn').click();
    await page.waitForTimeout(3000);
})