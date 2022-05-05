
var MyStack = function() {
    this.x = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.x.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.x.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.x[this.x.length-1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.x.length===0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */