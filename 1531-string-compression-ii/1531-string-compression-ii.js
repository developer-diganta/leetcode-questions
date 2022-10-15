var n,char,darray;
var getLengthOfOptimalCompression = function(s, k) {
    char=s.split("");
    n=s.length;
    darray=new Array(n)
    for(let i=0;i<n;i++){
        darray[i]=new Array(k+1).fill(-1);
    }
    return dp(0,k);
};
var dp=(i,k)=>{
    if(k<0)return n;
    if(n<=i+k)return 0;
    let ans=darray[i][k];
    if(ans!=-1)return ans;
    ans=dp(i+1,k-1);
    let len=0,same=0,diff=0;
      
        for (let j=i; j < n && diff <= k; j++) {
            
            if (char[j] == char[i]) {
                same++;
                if (same <= 2 || same == 10 || same == 100) len++;
            } else {
                diff++; 
            }
            ans = Math.min(ans, len + dp(j + 1, k - diff)); 
        }
        darray[i][k] = ans;
        return ans;
    
}