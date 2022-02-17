/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let f = head;
    let s = head;
    let h = false;
    while(f!==null && f.next!==null){
        f=f.next.next;
        s=s.next;
        let l = 0;
        if(f===s){
            let t = s;
            do{
                l++;
                t=t.next;
            }while(t!==s);
        
        s = head;
        while(l>0){
            s=s.next;
            l--;
        }
        f=head;
        while(f!==s){
            f=f.next;
            s=s.next;
        }
        return s;
        }
    }
    return null;
};