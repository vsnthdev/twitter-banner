/*
 *  Create & return a new Puppeteer browser.
 *  Created On 25 December 2021
 */

import puppeteer from 'puppeteer'

export let browser

export const start = async env => {
    // create a new browser instance
    browser = await puppeteer.launch({
        defaultViewport: {
            width: 1500,
            height: 500,
        },
        headless: env != 'development' ? true : false,
    })

    // get all the tabs
    const page = await browser.pages()

    // return the first tab that is opened by default
    // by Chromium browser
    return page[0]
}

export const close = async () => await browser.close()
