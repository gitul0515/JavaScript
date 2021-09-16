// 연결리스트 노드 생성자 함수
const LinkedListNode = function (value) {
  this.data = value;
  this.next = null;
};

// 연결리스트 기본 생성자 함수
const LinkedList = function () {
  this.head = null;
  this.size = 0;
};

LinkedList.prototype.isEmpty = function () {
  return this.size === 0;
};

LinkedList.prototype.insert = function (value) {
  if (this.isEmpty()) {
    this.head = new LinkedListNode(value);
  } else {
    const temp = this.head;
    this.head = new LinkedListNode(value);
    this.head.next = temp;
  }
  this.size++;
};

const sll = new LinkedList();

sll.insert(3);
sll.insert(2);
sll.insert(1);

console.log(sll.head.data);
console.log(sll.head.next.data);
console.log(sll.head.next.next.data);
