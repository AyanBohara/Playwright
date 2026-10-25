import { test, expect} from '@playwright/test';
test('Academy store', async ({ page }) => {
await page.goto('https://practice.rcvacademy.com/store');
await page.locator('//*[@id="store-nav-register"]').click();
await page.getByLabel('First name').fill('Zyan');
await page.locator('#reg-last-name').fill('Bora');
await page.locator('#reg-email').fill('zayan@gmail.com');
await page.getByPlaceholder('+1 (555) 000-0000').fill('981234567');
page.getByTestId('reg-dob').fill('2000-01-15');

await page.getByTestId('reg-password').fill('123456789');
await page.locator('#reg-confirm-password').fill('123456789');
await page.locator('#reg-confirm-password').fill('123456789');
await page.locator('#reg-terms').click();

await page.waitForTimeout(4000);
await page.locator('//*[@id="reg-gdpr-consent"]').click();
await page.waitForTimeout(4000);
await page.locator('#reg-submit-btn').click();

});

test.only('Testing the login page', async({page})=>{
await page.goto('https://practice.rcvacademy.com/store');
await page.getByRole('link',{name:'Login'}).click();

})