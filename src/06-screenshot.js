/*
 *  Take screenshot of the browser window after two seconds.
 *  Created On 25 December 2021
 */

import { time } from '@vsnthdev/utilities-node'

export default async page => {
    await time.sleep(2000)

    return await page.screenshot({
        encoding: 'base64',
    })
}
