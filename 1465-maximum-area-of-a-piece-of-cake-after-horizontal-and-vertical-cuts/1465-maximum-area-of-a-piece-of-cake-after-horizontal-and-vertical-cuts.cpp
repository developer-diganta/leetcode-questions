class Solution {
public:
    int maxArea(int h, int w, vector<int>& hC, vector<int>& vC) {
        int maxh = 0, maxv = 0;
                
        hC.push_back(0);
        hC.push_back(h);
        sort(hC.begin(), hC.end());
        for(int i=1; i<hC.size(); i++){
            maxh = max(maxh, hC[i] - hC[i-1]);
        }
        
        vC.push_back(0);
        vC.push_back(w);
        sort(vC.begin(), vC.end());
        for(int i=1; i<vC.size(); i++){
            maxv = max(maxv, vC[i] - vC[i-1]);
        }
        return (1LL*maxh*maxv) % 1000000007;
    }
};