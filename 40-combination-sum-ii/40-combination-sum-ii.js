/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var ans = [];
    candidates.sort();
    var abc = (curr,i,t) => {
        if(t===target){
            // console.log(curr)
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
                abc(curr,x+1,t+candidates[x]);
                curr.pop();
                prev = candidates[x]
            }
        }
    }
    // var curr = [];
    // var obj = {};
    // var fans = [];
    abc([],0,0);
    return ans;
    
};