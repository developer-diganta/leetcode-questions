/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
const furthestBuilding = function(heights, bricks, ladders) {
  let queue = []
  let length = heights.length

  for (let i = 1; i < length; i++) {
    let diff = heights[i] - heights[i - 1]
    if (diff <= 0) {
      continue
    }

    add(queue, diff)
    if (queue.length <= ladders) {
      continue
    }

    bricks -= queue[0]
    if (bricks < 0) {
      return i - 1
    }
    queue.shift()
  }

  return length - 1
};

/**
 * @param {Array} queue
 * @param {Number} num
 */
function add(queue, num) {
  for(let i = 0; i < queue.length; i++) {
    if(queue[i] > num) {
      queue.splice(i, 0, num);
      return;
    }
  }
  queue.push(num);
}