import { test, expect, Page, BrowserContext, devices } from '@playwright/test';

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

