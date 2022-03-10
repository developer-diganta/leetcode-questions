class Solution {
public:
    int minimumSwap(string s1, string s2) {
        int a=0,b=0;
        for (auto i=0; i < s1.size(); i++)
            if (s1[i] != s2[i])
                a += s1[i] == 'x',
                b += s2[i] == 'x';
        return ((a + b) % 2) ? -1 : (a / 2) + (b / 2) + ((a % 2) + (b % 2));
    }
};