/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function get_grt(s1, s2,l){
        for(var i=l; i<s1.length; i++){
            if(s2[i] > s1[i]) return false;
        }
        return true;
    }

    
var checkIfCanBreak = function(s1, s2) {
    s3=s1.split("").sort().reverse();
    s4=s2.split("").sort().reverse();
    var cmp;
    var i=0;
    var flag;
    for(;i<s3.length;i++)
    {
        if(s3[i]!==s4[i]){
        if(s3[i]>s4[i]){
           flag = get_grt(s3,s4,i);
        }
        else{
            flag = get_grt(s4,s3,i);
        }
            break;
        }
    }
    return flag;
};