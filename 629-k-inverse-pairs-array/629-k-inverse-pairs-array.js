/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k){
    if (k == 0)
        return 1;
    if (n == 1)
        return 0;
    var mod = 1e9+7;
    var dp_old = new Array(k+1).fill(0);
    var dp_new = new Array(k+1).fill(0);
    dp_old[0] = dp_new[0] = 1;
    for (var i = 1; i<n; i++)
    {
        for (var j = 1; j<=k; j++)
        {
            dp_new[j] = (dp_old[j]+dp_new[j-1])%mod;
            if (i<j)
                dp_new[j] = (mod+dp_new[j]-dp_old[j-i-1])%mod;
        }
        [dp_old, dp_new] = [dp_new, dp_old];
    }
    return dp_old[k]%mod;
}