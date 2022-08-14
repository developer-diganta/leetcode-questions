/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    let connected = (a,b) => {
        let c = 0
        for (let i = 0; i < a.length && c < 2; i++) {
            if (a[i] !== b[i]) c++
        }
        return c == 1
    }
    let dict = new Set(wordList);
    if (dict.has(endWord) == false) return []

    dict.delete(beginWord)
    let queue = [beginWord]
    let paths = []

    
    let reached = false;    
    while (queue.length && !reached) {
        paths.push(queue.slice())

        let qlen = queue.length;
        for (let i = 0; i < qlen && !reached; i++) {
            let from = queue.shift();
            for (let to of dict) {                
                if (connected(from,to) == false) continue
                if (to == endWord) {
                    reached = true
                    break;
                }

                queue.push(to)                
				
                dict.delete(to)
            }
        }
    }

    if (!reached) return []
    
    let ans = [[endWord]]
    for (let level = paths.length - 1; level >= 0; level--) {        
        let alen = ans.length
        for (let a = 0; a < alen; a++) {
            let p = ans.shift()
            let last = p[0]            
            for (let word of paths[level]) {                
                if (!connected(last, word)) continue                
                ans.push([word, ...p])
            }
        }        
    }


    return ans
}
