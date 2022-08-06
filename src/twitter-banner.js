/*
 *  Entry executable file for twitter-banner project.
 *  Created On 25 December 2021
 */

import { scheduleJob } from "node-schedule"

import getFollowerImages, { twitter } from './01-getFollowerImages.js'
import { close, start } from './02-browser.js'
import injectBackgroundImage from './03-backgroundImage.js'
import injectImages from './04-images.js'
import injectStyles from './05-styles.js'
import takeScreenshot from './06-screenshot.js'
import publishBanner from './07-publish.js'

const env = process.env.NODE_ENV || 'development'

// load the .env file during development
if (env == 'development') {
    const dotenv = await import('dotenv')
    dotenv.config()
}

const main = async () => {
    // fetch images of the latest followers from Twitter's API
    const images = await getFollowerImages()

    // create a new browser instance
    const page = await start(env)

    // inject the background image
    await injectBackgroundImage(page)

    // inject images into our document
    await injectImages(page, images)

    // inject the styles into our document
    const tag = await injectStyles(page)

    // we just show these during development
    if (env == 'production') {
        // take a screenshot & close the browser
        const banner = await takeScreenshot(page)
        await close(page)

        // upload it on Twitter, if ran during production
        await publishBanner(twitter, banner)
        console.log(`Changed banner artwork at ${new Date().toString()}`)
    } else {
        // dynamically import the dev js
        const { default: dev } = await import('./dev.js')

        // attach the css watcher functionality
        await dev(tag)
    }
}

const schedule = () => {
    main()
    scheduleJob(process.env.UPDATE_INTERVAL, main)
}

if (env == 'production') {
    schedule()
} else {
    main()
}