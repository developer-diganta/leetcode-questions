class Solution {
public:
  
    void sort_fun(vector<vector<int>>& mat,int m,int n,int r,int c){
        vector<int> v;
        int rw=r;
        int cl=c;
        while(rw<m && cl<n){
            v.push_back(mat[rw][cl]);
            rw++;
            cl++;
        }
        
        sort(v.begin(),v.end());
        int id=0;
        while(r<m && c<n){
            mat[r][c]=v[id];
            id++;
            r++;
            c++;
        }
    }
    
    vector<vector<int>> diagonalSort(vector<vector<int>>& mat) {
        int m=mat.size();
        int n=mat[0].size();
        for(int i=0;i<m;i++){
            sort_fun(mat,m,n,i,0);
        }
        for(int i=1;i<n;i++){
            sort_fun(mat,m,n,0,i);
        }
        return mat;
    }
};