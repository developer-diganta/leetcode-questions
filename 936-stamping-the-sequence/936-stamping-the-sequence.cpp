class Solution {
public:
int check(string stamp,string& target)
{
    for(int i=0;i<=target.size()-stamp.size();i++)
    {
        int j=0;
        int s=i;
        int temp=0;
        while(j<stamp.size() && s<target.size() && (target[s]=='*' || target[s]==stamp[j]))
        {
            if(target[s]!='*')
                temp=1;
            j++;
            s++;
        }
        if(j==stamp.size() && temp)
        {
            for(int k=0;k<stamp.size();k++)
                target[k+i]='*';
            return i;
        }
    }
    return -1;
}
vector<int> movesToStamp(string stamp, string target) {
    vector<int>ans;
    string temp(target.size(),'*');
    while(target!=temp)
    {
        int value=check(stamp,target);
        if(value==-1)
            return {};
        ans.push_back(value);
    }
    reverse(ans.begin(),ans.end());
    return ans;
}
};