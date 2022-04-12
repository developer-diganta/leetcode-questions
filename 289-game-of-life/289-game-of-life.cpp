class Solution {
public:
    void gameOfLife(vector<vector<int>>& board) {
         int m = board.size();
        int n = board[0].size();
        vector<vector<int>>matrix = board;
        for(int i=0;i<m;i++)
        {
            for(int j=0;j<n;j++)
            {
                int count1 = 0;
                if(i-1>=0 && matrix[i-1][j]==1)
                    count1++;
                if(j+1<n && matrix[i][j+1]==1)
                    count1++;
                if(i+1<m && matrix[i+1][j]==1)
                    count1++;
                if(j-1>=0 && matrix[i][j-1]==1)
                    count1++;
                if(i-1>=0 && j+1<n && matrix[i-1][j+1]==1)
                    count1++;
                if(i+1<m && j+1<n && matrix[i+1][j+1]==1)
                    count1++;
                if(i+1<m && j-1>=0 && matrix[i+1][j-1]==1)
                    count1++;
                if(i-1>=0 && j-1>=0 && matrix[i-1][j-1]==1)
                    count1++;
                if(board[i][j]==1)
                {
                    if(count1<2 || count1>3)    board[i][j] = 0;
                }
                else
                {
                    if(count1==3)
                    {
                        board[i][j]=1;
                    }
                    else
                    {
                        board[i][j]=0;
                    }
                }
            }
        }
    }
};