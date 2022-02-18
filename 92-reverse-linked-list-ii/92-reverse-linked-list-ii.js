/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */


var reverseBetween = function(head, left, right) {
    if(left===right){
        return head;
    }
    let prev = null;
    let present = head;
    for(let i=0;present!==null && i<left-1;i++){
        prev=present;
        present=present.next;
    }    
    let last = prev;
    let newEnd = present;
    let nxt=newEnd.next;
    for(let i=0;present!==null && i<right-left+1;i++)
    {
        present.next=prev;
        prev=present;
        present=nxt;
        if(nxt!==null){
                nxt=nxt.next;
        }
    }
    if(last!==null){
        last.next=prev;
    }else{
       head=prev;
    }
    newEnd.next=present;
    return head;
};