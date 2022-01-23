/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    var len = arr.length;
    var sum = 0
    var o;
    for(let i=0; i<arr.length; i++){
        o = Math.ceil(((i+1) * (len -i))/2);
        sum += o * arr[i]  
    }
    return sum
};