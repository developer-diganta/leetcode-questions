/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let index = head
  let prev = null
  
  while (index && index.next) {
    const tmp = index.next
    index.next = tmp.next
    tmp.next = index
  
    if (prev) {
      prev.next = tmp
    }
    else {
      head = tmp
    }

    prev = index
    index = index.next
  }
  return head
};