import { test, expect } from '@playwright/test';

test.describe('Login Feature', () => {

  test('Valid Login', async ({ page }) => {
    await page.goto('https://example.com/login');

    await page.fill('#username', 'validUser');
    await page.fill('#password', 'validPassword');
    await page.click('#loginBtn');

    await expect(page).toHaveURL(/dashboard/);
    await expect(page.locator('h1')).toHaveText('Dashboard');
  });

  test('Invalid Login', async ({ page }) => {
    await page.goto('https://example.com/login');

    await page.fill('#username', 'invalidUser');
    await page.fill('#password', 'wrongPassword');
    await page.click('#loginBtn');

    await expect(page.locator('.error-message')).toBeVisible();
    await expect(page.locator('.error-message')).toHaveText(/invalid/i);
  });

});

test.describe('Dashboard Feature', () => {

  test('Open Dashboard', async ({ page }) => {
    await page.goto('https://example.com/dashboard');

    await expect(page).toHaveURL(/dashboard/);
    await expect(page.locator('h1')).toHaveText('Dashboard');
  });

});