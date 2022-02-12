
class Solution {
public:
    bool isSafe(vector<vector<string>> board,int r,int c,int n){
        for(int i=0;i<r;i++){
            if(board[i][c]=="Q")
                return false;
        }
        int maxLeft = min(c,r);
        for(int i=1;i<=maxLeft;i++){
            if(r-i >=0 && c-i>=0 && board[r-i][c-i]=="Q"){
                return false;
            }
        }
        int maxRight = min(r,n-c-1);
        for(int i=1;i<=maxRight;i++){
            if(c+i<n && r-i >=0 && board[r-i][c+i]=="Q"){
                return false;
            }
        }
        return true;
    }
    void queen(vector<vector<string>> board, int r, vector<vector<string>> &ans,int n){
        if(r==n){
            vector<string> a;
            for(int i=0;i<n;i++){
                string s = "";
                for(int j=0;j<n;j++){
                    s+=board[i][j];
                }
                a.push_back(s);
            }
            ans.push_back(a);
            return;
        }
        for(int c=0;c<n;c++){
            if(isSafe(board,r,c,n)){
                board[r][c] = "Q";
                queen(board,r+1,ans,n);
                board[r][c] = ".";
            }
        }
        // return;
    }
    
    vector<vector<string>> solveNQueens(int n) {
    vector<vector<string>> board;
        vector<vector<string>> ans;
        for(int i=0;i<n;i++){
            vector<string>s;
            for(int j=0;j<n;j++){
                s.push_back(".");
            }
            board.push_back(s);
        }
        queen(board,0,ans,n);
        return ans;
    }

};