import { readFile } from 'fs/promises'
import path from 'path'

import { convertToHtml, convertToObject } from './src/index.mjs';

try {
    const fileName = process.argv[2];
    const extension = path.extname(fileName)

    const fileData = await readFile(`./files/${fileName}`, { encoding: 'utf-8' })
        .then(data => convertToObject(data, extension))
        .then(data => convertToHtml(data))

    console.log(fileData)

} catch (err) {
    console.error(err)
}


