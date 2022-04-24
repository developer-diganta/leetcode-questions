class Solution {
public:
    int countLatticePoints(vector<vector<int>>& circles) {
        int ans=0;
        set<pair<int,int>>mp;
        for(int i=0;i<circles.size();i++){
                int x=circles[i][0];            
                int y=circles[i][1];
                int r=circles[i][2];
            for(int o=x-r;o<=x+r;o++){
                for(int v=y-r;v<=y+r;v++){
                    int a=((x-o)*(x-o))+((y-v)*(y-v));
                    if(a<=r*r){
                        mp.insert(make_pair(o,v));
                    }
                }
            }
        }
        return mp.size();
    }
};