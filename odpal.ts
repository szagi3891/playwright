import { chromium } from '@playwright/test';
// const { chromium } = require('playwright');

(async () => {

  // Otwórz przeglądarkę
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Nawiąż połączenie i przejdź do strony o podanym URL
  await page.goto('https://www.example.com');

  // Pobierz zawartość strony
  const content = await page.content();
  console.log('log1', content);

  // Poczekaj na odpowiedź z określonym URL i pobierz jej dane
  const response = await page.waitForResponse('https://www.example.com/api/data');
  const responseData = await response.json();
  console.log('log2', responseData);

  //100 procesów


  // Zamknij przeglądarkę
  await browser.close();

//   console.info(`testy wykonały się w ${czas}`);
})();


