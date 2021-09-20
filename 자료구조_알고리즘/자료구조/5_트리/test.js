// 이진 탐색 트리 알고리즘
// 이진 탐색 트리 노드 생성자 함수
const BinarySearchTreeNode = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

// 이진 탐색 트리 기본 생성자 함수
const BinarySearchTree = function () {
  this.root = null;
};

// 중위 순회 함수
BinarySearchTree.prototype.inOrder = function (node = this.root) {
  if (node !== null) {
    this.inOrder(node.left);
    process.stdout.write(`${node.value} `);
    this.inOrder(node.right);
  }
};

// 이진 트리 삽입 함수 (반복)
BinarySearchTree.prototype.insert1 = function (value) {
  if (!this.root) { // 이진 트리가 공백 상태인 경우
    this.root = new BinarySearchTreeNode(value);
  } else {
    let curRoot = this.root;
    for (;;) {
      if (curRoot.value < value) {
        if (curRoot.right === null) {
          curRoot.right = new BinarySearchTreeNode(value);
          break;
        } else curRoot = curRoot.right;
      } else if (curRoot.value > value) {
        if (curRoot.left === null) {
          curRoot.left = new BinarySearchTreeNode(value);
          break;
        } else curRoot = curRoot.left;
      } else break; // 중복된 값이면 반복문을 빠져나온다.
    } // 이진 탐색 트리는 중복값을 허용하지 않는다.
  }
};

const tree = new BinarySearchTree();
tree.insert1(30); tree.insert1(20); tree.insert1(10);
tree.insert1(40); tree.insert1(50); tree.insert1(60);
tree.insert1(60);
tree.inOrder();

// 이진 트리 삽입 함수 (재귀)
BinarySearchTree.prototype.insert2 = function (value) {
  if (!this.root) {
    this.root = new BinarySearchTreeNode(value);
  } else {
    (function insertRecursion(curRoot) {
      if (curRoot.value < value) {
        if (curRoot.right === null) {
          curRoot.right = new BinarySearchTreeNode(value);
        } else insertRecursion(curRoot.right);
      } else if (curRoot.value > value) {
        if (curRoot.left === null) {
          curRoot.left = new BinarySearchTreeNode(value);
        } else insertRecursion(curRoot.left);
      }
    }(this.root));
  }
};

const tree2 = new BinarySearchTree();
tree2.insert2(30); tree2.insert2(20); tree2.insert2(10);
tree2.insert2(40); tree2.insert2(50); tree2.insert2(60);
tree2.insert2(60);
tree2.inOrder();
