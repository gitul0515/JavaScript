// ES6 배열 디스트럭처링 할당
const arr = [1, 2, 3];

// 변수 one, two, three를 선언하고 배열 arr을 디스트럭처링하여 할당한다.
// 할당 기준은 배열의 인덱스다. 즉, 순서대로 할당된다.
const [one, two, three] = arr;

console.log(one, two, three); // 1 2 3

// 변수의 개수와 이터러블의 요소 개수가 일치할 필요는 없다.
const [a, b] = [1, 2, 3];
console.log(a, b); // 1 2

const [c, d] = [1];
console.log(c, d); // 1 undefined

// 변수에 기본값을 설정할 수 있다.
// 기본값보다 할당된 값이 우선한다. 
const [x, y = 3, z = 3] = [1, 2];
console.log(x, y, z); // 1 2 3
