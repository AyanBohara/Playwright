import { expect, test } from '@playwright/test';
import path from 'node:path';

const multiLoginUrl = 'https://practice.rcvacademy.com/multi-login';

test.describe('Multi-login sections', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(multiLoginUrl);
  });

  test('validates the account type login', async ({ page }) => {
    await page.getByTestId('username-1').fill('personal.user');
    await page.getByTestId('password-1').fill('Password@123');
    await page.getByTestId('radio-business').check();

    await expect(page.getByTestId('radio-business')).toBeChecked();
    await expect(page.getByTestId('radio-personal')).not.toBeChecked();

    await page.getByTestId('signin-btn-1').click();
    await expect(page.locator('#section-1-msg')).toHaveText(
      'Sign in successful for Section 1!',
    );
  });

  test('validates the extended login', async ({ page }) => {
    await page.getByTestId('username-2').fill('extended.user');
    await page.getByTestId('password-2').fill('Password@123');
    await page.getByTestId('email-2').fill('extended.user@example.com');
    await page.getByTestId('phone-2').fill('+1 (555) 000-0000');

    await expect(page.getByTestId('email-2')).toHaveValue(
      'extended.user@example.com',
    );
    await expect(page.getByTestId('phone-2')).toHaveValue('+1 (555) 000-0000');

    await page.getByTestId('login-btn-2').click();
    await expect(page.locator('#section-2-msg')).toHaveText(
      'Login successful for Section 2!',
    );
  });

  test('validates login preferences', async ({ page }) => {
    await page.getByTestId('username-3').fill('preferences.user');
    await page.getByTestId('password-3').fill('Password@123');
    await page.getByTestId('checkbox-remember-3').check();
    await page.getByTestId('checkbox-stay-signed-3').check();
    await page.getByTestId('checkbox-terms-3').check();

    await expect(page.getByTestId('checkbox-remember-3')).toBeChecked();
    await expect(page.getByTestId('checkbox-stay-signed-3')).toBeChecked();
    await expect(page.getByTestId('checkbox-terms-3')).toBeChecked();

    await page.getByTestId('signin-btn-3').click();
    await expect(page.locator('#section-3-msg')).toHaveText(
      'Sign in successful for Section 3!',
    );
  });

  test('validates the role-based login', async ({ page }) => {
    await page.getByTestId('username-4').fill('editor.user');
    await page.getByTestId('password-4').fill('Password@123');
    await page.getByTestId('role-select-4').selectOption('editor');
    await page.getByTestId('notes-4').fill('Editor access requested.');

    await expect(page.getByTestId('role-select-4')).toHaveValue('editor');
    await expect(page.getByTestId('notes-4')).toHaveValue(
      'Editor access requested.',
    );

    await page.getByTestId('login-btn-4').click();
    await expect(page.locator('#section-4-msg')).toHaveText(
      'Login successful for Section 4!',
    );
  });

  test('validates the secure login', async ({ page }) => {
    await page.getByTestId('username-5').fill('secure.user');
    await page.getByTestId('password-5').fill('Password@123');
    await page.getByTestId('dob-5').fill('1990-01-15');
    await page.getByTestId('security-slider-5').fill('8');

    await expect(page.getByTestId('dob-5')).toHaveValue('1990-01-15');
    await expect(page.getByTestId('security-slider-5')).toHaveValue('8');
    await expect(page.locator('#security-level-value-5')).toHaveText('8');

    await page.getByTestId('signin-btn-5').click();
    await expect(page.locator('#section-5-msg')).toHaveText(
      'Sign in successful for Section 5!',
    );
  });

  test('validates the profile login', async ({ page }) => {
    await page.getByTestId('username-6').fill('profile.user');
    await page.getByTestId('password-6').fill('Password@123');
    await page.getByTestId('color-picker-6').fill('#00ff00');
    await page
      .getByTestId('avatar-upload-6')
      .setInputFiles(path.resolve(__dirname, '..', 'Screenshot 2026-09-20 211855.png'));

    await expect(page.getByTestId('color-picker-6')).toHaveValue('#00ff00');
    await expect(page.getByTestId('avatar-upload-6')).toHaveValue(
      /Screenshot 2026-09-20 211855\.png$/,
    );

    await page.getByTestId('login-btn-6').click();
    await expect(page.locator('#section-6-msg')).toHaveText(
      'Login successful for Section 6!',
    );
  });
});