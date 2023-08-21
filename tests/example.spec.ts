import { test, expect, Page, BrowserContext, devices } from '@playwright/test';

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

  for (let i = 0; i < 5; i++) {
    nowaKarta(context);
  }

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // const response = await fetch('https://dummyjson.com/products/1');
  // const responseJson = await response.json();
  // console.info('odpowiedź', responseJson);

  await timeout(10000);
  console.info("koniec testu");
});

test('get started link', async ({ page }) => {
  let response = await page.goto('https://playwright.dev/');

  if (response === null) {
    throw Error('fuck');
  }

  const contentType = await response.headerValue('content-type');
  expect(contentType).toBe('text/html; charset=utf-8');

  const body: string = (await response.body()).toString();
  //expect(body).toCoTam();

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

  // const aaaa = page.getByLabel('Direct link to Methods');
  // const bbbb = aaaa.getByLabel('Direct link to Methods');
  // const cccc = bbbb.locator('adsa');

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


test('mistrz klawiatury', async ({ page }) => {

  await page.goto('https://monkeytype.com/');
  await page.getByLabel('Consent', { exact: true }).click();
  await page.locator('.acceptAll').click();

  const words = await page.locator('#words .word').all();
  const doWpisania: Array<string> = [];
  for (const word of words) {
    const text = await word.textContent();
    if (text === null) {
      throw Error('Oczekiwano tekstu');
    }
    doWpisania.push(text);
  }

  for (const text of doWpisania) {
    // const text = await word.textContent();

    // if (text === null) {
    //   throw Error('Oczekiwano tekstu');
    // }

    console.info('Wpisuję tekst', text);
  
    await page.locator('#typingTest').type(`${text} `);
    await timeout(50);
  }

  await timeout(60000);
});

test('env', async () => {

  console.info('zmienna środowiskowa', process.env.aaaa);

  expect(true).toBe(true);
});

// uruchomienie ze zmienną środowiskową
// aaaa=dupablada npx playwright test example.spec.ts:123 

const getDomain = (url: string): string => {
  const urlObject = new URL(url);
  return urlObject.hostname;
};

test('cookie', async ({ page }) => {

  await page.context().addCookies([{
    // domain: 'vickers.bet',
    domain: getDomain('https://vickers.bet/'),
    path: '/',
    name: 'newtrading',
    value: 'true'
  }]);

  await page.goto('https://vickers.bet/');


});

