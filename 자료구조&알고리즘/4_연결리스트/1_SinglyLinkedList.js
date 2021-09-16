// 연결 리스트 노드의 생성자 함수
const LinkedListNode = function (data) {
  this.data = data;
  this.next = null;
};

// 연결 리스트의 기본 생성자 함수
const LinkedList = function () {
  this.head = null;
  this.size = 0;
};

// 연결 리스트가 공백 상태인지 확인하는 메서드
LinkedList.prototype.isEmpty = function () {
  return this.size === 0;
};

// 연결 리스트에 항목을 삽입하는 메서드
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

// 특정 항목이 존재하는지 검색하는 메서드
LinkedList.prototype.search = function (value) {
  // 연결 리스트가 공백상태일 경우
  if (this.isEmpty()) {
    throw new TypeError('연결 리스트가 공백상태입니다.');
  }

  let cur;
  for (cur = this.head; cur.next; cur = cur.next) {
    if (cur.data === value) return true;
  }
  // 마지막 노드 검사
  if (cur.data === value) return true;
  return false; // 항목을 찾을 수 없는 경우
};

// 연결 리스트의 특정 항목을 삭제하는 메서드
LinkedList.prototype.remove = function (value) {
  // 연결 리스트가 공백상태일 경우
  if (this.isEmpty()) {
    throw new TypeError('연결 리스트가 공백상태입니다.');
  }

  let cur = this.head;
  // 삭제할 값이 첫 노드에 있을 경우
  if (cur.data === value) {
    this.head = cur.next;
    this.size--;
  } else { // 삭제할 값이 중간 노드에 있을 경우
    let prev = cur;
    cur = cur.next;
    while (cur.next) {
      if (cur.data === value) {
        prev.next = cur.next;
        prev = cur;
        cur = cur.next;
        break;
      }
      prev = cur;
      cur = cur.next;
    }
    // 삭제할 값이 마지막 노드에 있을 경우
    if (cur.data === value) {
      prev.next = null;
    }
    this.size--;
  }
};

// 연결 리스트의 첫 노드를 삭제하는 메서드
LinkedList.prototype.removeFirst = function () {
  // 연결 리스트가 공백상태일 경우
  if (this.isEmpty()) {
    throw new TypeError('연결 리스트가 공백상태입니다.');
  }
  const returnValue = this.head.data;
  this.head = this.head.next;
  this.size--;
  return returnValue;
};

// 연결 리스트의 내용을 출력하는 메서드
LinkedList.prototype.printList = function () {
  // 연결 리스트가 공백 상태일 경우
  if (this.isEmpty()) {
    return;
  }

  let cur = this.head;
  while (cur.next) {
    process.stdout.write(`${cur.data}->`);
    cur = cur.next;
  }
  process.stdout.write(`${cur.data}->null`);
};

const sll = new LinkedList();
sll.insert(3); // 3 -> null
sll.insert(2); // 2 -> 3 -> null
sll.insert(1); // 1 -> 2 -> 3 -> null

console.log(sll.search(3));
console.log(sll.search(2));
console.log(sll.search(1));

sll.removeFirst();

// 결과 출력
sll.printList(); // 2 -> 3 -> null
