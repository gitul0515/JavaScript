// 이진 트리 순회 알고리즘 (반복)
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
    const lastIndex = this.#array.length - 1;
    return this.#array[lastIndex];
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

// 중위 순회 알고리즘 (반복)
BinaryTree.prototype.inOrder = function () {
  let curRoot = this.root;
  if (!curRoot) return;

  const stack = new Stack(); // 스택 생성
    while (1) {
      for (; curRoot; curRoot = curRoot.left) {
        stack.push(curRoot); // 가장 왼쪽 서브트리로 이동하면서 스택에 삽입한다. 
      }
      curRoot = stack.pop();
      if (!curRoot) break; // 꺼낸 노드가 null이라면 반복을 종료
      process.stdout.write(`${curRoot.value} `); // 해당 노드의 값을 출력한다.
      curRoot = curRoot.right; // 오른쪽 자식 노드로 이동한다. (없을 경우 null을 저장)
    }
};

tree.inOrder(); // 1 4 15 16 20 25
process.stdout.write('\n');