import { test, expect } from '@playwright/test';

test('Fixture and conetxt demo', async ({ browser }) => {

    //creates a newicognito browser context
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://practice.rcvacademy.com/form-validation");
})

test.only('Handling multiple windows', async ({ browser }) => {

    //creates a newicognito browser context
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://practice.rcvacademy.com/form-validation");


    const [newPage] = await Promise.all([
        //need to listen if new tab is opening while clicking on page
        context.waitForEvent("page"), //pening ,fulfiiled or rejected
        await page.locator("//div[@id='sponsor-tier-platinum']").click()

    ])

    await newPage.locator("//div[@data-component='button']").click();
    await page.waitForTimeout(5000);
    await newPage.getByRole('link', { name: 'Sign In' }).click();
    await page.waitForTimeout(5000);
    await newPage.getByPlaceholder('Email Address').fill('Ayan');
    await page.waitForTimeout(5000);

    await newPage.close();
    await page.waitForTimeout(5000);

    await page.getByPlaceholder('First name').fill('Ayan');
    await page.waitForTimeout(5000);
    await page.close();


})