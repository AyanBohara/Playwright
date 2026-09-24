import { test, expect } from '@playwright/test';

test('Fixture and conetxt demo', async ({ browser }) => {

    //creates a newicognito browser context
    const context = await browser.newContext();
    const page = context.newPage();
})