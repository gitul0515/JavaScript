// Map 객체의 요소를 일괄 삭제하려면 clear 메서드를 사용한다.
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

map.clear();
console.log(map); // Map(0) {}
