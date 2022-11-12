class MedianFinder {
public:
    priority_queue<int> first;  
    priority_queue<int, vector<int>, greater<int>> second; 
    MedianFinder() {
        
    }
    void addNum(int num) {
        if(first.empty() || first.top() > num)
            first.push(num);
        else
            second.push(num);
        if(first.size() > (second.size() + 1))
        {
            second.push(first.top());
            first.pop();
        }
        else if((first.size() + 1) < second.size())
        {
            first.push(second.top());
            second.pop();
        }        
    }
    double findMedian() {
        if(first.size() == second.size())
        {
            if(first.empty())
                return 0;
            else
                return ((first.top()*1.0 + second.top())/2.0);
        }
        else if(first.size() == second.size() + 1)
            return (double)first.top();
        else
            return (double)second.top();
    }
};