/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {}
    
    strs.forEach((ele) =>{
        const sorted = ele.split("").sort().join("");
       if(map[sorted]){
           map[sorted].push(ele)
       } else {
           map[sorted] = [ele];
       }
    })
    
    return Object.values(map);
    
};