/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var arr = [];
    var i=0;
    if(s[0]===")" || s[0]==="}" || s[0]==="]") return false;
    while(i<s.length){
        if(s[i]==="(" || s[i]==="{" || s[i]==="["){
            arr.push(s[i]);
        }else{
            if(s[i]===")" && arr[arr.length-1]==="(")
                arr.pop();
            else if(s[i]==="}" && arr[arr.length-1]==="{")
                arr.pop();
            else if(s[i]==="]" && arr[arr.length-1]==="[")
                arr.pop();
            else{
                return false;
            }
        }
        i++;
    }
    console.log(arr)
    if(arr.length>0) return false;
    return true;
};