class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        priority_queue<pair<int,vector<int>>>arr;
        for(int i=0;i<points.size();i++){
                arr.push({pow(points[i][0],2)+pow(points[i][1],2),points[i]});
            if(arr.size()>k) arr.pop();
            }
        vector<vector<int>> ans;
        while(!arr.empty()){
            ans.push_back(arr.top().second);
            arr.pop();
        }
        return ans;
        }
};