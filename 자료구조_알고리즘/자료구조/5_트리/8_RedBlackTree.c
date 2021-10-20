// 레드블랙트리 알고리즘 (작성자: 2014044120 권기홍)
#include <stdio.h>
#include <stdlib.h>
#include <memory.h>
#define BLACK 1 // 수정: BLACK을 1로 정의
#define RED 0 // 수정: RED를 0으로 정의

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


void RBT_insert_fixup(RBTree *T, TreeNode * z);
void RBT_delete_fixup(RBTree * T, TreeNode * z);
int height(RBTree* T, TreeNode* x);
TreeNode* tree_successor(RBTree* T, TreeNode * node);
TreeNode* min_value_node(RBTree* T, TreeNode * node);

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
  RBTree* T = (RBTree*)malloc(sizeof(RBTree));
  TreeNode* nil_node = (TreeNode*)malloc(sizeof(TreeNode));

  // nil_node를 초기화한다.
  nil_node->left = NULL;
  nil_node->right = NULL;
  nil_node->parent = NULL;
  nil_node->key = 0;
  nil_node->color = BLACK; // nil_node의 색깔은 BLACK이다.

  T->nil = nil_node; // nil이 생성한 nil_node를 가리키게 한다.
  T->root = T->nil; // 루트에는 nil을 저장하여 초기화

  return T;
}

// x 노드를 중심으로 왼쪽으로 회전하는 함수
void left_rotate(RBTree *T, TreeNode * x) {
  TreeNode * y = x->right; // x의 오른쪽 노드를 y로 선언한다.

  x->right = y->left; // x의 오른쪽 노드에 y의 왼쪽 자식을 할당한다.

  if (y->left != T->nil) // y의 왼쪽 자식이 nil 노드가 아니라면
    y->left->parent = x; // y의 왼쪽 자식의 부모를 x로 할당한다.

  y->parent = x->parent; // y의 부모에 x의 부모를 할당한다. 
  if (x->parent == T->nil) // x가 트리의 루트 노드였다면
    T->root = y; // y가 새로운 루트다.
  else if (x == x->parent->left) // x가 부모의 왼쪽 자식 노드였다면
    x->parent->left = y;
  else // x가 부모의 오른쪽 자식 노드였다면
    x->parent->right = y;

  y->left = x; // y의 왼쪽 자식으로 x를 할당한다.
  x->parent = y; // x의 부모로 y를 할당한다.
}

// x 노드를 중심으로 오른쪽으로 회전하는 함수
void right_rotate(RBTree *T, TreeNode * x) {
  TreeNode * y = x->left; // x의 왼쪽 노드를 y로 선언한다.

  x->left = y->right; // x의 왼쪽 노드에 y의 오른쪽 자식을 할당한다.

  if (y->right != T->nil) // y의 오른쪽 자식이 nil 노드가 아니라면
    y->right->parent = x; // y의 오른쪽 자식의 부모를 x로 할당한다.

  y->parent = x->parent; // y의 부모에 x의 부모를 할당한다. 
  if (x->parent == T->nil) // x가 트리의 루트 노드였다면
    T->root = y; // y가 새로운 루트다.
  else if (x == x->parent->left) // x가 부모의 왼쪽 자식 노드였다면
    x->parent->left = y;
  else // x가 부모의 오른쪽 자식 노드였다면
    x->parent->right = y;

  y->right = x; // y의 오른쪽 자식으로 x를 할당한다.
  x->parent = y; // x의 부모로 y를 할당한다.
}

// 레드블랙트리에 z 노드를 삽입하는 함수
void RBT_insert(RBTree *T, TreeNode * z)
{
  TreeNode * y = T->nil; // y 노드를 선언하여 nil을 할당한다.
  TreeNode * x = T->root; // x 노드를 선언하여 루트를 할당한다.

  while (x != T->nil) { // x가 nil이 아니면 반복문을 수행한다.
    y = x;              // y에 x를 할당한다. (y는 x를 한 레벨 차이로 쫓아내려온다)
    if (z->key < x->key) // z의 key가 x의 key보다 작으면
      x = x->left; // x에 x의 왼쪽 자식을 할당한다.
    else x = x->right; //z의 key가 x의 key보다 크면, x에 x의 오른쪽 자식을 할당한다.
  }

  z->parent = y; // z의 부모를 y로 변경한다.
  if (y == T->nil) // y가 nil이라면
    T->root = z; // z는 트리의 루트다.
  else if (z->key < y->key) // z의 key가 y의 key보다 작으면
    y->left = z; // y의 왼쪽 자식으로 z를 할당한다.
  else y->right = z; // z의 key가 y의 key보다 크면, y의 오른쪽 자식으로 z를 할당한다.

  z->left = T->nil; // z의 왼쪽 자식에 nil을 할당한다.
  z->right = T->nil; // z의 오른쪽 자식에 nil을 할당한다. 
  z->color = RED; // z의 색깔을 RED로 할당한다.

  RBT_insert_fixup(T, z); // RBT_insert_fixup 함수를 호출한다.
}

// 삽입 후 레드블랙트리의 규칙에 맞게 조정하는 함수
void RBT_insert_fixup(RBTree * T, TreeNode * z)
{
  while(z != T->root && z->parent->color == RED ){ // z의 부모 노드가 RED 색깔인 경우 반복문을 수행한다.
    if (z->parent == z->parent->parent->left) { // z의 부모가 왼쪽 자식 노드인 경우
      TreeNode * y = z->parent->parent->right; // z의 조부모의 오른쪽 자식 노드 y를 선언한다.
      if (y->color == RED) { // case 1: 삼촌 노드 y의 색깔이 RED인 경우
        z->parent->color = BLACK; // z의 부모 색깔을 BLACK으로 변경
        y->color = BLACK; // y의 색깔을 BLACK으로 변경
        z->parent->parent->color = RED; // z의 조부모의 색깔을 RED로 변경
        z = z->parent->parent; // z를 z의 조부모로 변경한다 (z의 조부모에서 같은 문제가 발생할 수 있으므로)
      } 
      else { // 삼촌 노드 y의 색깔이 BLACK인 경우 (nil 노드 포함)
        if (z == z->parent->right) { // case 2: z가 부모의 오른쪽 자식 노드인 경우
          z = z->parent; // z를 z의 부모로 변경한다.
          left_rotate(T, z); // left_rotate 함수를 호출
        } // case 3: z가 부모의 왼쪽 자식 노드인 경우
        z->parent->color = BLACK; // z의 부모의 색깔을 BLACK으로 변경
        z->parent->parent->color = RED; // z의 조부모의 색깔을 RED로 변경
        right_rotate(T, z->parent->parent); // z의 조부모를 기준으로 right_rotate 함수를 호출
      }
    } 
    else { // z의 부모가 오른쪽 자식 노드인 경우 (위 경우와 left-right가 대칭된다)
      TreeNode * y = z->parent->parent->left; // z의 조부모의 왼쪽 자식 노드 y를 선언한다.
      if (y->color == RED) { // case 4: 삼촌 노드 y의 색깔이 RED인 경우
        z->parent->color = BLACK; // z의 부모 색깔을 BLACK으로 변경
        y->color = BLACK; // y의 색깔을 BLACK으로 변경
        z->parent->parent->color = RED; // z의 조부모의 색깔을 RED로 변경
        z = z->parent->parent; // z를 z의 조부모로 변경한다 (z의 조부모에서 같은 문제가 발생할 수 있으므로)
      }
      else { // 삼촌 노드 y의 색깔이 BLACK인 경우 (nil 노드 포함)
        if (z == z->parent->left) { // case 5: z가 부모의 왼쪽 자식 노드인 경우
          z = z->parent; // z를 z의 부모로 변경한다.
          right_rotate(T, z); // right_rotate 함수 호출
        } // case 6: z가 부모의 오른쪽 자식 노드인 경우
        z->parent->color = BLACK; // z의 부모의 색깔을 BLACK으로 변경
        z->parent->parent->color = RED; // z의 조부모의 색깔을 RED로 변경
        left_rotate(T, z->parent->parent); // z의 조부모를 기준으로 left_rotate 함수 호출
      }
    }
  }
  T->root->color = BLACK;
}

// 레드블랙트리에서 z 노드를 삭제하는 함수
TreeNode * RBT_delete(RBTree * T, TreeNode * z) {
  TreeNode * y;
  TreeNode * x;
  if (z->left == T->nil || z->right == T->nil) // z가 단말 노드이거나 자식이 하나인 경우
    y = z;
  else // z의 자식이 두 개인 경우
    y = tree_successor(T, z);  // tree_successor 함수를 호출하여 z의 successor를 반환

  // y는 자식 노드가 없거나, 자식 노드가 하나다.
  if (y->left != T->nil) // y의 왼쪽 자식이 nil 노드가 아니면
    x = y->left; // x에 y의 왼쪽 자식을 할당한다.
  else // 그렇지 않으면
    x = y->right; // x에 y의 오른쪽 자식을 할당한다. (nil 노드 포함)

  x->parent = y->parent; // x의 부모 노드로 y의 부모 노드를 할당한다.
  if (y->parent == T->nil) // y가 루트노드였다면
    T->root = x; // 트리의 루트 노드는 x가 된다.
  else if (y == y->parent->left) // y가 부모의 왼쪽 자식이었다면
    y->parent->left = x; // y의 부모의 왼쪽 자식으로 x를 할당한다.
  else // y가 부모의 오른쪽 자식이었다면
    y->parent->right = x; // y의 부모의 오른쪽 자식으로 x를 할당한다.
  
  if (y != z) // y와 z가 같지 않다면
    z->key = y->key; // z의 key에 y의 key를 복사해준다.

  if (y->color == BLACK) // y의 색깔이 BLACK이라면
    RBT_delete_fixup(T, x); // RBT_delete_fixup 함수 호출
  return y;
}

// 삭제 후 레드블랙트리의 규칙에 맞게 조정하는 함수
void RBT_delete_fixup(RBTree * T, TreeNode * x) {
  while(x != T->root && x->color == BLACK) { // x가 루트가 아니고, x의 색깔이 블랙이라면 반복문을 수행한다.
    if (x == x->parent->left) { // x가 왼쪽 자식 노드인 경우 
      TreeNode * w = x->parent->right; // x의 오른쪽 형제 노드 w를 선언
      if (w->color == RED) { // case 1: w의 색깔이 RED인 경우
        w->color = BLACK; // w의 색깔을 BLACK으로 할당한다.
        x->parent->color = RED; // 
        left_rotate(T, x->parent);
        w = x->parent->right;
      }
      if (w->left->color == BLACK && w->right->color == BLACK) { // case 2: w는 BLACK, w의 자식들도 BLACK
        w->color = RED;
        x = x->parent;
      }
      else { 
        if (w->right->color == BLACK) { // case 3: w는 BLACK, w의 왼쪽 자식이 RED
          w->left->color = BLACK;
          w->color = RED;
          right_rotate(T, w);
          w = x->parent->right;
        }
        w->color = x->parent->color; // case 4: w는 BLACK, w의 오른쪽 자식이 RED
        x->parent->color = BLACK;
        w->right->color = BLACK;
        right_rotate(T, x->parent);
        x = T->root;
      }
    }
    else { // x가 오른쪽 자식 노드인 경우 (위 경우와 left-right가 대칭된다)
      TreeNode * w = x->parent->left; // x의 왼쪽 형제 노드 w를 선언
      if (w->color == RED) { // case 5: w의 색깔이 RED인 경우
        w->color = BLACK;
        x->parent->color = RED;
        right_rotate(T, x->parent);
        w = x->parent->left;
      }
      if (w->left->color == BLACK && w->right->color == BLACK) { // case 6: w는 BLACK, w의 자식들도 BLACK
        w->color = RED;
        x = x->parent;
      }
      else { 
        if (w->left->color == BLACK) { // case 7: w는 BLACK, w의 오른쪽 자식이 RED
          w->right->color = BLACK;
          w->color = RED;
          left_rotate(T, w);
          w = x->parent->left;
        }
        w->color = x->parent->color; // case 8: w는 BLACK, w의 왼쪽 자식이 RED
        x->parent->color = BLACK;
        w->left->color = BLACK;
        left_rotate(T, x->parent);
        x = T->root; // x에 트리의 루트를 할당하여 반복문을 종료한다 (트리의 루트가 변한 것은 아니다)
      }
    }
  }
  x->color = BLACK; // x를 통해 루트의 색깔을 BLACK으로 변경한다
}

// node의 successor를 반환하는 함수
TreeNode* tree_successor(RBTree* T, TreeNode * node) {
  TreeNode * x = node;

  // x의 오른쪽 자식이 존재하는 경우
  if (x->right != T->nil)
    return min_value_node(T, x->right); // 오른쪽 서브트리에서 최솟값을 찾아 반환한다.

  // x의 오른쪽 자식이 존재하지 않는 경우
  // 어떤 노드 y의 왼쪽 서브트리의 최대값이 x일 때, y가 x의 successor다.
  TreeNode * y = x->parent;

   // y가 nil 노드가 아니고, y의 오른쪽 자식이 x라면 반복문을 수행한다.
  while (y != T->nil && y->right == x) {
    // 루트를 향해서 한 레벨씩 올라간다.
    x = y; 
    y = y->parent;
  }
  return y;
}

// 최소값을 가진 노드를 반환하는 함수
TreeNode * min_value_node(RBTree* T, TreeNode * node)
{
	TreeNode * current = node;

	// 맨 왼쪽 단말 노드를 찾으러 내려간다
	while (current->left != T->nil)
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

// 중위 순회 함수 (결과 확인용)
void inorder(RBTree* T, TreeNode* curRoot) {
	if (curRoot != T->nil) // curRoot가 nil이 아닐 경우
	{ // 왼쪽 서브트리 - 루트 - 오른쪽 서브트리로 순회한다.
		inorder(T, curRoot->left);
		printf("[%d] ", curRoot->key);
		inorder(T, curRoot->right);
	}
}

// x 노드의 블랙높이를 계산하는 함수
// 블랙높이: x로부터 리프노드까지의 경로상의 블랙 노드의 개수(x 자신은 미포함)
int get_black_height(RBTree* T, TreeNode* x) {
  int black_node_count = 0;

  /* 레드블랙트리의 특성 4에 의하여, 
  x에서 어떤 경로로 내려가든 블랙높이는 동일하다. */
  while (x != T->nil) { // x가 nil 노드가 아니면 반복문을 수행한다.
    if (x->left != T->nil) // x의 왼쪽 자식이 존재한다면
      x = x->left; // x를 x의 왼쪽 자식으로 변경한다.
    else // 그렇지 않다면 (x가 단말 노드이거나 오른쪽 자식만 존재하는 경우)
      x= x->right; // x를 x의 오른쪽 자식으로 변경한다.

    // 노드의 색깔이 블랙이면 개수를 1 증가시킨다. (nil 노드 포함)
    if (x->color == BLACK)
      black_node_count++;
  }
  return black_node_count; // 블랙 노드의 개수를 반환한다.
}

int main(void)
{
  RBTree* T = create_RBTree(); // 레드블랙트리 생성 및 초기화

  // 노드 생성
  TreeNode* node_30 = new_node(30); 
  TreeNode* node_20 = new_node(20); 
  TreeNode* node_10 = new_node(10); 
  TreeNode* node_40 = new_node(40); 
  TreeNode* node_50 = new_node(50); 
  TreeNode* node_60 = new_node(60); 

  // 레드블랙트리에 삽입
  RBT_insert(T, node_30);
  RBT_insert(T, node_20);
  RBT_insert(T, node_10);
  RBT_insert(T, node_40);
  RBT_insert(T, node_50);
  RBT_insert(T, node_60);

  // 결과 출력
  printf("삽입 결과\n");
  printf("=================================================\n");
  printf("node_20의 블랙높이: %d, 컬러: %d \n", 
  get_black_height(T, node_20), node_20->color);
  printf("node_10의 블랙높이: %d, 컬러: %d \n", 
  get_black_height(T, node_10), node_10->color);
  printf("node_40의 블랙높이: %d, 컬러: %d \n", 
  get_black_height(T, node_40), node_40->color);
  printf("node_30의 블랙높이: %d, 컬러: %d \n", 
  get_black_height(T, node_30), node_30->color);
  printf("node_50의 블랙높이: %d, 컬러: %d \n", 
  get_black_height(T, node_50), node_50->color);
  printf("node_60의 블랙높이: %d, 컬러: %d \n", 
  get_black_height(T, node_60), node_60->color);
  printf("     (컬러 1은 BLACK, 0은 RED) \n");
  printf("\n\n");

  printf("삭제 결과\n");
  printf("=================================================\n");
  printf("삭제 전 중위 순회: "); inorder(T, T->root);
  printf("\n"); 
  RBT_delete(T, node_10);
  printf("노드 10 삭제: "); inorder(T, T->root); 
  printf("\n"); 
  RBT_delete(T, node_30);
  printf("노드 30 삭제: "); inorder(T, T->root);
  printf("\n"); 
  RBT_delete(T, node_60);
  printf("노드 60 삭제: "); inorder(T, T->root);
  printf("\n"); 
  RBT_delete(T, node_50);
  printf("노드 50 삭제: "); inorder(T, T->root);
  printf("\n"); 
  RBT_delete(T, node_40);
  printf("노드 40 삭제: "); inorder(T, T->root);
  printf("\n"); 
  RBT_delete(T, node_20);
  printf("노드 20 삭제: "); inorder(T, T->root);
  printf("\n"); 

  // printf("%d %d \n", T->root->key, T->root->color);
  // printf("%d %d \n", T->root->left->key, T->root->left->color);
  // printf("%d %d \n", T->root->right->key, T->root->right->color);
  // printf("%d %d \n", T->root->right->left->key, T->root->right->left->color);
  // printf("%d %d \n", T->root->right->right->key, T->root->right->right->color);
  // printf("%d %d \n", T->root->right->right->right->key, 
  // T->root->right->right->right->color);
  
	return 0;
}
