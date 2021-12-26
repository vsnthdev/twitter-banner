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

        properties.push(
            `| \`${end.split('=')[0]}\` | ${comments.substring(2)} | \`${
                end.split('=')[1]
            }\` |`,
        )

        envs = envs.slice(envs.indexOf(end) + 1)
    }

    return properties.join('\n')
}
