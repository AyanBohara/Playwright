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