class Solution {
public:
    int numOfSubarrays(vector<int>& A) {
            int n = A.size();
        int odd = 0;
        int even = 1;
        long long sum = 0;
        int count = 0;
        int mod = 1e9 + 7;
        for(int i = 0; i < n; i++)
        {
            sum += A[i];
            if(sum % 2 == 0)
            {
                count = (1ll*count + 1ll*odd) % mod;
                even++;
            }
            else
            {
                count = (1ll*count + 1ll*even) % mod;
                odd++;
            }
        }
        return count;
        
    }
};