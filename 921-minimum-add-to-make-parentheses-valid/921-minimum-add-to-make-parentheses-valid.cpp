class Solution {
public:
    int minAddToMakeValid(string s) {
        stack<char>st;
        int n=s.length();
        int i=0,l=0,u=0;
        while(i<n){
            cout<<"!";
            if(s[i]==')' && st.size()!=0){
                st.pop();
            }
            
            else if(s[i]=='('){
                st.push('(');
            }
            
            else if(s[i]==')' && st.size()==0){
                u++;
            }
            i++;
        }
        while(st.size()!=0){
            l++;
            st.pop();
        }
        return l+u;
    }
};