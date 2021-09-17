// 연결 리스트 노드 생성자 함수
const LinkedListNode = function (value) {
  this.data = value;
  this.next = null;
};

// 연결 리스트 기본 생성자 함수
const LinkedList = function () {
  this.head = null;
  this.size = 0;
};

// 공백 상태인지 확인하는 메서드
LinkedList.prototype.isEmpty = function () {
  return this.size === 0;
};

// 연결 리스트에 삽입하는 메서드 (전위 삽입)
LinkedList.prototype.insert = function (value) {
  // 공백 상태인 경우
  if (this.isEmpty()) {
    this.head = new LinkedListNode(value);
  } else {
    const temp = this.head;
    this.head = new LinkedListNode(value);
    this.head.next = temp;
  }
  this.size++;
};

// 연결 리스트의 마지막에 삽입하는 메서드 (후위 삽입)
LinkedList.prototype.insertLast = function (value) {
  // 공백 상태인 경우
  if (this.isEmpty()) {
    this.head = new LinkedListNode(value);
  } else {
    // 마지막 노드로 이동한다.
    let last;
    for (last = this.head; last.next; last = last.next);
    // 마지막 노드의 next로 새로운 노드를 생성한다.
    last.next = new LinkedListNode(value);
  }
  this.size++;
};

// 연결 리스트의 노드를 출력하는 메서드
LinkedList.prototype.printNode = function () {
  // 공백 상태인 경우
  if (this.isEmpty()) {
    throw new TypeError('연결 리스트가 공백상태입니다.');
  }

  let cur;
  for (cur = this.head; cur; cur = cur.next) {
    process.stdout.write(`${cur.data}->`);
  }
  process.stdout.write('null\n');
};

const sll = new LinkedList();
sll.insert(5);
sll.insert(4);
sll.insert(3);

sll.printNode();
