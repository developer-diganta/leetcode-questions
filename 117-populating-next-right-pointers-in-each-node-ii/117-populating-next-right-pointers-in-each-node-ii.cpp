/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;

    Node() : val(0), left(NULL), right(NULL), next(NULL) {}

    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}

    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};
*/

class Solution {
public:
Node* connect(Node* root) {
	if(!root) return NULL;
	queue<Node*> q;
	root->next=NULL;
	q.push(root);
	int ic=1;//insertion count
	while(!q.empty()){
		int x=0;
		int y=ic;
		Node* temp=NULL;
		for(int i=0;i<y;i++){
			Node* t=q.front();
			q.pop();
			if(t->right!=NULL){
				t->right->next=temp;
				temp=t->right;
				q.push(t->right);
				x++;
			}
			if(t->left!=NULL){
				t->left->next=temp;
				temp=t->left;
				q.push(t->left);
				x++;
			}
		}
		ic=x;
	}
	return root;
}
};