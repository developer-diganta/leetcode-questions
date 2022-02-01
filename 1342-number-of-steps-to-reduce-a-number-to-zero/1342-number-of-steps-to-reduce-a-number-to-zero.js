/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    var ans = 0;
    if(num===0) return 0
    while(num!=0){
        ans+=num&1?2:1;
        num=num>>1;
    }
    return ans-1;
};