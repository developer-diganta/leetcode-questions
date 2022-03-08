/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var s=head;
    var f = head;
    while(f!==null && f.next!==null && f.next.next!==null){
        s=s.next;
        f=f.next.next;
        if(f===s) return true;
    }
    return false;
    
};