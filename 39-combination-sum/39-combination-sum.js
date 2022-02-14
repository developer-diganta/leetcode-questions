/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


var combinationSum = function(candidates, target) {

var ans = [];
    var abc = (curr,i,t) => {
        if(t===target){
            console.log(curr)
            ans.push([...curr]);
            return;
        }
        if(i>=candidates.length || t>target){
            return ;
        }
        curr.push(candidates[i]);
        abc(curr,i,t+candidates[i]);
        curr.pop();
        abc(curr,i+1,t);
    }
    // var curr = [];

    abc([],0,0);
    return ans;
    
};