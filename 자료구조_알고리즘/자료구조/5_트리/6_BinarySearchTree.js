// 이진 탐색 트리 알고리즘 (삭제)
// 이진 탐색 트리 노드 생성자 함수
const BinarySearchTreeNode = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

// 이진 탐색 트리 생성자 함수
const BinarySearchTree = function () {
  this.root = null;
};

// 중위 순회 함수
BinarySearchTree.prototype.inOrder = function (root = this.root) {
  if (root) {
    this.inOrder(root.left);
    process.stdout.write(`${root.value} `);
    this.inOrder(root.right);
  }
};

// 이진 탐색 트리 탐색 함수 (반복)
BinarySearchTree.prototype.search1 = function (value) {
  // 트리가 공백상태인 경우
  if (!this.root) {
    throw new TypeError('트리가 공백상태입니다.');
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
const tree = new BinarySearchTree();
tree.insert1(30); tree.insert1(20);
tree.insert1(10);
tree.insert1(25);
tree.insert1(40); tree.insert1(50);

tree.inOrder();

// 이진 탐색 트리 삭제 함수
BinarySearchTree.prototype.remove = function (value) {
  // 트리가 공백상태인 경우
  if (!this.root) return null;

  let curRoot = this.root;
  let preRoot = curRoot;

  while (curRoot) {
    if (curRoot.value < value) {
      curRoot = curRoot.right; // 오른쪽으로 범위를 좁혀 탐색한다.
    } else if (curRoot.value > value) {
      preRoot = curRoot;
      curRoot = curRoot.left; // 왼쪽으로 범위를 좁혀 탐색한다.
    } else break; // value와 일치하는 경우
  }
  if (!curRoot) return '삭제 실패'; // 삭제할 값 탐색에 실패한 경우

  // 삭제할 노드의 차수가 0인 경우 (단말 노드)
  if (!curRoot.left && !curRoot.right) {
    if (preRoot === curRoot) this.root = null; // 루트 노드일 경우
    else if (preRoot.left === curRoot) preRoot.left = null; // 왼쪽에 위치할 경우
    else preRoot.right = null; // 오른쪽에 위치할 경우
  }

  // 삭제할 노드의 차수가 1인 경우
  if (curRoot.left !== null && curRoot.right === null) { // 왼쪽 자식 노드가 존재할 경우
    if (preRoot.left === curRoot) preRoot.left = curRoot.left; // 왼쪽에 위치할 경우
    else preRoot.right = curRoot.left; // 오른쪽에 위치할 경우
  } else if (curRoot.left === null && curRoot.right !== null) { // 오른쪽 자식 노드가 존재할 경우
    if (preRoot.left === curRoot) preRoot.left = curRoot.right; // 왼쪽에 위치할 경우
    else preRoot.right = curRoot.right; // 오른쪽에 위치할 경우
  }
  // 삭제할 노드의 차수가 2인 경우
  // return '삭제 성공';
};

console.log(tree.remove(20));
tree.inOrder();
