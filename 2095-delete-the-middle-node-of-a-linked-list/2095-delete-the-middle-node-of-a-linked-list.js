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
    let f=head;
    while(f!==null && f.next!==null){
        s=s.next;
        f=f.next.next;
    }
    console.log(s.val)
    let t=head;
    while(t.next!==s){
        t=t.next;
    }
    t.next=s.next;
    return head;
};