
class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> results;

        vector<string> positions(n, string(n, '.'));
        
        int row = 0;
        
        NQueens(results, positions, n, row);
        
        return results;
    }
    
    void NQueens(vector<vector<string>> &results, vector<string> &positions, int &n, int row) {
        if(row == n) {
            results.push_back(positions);
            return;
        }
        
        for(int col = 0; col < n; ++col) {
            if(IsQueenSafe(positions, row, col, n) == true) {
                positions[row][col] = 'Q';
                NQueens(results, positions, n, row + 1);
                positions[row][col] = '.';
            }
        }
        
    }
    
    bool IsQueenSafe(vector<string> &positions, int row, int col, int &n) {
        for(int i = row - 1, j = col; i >= 0; --i) {
            if(positions[i][j] == 'Q')
                return false;
        }
        
        for(int i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
            if(positions[i][j] == 'Q')
                return false;
        }
        
        for(int i = row - 1, j = col + 1; i >= 0 && j <= (n - 1); --i, ++j) {
            if(positions[i][j] == 'Q')
                return false;
        }
        return true;
    }

};