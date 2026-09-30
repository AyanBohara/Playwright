import { test, expect } from "@playwright/test";

test('Keyboard actions', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/context-menu');

})