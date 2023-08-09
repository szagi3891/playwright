import { test, expect, Page, BrowserContext } from '@playwright/test';

const timeout = (timeout: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};

const nowaKarta = async (context: BrowserContext): Promise<void> => {
  // context.request.fetch('',)
  const page2 = await context.newPage();
  await page2.goto("https://playwright.dev/"); //https://www.programsbuzz.com/");
};


test('has title', async ({ page, context }) => {
  await page.goto('https://playwright.dev/');

  for (let i = 0; i < 1000; i++) {
    nowaKarta(context);
  }

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // const response = await fetch('https://dummyjson.com/products/1');
  // const responseJson = await response.json();
  // console.info('odpowiedź', responseJson);

  await timeout(20000);
  console.info("koniec testu");
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
  const aaa = page.mainFrame();
  const bbb = aaa.childFrames()[0];

  
  console.info('aaa', aaa);
  console.info('bbb', bbb);
  console.info('koniec testu');
});

test('test iframe', async ({ page, browser }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Community' }).click();
  await page.getByRole('link', { name: 'Release Videos', exact: true }).click();
  await page.getByRole('link', { name: 'Playwright v1.35' }).click();
  await page.getByLabel('Watch Playwright 1.35').click();
  const text = await page.frameLocator('iframe[title="Playwright 1.35"]').locator('.ytp-title-text').textContent();
  expect(text).toBe('What\'s new in Playwright 1.35');
});

