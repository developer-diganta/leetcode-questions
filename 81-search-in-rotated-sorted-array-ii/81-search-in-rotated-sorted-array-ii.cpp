class Solution {
public:
    bool search(vector<int>& nums, int target) {
         int mid = 0;
    
    for(int i  = 1; i < nums.size(); i++)
    {
        if(nums[i] < nums[i-1])
        {
            mid = i;
            break;
        }
    }
    
    int l1 = 0, r1 = mid-1;
    int l2 = mid; int r2 = nums.size()-1;
    
    while(l1 <= r1)
    {
        int m1 = l1+(r1 - l1 )/2;
        
        if(target == nums[m1])
            return true;
        
        if(target > nums[m1])
        {
            l1 = m1+1;
        }
        else
            r1 = m1-1;
    }
    
    
    while(l2 <= r2)
    {
        int m2 = l2+(r2 - l2)/2;
        
        if(target == nums[m2])
            return true;
        
        if(target > nums[m2])
        {
            l2 = m2+1;
        }
        else
        {
            r2 = m2-1;
        }
    }
    
    return false; 
    }
};