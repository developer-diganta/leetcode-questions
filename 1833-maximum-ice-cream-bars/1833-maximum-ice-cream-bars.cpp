class Solution {
public:
    int maxIceCream(vector<int>& costs, int coins) {
        sort(costs.begin(),costs.end());
        int s=0,i=0,c=0;;
        for(i=0;i<costs.size();i++){
            s=s+costs[i];
            c++;
            if(s>coins){
                s=s-costs[i];
                c--;
                break;
                
            }
        }
        return c;
    }
};