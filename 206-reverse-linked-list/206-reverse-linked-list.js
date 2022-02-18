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
var reverseList = function(head) {
    if(head===null || head.next===null){
        return head;
    }
    
    let prev=null;
    let present=head;
    let nxt=head.next;
    while(present!==null){
        present.next=prev;
        prev=present;
        present=nxt;
        if(nxt!==null){
            nxt=nxt.next;
        }
    }
    head=prev;
    return head;
};