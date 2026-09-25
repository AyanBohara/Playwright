import { test, expect } from '@playwright/test';

test('Fixture and conetxt demo', async ({ browser }) => {

    //creates a newicognito browser context
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://practice.rcvacademy.com/form-validation");
})