// 트리 깊이 우선 탐색 알고리즘
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
tree.root.left.right = new BinaryTreeNode(3);
tree.root.right.left = new BinaryTreeNode(16);
tree.root.right.right = new BinaryTreeNode(25);

// ------------- 스택 코드 시작 -------------
class Stack {
  #array; // private class member

  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.#array = array;
  }

  // 스택이 공백상태인지 확인한다.
  isEmpty() {
    return this.#array.length === 0;
  }

  // 스택의 가장 마지막에 데이터를 밀어 넣는다.
  push(value) {
    return this.#array.push(value);
  }

  // 스택의 가장 마지막 데이터를 꺼낸다.
  pop() {
    // 스택이 공백상태라면 null을 반환한다.
    if (this.isEmpty()) {
      return null;
    }
    return this.#array.pop();
  }

  // 스택의 가장 마지막 데이터를 확인한다.
  peek() {
    // 스택이 공백상태라면 null을 반환한다.
    if (this.isEmpty()) {
      return null;
    }
    return this.#array[this.#array.length - 1];
  }

  // 스택의 복사본 배열을 반환한다.
  entries() {
    return this.#array.slice();
  }

  // 접근자 프로퍼티: 배열의 길이 반환
  get length() {
    return this.#array.length;
  }
}
// ------------- 스택 코드 종료 -------------

// 깊이 우선 탐색 함수
BinaryTree.prototype.dFSearch = function () {
  let curRoot = this.root;
  if (!curRoot) return null;
  const stack = new Stack(); // 스택 생성

  while (1) {
    for (; curRoot; curRoot = curRoot.left) { // 왼쪽 서브트리로 내려간다
      process.stdout.write(`${curRoot.value} `); // 해당 노드를 출력하고 스택에 push
      stack.push(curRoot);
    }
    curRoot = stack.pop();
    if (!curRoot) break;
    curRoot = curRoot.right;
  }
};

tree.dFSearch(); // 15 4 1 3 20 16 25
