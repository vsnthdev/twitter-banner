import dirname from 'es-dirname'
import fs from 'fs/promises'
import path from 'path'

export default async () => {
    let envs = await fs.readFile(
        path.join(dirname(), '..', '..', '.env.example'),
        'utf-8',
    )

    const properties = []
    envs = envs
        .substring(207)
        .split('\n')
        .filter(line => Boolean(line))

    while (envs.find(line => line.startsWith('#'))) {
        const start = envs.find(line => line.startsWith('#'))
        const end = envs.find(line => line.startsWith('#') == false)

        const comments = envs
            .slice(envs.indexOf(start), envs.indexOf(end))
            .join('\n')
            .substring(2)

        const key = end.split('=')[0]
        const value = end.split('=')[1]

        properties.push(
            `| \`${key}\` | ${comments} | ${
                value.length != 0 ? '`' + value + '`' : ''
            } |`,
        )

        envs = envs.slice(envs.indexOf(end) + 1)
    }

    return properties.join('\n')
}
