const fs = require('fs')
// const path = require('path')
const language = ['en']

// 修正默认语言
const allHtmls = getHtmls('./dist/', language)
changeAllLanguage(allHtmls, 'cn')
// 修复其它语言
for (let i = 0, len = language.length; i < len; i++) {
    const languageHtmls = getHtmls('./dist/' + language[i] + '/')
    changeAllLanguage(languageHtmls, language[i])
}

function changeAllLanguage(htmls, locale) {
    for (let i = 0, len = htmls.length; i < len; i++) {
        changeLocaleLanguage(htmls[i], locale)
    }
}

function getHtmls(path, language = []) {
    const excludeDir = ['static', '_nuxt']
    const htmls = []
    const childs = fs.readdirSync(path)
    for (let i = 0, len = childs.length; i < len; i++) {
        const child = childs[i]
        if (excludeDir.includes(child) || language.includes(child)) {
            continue
        }
        if (child.includes('.html')) {
            htmls.push(path + child)
        } else {
            const stats = fs.statSync(path + child)
            if (stats.isDirectory()) {
                const tempHtmls = getHtmls(path + child + '/')
                for (let i = 0, len = tempHtmls.length; i < len; i++) {
                    htmls.push(tempHtmls[i])
                }
            }
        }
    }
    return htmls
}

function changeLocaleLanguage(path, locale) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.log('read file 【' + path + '】 change language error')
        } else {
            const content = data.replace(/locale\s*:\s*"\w+"/gi, 'locale:"' + locale + '"')
            fs.writeFile(path, content, function(err) {
                if (err) {
                    console.log('write file 【' + path + '】 change language error')
                }
                console.log('【' + path + '】change language(' + locale + ') success')
            })
        }
    })
}
