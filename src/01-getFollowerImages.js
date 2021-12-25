/*
 *  Firstly fetches the latest followers and then their profile images.
 *  Created On 25 December 2021
 */

import { TwitterClient } from 'twitter-api-client'

export let twitter

export default async () => {
    // grab the required variables from the environment
    const {
        NO_FOLLOWERS,
        TWITTER_USERNAME,
        TWITTER_API_KEY,
        TWITTER_API_SECRET,
        TWITTER_ACCESS_TOKEN,
        TWITTER_TOKEN_SECRET,
    } = process.env

    // prepare an authenticated Twitter client
    twitter = new TwitterClient({
        apiKey: TWITTER_API_KEY,
        apiSecret: TWITTER_API_SECRET,
        accessToken: TWITTER_ACCESS_TOKEN,
        accessTokenSecret: TWITTER_TOKEN_SECRET,
    })

    // get the recent followers
    const { users: allUsers } = await twitter.accountsAndUsers.followersList({
        screen_name: TWITTER_USERNAME,
        count: Number(NO_FOLLOWERS) * 2,
    })

    const users = allUsers
        // remove any protected accounts for privacy reasons
        .filter(user => user.protected == false)

        // discard the entire object and only pick the profile_image_url_https
        .map(user => user.profile_image_url_https)
        // field, and then replace the "_normal" with "_400x400" to get
        // a better resolution and finally return them
        .map(image => image.replace(/_normal/g, '_400x400'))

    // trim the results into the number of requested followers
    users.length = Number(NO_FOLLOWERS)

    return users
}
