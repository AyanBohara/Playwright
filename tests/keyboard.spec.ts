import { test, expect } from "@playwright/test";

test('Keyboard actions', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/autocomplete');

    await page.locator('#country-ac-input').pressSequentially('Nether', { delay: 2000 });
    // await page.locator('#country-ac-list').press('Enter');

    // await expect(page.locator('#country-ac-result')).toHaveText('Selected: Netherlands')


    await page.locator('#tag-input').pressSequentially('Nether', { delay: 200 });
    await page.locator('#tag-input').press('Control+A', { delay: 200 });
    await page.locator('#tag-input').press('Backspace', { delay: 200 });
    await page.keyboard.type('keyword and kwyword class', { delay: 100 });


    await page.keyboard.press('Enter', { delay: 100 });


})