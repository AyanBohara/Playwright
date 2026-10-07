import { test, expect } from '@playwright/test';
test('Testing the calendar and date and time', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/calendar');
    await page.locator("//*[@id='native-date']").fill('2026-05-15');

    // await page.pause();

    await page.waitForTimeout(2000);

    await page.locator('//*[@id="datetime-input"]').fill('2026-12-20T09:37');

    //selecting the test and it opens the calendar and we can selet the date month year
    await page.getByPlaceholder('MM/DD/YYYY').click();
    await page.waitForTimeout(2000);

    await page.locator('//*[@id="ui-datepicker-div"]/div/a[2]/span').click();
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);

    //since all below comment contains or select 2 or more id or text 1 so it wasnt click as it gets confused whom to click so 
    // await page.getByRole('link', { name: '1' }).click();
    // await page.locator('[data-date="1"]').click();
    // await page.getByRole('link', { name: '1', exact: true }).click();

    await page.locator('//*[@id="ui-datepicker-div"]/table/tbody/tr[1]/td[1]/a').click();

    const elements = page.locator('[data-testid^="jqui-selected"]');

    for (const element of await elements.all()) {
        console.log(await element.textContent());
        // await expect(element).toHaveText('Date: 11/01/2026');
    }
    await expect(page.getByTestId('jqui-selected-date'))
        .toHaveText('Date: 11/01/2026');



    await expect(page.locator('#datetime-result')).toHaveText('Selected: 2026-12-20 09:37');
    await expect(page.locator('#native-date-result')).toHaveText('Selected: 2026-05-15');


})
