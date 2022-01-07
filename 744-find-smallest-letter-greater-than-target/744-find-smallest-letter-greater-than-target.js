/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    var s=0
    var e=letters.length-1
    while(s<=e){
        var m=Math.floor((s+e)/2)
        if(letters[m]>target){
            e=m-1;
        }
        else{
            s=m+1
        }
    }
    return letters[s%letters.length];
};