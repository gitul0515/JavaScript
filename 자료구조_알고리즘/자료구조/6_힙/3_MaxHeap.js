// 최대 힙 알고리즘
// ----------- 힙 기본 함수 -----------
const Heap = function () {
  this.array = [null]; // 인덱스 0은 사용하지 않는다.
};

// 배열의 두 값을 교환하는 메서드
Heap.prototype.swap = function (index1, index2) { // 인덱스를 전달받는다
  const temp = this.array[index1];
  this.array[index1] = this.array[index2];
  this.array[index2] = temp;
};

// 부모의 인덱스를 리턴하는 메서드
Heap.prototype.parentIndex = function (index) {
  return parseInt(index / 2, 10);
};

// 부모의 값을 리턴하는 메서드
Heap.prototype.parent = function (index) {
  return this.array[this.parentIndex(index)];
};

// 왼쪽 자식의 인덱스를 리턴하는 메서드
Heap.prototype.leftChildIndex = function (index) {
  return index * 2;
};

// 왼쪽 자식의 값을 리턴하는 메서드
Heap.prototype.leftChild = function (index) {
  return this.array[this.leftChildIndex(index)];
};

// 오른쪽 자식의 인덱스를 리턴하는 메서드
Heap.prototype.rightChildIndex = function (index) {
  return (index * 2) + 1;
};

// 오른쪽 자식의 값을 리턴하는 메서드
Heap.prototype.rightChild = function (index) {
  return this.array[this.rightChildIndex(index)];
};

// 루트 노드의 값을 반환하는 메서드 (최대값 or 최소값)
Heap.prototype.peek = function () {
  return this.array[1];
};

// 힙의 크기를 반환하는 메서드
Heap.prototype.size = function () {
  return this.array.length - 1;
};
// ----------- 힙 기본 함수 끝 -----------

// 최대 힙 기본 함수
const MaxHeap = function () {
  this.array = [null]; // 처음 인덱스는 사용하지 않는다.
};
// 프로토타입을 복사하여 힙으로부터 메서드를 상속받는다.
MaxHeap.prototype = Object.create(Heap.prototype);

// 최대 힙 삽입 함수
MaxHeap.prototype.insert = function (item) {
  this.array[this.array.length] = item; // 마지막 노드에 삽입한다.
  let idx = this.array.length - 1;
  // 부모가 자식 노드보다 작으면 값을 교환해야 한다.
  while (this.parent(idx) && this.parent(idx) < this.array[idx]) {
    this.swap(this.parentIndex(idx), idx);
    idx = this.parentIndex(idx); // 인덱스를 위로 갱신한다.
  }
};

const hp = new MaxHeap();

hp.insert(1); hp.insert(10);
hp.insert(5); hp.insert(100);
hp.insert(8);
console.log(hp.array); // [null, 100, 10, 5, 1, 8]

// 최대 힙 삭제 함수
MaxHeap.prototype.delete = function () {
  const item = this.array[1]; // 최대값인 루트 노드를 반환한다.
  this.array[1] = this.array[this.array.length - 1]; // 마지막 노드를 루트 노드로 올린다.
  this.array.pop(); // 마지막 노드를 제거한다.

  // 최대 힙의 순서를 유지하는 코드
  let idx = 1;
  // 부모가 자식 노드보다 작으면 값을 교환해야 한다.
  while (this.leftChild(idx) && (this.leftChild(idx) > this.array[idx]
  || this.rightChild(idx) > this.array[idx])) {
    // 왼쪽과 오른쪽 자식 노드 중 큰 값과 교환한다.
    let biggerIndex = this.leftChildIndex(idx);
    if (this.rightChild(idx) && this.rightChild(idx) > this.array[biggerIndex]) {
      biggerIndex = this.rightChildIndex(idx);
    }
    this.swap(biggerIndex, idx);
    idx = biggerIndex; // 인덱스를 밑으로 갱신한다.
  }
  return item; // 최대값 반환
};

console.log(hp.delete()); // 100
console.log(hp.delete()); // 10
console.log(hp.delete()); // 8
console.log(hp.delete()); // 5
console.log(hp.delete()); // 1
console.log(hp.delete()); // undefined
console.log(hp.delete()); // undefined
