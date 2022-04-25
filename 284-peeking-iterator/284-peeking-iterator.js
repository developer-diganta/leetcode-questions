var PeekingIterator = function(iterator) {
    this.iterator = iterator
    this.que = []
};

PeekingIterator.prototype.peek = function() {
    if(this.que.length <= 0) this.que.push(this.iterator.next())    
    return this.que[this.que.length - 1]
};

PeekingIterator.prototype.next = function() {
    if(this.que.length >= 1) return this.que.shift()
    else return this.iterator.next()
};

PeekingIterator.prototype.hasNext = function() {
    if(this.que.length >= 1) return true
    return this.iterator.hasNext()
};