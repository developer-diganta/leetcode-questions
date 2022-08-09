/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length==1) return s;
            var start=0;
        var end=1;
        
        for(var i=1;i<s.length;i++){
            var l=i-1;
            var r=i;
            while(l>=0 && r<s.length && s[l]==s[r]){
                if(r-l+1>end){
                    start=l;
                    end=r-l+1;
                }
                l--;
                r++;
            }
            var l=i-1;
            var r=i+1;
            while(l>=0 && r<s.length && s[l]==s[r]){
                if(r-l+1>end){
                    start=l;
                    end=r-l+1;
                }
                l--;
                r++;
            }

        }
        return s.substring(start,start+end);
};