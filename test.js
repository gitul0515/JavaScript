class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  size() {
    return this.rear - this.front;
  }
}

class Node {
  constructor(value = '') {
    this.value = value;
    this.children = new Map();
    this.isWord = false;
  }

  get isEnd() {
    return this.children.size;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
      currentNode = currentNode.children.get(char);
    }
    currentNode.isWord = true;
  }

  has(string) {
    let currentNode = this.root;
    for (const char of string) {
      if (!currentNode.children.has(char)) return false;
      currentNode = currentNode.children.get(char);
    }
    return currentNode;
  }

  autoComplete(string) {
    const find = this.has(string);
    const hasList = [];

    if (!find) return;
    const queue = new Queue();
    queue.enqueue(find);

    while (queue.size()) {
      let currentNode = queue.dequeue();
      if (currentNode.isWord) hasList.push(currentNode.value);
      for (const value of currentNode.children.values()) {
        if (value) queue.enqueue(value);
      }
    }
    return hasList;
  }
}

const trie = new Trie();
trie.insert("banana");
trie.insert("ban");
trie.insert("banner");

console.log(trie.autoComplete("ban"));