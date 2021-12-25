/*
 *  Watches the stylesheet file for changes and injects them
 *  into the browser window for easy development.
 *  Created On 25 December 2021
 */

import dirname from 'es-dirname'
import fs from 'fs/promises'
import path from 'path'

export default async tag => {
    // import chokidar on demand
    const { default: chokidar } = await import('chokidar')

    const { STYLESHEET_NAME } = process.env
    const stylesPath = path.join(dirname(), '..', 'data', STYLESHEET_NAME)

    // watch for file changes
    chokidar
        .watch(stylesPath, {
            persistent: true,
            awaitWriteFinish: {
                stabilityThreshold: 500,
            },
        })
        .on('change', async () => {
            const content = await fs.readFile(stylesPath, {
                encoding: 'utf-8',
                flag: 'rs',
            })

            tag.evaluateHandle((tag, content) => {
                tag.innerHTML = content
            }, content)
        })
}
