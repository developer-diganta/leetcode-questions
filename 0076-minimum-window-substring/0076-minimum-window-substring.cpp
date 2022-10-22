class Solution {
public:
    string minWindow(string s, string t) {
        int FS[256]={0};
        int FP[256]={0};
        
        for(int i=0;i<t.length();i++){
            FP[t[i]]++;
        }
        int min_so=INT_MAX;
        int start=0;
        int start_idx=-1;
        int cnt=0;
        int window_size;
        for(int i=0;i<s.length();i++){
            char ch=s[i];
            FS[ch]++;
            if(FP[ch]!=0 and FS[ch]<=FP[ch]){
                cnt++;
            }
            if(cnt==t.length()){
                while(FP[s[start]]==0 or FS[s[start]]>FP[s[start]])
                {
                    FS[s[start]]--;
                    start++;
                }
                
                window_size=i-start+1;
                if(window_size<min_so){
                    min_so=window_size;
                    start_idx=start;
                }
            }
        }
        if(start_idx==-1)
            return "";
        else
        return s.substr(start_idx,min_so);
            }
};