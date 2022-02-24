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
var sortList = function(head) {
    if(!head || !head.next) return head;
    
    // splitting the list into two parts
    let left = head;
    let right = getMid(head)
    let temp = right.next;
    right.next = null
    right = temp
    return merge(sortList(left), sortList(right))
};

var getMid = (head) => {
    let slowPtr = head;
    let fastPtr = head.next;
    while(fastPtr && fastPtr.next){
        slowPtr = slowPtr.next
        fastPtr = fastPtr.next.next
    }
    return slowPtr
}

var merge = (list1, list2) => {
    let dummy = new ListNode()
    let node = dummy;
    while(list1 && list2){
        if(list1.val < list2.val){
            node.next = list1
            list1 = list1.next
        } else {
            node.next = list2
            list2 = list2.next
        }
        node = node.next
    }
    node.next = list1 || list2
    return dummy.next;
}