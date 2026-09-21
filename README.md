# OpenEMR Playwright Automation

## 📌 Project Overview

This project is an **end-to-end test automation project** for the OpenEMR application using **Playwright with TypeScript**.

The project covers real-world QA automation practices including:

* Web UI automation
* Locators
* Assertions
* Test scenarios and test cases
* Page Object Model (POM)
* Reusable functions
* Test data
* Screenshots and traces
* Test reports
* Cross-browser testing

---

## 🌐 Application Under Test

**Application:** OpenEMR

**Environment:** OpenEMR Public Demo

**URL:**

https://demo.openemr.io/a/openemr/interface/login/login.php?site=default

OpenEMR is an open-source Electronic Health Record (EHR) and medical practice management application.

---

## 🔐 Demo Login Credentials

The following credentials are provided for the public OpenEMR demo environment:

| Role          | Username       | Password       |
| ------------- | -------------- | -------------- |
| Administrator | `admin`        | `pass`         |
| Physician     | `physician`    | `physician`    |
| Clinician     | `clinician`    | `clinician`    |
| Accountant    | `accountant`   | `accountant`   |
| Receptionist  | `receptionist` | `receptionist` |

> ⚠️ These are public demo credentials. The demo environment may be reset or changed.

> ⚠️ Do not use real patient information or sensitive personal data in the public demo environment.

---

## 🛠️ Technologies Used

| Technology | Purpose                |
| ---------- | ---------------------- |
| Playwright | Web automation         |
| TypeScript | Programming language   |
| Node.js    | Runtime environment    |
| npm        | Package management     |
| Git        | Version control        |
| GitHub     | Source code management |

---

# 🧪 Testing Scope

## 1. Login

* Login with valid credentials
* Login with invalid username
* Login with invalid password
* Login with empty username
* Login with empty password
* Verify successful login
* Verify login error messages

## 2. Dashboard

* Verify dashboard loads successfully
* Verify main navigation
* Verify available menu options
* Verify user/session information

## 3. Patient Management

* Add a new patient
* Search for a patient
* View patient details
* Edit patient information
* Verify required fields
* Verify invalid input handling

## 4. Appointments

* Create an appointment
* Select patient
* Select provider
* Select appointment date
* Select appointment time
* Verify appointment creation
* Search/view appointments

## 5. Navigation

* Verify main menus
* Verify submenu navigation
* Verify page URLs
* Verify page titles/headings

---

# 🧪 Example Test

Example login test:

```typescript
import { test, expect } from '@playwright/test';

test('Verify OpenEMR login', async ({ page }) => {

  await page.goto(
    'https://demo.openemr.io/a/openemr/interface/login/login.php?site=default'
  );

  await page.getByRole('textbox').first().fill('admin');

  await page.getByRole('textbox').nth(1).fill('pass');

  await page.getByRole('button', { name: /login/i }).click();

  await expect(page).toHaveURL(/openemr/);
});
```

---

# 🏗️ Automation Framework

The project follows the **Page Object Model (POM)** approach.

Page-specific locators and actions are maintained in separate page classes instead of putting everything directly inside test files.

This makes the framework easier to:

* Maintain
* Reuse
* Debug
* Update

---

# ▶️ Running the Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run tests with browser visible:

```bash
npx playwright test --headed
```

Run a specific test:

```bash
npx playwright test tests/login.spec.ts
```

Run in debug mode:

```bash
npx playwright test --debug
```

---

# 📊 Test Reports

After execution, open the Playwright HTML report:

```bash
npx playwright show-report
```

The report provides information about:

* Passed tests
* Failed tests
* Test duration
* Errors
* Screenshots
* Traces

---

# 🌍 Browser Testing

The project can be configured to run tests on multiple browsers:

* Chromium
* Firefox
* WebKit

Example:

```bash
npx playwright test --project=chromium
```

---

# 📸 Debugging

Playwright features used for debugging include:

* Trace Viewer
* Screenshots
* Video recording
* Browser headed mode
* Debug mode

Example:

```bash
npx playwright test --debug
```

---

## 👨‍💻 Project Type

**End-to-End Web Automation Testing**

**Application:** OpenEMR

**Automation Tool:** Playwright

**Language:** TypeScript

**Testing Approach:** UI Automation + Functional Testing

---

## ⚠️ Disclaimer

This project uses the publicly available OpenEMR demo environment for testing purposes.

Do not enter real patient information, personal information, or other sensitive data into the public demo environment.
