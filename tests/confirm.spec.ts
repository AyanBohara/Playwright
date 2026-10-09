import { test, expect } from '@playwright/test';

test('Testing the Confirm', async ({ page }) => {

    await page.goto('https://practice.rcvacademy.com/js-confirm');
    // page.on('dialog', async dialog => {
    //     // await dialog.dismiss()
    //     await dialog.accept()

    // })
    // await page.locator('#trigger-confirm-btn').click();
    // await page.waitForTimeout(2000);
    // await expect(page.locator('//*[@id="confirm-result"]/span')).toHaveText('✅ Item deleted! (OK was pressed)');
    // await page.waitForTimeout(2000);

    page.on('dialog', async dialog2 => {
        await dialog2.accept();
        console.log(dialog2.type());
        console.log(dialog2.type());
        console.log(dialog2.message());
        console.log(dialog2.type());
        await dialog2.dismiss();
        console.log(dialog2.message());


        await page.locator('#trigger-multi-confirm').click()
    })


})