import { test, expect} from '@playwright/test';
test('Academy store', async ({ page }) => {
await page.goto('https://practice.rcvacademy.com/store');
await page.locator('//*[@id="store-nav-register"]').click();
await page.getByLabel('First name').fill('Ayan');
await page.getByRole('textbox',{name:'firstName'}).fill('Ayan');
await page.getByRole('textbox',{name:'lastName'}).fill('Ayan');



});