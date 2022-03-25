// 트라이(Trie)
// 문자열을 저장하고 효율적으로 탐색하기 위한 트리 형태의 자료구조
class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (currentNode.children.has(char) === false) {
        currentNode.children.set(
          char,
          new Node(currentNode.value + char)
        );
      }
      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;
    for (const char of string) {
      if (currentNode.children.has(char) === false) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");
console.log(trie.has("cat")); // true
console.log(trie.has("can")); // true
console.log(trie.has("cap")); // false
