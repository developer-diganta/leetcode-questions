/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var ob = {}
    var arr =[];
    for(var i=0;i<s.length;i++){
        if(s[i] in ob){
            ob[s[i]]=ob[s[i]]+1;
        }
        else{
            ob[s[i]]=1;
        }
    }
    var sortable = [];
for (var vehicle in ob) {
    sortable.push([vehicle, ob[vehicle]]);
}

sortable.sort(function(a, b) {
    return b[1] - a[1];
});
    console.log(sortable)
    var ans = "";
    for(var i=0;i<sortable.length;i++){
        ans+=sortable[i][0].repeat(sortable[i][1]);
    }
    console.log(ans)
    return ans;
};