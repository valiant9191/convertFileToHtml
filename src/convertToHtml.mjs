function addWhiteSpace(depth) {
    return ' '.repeat(depth * 2);
}

/**
 * converts String to html text
 */
function convertToHtml(obj, depth = 0) {
    try {
        const depthCount = addWhiteSpace(depth)
        let html = `${depthCount}<${obj.tag} `;

        // attributes
        for (const valueKey in obj) {
            // exclude text and childrens
            if (valueKey !== 'text' && valueKey !== 'children') {
                if (obj[valueKey].constructor === Object) {
                    const attr = Object.entries(obj[valueKey])
                        .map(([prop, value]) => `${prop}: ${value}`)
                        .join('; ');
                    html += `${valueKey}="${attr}" `;

                } else {
                    html += `${valueKey}="${obj[valueKey]}" `;
                }
            }
        }

        html += '>\n';

        // inside tag
        if (obj.text) {
            html += `${depthCount}  ${obj.text}\n`;
        }

        // convert childrens 
        if (obj.children) {
            for (const child of obj.children) {
                html += convertToHtml(child, depth + 1);
            }
        }

        html += `${depthCount}</${obj.tag}>\n`;
        return html;

    } catch (err) {
        console.log('convert html error: ', err)
    }

}


export { convertToHtml }