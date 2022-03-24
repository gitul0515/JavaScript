// 프린터 문제 (큐 미사용)
function solution(_priorities, _location) {
  let count = 0;
  const priorities = _priorities;
  let location = _location;
  
  for (let i = 0; i < priorities.length; i++) {
    const candidate = priorities[i];
    const rest = priorities.slice(i + 1);
    if (rest === []) {
      return count + 1;
    }
    if (rest.every(elem => candidate >= elem)) {
      count++;
      if (i === location) {
        return count;
      }
    } else {
      priorities.push(candidate);
      if (i === location) {
        location = priorities.length - 1;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5

// 프린터 (큐 사용)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
  }
}

function solution2(priorities, location) {
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  let count = 0;
  while (true) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count++;
      if (location === value[1]) {
        return count;
      }
    }
  }
}