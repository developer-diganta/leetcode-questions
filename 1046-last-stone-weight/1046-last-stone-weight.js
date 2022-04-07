/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    var newStones = stones.sort((a,b)=> a-b);
    while(newStones.length>1){
        console.log(newStones);
        var a = newStones[newStones.length-1];
        var b = newStones[newStones.length-2];
        if(a===b){
            newStones.pop();
            newStones.pop();
        }
        else{
            newStones[newStones.length-2]=newStones[newStones.length-1]-newStones[newStones.length-2];
            newStones.pop();
        }
        newStones=newStones.sort((a,b)=> a-b);
    }
    if(newStones.length===0) return 0;
    else return newStones[0];
};