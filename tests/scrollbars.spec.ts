import { test, expect } from '@playwright/test';
test('testing random', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/scrollbars');
    const lastelement = page.getByRole('link', { name: 'Gold Sponsor 7' });
    await lastelement.scrollIntoViewIfNeeded();

    await page.waitForTimeout(2000);
    await expect(lastelement).toBeVisible();
})

test('Testing using evaluate', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/scrollbars');
    const lastelement = page.getByRole('link', { name: 'Gold Sponsor 7' });
    await lastelement.evaluate(element => {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    })
})

test('Testing by using mouse whhel', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/scrollbars');
    await page.mouse.wheel(0, 700);
    await page.waitForTimeout(2000)
    await page.mouse.wheel(0, -500);


    const lastelement = page.getByRole('link', { name: 'Gold Sponsor 7' });


    await expect(lastelement).toBeVisible();
})

test('Click an element below the viewport', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/scrollbars');

    const goldSponsor = page.getByRole('link', {
        name: 'Gold Sponsor 7'
    });

    await goldSponsor.click();

    await expect(goldSponsor).toBeVisible();
});

//Testing Vertical Sponsors
test.only('Testing table inside having vertical scrollbar', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/scrollbars');

    const lastelement = page.getByRole('link', { name: 'Gold Sponsor 7' });

    lastelement.evaluate(element => {
        element.scrollTop = element.scrollHeight;
    })
})
