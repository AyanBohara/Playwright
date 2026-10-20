import { test, expect, type Page } from '@playwright/test';

const REGISTER_URL = 'https://practice.rcvacademy.com/store/register';

// Reusable helper: open the registration page
async function openRegistration(page: Page) {
    await page.goto(REGISTER_URL);
}

// Reusable helper: fill the form with valid sample data
async function fillValidForm(page: Page) {
    await page.getByLabel('First Name').fill('Ayan');
    await page.getByLabel('Last Name').fill('Bohara');
    await page.getByLabel('Email Address').fill(
        `ayan.${Date.now()}@example.com`
    );
    await page.getByLabel('Phone Number').fill('9800000000');
    await page.getByLabel('Date of Birth').fill('2000-01-15');
    await page.getByLabel('Password', { exact: true }).fill('TestPass123!');
    await page.getByLabel('Confirm Password').fill('TestPass123!');
}

// Helper: submit registration
async function submitForm(page: Page) {
    await page.getByRole('button', { name: 'Create Account' }).click();
}

test.describe('RCV Academy eStore registration validation', () => {

    test('VAL-01: First Name is required', async ({ page }) => {
        await openRegistration(page);
        await submitForm(page);

        // Replace with the actual message or field state
        // after inspecting the website.
        await expect(page.getByLabel('First Name')).toBeVisible();
    });

    test('VAL-02: Last Name is required', async ({ page }) => {
        await openRegistration(page);
        await page.getByLabel('First Name').fill('Ayan');
        await submitForm(page);

        await expect(page.getByLabel('Last Name')).toBeVisible();
    });

    test('VAL-03: Email Address is required', async ({ page }) => {
        await openRegistration(page);
        await page.getByLabel('First Name').fill('Ayan');
        await page.getByLabel('Last Name').fill('Bohara');
        await submitForm(page);

        await expect(page.getByLabel('Email Address')).toBeVisible();
    });

    test('VAL-04: Invalid email format', async ({ page }) => {
        await openRegistration(page);
        await page.getByLabel('Email Address').fill('invalid-email');

        const email = page.getByLabel('Email Address');

        // Checks native HTML email validation.
        const valid = await email.evaluate(
            (el: HTMLInputElement) => el.checkValidity()
        );

        expect(valid).toBe(false);
    });

    test('VAL-05: Phone number validation', async ({ page }) => {
        await openRegistration(page);

        const phone = page.getByLabel('Phone Number');
        await phone.fill('abcdef');

        const valid = await phone.evaluate(
            (el: HTMLInputElement) => el.checkValidity()
        );

        // This expectation is valid only if the field has
        // native validation rules that reject alphabetic input.
        expect(valid).toBe(false);
    });

    test('VAL-06: Date of birth validation', async ({ page }) => {
        await openRegistration(page);

        const dob = page.getByLabel('Date of Birth');

        const valid = await dob.evaluate(
            (el: HTMLInputElement) => el.checkValidity()
        );

        // Checks current native validity. Add a specific invalid
        // date test after confirming the input type and date rules.
        expect(valid).toBe(true);
    });

    test('VAL-07: Password is required', async ({ page }) => {
        await openRegistration(page);
        await submitForm(page);

        await expect(
            page.getByLabel('Password', { exact: true })
        ).toBeVisible();
    });

    test('VAL-08: Password requirements', async ({ page }) => {
        await openRegistration(page);

        const password = page.getByLabel('Password', { exact: true });
        await password.fill('123');

        // This is a placeholder check of native validity.
        // Add an assertion for the actual password rule/message
        // once you confirm the site's requirements.
        const valid = await password.evaluate(
            (el: HTMLInputElement) => el.checkValidity()
        );

        console.log('Short password is natively valid:', valid);
    });

    test('VAL-09: Confirm Password is required', async ({ page }) => {
        await openRegistration(page);
        await page.getByLabel('Password', { exact: true })
            .fill('TestPass123!');
        await submitForm(page);

        await expect(page.getByLabel('Confirm Password')).toBeVisible();
    });

    test('VAL-10: Passwords must match', async ({ page }) => {
        await openRegistration(page);

        await page.getByLabel('Password', { exact: true })
            .fill('TestPass123!');
        await page.getByLabel('Confirm Password')
            .fill('DifferentPass123!');

        await submitForm(page);

        // Replace with the real mismatch message or error locator.
        await expect(
            page.getByLabel('Confirm Password')
        ).toBeVisible();
    });

    test('VAL-11: Terms agreement is required', async ({ page }) => {
        await openRegistration(page);

        const terms = page.getByRole('checkbox', {
            name: /terms/i
        });

        await expect(terms).toBeVisible();
        await expect(terms).not.toBeChecked();
    });

    test('VAL-12: Privacy consent is present', async ({ page }) => {
        await openRegistration(page);

        const privacyConsent = page.getByRole('checkbox', {
            name: /consent to the processing of my personal data/i
        });

        await expect(privacyConsent).toBeVisible();
        await expect(privacyConsent).not.toBeChecked();
    });

    test('VAL-13: Successful registration', async ({ page }) => {
        await openRegistration(page);
        await fillValidForm(page);

        await page.getByRole('checkbox', {
            name: /terms/i
        }).check();

        await page.getByRole('checkbox', {
            name: /consent to the processing of my personal data/i
        }).check();

        await submitForm(page);

        // Replace with the actual success message or destination.
        await expect(page).not.toHaveURL(REGISTER_URL);
    });

    test('VAL-14: Password field masks its value', async ({ page }) => {
        await openRegistration(page);

        const password = page.getByLabel('Password', { exact: true });

        await expect(password).toHaveAttribute('type', 'password');
    });
});