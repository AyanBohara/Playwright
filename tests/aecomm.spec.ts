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

test('Testing the login page', async({page})=>{
await page.goto('https://practice.rcvacademy.com/store');
await page.getByRole('link',{name:'Login'}).click();
await page.locator('#login-email').fill('zayan@gmail.com');
await page.getByPlaceholder('Enter your password').fill('123456789');
await page.locator('//*[@id="login-remember"]').click();
await page.getByTestId('login-submit-btn').click();

})

test.only('Testing the addto cart and favourite item', async({page})=>{
await page.goto('https://practice.rcvacademy.com/store');
await page.getByRole('link',{name:'Login'}).click();
await page.locator('#login-email').fill('zayan@gmail.com');
await page.getByPlaceholder('Enter your password').fill('123456789');
await page.locator('//*[@id="login-remember"]').click();
await page.getByTestId('login-submit-btn').click();
    await page.locator('//*[@id="add-to-cart-12"]').click();
    await page.waitForTimeout(2000);
    await page.locator('//*[@id="pagination-page-6"]').click()
    await page.waitForTimeout(2000);
    await page.locator('//*[@id="add-to-cart-65"]').click();
    await page.waitForTimeout(2000);

    await page.getByRole('link',{name:'Cart'}).click();
    await page.waitForTimeout(2000);

    await page.locator('//*[@id="cart-qty-12"]').fill('3');
await page.locator('//*[@id="cart-remove-65"]').click();
await page.getByPlaceholder('Promo code').fill('Zyan');

    await page.waitForTimeout(2000);
    await expect(page.locator('//*[@id="cart-name-12"]/a')).toHaveText('ProMax Smartphone X12 Pro Max');
await page.locator('//*[@id="continue-shopping"]').click();
await page.locator('//*[@id="add-to-cart-2"]').click();
await page.waitForTimeout(2000);

    await page.getByRole('link',{name:'Cart'}).click();
    await page.waitForTimeout(2000);
  

    //handling popup
page.on('dialog', async dialog=>{
    await dialog.accept();
})
// await page.locator('//*[@id="clear-cart-btn"]').click();
  await page.locator('//*[@id="proceed-to-checkout-btn"]').click();
    await page.waitForTimeout(2000);


    //Shipping
    await page.locator('//*[@id="ship-address1"]').pressSequentially('Sanobharyang');
    await page.locator('#ship-address2').pressSequentially('Sanobharyang');
    await page.waitForTimeout(1000);
    
    await page.locator('//*[@id="ship-city"]').fill('Kathmandu');
    await page.waitForTimeout(1000);
    await page.locator('//*[@id="ship-state"]').fill('Nagarjun');
    await page.waitForTimeout(1000);
    await page.locator('//*[@id="ship-zip"]').fill('444');
    await page.waitForTimeout(1000);

    await page.locator('//*[@id="ship-country"]').selectOption({value:'IN'});
await page.getByRole('radio',{name:'Express Shipping'}).click();
await page.locator('#pay-paypal-label').click();
await page.waitForTimeout(1000);

await page.locator('//*[@id="order-notes"]').fill('Thank u for delivery');
await page.waitForTimeout(2000);




await page.locator('#place-order-btn').click();
await page.waitForTimeout(2000);
// await page.locator('//*[@id="continue-shopping-empty"]').click();
// await page.locator('//*[@id="add-to-cart-2"]').click();

await page.waitForTimeout(2000);

await page.locator('//*[@id="view-orders-btn"]').click();
await page.locator('//*[@id="view-order-RCVMVTQUYH8"]').click();
await expect(page.locator('//*[@id="order-detail-heading"]')).toBeVisible();
page.on('dialog', async dialog=>{
    await dialog.accept();
})
// await page.getByRole('button',{name:'Cancel Order'}).click();
await page.locator('//*[@id="store-nav-orders"]').click();

})