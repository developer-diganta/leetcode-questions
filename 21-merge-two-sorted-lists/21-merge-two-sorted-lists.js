/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    if (!l1 || !l2) return l1 ? l1 : l2
    
    let mergedList = new ListNode(0, null)
    let curr = mergedList
    
    while(l1 && l2){
        if (l1.val < l2.val){
            curr.next = l1
            l1 = l1.next
        }
        else{
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }
    curr.next = l1 || l2
    return mergedList.next
};