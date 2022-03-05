/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */

var helper = function(nums,k){
    var i=0;
    var j=0;
    // var k=1;
    while(i<nums.length){
        if(nums[i]==="F") k--;
        if(k<0){
            if(nums[j]=="F") k++;
            j++;
        }
        i++;
    }
    return i-j;
}

var helper2 = function(nums,k){
    var i=0;
    var j=0;
    // var k=1;
    while(i<nums.length){
        if(nums[i]==="T") k--;
        if(k<0){
            if(nums[j]=="T") k++;
            j++;
        }
        i++;
    }
    return i-j;
}
var maxConsecutiveAnswers = function(answerKey, k) {
    var ans1 = helper(answerKey,k);    
    var ans2 = helper2(answerKey,k);
    return Math.max(ans1,ans2);

};