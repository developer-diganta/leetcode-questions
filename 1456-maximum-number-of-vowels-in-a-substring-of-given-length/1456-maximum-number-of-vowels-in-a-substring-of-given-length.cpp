class Solution {
    private:
    bool isVowel(char c){
        return c=='a' || c=='e' || c=='i' || c=='o' || c=='u';
    }
public:
    int maxVowels(string s, int k) {
        int l=0;
        int i=0;
        int j =0;
        int n=s.length();
        int maxi = INT_MIN;
        while(j<n){
            if(j-i+1<k){
                                if(isVowel(s[j])){
                    l++;

                }  
                                j++;

            }else{
                if(isVowel(s[j])){
                    l++;
  

                }     
                                  maxi = max(maxi,l);
                if(isVowel(s[i])){
                        l--;
                }
                j++;
                i++;

            }
        }
        maxi = max(maxi,l);
        return maxi;
    }
};