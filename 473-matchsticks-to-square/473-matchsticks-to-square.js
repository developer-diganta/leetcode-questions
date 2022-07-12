/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    const n = matchsticks.length;
    
    let totSum = 0;
    
    for (let i = 0; i < n; i++) {
        totSum += matchsticks[i];
    }
    
    const quarter = totSum / 4;
    
    if (quarter % 1 != 0) return false;
    
    matchsticks.sort((a, b) => a - b);
  
    return topDown(n - 1, quarter, quarter, quarter, quarter);
   
    function topDown(idx, side1, side2, side3, side4) {
        if (idx < 0) {
            return side1 === 0 & side2 === 0 && side3 === 0 && side4 === 0;
        }

        let addToSideOne = false;
        let addToSideTwo = false;
        let addToSideThree = false;
        let addToSideFour = false;

        const len = matchsticks[idx];

        if (side1 >= len) addToSideOne = topDown(idx - 1, side1 - len, side2, side3, side4);
        if (addToSideOne) return true;

        if (side2 >= len) addToSideTwo = topDown(idx - 1, side1, side2 - len, side3, side4);
        if (addToSideTwo) return true;

        if (side3 >= len) addToSideThree = topDown(idx - 1, side1, side2, side3 - len, side4);
        if (addToSideThree) return true;

        if (side4 >= len) addToSideFour = topDown(idx - 1, side1, side2, side3, side4 - len);
        if (addToSideFour) return true;
        
        return false;
    }
};