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

// 중위 순회
BinarySearchTree.prototype.inOrder = function (node) {
  if (node !== null) {
    this.inOrder(node.left);
    process.stdout.write(`${node.value} `);
    this.inOrder(node.right);
  }
};

// 이진 탐색 트리 삽입 함수 (반복)
BinarySearchTree.prototype.insert1 = function (value) {
  if (!this.root) { // 트리가 공백 상태인 경우
    this.root = new BinarySearchTreeNode(value);
  } else {
    let curRoot = this.root;
    while (true) {
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
      } else { // 현재 루트와 값이 같은 경우.
        break; // 이진 탐색 트리는 중복값을 허용하지 않는다.
      }
    }
  }
};
const tree1 = new BinarySearchTree();
tree1.insert1(30); tree1.insert1(20);
tree1.insert1(10); tree1.insert1(40);
tree1.insert1(50); tree1.insert1(60);

// 중위 순회를 통해 삽입 결과 확인
tree1.inOrder(tree1.root); // 10 20 30 40 50 60
process.stdout.write('\n');

// 이진 탐색 트리 삽입 함수 (재귀)
BinarySearchTree.prototype.insert2 = function (value) {
  if (!this.root) { // 트리가 공백 상태인 경우
    this.root = new BinarySearchTreeNode(value);
  } else {
    // 재귀용 중첩 함수를 선언한다.
    const insertRecursion = function (curRoot) {
      if (curRoot.value < value) {
        if (curRoot.right === null) {
          curRoot.right = new BinarySearchTreeNode(value);
        } else insertRecursion(curRoot.right);
      } else if (curRoot.value > value) {
        if (curRoot.left === null) {
          curRoot.left = new BinarySearchTreeNode(value);
        } else insertRecursion(curRoot.left);
      }
    };
    // 중첩 함수를 호출한다.
    insertRecursion(this.root);
  }
};

const tree2 = new BinarySearchTree();
tree2.insert2(30); tree2.insert2(20);
tree2.insert2(10); tree2.insert2(40);
tree2.insert2(50); tree2.insert2(60);

// 중위 순회를 통해 삽입 결과 확인
tree2.inOrder(tree2.root); // 10 20 30 40 50 60
process.stdout.write('\n');
