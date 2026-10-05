import { test, expect } from '@playwright/test';
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



})