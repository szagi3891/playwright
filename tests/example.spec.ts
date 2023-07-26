import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  let response = await page.goto('https://playwright.dev/');

  if (response === null) {
    throw Error('fuck');
  }

  const contentType = await response.headerValue('content-type');
  expect(contentType).toBe('text/html; charset=utf-8');

  expect(response.status()).toBe(200);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});


test('test wygenerowany', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await page.getByRole('link', { name: 'Electron', exact: true }).click();
  await page.getByRole('heading', { name: 'MethodsDirect link to Methods' }).click();
  await page.getByLabel('Direct link to Methods').click();
  await page.pause();
  expect(page.url()).toContain('docs/api/class-electron#methods');
});

