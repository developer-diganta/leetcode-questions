/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
        const module = Math.pow(10, 9) + 7;
    arr.sort((a,b) => a - b);
    let count = 0;
     
    for (i = 0; i < arr.length - 2; i++) {
        let l = i + 1;
        let r = arr.length - 1;
        
        while (l < r) {
            const sum = arr[i] + arr[l] + arr[r];
            
            if (sum === target) {
                let leftCount = 1;
                let rightCount = 1;

                if (arr[l] === arr[r]) {
                    count += (r - l) * (r - l + 1) / 2;
                    count %= module;
                    break;
                }
                
                l++;
                
                while (l <= r && arr[l] === arr[l - 1]) {
                    leftCount += 1;
                    l++;
                }
                
                r--;
                
                while (r >= l && arr[r] === arr[r + 1]) {
                    rightCount += 1;
                    r--;
                }
                
                count += rightCount * leftCount;
                count %= module;
            } else if (sum < target) {
                l++;
            } else {
                r--;
            }
        }
    }
    
    return count;
};