import { chromium, webkit, firefox} from '@playwright/test';

const list = [{
    name: 'chromium',
    browser: chromium,
},{
    name: 'webkit',
    browser: webkit,
// },{
//     name: 'firefox',
//     browser: firefox
}];

(async () => {

    for (const browserType of list) {
        console.info('opdpalam przeglądarkę', browserType.name);

        const browser = await browserType.browser.launch();
        const page = await browser.newPage();

        // const aaa = await browser.newContext();
        // const bbb = await aaa.newPage();

        await page.goto('http:///www.meetup.com');
        // await page
        await page.screenshot({
            path: `screenshots/${browserType.name}.png`
        })

        console.info('zamykam przeglądarkę', browserType.name);
        // page.close();
        browser.close();
    }

    console.info('koniec testów');
})();