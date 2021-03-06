// Map 객체는 키 타입에 제한이 없다.
const map = new Map();

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };
const kwon = { name: 'Kwon' };

// 객체도 키로 사용할 수 있다.
map
  .set(lee, 'developer')
  .set(kim, 'designer')
  .set(kwon, 'developer')

console.log(map);
/* Map(2) {
  { name: 'Lee' } => 'developer',
  { name: 'Kim' } => 'designer',
  { name: 'Kwon' } => 'developer'
} */
