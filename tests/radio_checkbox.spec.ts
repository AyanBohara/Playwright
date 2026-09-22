import { test, expect } from '@playwright/test';

test("Radio and checkbox testing", async ({ page }) => {

    //Radio button
    await page.goto('https://practice.rcvacademy.com/radio-buttons');
    await page.getByRole('radio', { name: 'Banana' }).check();
    await page.getByLabel('Low').check();
    await expect(page.locator("//input[@type='radio']").nth(7)).toBeDisabled();


    //to-check every radio
    const radios = page.locator('//input[@type="radio"]');
    for (const radio of await radios.all()) {
        if (await radio.isDisabled()) {
            continue;
        }
        await expect(page.locator("//input[@type='radio']").nth(7)).toBeDisabled();
        await radio.check();

    }

    //checking whether button is checked or uncheckedd
    await expect(page.getByRole('radio', { name: ' 💳 Credit Card' })).not.toBeChecked();
    // await expect(page.getByRole('radio', { name: 'Banana' })).toBeChecked();

    //Rating the page by  ⭐⭐⭐ radio box

    // await page.locator('#rating-group');
    // page.locator("input[type='radio']").nth(2).check();
    // page.getByRole('button', { name: 'Submit Rating' });

    //Checking whole rating star and submit

    const ratings = page.locator('#rating-group');
    for (const rating of await ratings.all()) {
        // await rating.locator("input[type='radio']").check();
        await rating.locator("input[type='radio']").nth(2).check();

        await page.getByRole('button', { name: 'Submit Rating' }).click();

    }
    const message = page.getByText('✅ Rating submitted! You gave ⭐⭐⭐ (3 stars). Thank you!');
    // const message = page.getByText('✅ Rating submittedddd! You gave ⭐⭐⭐ (3 stars). Thank you!');

    await expect(message).toBeVisible();

});

//for Checkbox
test.only('Checkbox testing', async ({ page }) => {

    page.goto('https://practice.rcvacademy.com/checkboxes');
    await page.getByRole('checkbox', { name: '   Option One' }).check();
    await page.getByRole('checkbox', { name: '  Option Two (pre-checked)' }).uncheck();


    await page.getByRole('checkbox', { name: 'Select All' }).check();
    const selects = page.locator('.lang-check');

    for (const selectone of await selects.all()) {

        await selectone.check();

    }

    await page.getByRole('checkbox', { name: 'Can Write' }).check();
    await page.getByRole('checkbox', { name: 'Can Delete' }).check();
    await page.getByRole('checkbox', { name: 'Can Read' }).uncheck();

    //Subscribe to topics
    const subscrive = page.locator('.topic-check');

    for (const subone of await subscrive.all()) {
        await subone.check();
    }
    await page.getByRole('button', { name: 'Subscribe' }).click();


    await expect(page.getByRole('checkbox', { name: "Admin Access" })).toBeDisabled();
    await expect(page.getByRole('button', { name: 'Subscribe' })).toBeEnabled();


});