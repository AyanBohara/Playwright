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

    // page.on('dialog', async dialog2 => {
    //     console.log("is it tested");



    //     console.log(dialog2.type());
    //     console.log(dialog2.type());
    //     console.log(dialog2.message());
    //     console.log(dialog2.type());
    //     // await dialog2.dismiss();
    //     console.log(dialog2.message());
    //     console.log("yes it is tested");

    // })
    // await page.waitForTimeout(2000)




    //testing two config one by acceting another by cancel
    page.on('dialog', async dialog4 => {

        //simply check what the message is dialog4.message()
        // Step 1 of 2: Are you sure?
        // Step 2 of 2: Are you really sure?

        console.log(dialog4.message());

        if (dialog4.message() == 'Step 1 of 2: Are you sure?') {
            console.log(' DIALOG:', dialog4.message());
            await dialog4.accept();
        } else {
            await dialog4.dismiss();
            console.log('Dialog cancelled');
        }
    })
    await page.locator('#trigger-multi-confirm').click()

    await expect(page.locator('//*[@id="multi-confirm-result"]')).toHaveText('❌ s Aborted at step 2.')

})

