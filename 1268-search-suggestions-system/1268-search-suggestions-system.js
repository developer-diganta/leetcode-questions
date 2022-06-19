/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();
    let prefixStr="";
    let arr=[];
    for(let i=0;i<searchWord.length;i++){
        prefixStr+=searchWord[i];
        arr.push(products.filter((p)=>p.startsWith(prefixStr)).slice(0,3));    
    }
    return arr;
};