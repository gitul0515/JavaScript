// 기본 메서드를 사용해 구현하기 (클래스)
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

const queue = new Queue([{ root: null }]);
queue.enqueue({ value: 1, left: null, right: null });
queue.enqueue({ value: 2, left: null, right: null });
queue.enqueue({ value: 3, left: null, right: null });
queue.enqueue({ value: 4, left: null, right: null });

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
