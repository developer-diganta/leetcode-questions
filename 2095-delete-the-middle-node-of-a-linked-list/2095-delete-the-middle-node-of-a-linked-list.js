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
var deleteMiddle = function(head) {
    if(head.next===null){
        head=null;
        return head;
    }
    let s=head;
    let f=head.next.next;
    while(f!==null && f.next!==null){
        s=s.next;
        f=f.next.next;
    }
    s.next=s.next.next;
    return head;
};