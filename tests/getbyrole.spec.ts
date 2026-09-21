import { test, expect } from '@playwright/test';

test("Launch apllication", async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=16A204190B7ACEE158D885B805828DD1');
    await page.getByRole("link", { name: 'Forgot login info?' }).click();
await page.getByRole("textbox").click();
})