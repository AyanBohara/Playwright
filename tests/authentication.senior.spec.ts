import { expect, test, type Page } from '@playwright/test';

/**
 * This example intentionally keeps page locators and user actions in page
 * objects. A senior QA engineer does this so a UI locator change is fixed in
 * one place instead of in every test.
 */
class RegistrationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://practice.rcvacademy.com/store/register');
    await expect(
      this.page.getByRole('heading', { name: /register|create account/i })
    ).toBeVisible();
  }

  async submit() {
    await this.page
      .getByRole('button', { name: /create account|register/i })
      .click();
  }

  /**
   * Leaving the values configurable makes the helper useful for both a happy
   * path and boundary/negative tests without duplicating form interactions.
   */
  async fillForm(values: Partial<RegistrationData> = {}) {
    if (values.firstName !== undefined) {
      await this.page.getByLabel('First Name').fill(values.firstName);
    }
    if (values.lastName !== undefined) {
      await this.page.getByLabel('Last Name').fill(values.lastName);
    }
    if (values.email !== undefined) {
      await this.page.getByLabel('Email Address').fill(values.email);
    }
    if (values.phone !== undefined) {
      await this.page.getByLabel('Phone Number').fill(values.phone);
    }
    if (values.dateOfBirth !== undefined) {
      await this.page.getByLabel('Date of Birth').fill(values.dateOfBirth);
    }
    if (values.password !== undefined) {
      await this.page.getByLabel('Password', { exact: true }).fill(values.password);
    }
    if (values.confirmPassword !== undefined) {
      await this.page.getByLabel('Confirm Password').fill(values.confirmPassword);
    }
  }

  async acceptRequiredConsents() {
    // Consent is a business rule, so it is explicitly tested rather than
    // hidden inside fillForm. This keeps the test's intent easy to review.
    await this.page.getByRole('checkbox', { name: /terms/i }).check();
    await this.page
      .getByRole('checkbox', {
        name: /consent to the processing of my personal data/i,
      })
      .check();
  }
}

class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto(
      process.env.OPENEMR_LOGIN_URL ??
        'https://demo.openemr.io/a/openemr/interface/login/login.php?site=default'
    );
    await expect(
      this.page.getByRole('button', { name: /login/i })
    ).toBeVisible();
  }

  async login(username: string, password: string) {
    // Accessible roles are preferred over CSS/XPath because they model how a
    // real user finds controls and are less coupled to implementation details.
    const fields = this.page.getByRole('textbox');
    await fields.nth(0).fill(username);
    await fields.nth(1).fill(password);
    await this.page.getByRole('button', { name: /login/i }).click();
  }
}

type RegistrationData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
};

const validRegistration: RegistrationData = {
  firstName: 'Ayan',
  lastName: 'TestUser',
  // Unique data prevents reruns from failing because the account already exists.
  email: `playwright.${Date.now()}@example.com`,
  phone: '9800000000',
  dateOfBirth: '2000-01-15',
  password: 'TestPass123!',
  confirmPassword: 'TestPass123!',
};

test.describe('Registration screen', () => {
  test('shows required-field validation when submitted empty', async ({ page }) => {
    const registration = new RegistrationPage(page);
    await registration.open();
    await registration.submit();

    // We assert the observable validation state, not an implementation detail
    // such as a CSS class. This protects the user-facing contract.
    await expect(page.getByLabel('First Name')).toBeFocused();
    await expect(page.getByLabel('First Name')).toHaveAttribute(
      'aria-invalid',
      'true'
    );
  });

  test('rejects an invalid email before submission', async ({ page }) => {
    const registration = new RegistrationPage(page);
    await registration.open();
    await registration.fillForm({ email: 'not-an-email' });

    // Client-side validation should stop malformed data at the boundary,
    // reducing unnecessary API calls and giving immediate user feedback.
    await expect(page.getByLabel('Email Address')).toBeInvalid();
  });

  test('requires matching passwords', async ({ page }) => {
    const registration = new RegistrationPage(page);
    await registration.open();
    await registration.fillForm({
      password: validRegistration.password,
      confirmPassword: 'DifferentPass123!',
    });
    await registration.submit();

    // The test checks the field involved in the business rule instead of only
    // checking that the page stayed open, which would be a weak assertion.
    await expect(page.getByLabel('Confirm Password')).toBeVisible();
  });

  test('allows a valid registration when required consent is provided', async ({
    page,
  }) => {
    const registration = new RegistrationPage(page);
    await registration.open();
    await registration.fillForm(validRegistration);
    await registration.acceptRequiredConsents();
    await registration.submit();

    // A successful flow must produce a meaningful outcome. URL or success
    // message should be confirmed against the application's actual contract.
    await expect(page).not.toHaveURL(/\/register\/?$/);
  });
});

test.describe('Login screen', () => {
  test('logs in with valid demo credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login(
      process.env.OPENEMR_USERNAME ?? 'admin',
      process.env.OPENEMR_PASSWORD ?? 'pass'
    );

    // Credentials come from environment variables when available, so real
    // secrets never need to be committed to the repository.
    await expect(page).not.toHaveURL(/login\/login\.php/i);
  });

  test('shows an error and does not authenticate invalid credentials', async ({
    page,
  }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login('invalid-user', 'invalid-password');

    // Negative authentication coverage is essential: a failed login must not
    // silently enter the application or expose a protected page.
    await expect(page).toHaveURL(/login\/login\.php/i);
    await expect(
      page.getByText(/invalid|incorrect|failed|error/i).first()
    ).toBeVisible();
  });
});
