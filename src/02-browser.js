/*
 *  Create & return a new Puppeteer browser.
 *  Created On 25 December 2021
 */

import puppeteer from 'puppeteer-core'
import url from 'url'
import dns from 'dns/promises'

export let browser

// implementing this function because of
// https://github.com/cyrus-and/chrome-remote-interface/issues/340
const resolveIP = async (input) => {
    const parsed = url.parse(input)

    const { address } = await dns.lookup(parsed.hostname, {
        family: 4
    })

    return `${parsed.protocol}//${address}:${parsed.port}`
}

export const start = async () => {
    const { CHROME_DEVTOOLS_URL } = process.env

    // create a new browser instance
    const browser = await puppeteer.connect({
        browserURL: await resolveIP(CHROME_DEVTOOLS_URL),
        defaultViewport: {
            width: 1500,
            height: 500
        }
    })

    // open a new page and return it
    return await browser.newPage()
}

export const close = async (page) => await page.close()
