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

//Testing Vertical Scrollbars



test('Testing table inside having vertical scrollbar', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/scrollbars');

    const lastelement = page.locator('#scroll-para-20');

    lastelement.evaluate(element => {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    })
})

//Testing vertical scrollbar using ScrollIntoViewNeeded
test('Testing vertical scrollbar using scrollintoviewneeded', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/scrollbars');
    const verticalpara = page.locator('#scroll-para-20');
    await verticalpara.scrollIntoViewIfNeeded();

    await expect(page.locator('#scroll-para-19')).toBeVisible();

})

//Testing by evaluate using locator box
test('Testing using verticalvar evaluate', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/scrollbars');
    const seconlast = page.locator('#vertical-scroll-box');

    await seconlast.evaluate(element => {
        element.scrollTop = element.scrollHeight; //when using this we need to locate the box not individual paragraph 
        //         - element — your scrollable box.
        // - element.scrollHeight — the total height of all 20 paragraphs inside the box.
        // - element.scrollTop — how far the box has scrolled from the top.
        // When you set scrollTop equal to scrollHeight, you tell the browser to move the box to the bottom.


    })
})

//Testing horizontal
test('Horixontal Scrolling', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/scrollbars');
    const lasthori = page.locator('//*[@id="cell-4-12"]');
    lasthori.scrollIntoViewIfNeeded()
})

test('Testing horizontal using evaluate', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/scrollbars');
    const lasthori = page.locator('//*[@id="cell-4-12"]');
    await lasthori.evaluate(element => {
        element.scrollIntoView({

            behavior: 'smooth',

        })
    })
    await page.waitForTimeout(5000);
})

//testing the lazy loading
test.only('testing lazy loading', async ({ page }) => {
    await page.goto('https://practice.rcvacademy.com/scrollbars');
    const lazy = page.locator('//*[@id="lazy-scroll-container"]/p[25]');
    await lazy.evaluate(element => {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    })
})