// 힙 기본 함수
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
