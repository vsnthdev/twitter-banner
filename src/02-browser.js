/*
 *  Create & return a new Puppeteer browser.
 *  Created On 25 December 2021
 */

import puppeteer from 'puppeteer'

export default async env => {
    // create a new browser instance
    const browser = await puppeteer.launch({
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
