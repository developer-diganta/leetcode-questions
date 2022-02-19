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
var removeZeroSumSublists = function(head) {
          if (!head) return null;
          let p = head;
          let s = 0;
          while (p) {
            s += p.val;
            if (s == 0) {
              return removeZeroSumSublists(p.next);
            } else {
              p = p.next;
            }
          }
          head.next = removeZeroSumSublists(head.next);
          return head;
};