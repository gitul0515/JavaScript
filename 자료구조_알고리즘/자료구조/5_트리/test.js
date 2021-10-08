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

// 이진 탐색 트리 탐색 함수 (반복)
BinarySearchTree.prototype.search1 = function (value) {
  // 트리가 공백상태인 경우
  if (!this.root) {
    throw new TypeError('Tree is empty.');
  }

  let curRoot = this.root;
  while (curRoot) {
    if (curRoot.value < value) {
      curRoot = curRoot.right; // 오른쪽으로 범위를 좁혀 탐색한다.
    } else if (curRoot.value > value) {
      curRoot = curRoot.left; // 왼쪽으로 범위를 좁혀 탐색한다.
    } else break; // value와 일치하는 경우
  }
  return curRoot; // 해당 value가 있는 노드를 반환한다. 없으면 null을 반환
};

// 이진 탐색 트리 탐색 함수 (재귀)
BinarySearchTree.prototype.search2 = function (value) {
  // 트리가 공백상태인 경우
  if (!this.root) {
    throw new TypeError('Tree is empty.');
  }

  // 즉시 실행 함수를 재귀적으로 호출한다.
  function Recursion(curRoot) {
    if (!curRoot) return curRoot; // curRoot가 null인 경우, 탐색 실패
    if (curRoot.value < value) {
      return Recursion(curRoot.right); // 오른쪽으로 범위를 좁혀 탐색한다.
    }
    if (curRoot.value > value) {
      return Recursion(curRoot.left); // 왼쪽으로 범위를 좁혀 탐색한다.
    }
    return curRoot; // 탐색 성공. 해당 value가 있는 노드를 반환한다.
  }

  return Recursion(this.root);
};

// 이진 탐색 트리 삽입 함수 (반복)
BinarySearchTree.prototype.insert1 = function (value) {
  if (!this.root) { // 트리가 공백 상태인 경우
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

console.log(tree1.search2(10));
console.log(tree1.search2(60));
console.log(tree1.search2(12)); // null
