// Map 객체에서 특정 요소를 취득하려면 get 메서드를 사용한다.
const map = new Map();

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

map
  .set(lee, 'developer')
  .set(kim, 'designer');

// 인수로 전달한 키를 갖는 값을 반환한다.
console.log(map.get(lee)); // developer
console.log(map.get(kim)); // designer
console.log(map.get('key')); // undefined

console.log(map.get(lee));
console.log(map.get(kim));

