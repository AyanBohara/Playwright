import { test, expect } from '@playwright/test';
test('Testing the jquery UI', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/jquery-menu');
    const fileNAme = page.locator('//*[@id="menu-file-link"]');
    await expect(fileNAme).toBeVisible();
    await fileNAme.hover();
    await page.waitForTimeout(3000);
    await page.locator('#menu-new').hover();
    await page.waitForTimeout(3000);
    const documentItem = page.getByText('Document', { exact: true });
    await expect(documentItem).toBeVisible();
    await page.locator('#menu-new-folder').click();
    await page.waitForTimeout(3000);

    await expect(page.locator('#menu-action-result')).toHaveText('✅ Selected: Folder');
    const edit = page.locator('#menu-edit-link');
    await edit.hover();

    await page.locator('//*[@id="ui-id-8"]').click();
    await page.waitForTimeout(3000);

    //checking view
    const view = page.locator('//*[@id="menu-view-link"]');
    await view.hover();
    const zoom = page.locator('//*[@id="ui-id-9"]')
    await zoom.hover();
    await page.locator('//*[@id="ui-id-11"]').click();
    // await (expect(page.getByText('Zoom IN', { exact: true }))).toBeVisible();
})