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
        var prev = -1;
        for(var x=i;x<candidates.length;x++){
            if(prev!==candidates[x])
            {
                curr.push(candidates[x]);
                abc(curr,x,t+candidates[x]);
                curr.pop();
                prev = candidates[x]
            }
        }

    }
    // var curr = [];

    abc([],0,0);
    return ans;
    
};