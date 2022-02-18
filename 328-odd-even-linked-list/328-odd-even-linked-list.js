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
var oddEvenList = function(head) {
        if(head===null || head.next===null)
        return head;
    let o=head;
    let eh=head.next;
    let e=eh;

    while(e!==null && e.next!==null){
        o.next=o.next.next;
        e.next=e.next.next;
        o=o.next;
        e=e.next;
    }
    o.next=eh;
    return head;
    
};