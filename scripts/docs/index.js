/*
 *  Dynamically generates a README.md from the template.
 *  Created On 26 December 2021
 */

import dirname from 'es-dirname'
import fs from 'fs/promises'
import path from 'path'

import getEnvs from './envs.js'

// read the project information
const app = JSON.parse(
    await fs.readFile(
        path.join(dirname(), '..', '..', 'package.json'),
        'utf-8',
    ),
)

// read the template README.md file
const template = await fs.readFile(
    path.join(dirname(), 'README.template.md'),
    'utf-8',
)

// the path where we'll write our rendered README.md file
const dest = path.join(dirname(), '..', '..', 'README.md')

// replace placeholders in the template with actual values
const content = template
    .replaceAll('<!-- description -->', app.description)
    .replaceAll('<!-- year -->', new Date().getFullYear())
    .replaceAll('\n<!-- environment variables -->', await getEnvs())

// write the rendered file
await fs.writeFile(dest, content, 'utf-8')
