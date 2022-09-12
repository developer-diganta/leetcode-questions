class Solution {
public:
    int maxSatisfied(vector<int>& customers, vector<int>& grumpy, int minutes) {
        int nonGrumpySum = 0, grumpySum = 0;
        int totalCustomers = customers.size();
        int l = 0, r = 0;
        while(r<totalCustomers and r<minutes){
            if(grumpy[r] == 0){
                nonGrumpySum += customers[r];
            } else {
                grumpySum += customers[r];
            }
            r++;
        }
        int tempGrumpy = grumpySum;
        while(r<totalCustomers){
            if(grumpy[r] == 0){
                nonGrumpySum += customers[r];
            }
            if(grumpy[r] == 1){
                tempGrumpy += customers[r];
            }
            if(grumpy[l] == 1){
                tempGrumpy -= customers[l];
            }
            grumpySum = max(grumpySum, tempGrumpy);
            r++;
            l++;
        }
        return nonGrumpySum + grumpySum;
    }
};