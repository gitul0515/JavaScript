// Map 객체의 요소를 순회하려면 forEach 메서드를 사용한다.
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

// 첫 번째 인수: 현재 순회 중인 요소값
// 두 번째 인수: 현재 순회 중인 요소키
// 세 번째 인수: 현재 순회 중인 Map 객체 자체
map.forEach((v, k, map) => console.log(v, k, map));
/*
  developer { name: 'Lee' } Map(2) {
  { name: 'Lee' } => 'developer',
  { name: 'Kim' } => 'designer'
}
designer { name: 'Kim' } Map(2) {
  { name: 'Lee' } => 'developer',
  { name: 'Kim' } => 'designer'
}
*/
