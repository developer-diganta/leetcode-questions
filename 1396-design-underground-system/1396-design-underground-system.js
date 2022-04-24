
var UndergroundSystem = function() {
    this.checkIns = new Map();
    this.times = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkIns.set(id, [stationName, t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [checkInStationName, checkInTime] = this.checkIns.get(id);
    this.checkIns.delete(id);
    
    const diff = t - checkInTime;
    const key = `${checkInStationName}-${stationName}`;
    
    const [sum, count] = this.times.has(key) ? this.times.get(key) : [0, 0];
    this.times.set(key, [sum + diff, count + 1]);
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const key = `${startStation}-${endStation}`;
    const [sum, count] = this.times.get(key);
    return sum / count;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */