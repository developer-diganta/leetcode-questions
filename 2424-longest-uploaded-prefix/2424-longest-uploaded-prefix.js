/**
 * @param {number} n
 */
var LUPrefix = function(n) {
    this.size  = n;
    this.arr = new Array(n+1).fill(0);
    this.temp=0;

};

/** 
 * @param {number} video
 * @return {void}
 */
LUPrefix.prototype.upload = function(video) {
    this.arr[video] = 1;

};

/**
 * @return {number}
 */
LUPrefix.prototype.longest = function() {
    var lg = this.temp;
    var i=this.temp;
    for(i=this.temp+1;i<=this.size;i++){
        if(i!==0 && this.arr[i]===0){
            break;    
        }
        else lg++;
    }
    this.temp=lg;
    return this.temp;
};

/** 
 * Your LUPrefix object will be instantiated and called as such:
 * var obj = new LUPrefix(n)
 * obj.upload(video)
 * var param_2 = obj.longest()
 */