/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
 let max = k * threshold;
    let q = 0;
    let j = 0;
    let result = 0;
    for(let i=0; i<arr.length; i++){
        q = q + arr[i];
        if(i+1-j == k){
            if(q >= max){
                result++;
            }
            q = q - arr[j];
            j++;
        }
    }
    return result;
};