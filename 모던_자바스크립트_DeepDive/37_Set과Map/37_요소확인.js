// Map 객체에 특정 요소가 존재하는지 확인하려면 has 메서드를 사용한다.
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

console.log(map.has(lee)); // true
console.log(map.has(kim)); // true
console.log(map.has('key')); // false
