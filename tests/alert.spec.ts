import { test, expect } from '@playwright/test';
test('Handling the alerrt', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/js-alert');
    // //  this approach should need 
    // 1. Open page
    //        ↓
    // 2. Listen for dialog
    //        ↓
    // 3. Click button
    //        ↓
    // 4. Dialog appears
    //        ↓
    // 5. Listener handles dialog
    //        ↓
    // 6. Test continues
    page.on('dialog', async dialog => {
        console.log('🔥 DIALOG APPEARED');
        console.log('Type:', dialog.type());
        console.log('Message:', dialog.message());
        await dialog.accept();
    })
    console.log('🔥 TEST FINISHED');
    await page.locator('#trigger-alert-btn').click();



    page.on('dialog', async dialog1 => {
        await dialog1.accept();
        console.log(dialog1.message());

    })
    page.locator('#trigger-custom-alert').click();


    page.on('dialog', async dialog2 => {

        console.log('K bhanna esle' + dialog2.defaultValue()); //returns the text already filled in the prompt box:

        await dialog2.accept();


    })
    await page.locator('#trigger-delayed-alert').click()
})