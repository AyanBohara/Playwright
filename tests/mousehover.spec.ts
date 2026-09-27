import { test, expect } from '@playwright/test';

test('Mouse hover', async ({ page }) => {
    await page.goto("https://practice.rcvacademy.com/mouse-hover");
    await page.locator("//div[@id='hover-box-1']").hover();
    await page.locator("#hover-box-2").hover();
    await page.getByLabel('Hover box 3').hover();


    // await expect(page.getByText('Found it! 🎉')).toBeVisible();

    //Below two expect is correct if i only hover them but the logic here is i am hovering 1,2 and finally 3 as my hover focuuses on 3 so it gives the text Found it which will only visible while hovering

    //However the two havent get hovered and didnt display text so it get error even if it is correct

    await expect(page.getByText('Revealed on hover!')).toBeVisible();
    await expect(page.getByText('I was hidden')).toBeVisible();
    await expect(page.getByText('Found it! 🎉')).toBeVisible();


})