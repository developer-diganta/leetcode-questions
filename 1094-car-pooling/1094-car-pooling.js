/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    var increase = new Array(1001);
    increase.fill(0);
    for(var i=0;i<trips.length;i++){
        increase[trips[i][1]]+=trips[i][0];
        increase[trips[i][2]]-=trips[i][0];
    }
    var pre=0;
    for(var i=0;i<increase.length;i++){
        pre+=increase[i];
        if(pre>capacity) return false;
    }
    return true;
};