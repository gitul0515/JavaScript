// 트리 레벨 순회 알고리즘 (너비 우선 탐색)
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

tree.root.left.right = new BinaryTreeNode(2);
tree.root.left.right.right = new BinaryTreeNode(3);
tree.root.right.right.right = new BinaryTreeNode(6);
tree.root.right.right.right.left = new BinaryTreeNode(7);

// ----------- 큐 코드 시작 --------------
class Queue {
    #array; // private class member

    constructor(array = []) {
      if (!Array.isArray(array)) {
        throw new TypeError(`${array} is not an array.`);
      }
      this.#array = array;
    }

    // 큐가 공백상태인지 확인한다.
    isEmpty() {
      return this.#array.length === 0;
    }

    // 큐의 가장 마지막에 데이터를 밀어 넣는다.
    enqueue(value) {
      return this.#array.push(value);
    }

    // 큐의 가장 처음 데이터를 꺼낸다.
    dequeue() {
      // 큐가 공백상태라면 null을 반환한다.
      if (this.isEmpty()) {
        return null;
      }
      return this.#array.shift();
    }

    // 큐의 가장 처음 데이터를 확인한다.
    peek() {
      // 큐가 공백상태라면 null을 반환한다.
      if (this.isEmpty()) {
        return null;
      }
      return this.#array[0];
    }

    // 큐의 복사본 배열을 반환한다.
    entries() {
      return this.#array.slice();
    }
}
// ----------- 큐 코드 종료 --------------

// 이진 트리 레벨 순회 함수
BinaryTree.prototype.levelOrder = function () {
  // 이진 트리가 공백이 아닌 경우만 순회한다
  if (this.root !== null) {
    const queue = new Queue([this.root]); // 큐를 생성하면서 루트 노드를 삽입

    // 큐가 공백이 될 때까지 반복한다
    while (!queue.isEmpty()) {
      const curRoot = queue.dequeue(); // 처음에 있는 데이터를 꺼내어 출력한다. (const의 유효 범위 확인)
      process.stdout.write(`${curRoot.value} `);
      if (curRoot.left) queue.enqueue(curRoot.left); // 왼쪽 서브트리가 null이 아니면 큐에 삽입
      if (curRoot.right) queue.enqueue(curRoot.right); // 오른쪽 서브트리가 null이 아니면 큐에 삽입
    }
  }
};

tree.levelOrder(); // 15 4 20 1 2 16 25 3 6 7
