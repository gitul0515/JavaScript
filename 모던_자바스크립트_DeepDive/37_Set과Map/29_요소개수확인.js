// Map 객체의 요소 개수를 확인할 때는 size 프로퍼티를 사용한다.
const map = new Map([[1, 2], [3, 4], [5, 6], [7, 8]]);
console.log(map.size); // 4

// size 프로퍼티에 숫자를 할당할 수 없다.
map.size = 10;
console.log(map.size); // 4
