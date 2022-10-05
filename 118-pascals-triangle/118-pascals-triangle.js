/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
         var arr=[];
        var st=0;
        var end=0;
        // vector<int>one;
    var one=[];
        one.push(1);
        arr.push(one);
        for(var i=1;i<numRows;i++){
            var two=[] ;
            two.push(st+arr[i-1][0]);
            for(var j=0;j<arr[i-1].length-1;j++){
                two.push(arr[i-1][j]+arr[i-1][j+1]);
            }
            two.push(arr[i-1][arr[i-1].length-1]+end);
            arr.push(two);
        }
        return arr;
};