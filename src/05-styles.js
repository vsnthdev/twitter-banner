/*
 *  Injects Cascading Stylesheet(s) into the browser's DOM.
 *  Created On 25 December 2021
 */

import dirname from 'es-dirname'
import fs from 'fs/promises'
import path from 'path'

export default async page => {
    const { STYLESHEET_NAME } = process.env

    const stylesPath = path.join(dirname(), '..', 'data', STYLESHEET_NAME)
    const content = await fs.readFile(stylesPath, 'utf-8')

    return await page.addStyleTag({ content })
}
