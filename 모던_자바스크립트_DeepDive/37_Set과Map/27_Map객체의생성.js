// Map 객체는 키와 값의 쌍으로 이루어진 컬렉션이다.
// Map 생성자 함수는 이터러블을 인수로 전달받는다.
// 이터러블은 키와 값의 쌍으로 이루어진 요소로 구성되어야 한다.
const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map1);

// 중복된 키를 갖는 요소가 존재하면 값이 덮어써진다.
const map2 = new Map([['key1', 'value1'], ['key1', 'value2']]);
console.log(map2); // Map(1) { 'key1' => 'value2' }

const map3 = new Map([['one', 1], ['two', 2]]);
console.log(map3); // Map(2) { 'one' => 1, 'two' => 2 }

const map4 = new Map([1, 2]); // TypeError
console.log(map4);
