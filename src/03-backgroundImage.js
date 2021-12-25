/* eslint-env browser */
/*
 *  Injects the background image into the browser DOM.
 *  Created On 25 December 2021
 */

import dirname from 'es-dirname'
import fs from 'fs/promises'
import path from 'path'

export default async page => {
    const { BACKGROUND_IMAGE } = process.env

    // construct the file path of the background image file
    const bgPath = path.join(dirname(), '..', 'data', BACKGROUND_IMAGE)
    const ext = path.parse(bgPath).ext.replace('jpg', 'jpeg').substring(1)

    // read the image as base64 string
    const bg = await fs.readFile(bgPath, 'base64')

    // evaluate some JavaScript within the Chromium browser
    await page.evaluate(
        ({ bg, ext }) => {
            document.body.setAttribute(
                'style',
                `background-image: url('data:image/${ext};base64,${bg}'); background-repeat: no-repeat; background-position: center; background-size: cover;`,
            )
        },
        { bg, ext },
    )
}
