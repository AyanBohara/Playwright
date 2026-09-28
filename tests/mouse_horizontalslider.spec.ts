import { test, expect } from '@playwright/test';

test('Horixontal score bar by using mouse bounding box', async ({ page }) => {
    await page.goto("https://practice.rcvacademy.com/horizontal-slider");
    // const s1 = await page.getByRole('slider', { name: 'basicSlider' });
    const s1 = await page.locator("//span[@class='ui-slider-handle ui-corner-all ui-state-default ui-state-active ui-state-focus']");

    const bb = await s1.boundingBox();
    // await page.mouse.click(bb.x + bb.width / 2, bb.y + bb.height / 2);
    if (bb) {
        await page.mouse.move(
            bb.x + bb.width / 2,
            bb.y + bb.height / 2
        );

        await page.mouse.down();

        await page.mouse.move(
            bb.x + 40,
            bb.y + bb.height / 2
        );

        await page.mouse.up();
    }


})

//span[@class='ui-slider-handle ui-corner-all ui-state-default ui-state-active ui-state-focus']