/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    var s=0,e=letters.length-1;
    var m=0
    while(s<=e){
        m=s+Math.floor((e-s)/2)
        if(letters[m]<=target){
            s=m+1;
        }
        else{
            e=m-1
        }
    }
    return letters[s%letters.length];
};