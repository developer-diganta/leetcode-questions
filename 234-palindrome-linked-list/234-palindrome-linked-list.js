/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let len = 0;
    let current = head;
    let rev;
    while(current){
        len++;
        rev=new ListNode(current.val, rev);
        current=current.next;
    };
    let mid = len/2;
    while(rev && head){
        if(mid > 0){
        if(rev.val !== head.val){
            return false;
        }
            mid--;
        }
    rev = rev.next;
    head=head.next;
    }
    return true;
};