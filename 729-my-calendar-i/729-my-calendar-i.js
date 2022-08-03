var MyCalendar = function() {
    this.intervals = [];
};

MyCalendar.prototype.book = function(start, end) {
    if (start >= end) return false;
    
    for (let i=0; i<this.intervals.length;i++) {
        if (start >= this.intervals[i][0] && start < this.intervals[i][1]) return false;
        if (start < this.intervals[i][0] && end > this.intervals[i][0]) return false;
    }
    this.intervals.push([start, end]);
    this.intervals.sort((a,b) => a[0]-b[0]); 
    return true;
};
/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */