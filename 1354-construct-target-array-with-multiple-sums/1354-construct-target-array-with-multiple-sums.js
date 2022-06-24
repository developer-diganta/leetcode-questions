/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {
    if (target.length == 1) {
        return target[0] === 1;
    }
    
    while (true) {
        target.sort((a,b) => b - a);
        let nm = target[0]
        let total = 0;
        for (let n of target) {
            total += n;
        }
        let rest = total - nm;
        if (rest === 1 || total === target.length) {
            return true;
        }
        let x = nm % rest
        
        if (x === 0 || x === nm) {
            return false;
        }
        target[0] = x
    }
};