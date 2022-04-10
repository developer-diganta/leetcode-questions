/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    var nums = num.toString().split("");
    var odd=[];
    var even =[];
    for(var i=0;i<nums.length;i++){
        if(nums[i]%2===0) 
            even.push(nums[i]);
        else
            odd.push(nums[i]);
    }
    odd.sort((a,b)=>a-b);
    even.sort((a,b)=>a-b);
    var ans =[];
    for(var i=0;i<nums.length;i++){
        if(nums[i]%2===0){
            ans.push(even[even.length-1]);
            even.pop();
        }
        else{
            ans.push(odd[odd.length-1]);
            odd.pop();
        }
    }
    var ans2 = parseInt(ans.join(""));
    return ans2;

};