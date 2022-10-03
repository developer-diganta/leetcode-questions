/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    colors = colors.split("");
    var i=0;
    var cost=0;
    var j=0;
    for(var i=0;i<colors.length-1;i++){
        if(colors[i]===colors[i+1]){
            var mini = Math.min(neededTime[i+1],neededTime[j]);
            j=neededTime[i+1]<neededTime[j]?j:i+1;
            cost+=mini;
        }
        else{
            j=i+1;
        }
    }
    return cost;
};