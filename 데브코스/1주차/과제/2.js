// 단어 자동 완성 알고리즘
// 트라이(Trie) 자료구조
class TrieNode {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.isWord = false; // 예) 'star'를 삽입했다면, 'star'는 단어지만 'st'는 단어가 아니다.
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(string) {
    let curNode = this.root;
    for (const char of string) {
      if (curNode.children.has(char) === false) {
        curNode.children.set(
          char,
          new TrieNode(curNode.value + char)
        );
      }
      curNode = curNode.children.get(char);
    }
    curNode.isWord = true; // 현재 노드의 값은 단어임을 체크한다.
  }

  // 단어 자동 완성 메서드
  autoComplete(string) {
    const result = [];
    let curNode = this.root;

    for (const char of string) {
      if (curNode.children.has(char) === false) {
        return '자동 완성할 단어가 없습니다.';
      }
      curNode = curNode.children.get(char);
    }

    // 레벨 순회하면서 단어들을 찾는다.
    const queue = new Queue();
    queue.enqueue(curNode);
    while(!queue.isEmpty()) {
      curNode = queue.dequeue();
      // 자식 노드가 존재하면, 자식 노드를 큐에 삽입한다. 
      if (curNode.children.size > 0) {
        for (const node of curNode.children.values()) {
          queue.enqueue(node);
        }
      } 
      // 해당 노드가 '단어'라면 값을 저장한다. 
      if (curNode.isWord === true) {
        result.push(curNode.value);
      }
    }
    return result;
  }
}

// 큐(Queue) 자료구조
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  get size() {
    return this.rear - this.front;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

// 초기화
const trie = new Trie();

// 단어 삽입
trie.insert("cat");
trie.insert("can");
trie.insert("canon");
trie.insert("bat");
trie.insert("bag");
trie.insert("baggage");
trie.insert("bow");
trie.insert("bowl");

// 자동 완성 단어 출력
console.log(trie.autoComplete('c')); // [ 'cat', 'can', 'canon' ]
console.log(trie.autoComplete('b')); // [ 'bat', 'bag', 'bow', 'bowl', 'baggage' ]
console.log(trie.autoComplete('bo')); // [ 'bow', 'bowl' ]
console.log(trie.autoComplete('ba')); // [ 'bat', 'bag', 'baggage' ]
console.log(trie.autoComplete('z')); // 자동 완성할 단어가 없습니다.
