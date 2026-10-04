import { test, expect } from '@playwright/test';
test('Dynamic table add,edit,deleted row', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/dynamic-table')
    for (var i = 0; i < 2; i++) {
        await page.locator('#add-row-btn').click()
    }
    const row4 = await page.locator('//*[@id="dynamic-table-body"]/tr[4]');
    await page.waitForTimeout(3000)
    await row4.getByRole('button', { name: 'Delete row 4' }).click();
    await page.waitForTimeout(3000)

})