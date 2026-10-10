import { test, expect } from '@playwright/test';
test('Testing the js prompt', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/js-prompt');

    // 1st prompt: Enter your name
    page.once('dialog', async dialog => {
        console.log('Dialog type:', dialog.type());
        console.log('Dialog message:', dialog.message());
        console.log('Default value:', dialog.defaultValue());

        await dialog.accept('Ayan');
    });

    await page.locator('#trigger-prompt-btn').click();

    // 2nd prompt: Enter your city
    page.once('dialog', async dialog => {
        console.log('Dialog type:', dialog.type());
        console.log('Dialog message:', dialog.message());
        console.log('Default value:', dialog.defaultValue());

        await dialog.accept('Kathmandu');
    });

    await page.locator('#trigger-default-prompt').click();
    await expect(page.locator('#default-prompt-result'))
        .toHaveText('📍 City entered: Kathmandu');


    page.once('dialog', async dialog => {
        console.log('Message is' + dialog.message());
        console.log('Type is ' + dialog.type());

        await dialog.accept('0');

    })
    await page.locator('#order-product').selectOption('basic')
    await page.locator('#order-submit-btn').click()

});


