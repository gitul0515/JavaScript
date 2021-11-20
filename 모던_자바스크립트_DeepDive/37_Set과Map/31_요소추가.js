// Map 객체에 요소를 추가할 때는 set 메서드를 사용한다.
const map = new Map();
console.log(map); // Map(0) {}

map.set('key1', 'value1');
console.log(map); // Map(1) { 'key1' => 'value1' }

// set 메서드를 연속적으로 호출할 수 있다.
map
  .set('key2', 'value2')
  .set('key3', 'value3');
console.log(map); // Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }
