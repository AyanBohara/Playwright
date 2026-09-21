import { test, expect } from '@playwright/test';

// test("title",()=>{

//   //step1
//   //step2

// })

//fixture- global variable eg page, browser, context

test(" Verify page title", async ({ page }) => {

  await page.goto("https://demo.openemr.io/a/openemr/interface/login/login.php?site=default")

  let title: string = await page.title();
  console.log(title);

  await expect(page).toHaveTitle('OpenEMR Login');




})