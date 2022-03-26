import Queue from "./queue.js";

// 트라이(Trie) 자료구조
class TrieNode {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.isWord = false;
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
    curNode.isWord = true;
  }

  autoComplete(string) {
    const result = [];
    let curNode = this.root;

    for (const char of string) {
      if (curNode.children.has(char) === false) {
        return [];
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

export const trie = new Trie();