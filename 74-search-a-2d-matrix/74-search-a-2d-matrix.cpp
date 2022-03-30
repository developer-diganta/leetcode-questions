class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int r = matrix.size();
        int c = matrix[0].size();
        
        int i = 0;
        while (i < r && matrix[i][c - 1] < target) {
            i++;
        }
        
        if (i >= r) {
            return false;
        }
        
        for (int j = 0; j < c; j++) {
            if (matrix[i][j] == target) {
                return true;
            }
        }
        
        return false;
    }
};