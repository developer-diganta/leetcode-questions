/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let units = 0, i=0;
    boxTypes.sort((a,b)=>b[1]-a[1]);
    while(truckSize!==0 && i<boxTypes.length){
        let box = boxTypes[i][0] < truckSize ? boxTypes[i][0] : truckSize;
        truckSize = truckSize-box;
        units+=box*boxTypes[i][1];
        i++;
    }
    return units;
};