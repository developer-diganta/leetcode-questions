class Solution {
public:
int coinChange(vector<int>& coins, int amount) {
    vector<int> need(amount+1, amount+1);
    need[0] = 0;
    for (int a=1; a<=amount; a++)
        for (int c : coins)
            if (c <= a)
                need[a] = min(need[a], need[a-c] + 1);
    return need.back() > amount ? -1 : need.back();
}
};