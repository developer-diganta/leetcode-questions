/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    function firstGTE(arr, val) {
        let l = 0, r = arr.length - 1, ans = -1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] >= val) {
                ans = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return ans;
    }
    envelopes.sort((a, b) => {
        if (a[0] == b[0]) return b[1] - a[1];
        return a[0] - b[0];
    });
    const dp = [];
    for (let i = 0; i < envelopes.length; i++) {
        let index = firstGTE(dp, envelopes[i][1]);
        if (index == -1) {
            dp.push(envelopes[i][1]);
        } else if (index != -1) {
            dp[index] = envelopes[i][1];
        }
    }
    return dp.length;
};