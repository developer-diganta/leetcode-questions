//https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/submissions/
var countPoints = function(points, queries) {
    var count=0
    var arr=[]
    for(let j=0;j<queries.length;j++){
        for(let i=0;i<points.length;i++){
            var x1=queries[j][0];
            var y1=queries[j][1];
            var r=queries[j][2];
            var x2=points[i][0];
            var y2=points[i][1];
            var dist=Math.sqrt(Math.pow(x2-x1, 2)+ Math.pow(y2-y1, 2))
            if(dist<=r){
                count++
            }
        }
        arr.push(count)
        count=0
    }
    return arr
};