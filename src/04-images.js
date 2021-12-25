/* eslint-env browser */
/*
 *  Inject profile picture images into the browser DOM.
 *  Created On 25 December 2021
 */

export default async (page, images) => {
    // get the container id from the environment variables
    const { IMAGES_CONTAINER_ID } = process.env

    // transform our array of image URLs into img tags
    // with a div surrounding it with a specific id
    const code = images.map(img => `<img src="${img}">`)
    code.unshift(`<div id="${IMAGES_CONTAINER_ID}">`)
    code.push('</div>')

    // append the innerHTML of our browser's DOM
    // with this created code
    await page.evaluate(code => {
        document.body.innerHTML += code.join('')
    }, code)
}
