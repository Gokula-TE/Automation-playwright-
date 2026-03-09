const { test, expect } = require('@playwright/test');

test.describe('OpenMRS O3 Login Test', () => {

  test('Login to OpenMRS CHATGPT', async ({ page }) => {

    // Navigate to the SPA login page
    await page.goto('https://o3.openmrs.org/openmrs/spa/login');

    // Enter username
    await page.getByLabel('Username').fill('admin');

    // Click Continue button
    await page.getByRole('button', { name: /continue/i }).click();

    // Enter password
   // await page.getByLabel('Password').fill('Admin123');
await page.getByRole('textbox', { name: 'Password' }).fill('Admin123');
    // Click Login button
    //await page.getByRole('button', { name: 'login' }).click();
await page.getByRole('button', { name: 'Log in' }).click();

    // Assertion 1: Verify login successful by checking URL changed
    await expect(page).not.toHaveURL(/login/);

    
await expect(page).toHaveURL(/service-queues/);
  });

});