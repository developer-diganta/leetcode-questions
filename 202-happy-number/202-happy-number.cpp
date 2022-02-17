class Solution {
public:
    bool isHappy(int n) {
        int s=n;
        int f=n;
        do{
            s=findSquare(s);
            f=findSquare(findSquare(f));
        }while(s!=f);
        if(s==1)
            return true;
        else
            return false;
    }
    int findSquare(int n){
        int ans=0;
        while(n>0){
            int rem = n%10;
            ans+=rem*rem;
            n=n/10;
        }
        return ans;
    }
};