/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var ob = {}
    for(var i=0;i<s.length;i++){
        if(s[i] in ob){
            ob[s[i]]=ob[s[i]]+1;
        }
        else{
            ob[s[i]]=1;
        }
    }
    var arr = [];
    for (var a in ob) {
        arr.push([a, ob[a]]);
    }

    arr.sort(function(a, b) {
        return b[1] - a[1];
    });
    console.log(arr)
    var ans = "";
    for(var i=0;i<arr.length;i++){
        ans+=arr[i][0].repeat(arr[i][1]);
    }
    console.log(ans)
    return ans;
};