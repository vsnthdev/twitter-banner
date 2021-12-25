/*
 *  Uploads the given base64 image data as the Twitter banner image.
 *  Created On 25 December 2021
 */

export default async (twitter, banner) =>
    await twitter.accountsAndUsers.accountUpdateProfileBanner({
        banner,
    })
