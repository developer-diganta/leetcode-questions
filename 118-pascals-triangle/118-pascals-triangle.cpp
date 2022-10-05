class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>>arr;
        int st=0;
        int end=0;
        vector<int>one;
        one.push_back(1);
        arr.push_back(one);
        for(int i=1;i<numRows;i++){
            vector<int>two;
            two.push_back(st+arr[i-1][0]);
            for(int j=0;j<arr[i-1].size()-1;j++){
                two.push_back(arr[i-1][j]+arr[i-1][j+1]);
            }
            two.push_back(arr[i-1][arr[i-1].size()-1]+end);
            arr.push_back(two);
        }
        return arr;
    }
};