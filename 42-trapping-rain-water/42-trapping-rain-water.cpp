class Solution {
public:
    int trap(vector<int>& height) {
        if(height.size()==0)
            return 0;
        int left[100000]={0};
 
        int min1=INT_MAX;
        int max1=INT_MAX;
        int n=height.size();
        int right[100000]={0};
        left[0]=height[0];
        right[n-1]=height[n-1];
        for(int i=1;i<n;i++){
            left[i]=max(left[i-1],height[i]);
            right[n-i-1]=max(right[n-i],height[n-i-1]);
        }
        int s=0;
        for(int i=0;i<n;i++)
            s=s+min(left[i],right[i])-height[i];
            return s;

    }
};