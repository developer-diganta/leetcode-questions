/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    var stack = [];
    var j=0;
    for(var i=0;i<pushed.length;i++){
        stack.push(pushed[i]);
        while(stack.length!==0 && j<pushed.length && stack[stack.length-1]===popped[j]){
            stack.pop();
            j++;
        }
    }
    return j===pushed.length;
};