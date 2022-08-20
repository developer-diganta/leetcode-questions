class Solution {
public:
  static bool compare(vector<int> &a , vector<int> &b)
    {
        if(a[0]==b[0])
        {
            return a[1]>b[1];
        }
        return a[0]<b[0];
    }
    int minRefuelStops(int target, int curr_fuel, vector<vector<int>>& nums) {
        int n=nums.size();
        int fuel_stops=0;
        
        priority_queue<int> pq;
        
        sort(nums.begin() , nums.end() , compare);
        
        int i=0;
        
        while(i<n && curr_fuel<target)
        {
            if(curr_fuel>=nums[i][0])
            {
                pq.push(nums[i][1]);
                i++;
            }
            else
            {
                if(pq.empty())
                {
                    return -1;
                }
                else
                {
                    int x=pq.top();
                    pq.pop();
                    curr_fuel+=x;
                    fuel_stops++;
                }
            }
        }
        while(curr_fuel<target && !pq.empty())
        {
            curr_fuel+=pq.top();
            pq.pop();
            fuel_stops++;
        }
        if(curr_fuel>=target)
        {
            return fuel_stops;
        }
        
        return -1;
    }
};