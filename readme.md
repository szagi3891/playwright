Zalety:
odpalanie kazdego testu w osobnym kontekście przeglądarki (izolacja testów)
mozna taz kilka okien z innymi kontekstami uruchomić (np. strona oraz jakiś panel w drugim kontekście)
https://playwright.dev/docs/browser-contexts
cypress moze mieć z tym problemy
https://docs.cypress.io/guides/core-concepts/test-isolation


testowanie api wydaje się łatwe

nagrywanie testu mozna bezpośrednio z VSC odpalić
nagrywanie moze tez pisać w miejscu w kodzie w którym ma się kursor

odpalanie równoległe (dzielenie na shard)
npx playwright test --shard 2/10

merge-reports: usage
1. Enable "blob" reporter in your config
2. Upload blob reports to a single storage location
3. Download & merge blob reports using
  npx playwright merge-reports

plugin do VSC
Playwright Test for VSCode


odpalenie trybu graficznego za pomocą którego mozna uruchomic testy
npx playwright test --ui

Uruchamia testy z oknem przeglądarki
npx playwright test --headed


+ działa filtrowanie


uruchomienie wszystkich testów:
npx playwright test


uruchomienie jednego testu
npx playwright test landing-page.spec.ts


https://playwright.dev/docs/running-tests#command-line


uruchomienie generatora
npx playwright codegen https://playwright.dev/

mokowanie za pomocą har-a
https://playwright.dev/docs/mock#mocking-with-har-files


playwright mona w rust odpalać
https://github.com/octaltree/playwright-rust

--------
Jakiś kursik:
https://www.youtube.com/playlist?list=PLvFBbkSgL1u7Bco8ewGnWeZpjRH-bHC_7

--------
definicje typów dla artillery ???
https://www.npmjs.com/package/@types/artillery

--------
jakiś plugin do playwright:
https://github.com/microsoft/playwright/discussions/11977
https://www.linkedin.com/pulse/elevating-your-playwright-tests-plugin-tzur-paldi-phd/


-------
piaskownica do zabawy
https://skleptest.pl/


-----
obserwować jak się to rozwinie
https://playwright.dev/docs/api/class-websocket
https://github.com/microsoft/playwright/issues/4488

