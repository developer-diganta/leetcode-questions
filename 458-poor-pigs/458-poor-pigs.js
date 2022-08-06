/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  var pigs = 0;
    while(Math.pow(minutesToTest/minutesToDie +1,pigs)<buckets){
        pigs+=1;
    }
    return pigs;
};