import { test, expect } from "@playwright/test";

test('Testing the button to be click', async ({ page }) => {

    await page.goto('https://training.rcvacademy.com/')
    await page.getByRole('link', { name: "Sign In" }).click()


})