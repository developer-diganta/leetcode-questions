/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    var left = new Array(ratings.length).fill(1);
    var right =  new Array(ratings.length).fill(1);
    for(var i=1;i<ratings.length;i++){
        if(ratings[i]>ratings[i-1]) left[i]=left[i-1]+1;
    }
    for(var i=ratings.length-2;i>=0;i--){
        if(ratings[i]>ratings[i+1]) right[i]=right[i+1]+1;
    }
    var ans=0;
    for(var i=0;i<left.length;i++) ans+=Math.max(left[i],right[i]);
    return ans;
};