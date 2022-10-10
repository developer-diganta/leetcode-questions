class Solution {
public:
    string breakPalindrome(string pali) {
      if(pali.size()==1){
          return "";
      }
        int n = pali.size();
        string s = pali;
        for(int i =0 ; i<n ; i++){
            if(n%2 !=0 && i==(n/2)){
                for(int j = i+1; j<n;j++){
                    if(pali[j]!='a'){
                        pali[j]='a';
                    }
                }
                if(pali ==s){
                    pali[n-1]='b';
                }
                return pali;
            }
            if(pali[i]!='a'){
                pali[i]='a';
                return pali;
            }
            
            
        }
        if(pali ==s){
         pali[n-1]='b';
        }
        return pali;
    }
};