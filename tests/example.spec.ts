import { test, expect } from '@playwright/test';
test.describe('Login Feature', () =>{
test('Valid Login', async ({ page }) => {
await page.goto('https://example.com');
await expect(page).toHaveTitle(/Example/);
});
test('Invalid Login', async ({ page }) => {
await page.goto('https://example.com');
});
});
test.describe('Dashboard Feature', () => {
test('Open Dashboard', async ({ page }) => {
await page.goto('https://example.com');
});
});