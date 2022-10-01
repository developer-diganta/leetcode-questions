/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
            var dp = new Array(s.length).fill(-1);
        var dfs = (i) => {
            if(i===s.length) return 1;
            if(i>s.length) return 0;
            if(dp[i]!==-1) return dp[i];
            if(s[i]==='0') return 0;
            // var res = 1;
            var res=0;
            res+=dfs(i+1);
            if(s[i]==='1' || s[i]==='2' && i<s.length-1 && ["0","1","2","3","4","5","6"].includes(s[i+1]))
                res+=dfs(i+2);
            // var res=dfs(i+1);
            return dp[i]=res;
            
        }
        if(s.length===1 && s[0]==="1") return 1;
    if(s.length===1 && s[0]==="0") return 0;
        return dfs(0);
};