class Solution {
public:
    int numSubmatrixSumTarget(vector<vector<int>>& matrix, int target) {
        int n = matrix.size();
        int m = matrix[0].size();
        for(int i = 0; i < n; i++)
        {
            for(int j = 1; j < m; j++)
            {
                matrix[i][j] += matrix[i][j - 1];
            }
        }
        int count = 0;
        for(int start_col = 0; start_col < m; start_col++)
        {
            for(int end_col = start_col; end_col < m; end_col++)
            {
                unordered_map<int, int> mp;
                int curr_sum = 0;
                for(int i = 0; i < n; i++)
                {
                    curr_sum += matrix[i][end_col];
                    if(start_col > 0)
                        curr_sum -= matrix[i][start_col - 1];                    
                    if(curr_sum == target)
                        count++;
                    
                    int need = curr_sum - target;
                    
                    if(mp.count(need))
                        count += mp[need];
                                        
                    mp[curr_sum]++;
                }
            }
        }
        
        return count;
    }
};