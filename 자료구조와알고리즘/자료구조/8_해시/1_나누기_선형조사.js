// 나누기 방법 & 선형 조사
function HashTable(size) {
  this.size = size;
  this.keys = this.initArray(size);
  this.values = this.initArray(size);
  this.limit = 0;
}

// 해시 테이블에 자료를 저장
HashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) throw new TypeError('hash table is full');

  let hashedIndex = this.hash(key);

  // 선형 조사
  while (this.keys[hashedIndex] !== null) {
    hashedIndex++;
    hashedIndex %= this.size;
  }

  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
};

// 해시 테이블에서 자료를 취득
HashTable.prototype.get = function (key) {
  let hashedIndex = this.hash(key);
  let probeCnt = 0; // 조사 횟수를 기록하는 변수

  // 선형 조사
  while (this.keys[hashedIndex] !== key) {
    hashedIndex++;
    hashedIndex %= this.size;

    // 잘못된 키를 입력한 경우
    probeCnt++;
    if (probeCnt === this.size) { // 한 바퀴를 돌았는데 hashedIndex를 찾지 못했다면
      throw new TypeError('key error'); // 키 에러이다.
    }
  }
  return this.values[hashedIndex];
};

// 해시 함수
HashTable.prototype.hash = function (key) {
  // 키가 정수인지 확인한다.
  if (!Number.isInteger(key)) {
    throw new TypeError('must be int');
  }
  return key % this.size; // 나누기 방법
};

// 해시 테이블 초기화 함수
HashTable.prototype.initArray = function (size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(null); // null로 초기화
  }
  return array;
};

const hash = new HashTable(13);
hash.put(7, 'hi');
hash.put(20, 'hello');
hash.put(33, 'sunny');
hash.put(46, 'weather');
hash.put(59, 'wow');
hash.put(72, 'forty');
hash.put(85, 'happy');
hash.put(98, 'sad');
console.log(hash.keys);
console.log(hash.values);

console.log(hash.get(59)); // 'wow'
console.log(hash.get(72)); // 'forty'
console.log(hash.get(98)); // 'sad'
console.log(hash.get(100)); // key error
