
var MyHashMap = function() {
    this.myMap=[];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    var flag=false;
    for(var i=0;i<this.myMap.length;i++){
        if(this.myMap[i][0]===key) {this.myMap[i][1]=value;flag=true;}
    }
    if(!flag) this.myMap.push([key,value]);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    for(var i=0;i<this.myMap.length;i++){
        if(this.myMap[i][0]===key) return this.myMap[i][1];
    }
    return -1;

};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    this.myMap=this.myMap.filter((x)=>x[0]!==key);
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */