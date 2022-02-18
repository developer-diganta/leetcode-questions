/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if(head==NULL || head->next==NULL){
            return head;
        }
        ListNode* prev=NULL,*pres=head,*nxt=head->next;
        while(pres!=NULL){
            pres->next=prev;
            prev=pres;
            pres=nxt;
            if(nxt!=NULL){
                nxt=nxt->next;
            }
        }
        head=prev;
        return head;
    }
};