/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let min1 = cost.shift();
    let min2 = cost.shift();
    
    for(c of cost)
        {
            temp = Math.min(min1,min2) + c;
            min1 = min2;
            min2 = temp;
        }
    return Math.min(min1,min2);
};