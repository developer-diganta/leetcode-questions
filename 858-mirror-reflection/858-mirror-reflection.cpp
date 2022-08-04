class Solution {
public:
    int mirrorReflection(int p, int q) {
        int n = q, m = p;
        while (n % 2 == 0 && m % 2 == 0) {
            n /= 2;
            m /= 2;
        }
        if (m % 2 == 0) {
            return 2;
        }
        if (n % 2 == 1) {
            return 1;
        } else {
            return 0;
        }
    }
};