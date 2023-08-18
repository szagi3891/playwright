import { test, expect, Page, BrowserContext, devices } from '@playwright/test';
import { timeout } from '../utils/timeout';

test('TC333 has title', async ({ page, context, request }) => {

    const response = await request.get('https://socket-api-star.prod.sherbetcloud.com/api-proxy/env-config', {
        // data: {
        // }
    });

    const headers = response.headers();
    console.info('headers', headers);

    expect(response.status()).toBe(200);
    expect(headers['content-type']).toBe('application/json; charset=utf-8');

    const body = JSON.parse((await response.body()).toString());
    console.info('body', body);

    expect(body).toEqual({ is_new_trading: false });
});


// test('BP')

const waitForAppStateReady = async (page: Page): Promise<void> => {

    for (let i = 0; i < 300; i++) {
        const aaa = await page.evaluate(() => {
            //@ts-expect-error
            return typeof window.$appState !== 'undefined';
        });

        if (aaa === true) {
            return;
        }
        console.info('wynik', aaa);

        await timeout(100);
    }

    throw Error('Nie doczekano się na appState');
};

test('javascript', async ({ page }) => {

    const resp = await page.goto('https://www.starsports.bet');

    if (resp === null) {
        throw Error('dsadsa');
    }

    expect(resp.status()).toBe(200);

    await waitForAppStateReady(page);
    
    const aaaa = await page.evaluate('$appState.env.envVariables.userLang');
    console.info('aaaa', aaaa);
    expect(aaaa).toBe('en');

    const bbbb = await page.evaluate('$appState.env.envVariables.websocket_host_v2');
    console.info('bbbb', bbbb);
    expect(bbbb).toBe('wss://socket-star.prod.sherbetcloud.com/ws');

    console.info('koniec testu');
    // expect(aaa).toBe(true);
});

