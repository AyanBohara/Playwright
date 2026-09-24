import { test, expect } from '@playwright/test';

test('iframe testing', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/iframe');
    const frames = page.frameLocator('//*[@id="internal-iframe"]');

    await frames.getByPlaceholder('Jane Doe').fill('Ayan');
    await frames.getByLabel('Email').fill('a@gmail.com');
    await frames.locator('#iframe-role-select').selectOption({ label: 'Editor' });
    await frames.getByRole('button', { name: 'Submit' }).click();

    await expect(frames.getByText('✅ Ayan | a@gmail.com | editor')).toBeVisible();

});

test.only("Content frame test", async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/iframe');
    const iframe = page.locator('//*[@id="iframe-frame-1"]');
    const frame = iframe.contentFrame();
    await frame.getByPlaceholder('Jane Doe').fill('Zayan');
    await frame.getByPlaceholder('jane@example.com').fill('Zayan@gmail.com');
    await frame.locator('#iframe-role-select').selectOption({ value: 'editor' });
    await frame.getByRole('button', { name: 'Submit' }).click();


    const iframea = page.locator('//*[@id="iframe-frame-2"]');
    const framea = iframea.contentFrame();
    for (let i = 0; i < 5; i++) {
        await framea.locator('#iframe-decrement').click();
    }
    for (let j = 0; j < 6; j++) {
        await framea.locator('#iframe-increment').click();
    }




})