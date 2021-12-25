/*
 *  Entry executable file for twitter-banner project.
 *  Created On 25 December 2021
 */

import getFollowerImages from './01-getFollowerImages.js'

const env = process.env.NODE_ENV || 'development'

// fetch images of the latest followers from Twitter's API
const images = await getFollowerImages(env)

// 3. create a new browser instance
// 4. inject the background image
// 5. inject images into our document
// 6. take a screenshot
// 7. upload it on Twitter
