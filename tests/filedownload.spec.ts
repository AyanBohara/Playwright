import { test, expect } from '@playwright/test';
test('File download by clicking in download', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/file-download');
    const downloadPromise = page.waitForEvent('download');
    await page.locator('//*[@id="download-pdf"]').click();
    await page.waitForTimeout(3000);
    const download = await downloadPromise;
    await download.saveAs(
        'C:/Users/DELL/Desktop/' + download.suggestedFilename()
    );
    await page.waitForTimeout(3000);

    const downloadPromise1 = page.waitForEvent('download');

    await page.locator('//*[@id="download-pdf"]').click();
    const download1 = await downloadPromise1;
    await download1.saveAs(
        'C:/Users/DELL/Desktop/QA-Roadmap.pdf'
    );



})