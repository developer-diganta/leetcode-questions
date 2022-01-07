/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var max = (x) => {
    var s = x[0];
    x.map((X)=>X>s?s=X:s=s);
    return s;
}
var eat = (piles,h,mid) => {
    var t = 0;
    for(var i=0;i<piles.length;i++){
        t+=Math.ceil(piles[i]/mid);        
    }
    if(t<=h) return true;
    else return false;
}
var minEatingSpeed = function(piles, h) {
    var s=1, e = max(piles);
    var mid = 0;
    while(s!==e){
        mid = Math.floor((s+e)/2);
        if(eat(piles,h,mid)) e=mid;
        else s=mid+1;
    }
    return s;
};