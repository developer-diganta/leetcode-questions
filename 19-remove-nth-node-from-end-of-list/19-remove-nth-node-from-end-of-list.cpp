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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        if(!head->next && n==1) return NULL;
        int i = 0;
        ListNode* h = head;
        while(h!=NULL){
            i++;
            h=h->next;
        }
        h=head;
       
        int l=i;
         if(l-n==0) return head->next;
        for(i=1;i<l-n;i++){
            cout<<h->val<<" ";
            h=h->next;
        }
                cout<<h->val;
        if(h->next)
        h->next=h->next->next;
        else
            h->next=NULL;

        return head;
        
    }
};