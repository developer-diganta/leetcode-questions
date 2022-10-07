class MyCalendarThree {
public:
    map<int, int> mp;
      int max_count = 0;
      MyCalendarThree()
      {
      }

      int book(int start, int end)
      {
        mp[start]++;
        mp[end]--;
        int count = 0;
        for (auto it : mp)
        {
          count += it.second;
          max_count = max(max_count, count);
        }
        return max_count;
      }
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * MyCalendarThree* obj = new MyCalendarThree();
 * int param_1 = obj->book(start,end);
 */