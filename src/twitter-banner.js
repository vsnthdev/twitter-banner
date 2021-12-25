/*
 *  Entry executable file for twitter-banner project.
 *  Created On 25 December 2021
 */
import dotenv from 'dotenv'

import getFollowerImages from './01-getFollowerImages.js'
import browser from './02-browser.js'
import injectBackgroundImage from './03-backgroundImage.js'

const env = process.env.NODE_ENV || 'development'

// load the .env file
if (env == 'development') dotenv.config()

// fetch images of the latest followers from Twitter's API
const images = await getFollowerImages()

// create a new browser instance
const page = await browser(env)

// inject the background image
await injectBackgroundImage(page)

// 5. inject images into our document
// 6. take a screenshot
// 7. upload it on Twitter
