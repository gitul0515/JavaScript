// 최소 힙 알고리즘
// ----------- 힙 기본 함수 -----------
const Heap = function () {
  this.array = [null]; // 인덱스 0은 사용하지 않는다.
};

// 배열의 두 값을 교환하는 메서드
Heap.prototype.swap = function (index1, index2) { // 인덱스를 전달받는다
  [this.array[index1], this.array[index2]] = [this.array[index2], this.array[index1]];
};

// 부모의 값을 리턴하는 메서드
Heap.prototype.parent = function (index) {
  return this.array[Math.floor(index / 2)];
};

// 왼쪽 자식의 값을 리턴하는 메서드
Heap.prototype.leftChild = function (index) {
  return this.array[index * 2];
};

// 오른쪽 자식의 값을 리턴하는 메서드
Heap.prototype.rightChild = function (index) {
  return this.array[index * 2 + 1];
};

// 루트의 값을 반환하는 메서드 (최소값)
Heap.prototype.root = function () {
  return this.array[1] ? this.array[1] : null;
};
// ----------- 힙 기본 함수 끝 -----------

// 최소 힙 기본 함수
const MinHeap = function () {
  this.array = [null]; // 처음 인덱스는 사용하지 않는다.
};
// 프로토타입을 복사하여 힙으로부터 메서드를 상속받는다.
MinHeap.prototype = Object.create(Heap.prototype);

// 최소 힙 삽입 함수
MinHeap.prototype.insert = function (item) {
  this.array[this.array.length] = item; // 마지막 노드에 삽입한다.
  let idx = this.array.length - 1;

  // 부모 노드가 자식 노드보다 크면 값을 교환한다.
  while (this.parent(idx) && this.parent(idx) > this.array[idx]) {
    const parentIdx = Math.floor(idx / 2);
    this.swap(idx, parentIdx);
    idx = parentIdx; // 인덱스를 위로 갱신한다.
  }
};

const hp = new MinHeap();
hp.insert(12); hp.insert(2);
hp.insert(23); hp.insert(4);
hp.insert(13);
console.log(hp.array); // [null, 2, 4, 23, 12, 13]

// 최소 힙 삭제 함수
MinHeap.prototype.delete = function () {
  const item = this.array[1]; // 최소값인 루트 노드를 반환한다.
  this.array[1] = this.array[this.array.length - 1]; // 마지막 노드를 루트 노드로 올린다.
  this.array.pop(); // 마지막 노드를 제거한다.

  // 최소 힙의 순서를 유지하는 코드
  let idx = 1;
  // 부모가 자식 노드보다 크면 값을 교환해야 한다.
  // (힙에서 오른쪽 자식만 존재하는 경우는 있을 수 없다)
  while (this.leftChild(idx) && (this.leftChild(idx) < this.array[idx]
  || this.rightChild(idx) < this.array[idx])) {
    // 왼쪽과 오른쪽 자식 노드 중 작은 값과 교환한다.
    let smallerIdx = idx * 2;
    if (this.rightChild(idx) && this.rightChild(idx) < this.leftChild(idx)) {
      smallerIdx++;
    }
    this.swap(smallerIdx, idx);
    idx = smallerIdx; // 인덱스를 밑으로 갱신한다.
  }
  return item; // 최소값 반환
};

console.log(hp.root()); // 2
console.log(hp.delete()); // 2
console.log(hp.delete()); // 4
console.log(hp.delete()); // 12
console.log(hp.delete()); // 13
console.log(hp.delete()); // 23
console.log(hp.delete()); // undefined
