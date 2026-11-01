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

//this is the break wher

test('Dynamic table add,edit,deleted row', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/dynamic-table')
    for (var i = 0; i < 2; i++) {
        await page.locator('#add-row-btn').click()
    }
    const row4 = await page.locator('//*[@id="dynamic-table-body"]/tr[4]');
    await page.waitForTimeout(3000)

    //Updating the row
    await page.locator('//*[@id="dynamic-table-body"]/tr[4]/td[6]/button[1]').click();

    await page.locator('input.edit-input[data-col="id"]').fill('6');
    await page.locator('//*[@id="dynamic-table-body"]/tr[4]/td[2]/input').fill('Zyun');
    await page.locator('//*[@id="dynamic-table-body"]/tr[4]/td[3]/input').fill('IT');
    await page.getByTestId('edit-row-4').click();
    await page.getByRole('button', { name: 'Save row 4' }).click();

    //Deleting the row
    await page.locator("//*[@id='dynamic-table-body']/tr[4]/td[6]/button[1]").click();
    await page.waitForTimeout(3000)

await page.locator("//span[normalize-space()='User_Manual_v2.1.pdf']").dblclick();
    await page.waitForTimeout(5000);
    await page.locator('//*[@id="page-content"]/div[2]/div[1]/h3/span/i').click({ button: "right" });
//this
})
await page.waitForTimeout(2000);

    await page.locator('//*[@id="datetime-input"]').fill('2026-12-20T09:37');

    //selecting the test and it opens the calendar and we can selet the date month year
    await page.getByPlaceholder('MM/DD/YYYY').click();
    await page.waitForTimeout(2000);

    await page.locator('//*[@id="ui-datepicker-div"]/div/a[2]/span').click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);

});
