import { test, expect } from '@playwright/test';
test('Dynamic pagination table', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/pagination-table');
    await page.getByRole('button', { name: '2' }).click();
    await page.waitForTimeout(3000);

    await page.locator('#pag-prev').click();
    await page.waitForTimeout(3000);
    await page.locator('#page-size-select').selectOption({ label: '20' });
    await page.locator('#pag-next').click();
    await page.waitForTimeout(3000)

    await page.locator('#page-size-select').selectOption({ value: '10' });
    await page.waitForTimeout(3000)
    await page.locator('#pag-search').fill('Office');


    await expect(page.locator('#pag-prev')).toBeDisabled();
    await page.waitForTimeout(3000);




})