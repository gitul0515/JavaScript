// Map 객체의 요소를 삭제하려면 delete 메서드를 사용한다.
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

map.delete(kim);
console.log(map); // Map(1) { { name: 'Lee' } => 'developer' }
map.delete('key'); // 무시
console.log(map); // Map(1) { { name: 'Lee' } => 'developer' }

// delete 메서드는 삭제 성공 여부를 나타내는 불리언 값을 반환한다.
console.log(map.delete(lee)); // true
console.log(map.delete('key')); // false
