// 최소힙 알고리즘 (클래스로 구현)
// 기본힙 클래스
class Heap {
  constructor() {
    this.heap = [null]; // 인덱스 0은 사용하지 않는다
  }

  // 부모의 값을 반환한다
  parent(index) {
    return this.heap[Math.floor(index / 2)];
  }

  // 왼쪽 자식의 값을 반환한다
  leftChild(index) {
    return this.heap[index * 2];
  }

  // 오른쪽 자식의 값을 반환한다
  rightChild(index) {
    return this.heap[index * 2 + 1];
  }

  // 힙의 두 값을 교환한다
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // 힙을 출력한다
  heapPrint() {
    this.heap.forEach(elem => process.stdout.write(`${elem} `));
    console.log();
  }

  // 루트를 반환한다 (최소값 또는 최대값)
  get root() {
    return this.heap[1] ? this.heap[1] : null;
  }

  // 힙의 크기 & 마지막 인덱스를 반환한다
  get size() {
    return this.heap.length - 1; // 인덱스 0은 제외
  }
}

// 최소힙 클래스
class MinHeap extends Heap {
  // 값을 삽입한다
  insert(value) {
    this.heap[this.size + 1] = value;
    let idx = this.size;

    while (this.parent(idx) && this.parent(idx) > this.heap[idx]) {
      const parentIdx = Math.floor(idx / 2);
      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  // 최소값(루트)를 삭제한다
  delete() {
    const min = this.heap[1];
    this.heap[1] = this.heap[this.size]; // 말단 노드를 루트 노드로 이동
    this.heap.pop();

    let idx = 1;
    while (this.leftChild(idx) && (this.leftChild(idx) < this.heap[idx]
            || this.rightChild(idx) < this.heap[idx])) {
      let smallerIdx = idx * 2;
      if (this.rightChild(idx) && this.rightChild(idx) < this.leftChild(idx)) {
        smallerIdx++;
      }
      this.swap(idx, smallerIdx);
      idx = smallerIdx;
    }
    return min;
  }

  // 최소값(루트)를 반환한다
  get getMin() {
    return super.root;
  }
}

const minHeap = new MinHeap();
minHeap.insert(12); minHeap.insert(2);
minHeap.insert(23); minHeap.insert(4);
minHeap.insert(13);
console.log(minHeap.getMin); // 2
minHeap.heapPrint(); // null 2 4 23 12 13

console.log(minHeap.delete()); // 2
console.log(minHeap.delete()); // 4
console.log(minHeap.delete()); // 12
console.log(minHeap.delete()); // 13
console.log(minHeap.delete()); // 23
console.log(minHeap.delete()); // undefined
