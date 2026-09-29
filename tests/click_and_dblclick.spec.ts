import { test, expect } from "@playwright/test";
test('Click and double click by mouse', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/context-menu');
    await page.locator("//span[normalize-space()='User_Manual_v2.1.pdf']").dblclick();
    await page.waitForTimeout(5000);
    await page.locator('//*[@id="page-content"]/div[2]/div[1]/h3/span/i').click({ button: "right" });
})