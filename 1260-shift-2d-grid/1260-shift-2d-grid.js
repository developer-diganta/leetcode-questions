/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {

    const flatArr=grid.flat();
    while(k--){
        flatArr.unshift(flatArr.pop());
    }
   
    let mat=[],colLength=grid[0].length, tempArr=[];;
    for(let i=0;i<flatArr.length;i++){
        tempArr.push(flatArr[i])
        if(tempArr.length===colLength){
            mat.push(tempArr);
            tempArr=[]
        }
    }
    return mat;
};