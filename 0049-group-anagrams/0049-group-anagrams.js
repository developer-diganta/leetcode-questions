/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

let obj = new Map()
let ans = []
for(let i = 0; i < strs.length; i++){
    let temp = strs[i].split("").sort().join("")
    if(obj.has(temp)){
        obj.set(temp, obj.get(temp) + " " + strs[i])
    }
    else{
        obj.set(temp, strs[i])
    }
}
for(val of obj){
    ans.push(val[1].split(" "))
}
return ans
};