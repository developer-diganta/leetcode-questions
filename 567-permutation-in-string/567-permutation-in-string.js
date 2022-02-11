/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    var i=0,j=s1.length;
    var arr = [];
    while(j<=s2.length){
        arr.push(s2.substring(i,j).split("").sort().join(""));
        i++;
        j++;
    }
    s1 = s1.split("").sort().join("");
    console.log(s1)
    var c = 0;
    console.log(arr)
    for(var i=0;i<arr.length;i++){
        if (s1===arr[i]){
           return true;
        }
    }
    return false;
};