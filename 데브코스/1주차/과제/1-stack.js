// 트리 순회 알고리즘 (스택)
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  makeTreeNode(value, left, right) {
    const newNode = new TreeNode(value, left, right);
    this.root = newNode;
    return newNode;
  }

  // 전위 순회
  preOrder () {
    let curNode = this.root;
    if (!curNode) return null;

    let result = '';
    const stack = new Stack();
    while (true) {
      for (; curNode; curNode = curNode.left) { // 가장 왼쪽 서브트리로 이동
        result += `${curNode.value} `;
        stack.push(curNode); 
      }
      curNode = stack.pop();
      if (!curNode) break;
      curNode = curNode.right;
    }
    return result;
  }

  // 중위 순회
  inOrder () {
    let curNode = this.root;
    if (!curNode) return null;

    let result = '';
    const stack = new Stack();
    while (true) {
      for (; curNode; curNode = curNode.left) { // 가장 왼쪽 서브트리로 이동
        stack.push(curNode); 
      }
      curNode = stack.pop();
      if (!curNode) break;
      result += `${curNode.value} `;
      curNode = curNode.right;
    }
    return result;
  }

  // 후위 순회 
  postOrder () {
    let curNode = this.root;
    if (!curNode) return null;

    let result = '';
    const stack = new Stack();
    const checked = {}; // 노드의 중복 검사를 방지하기 위함이다.
    while (true) {
      for (; curNode; curNode = curNode.left) { // 가장 왼쪽 서브트리로 이동
        stack.push(curNode); 
        checked[curNode.value] = false;
      }
      curNode = stack.peek(); // 노드를 peek으로 검사한다. 
      if (!curNode) break; 

      // 오른쪽 자식 노드가 있다면, 오른쪽 자식 노드로 이동한다. 
      if (curNode.right && checked[curNode.value] === false) {
        checked[curNode.value] = true; // 현재 노드를 검사했음을 체크
        curNode = curNode.right; 
      } else { // 현재 노드를 꺼내어 출력한다. 
        curNode = stack.pop();
        result += `${curNode.value} `;
        curNode = null;
      }
    }
    return result;
  };
}

// 스택(Stack) 자료구조
class Stack {
  constructor() {
    this.array = []; 
    this.top = -1;
  }

  push(item) {
    this.array[++this.top] = item;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.array[this.top--];
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.array[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }
}

// 트리 생성
const tree = new Tree();
const n6 = tree.makeTreeNode(1, null, null);
const n5 = tree.makeTreeNode(16, null, null);
const n4 = tree.makeTreeNode(25, null, null);
const n3 = tree.makeTreeNode(4, n6, null);
const n2 = tree.makeTreeNode(20, n5, n4);
const n1 = tree.makeTreeNode(15, n3, n2);

// 전위 순회
console.log(tree.preOrder()); // 15 4 1 20 16 25

// 중위 순회
console.log(tree.inOrder()); // 1 4 15 16 20 25

// 후위 순회
console.log(tree.postOrder()); // 1 4 16 25 20 15
