/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */

var numComponents = function(head, nums) {
   
    var count =0,s=0;
    var node = head;
    while(node){
        if(nums.includes(node.val)){
            count++;
        }
        else{
            if(count>0){
                s++;
                count=0;
            }
            else{
                count=0;
            }
        }
        node=node.next;
    }
    if(count>0) s++;
    return s;
    
};