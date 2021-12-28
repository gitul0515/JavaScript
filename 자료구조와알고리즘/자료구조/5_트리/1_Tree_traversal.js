// 이진 트리 순회 알고리즘 (재귀)
// 이진 트리 노드 생성자 함수
const BinaryTreeNode = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

// 이진 트리 기본 생성자 함수
const BinaryTree = function () {
  this.root = null; // 이진 트리에는 항상 루트 노드가 있다.
};

// 이진 트리 생성
const tree = new BinaryTree();
tree.root = new BinaryTreeNode(15);
tree.root.left = new BinaryTreeNode(4);
tree.root.right = new BinaryTreeNode(20);
tree.root.left.left = new BinaryTreeNode(1);
tree.root.right.left = new BinaryTreeNode(16);
tree.root.right.right = new BinaryTreeNode(25);

// 중위 순회
// 왼쪽 서브트리 - 루트 - 오른쪽 서브트리
BinaryTree.prototype.inOrder = function (node = this.root) {
  if (node !== null) {
    this.inOrder(node.left);
    process.stdout.write(`${node.value} `);
    this.inOrder(node.right);
  }
};
tree.inOrder(); // 1 4 15 16 20 25
process.stdout.write('\n');

// 전위 순회
// 루트 - 왼쪽 서브트리 - 오른쪽 서브트리
BinaryTree.prototype.preOrder = function (node = this.root) {
  if (node !== null) {
    process.stdout.write(`${node.value} `);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
};
tree.preOrder(); // 15 4 1 20 16 25
process.stdout.write('\n');

// 후위 순회
// 왼쪽 서브트리 - 오른쪽 서브트리 - 루트
BinaryTree.prototype.postOrder = function (node = this.root) {
  if (node !== null) {
    this.postOrder(node.left);
    this.postOrder(node.right);
    process.stdout.write(`${node.value} `);
  }
};
tree.postOrder(); // 1 4 16 25 20 15
process.stdout.write('\n');
