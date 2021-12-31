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
    ListNode* swapNodes(ListNode* head, int k) {
        ListNode *A = head, *B = head, *nodeK;
        for (int i = 1; i < k; i++) A = A->next;
        nodeK = A, A = A->next;
        while (A) A = A->next, B = B->next;
        int temp = nodeK->val;
        nodeK->val = B->val, B->val = temp;
        return head;
    }
};