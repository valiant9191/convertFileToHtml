/**
 * convert string from file into object 
 */
function convertToObject(data, extName) {
    try {
        if (extName === '.txt') {
            const dataObj = eval(`(${data})`)
            return dataObj
        } else if (extName === '.json') {
            return JSON.parse(data)
        } else {
            throw new Error('not supported type of file')
        }
    } catch (err) {
        throw new Error('data is not valid: ' + err.message)
    }
}

export { convertToObject }