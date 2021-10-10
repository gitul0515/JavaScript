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
  // this.size = 0; // 노드의 개수
};

// 중위 순회 함수
BinarySearchTree.prototype.inOrder = function (root = this.root) {
  if (root) {
    this.inOrder(root.left);
    process.stdout.write(`${root.value} `);
    this.inOrder(root.right);
  }
};

// 이진 탐색 트리 삽입 함수 (반복)
BinarySearchTree.prototype.insert1 = function (value) {
  if (!this.root) { // 트리가 공백 상태인 경우
    this.root = new BinarySearchTreeNode(value);
    // this.size++;
  } else {
    let curRoot = this.root;
    for (;;) {
      if (curRoot.value < value) {
        if (curRoot.right === null) {
          curRoot.right = new BinarySearchTreeNode(value);
          // this.size++;
          break;
        } else curRoot = curRoot.right;
      } else if (curRoot.value > value) {
        if (curRoot.left === null) {
          curRoot.left = new BinarySearchTreeNode(value);
          // this.size++;
          break;
        } else curRoot = curRoot.left;
      } else { // 현재 루트와 값이 같은 경우.
        break; // 이진 탐색 트리는 중복값을 허용하지 않는다. (변화 없음)
      }
    }
  }
};
const tree = new BinarySearchTree();
tree.insert1(30); tree.insert1(20);
tree.insert1(10); tree.insert1(25);
tree.insert1(40); tree.insert1(50);
tree.inOrder(); console.log();
console.log(tree.size);

BinarySearchTree.prototype.remove = function (value) {
  function findMin(curRoot) {
    while(curRoot.left) {
      curRoot = curRoot.left;
    }
    return curRoot;
  }

  function removeRecursively(curRoot, value) {
    // 트리가 공백이거나, 삭제할 값이 존재하지 않는 경우
    if (!curRoot) return null;

    if (value > curRoot.value) {
      curRoot.right = removeRecursively(curRoot.right, value);
    } else if (value < curRoot.value) {
      curRoot.left = removeRecursively(curRoot.left, value);
    } else {
      if (!curRoot.left && !curRoot.right) { // 단말 노드인 경우
        if (curRoot === this.root) { // 단말 노드가 루트 노드인 경우
          this.root = null;
        }
        return null;
      } else if (!curRoot.left) { // 자식 노드가 1개인 경우 (오른쪽 자식 노드)
        return curRoot.right;
      } else if (!curRoot.right) { // 자식 노드가 1개인 경우 (왼쪽 자식 노드)
        return curRoot.left;
      } else { // 자식 노드가 2개인 경우: 오른쪽 서브 트리에서 최소값을 찾는다
        const temp = findMin(curRoot.right);
        curRoot.value = temp.value;
        curRoot.right = removeRecursively(curRoot.right, temp.value);
      }
    }
    return curRoot;
  }
  return removeRecursively.call(this, this.root, value);
};
tree.remove(20);
tree.remove(30);
tree.remove(40);
tree.remove(10);
tree.remove(25);
tree.remove(50);
tree.inOrder();
