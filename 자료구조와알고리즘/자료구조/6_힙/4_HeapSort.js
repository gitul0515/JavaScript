// 최소 힙 정렬 알고리즘
const preArray = []; // 정렬 전 배열 선언
for (let i = 0; i < 10; i++) { // 난수를 10개 생성하여 배열에 저장
  preArray[i] = Math.floor(Math.random() * 100); // 난수 범위: 0~99
}
const postArray = []; // 정렬 후 배열 선언

// ----------- 최소 힙 코드 시작 -----------
//  힙 기본 함수
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
  // 부모 노드가 자식 노드보다 크면 값을 교환해야 한다.
  while (this.parent(idx) && this.parent(idx) > this.array[idx]) {
    this.swap(this.parentIndex(idx), idx);
    idx = this.parentIndex(idx); // 인덱스를 위로 갱신한다.
  }
};

// 최소 힙 삭제 함수
MinHeap.prototype.delete = function () {
  const item = this.array[1]; // 최소값인 루트 노드를 반환한다.
  this.array[1] = this.array[this.array.length - 1]; // 마지막 노드를 루트 노드로 올린다.
  this.array.pop(); // 마지막 노드를 제거한다.

  // 최소 힙의 순서를 유지하는 코드
  let idx = 1;
  // 부모가 자식 노드보다 크면 값을 교환해야 한다.
  while (this.leftChild(idx) && (this.leftChild(idx) < this.array[idx]
  || this.rightChild(idx) < this.array[idx])) {
    // 왼쪽과 오른쪽 자식 노드 중 작은 값과 교환한다.
    let smallerIndex = this.leftChildIndex(idx);
    if (this.rightChild(idx) && this.rightChild(idx) < this.array[smallerIndex]) {
      smallerIndex = this.rightChildIndex(idx);
    }
    this.swap(smallerIndex, idx);
    idx = smallerIndex; // 인덱스를 밑으로 갱신한다.
  }
  return item; // 최소값 반환
};
// ----------- 최소 힙 코드 종료 -----------

const hp = new MinHeap();
// preArray 배열의 요소들을 힙에 삽입한다.
for (let i = 0; i < preArray.length; i++) {
  hp.insert(preArray[i]);
}

// 힙에서 하나씩 제거한다.
// postArray 배열의 앞에서부터 삽입한다.
for (let i = 0; i < preArray.length; i++) {
  postArray[i] = hp.delete(); // 최소값을 차례대로 저장
}

console.log(postArray);
