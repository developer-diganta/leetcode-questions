class Solution {
    bool checkPal(string &str , int st , int ed){
        int i = st , j = ed;
        while(i < j){
            if(str[i] != str[j]){
                return 0;
            }
            i++,j--;
        }
        return 1;
    }
public:
    vector<vector<int>> palindromePairs(vector<string>& words) {
        int n = words.size();
        unordered_map<string , int> mp;
        unordered_map<string , int> mp2;
        for(int i = 0 ; i < n ; i++){
            reverse(words[i].begin() , words[i].end());
            mp[words[i]] = i;
            reverse(words[i].begin() , words[i].end());
            mp2[words[i]] = i; 
        }
        
        vector<vector<int>> ans;
        set<vector<int>> st;
        vector<int>temp(2);
        if(mp.find("") != mp.end()){
            int id = mp[""];
            for(int i = 0 ; i < n ;i++){
                if(i == id){
                    continue;
                }
                if(checkPal(words[i] , 0 , words[i].size() - 1) ){
                    temp[0] = id;
                    temp[1] = i;
                    st.insert(temp);
                    temp[0] = i;
                    temp[1] = id;
                    st.insert(temp);
                }
            }
        }
        for(int i = 0 ; i < n ; i++){
            if(words[i] == ""){
                continue;
            }
            string need = "";
            for(int j = 0 ; j < words[i].size() ; j++){
                need += words[i][j];
                if(mp.find(need) != mp.end() && mp[need] != i && checkPal(words[i], j + 1 , words[i].size() - 1)){
                    temp[0] = i;
                    temp[1] = mp[need];
                     st.insert(temp);
                }
            }
            need = "";
            for(int j = words[i].size() - 1 ; j >= 0 ; j--){
                need += words[i][j];
                if(mp2.find(need) != mp2.end() && mp2[need] != i && checkPal(words[i] , 0 , j - 1)){
                    temp[0] = mp2[need];
                    temp[1] = i;
                    st.insert(temp);
                }
            
            }
        }
        for(auto x : st){
            ans.push_back(x);
        }
        //sort(ans.begin() , ans.end());
        return ans;
        
    }
};