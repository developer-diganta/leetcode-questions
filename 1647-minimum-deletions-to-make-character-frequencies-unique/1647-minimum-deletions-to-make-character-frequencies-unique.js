/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const freq = {};
    for (let c of s) {
        freq[c] = (freq[c] || 0) + 1;
    }
    
    let values = Object.values(freq).sort((a,b) => a - b);
    let set = new Set();
    let res = 0;
    for (let i = 0; i < values.length; i++) {
        while (set.has(values[i]) && values[i] !== 0) { 
            values[i]--;
            res++;
        }
        
        set.add(values[i]);
    }
    
    return res;
};