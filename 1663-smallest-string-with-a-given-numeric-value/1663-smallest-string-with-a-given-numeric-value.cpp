class Solution {
public:
    string getSmallestString(int n, int k) {
        string s(n, 'a');
        k -= n;
        for (int i = n - 1; k > 0; --i) {
            int d = min(k, 25);
            s[i] += d;
            k -= d;
        }
        return s;
    }
};