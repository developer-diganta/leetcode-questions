/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const res = []
    for (const ch of s) {
        const last = res[res.length-1]
        const diff = last ? Math.abs(ch.charCodeAt(0) - last.charCodeAt(0))
                          : 0
        if (diff === 32) {
            res.pop()
            continue
        }
        res.push(ch)
    }
    
    return res.join('')
};