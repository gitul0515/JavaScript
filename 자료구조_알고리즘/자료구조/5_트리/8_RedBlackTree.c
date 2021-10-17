// 레드블랙트리 알고리즘 (작성자: 2014044120 권기홍)
#include <stdio.h>
#include <stdlib.h>
#define BLACK 0; // 수정: BLACK을 0으로 정의
#define RED 1; // 수정: RED를 1로 정의

typedef int element;
typedef struct TreeNode {
	element key;
	struct TreeNode *left, *right;
  struct TreeNode *parent; // 수정: 부모 노드를 가리키는 포인터
  int color; // 수정: 노드는 색깔을 보유한다
} TreeNode;

// 수정: 레드블랙트리 구조체 선언
typedef struct RBTree {
  struct TreeNode * root; // 루트를 가리킨다.
  struct TreeNode * nil; // nil 노드를 가리킨다.
}RBTree;

// 노드 생성 함수
TreeNode * new_node(int item)
{
	TreeNode * temp = (TreeNode *)malloc(sizeof(TreeNode));
	temp->key = item;
	temp->left = temp->right = NULL;
  temp->parent = NULL; // 수정: 부모 노드를 가리키는 포인터 초기화
  temp->color = RED; // 수정: 새로운 노드의 색깔은 RED다.
	return temp;
};

// 수정: 레드블랙트리 생성 함수
RBTree* create_RBTree () 
{
  RBTree* rb = (RBTree*)malloc(sizeof(RBTree));
  TreeNode* nil_node = (TreeNode*)malloc(sizeof(TreeNode));

  // nil_node를 초기화한다.
  nil_node->left = NULL;
  nil_node->right = NULL;
  nil_node->parent = NULL;
  nil_node->key = 0;
  nil_node->color = BLACK; // nil_node의 색깔은 BLACK이다.

  rb->nil = nil_node; // nil이 생성한 nil_node를 가리키게 한다.
  rb->root = rb->nil; // 루트에는 nil을 저장하여 초기화

  return rb;
}

// 수정: x 노드를 중심으로 왼쪽으로 회전하는 함수
void left_rotate(RBTree *rb, TreeNode * x) {
  TreeNode * y = x->right; // x의 오른쪽 노드를 y로 선언한다.

  x->right = y->left; // x의 오른쪽 노드에 y의 왼쪽 자식을 할당한다.

  if (y->left != rb->nil) // y의 왼쪽 자식이 nil 노드가 아니라면
    y->left->parent = x; // y의 왼쪽 자식의 부모를 x로 할당한다.

  y->parent = x->parent; // y의 부모에 x의 부모를 할당한다. 
  if (x->parent == rb->nil) // x가 트리의 루트 노드였다면
    rb->root = y; // y가 새로운 루트다.
  else if (x == x->parent->left) // x가 부모의 왼쪽 자식 노드였다면
    x->parent->left = y;
  else // x가 부모의 오른쪽 자식 노드였다면
    x->parent->right = y;

  y->left = x; // y의 왼쪽 자식으로 x를 할당한다.
  x->parent = y; // x의 부모로 y를 할당한다.
}

// 수정: x 노드를 중심으로 오른쪽으로 회전하는 함수
void right_rotate(RBTree *rb, TreeNode * x) {
  TreeNode * y = x->left; // x의 왼쪽 노드를 y로 선언한다.

  x->left = y->right; // x의 왼쪽 노드에 y의 오른쪽 자식을 할당한다.

  if (y->right != rb->nil) // y의 오른쪽 자식이 nil 노드가 아니라면
    y->right->parent = x; // y의 오른쪽 자식의 부모를 x로 할당한다.

  y->parent = x->parent; // y의 부모에 x의 부모를 할당한다. 
  if (x->parent == rb->nil) // x가 트리의 루트 노드였다면
    rb->root = y; // y가 새로운 루트다.
  else if (x == x->parent->left) // x가 부모의 왼쪽 자식 노드였다면
    x->parent->left = y;
  else // x가 부모의 오른쪽 자식 노드였다면
    x->parent->right = y;

  y->right = x; // y의 오른쪽 자식으로 x를 할당한다.
  x->parent = y; // x의 부모로 y를 할당한다.
}


// 삽입 함수
TreeNode * insert_node(TreeNode * node, int key)
{
	// 트리가 공백이면 새로운 노드를 반환한다. 
	if (node == NULL) return new_node(key);

	// 그렇지 않으면 순환적으로 트리를 내려간다. 
	if (key < node->key)
		node->left = insert_node(node->left, key);
	else if (key > node->key)
		node->right = insert_node(node->right, key);

	// 변경된 루트 포인터를 반환한다. 
	return node;
}

// 최소값을 가진 노드를 반환하는 함수
TreeNode * min_value_node(TreeNode * node)
{
	TreeNode * current = node;

	// 맨 왼쪽 단말 노드를 찾으러 내려감
	while (current->left != NULL)
		current = current->left;

	return current;
}

// 순환적인 탐색 함수
TreeNode * search(TreeNode * node, int key)
{
	if (node == NULL) return NULL;
	if (key == node->key) return node;
	else if (key < node->key)
		return search(node->left, key);
	else
		return search(node->right, key);
}


// 이진 탐색 트리와 키가 주어지면 키가 저장된 노드를 삭제하고 
// 새로운 루트 노드를 반환한다. 
TreeNode * delete_node(TreeNode * root, int key)
{
	if (root == NULL) return root;

	// 만약 키가 루트보다 작으면 왼쪽 서브 트리에 있는 것임
	if (key < root->key)
		root->left = delete_node(root->left, key);
	// 만약 키가 루트보다 크면 오른쪽 서브 트리에 있는 것임
	else if (key > root->key)
		root->right = delete_node(root->right, key);
	// 키가 루트와 같으면 이 노드를 삭제하면 됨
	else {
		// 첫 번째나 두 번째 경우
		if (root->left == NULL) {
			TreeNode * temp = root->right;
			free(root);
			return temp;
		}
		else if (root->right == NULL) {
			TreeNode * temp = root->left;
			free(root);
			return temp;
		}
		// 세 번째 경우
		TreeNode * temp = min_value_node(root->right);

		// 중외 순회시 후계 노드를 복사한다. 
		root->key = temp->key;
		// 중외 순회시 후계 노드를 삭제한다. 
		root->right = delete_node(root->right, temp->key);
	}
	return root;
}

// 수정: 중위 순회 코드 추가 (결과 확인용)
void inorder(RBTree* rb, TreeNode* curRoot) {
	if (curRoot != rb->nil) // curRoot가 nil이 아닐 경우
	{ // 왼쪽 서브트리 - 루트 - 오른쪽 서브트리로 순회한다.
		inorder(rb, curRoot->left);
		printf("[%d] ", curRoot->key);
		inorder(rb, curRoot->right);
	}
}

int main(void)
{
	// 삭제: TreeNode * root = NULL;
	// 삭제: TreeNode * tmp = NULL;
  RBTree* rb = create_RBTree(); // 수정: 레드블랙트리 생성 및 초기화

	root = insert_node(root, 30);
	root = insert_node(root, 20);
	root = insert_node(root, 10);
	root = insert_node(root, 40);
	root = insert_node(root, 50);
	root = insert_node(root, 60);

	printf("레드블랙트리에서 각 리프노드 도달시 블랙높이 계산 \n");





	return 0;
}
