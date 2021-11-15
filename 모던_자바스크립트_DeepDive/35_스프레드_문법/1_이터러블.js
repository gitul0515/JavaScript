// 스프레드 문법은 이터러블을 개별 요소로 분리한다.
// 배열은 이터러블이다.
console.log(...[1, 2, 3]); // 1 2 3

// 문자열은 이터러블이다.
console.log(...'Hello'); // H e l l o

// Map과 Set은 이터러블이다.
console.log(...new Map([['a', '1'], ['b', '2']])); // ['a', '1'] ['b', '2']
console.log(...new Set([1, 2, 3])); // 1 2 3

// 일반 객체는 이터러블이 아니다.
console.log(...{ a: 1, b: 2 });// TypeError
