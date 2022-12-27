class Solution {
public:
    static bool cmp(pair<int,int>a,pair<int,int>b){
        return a.second-a.first<b.second-b.first;
    }
    int maximumBags(vector<int>& capacity, vector<int>& rocks, int additionalRocks) {
        vector<pair<int,int>> m;
        for(int i=0;i<rocks.size();i++){
            m.push_back({rocks[i],capacity[i]});
        }
        sort(m.begin(),m.end(),cmp);
        int i=0,ans=0;

        while(additionalRocks && i<m.size()){
            if(m[i].first==m[i].second){
                i++;
            }
            else{
                if(m[i].second-m[i].first<=additionalRocks){
                    int var = m[i].second-m[i].first;
                    m[i].first+=m[i].second-m[i].first;
                    additionalRocks-=var;
                    cout<<"CAPACITY:"<<m[i].second<<" "<<"AR: "<<additionalRocks<<endl;
                    i++;
                }else{
                    i++;
                }
            }
        }
        for(int y=0;y<m.size();y++){
            if(m[y].first==m[y].second) ans++;
        }
        return ans;
    }
};