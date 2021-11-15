// 스프레드 프로퍼티를 사용하면
// 객체의 프로퍼티 목록에서도 스프레드 문법을 사용할 수 있다.

// 객체 복사
const obj = { x: 1, y: 2 };
const copy = { ...obj };
console.log(copy); // { x: 1, y: 2 }
console.log(obj === copy); // false

// 객체 병합
const merged = { ...obj, ...{ a: 3, b: 4 } };
console.log(merged); // { x: 1, y: 2, a: 3, b: 4 }
