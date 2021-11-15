// 배열을 더 간단하게 복사할 수 있다 (얕은 복사)
// slice 메서드
const origin1 = [1, 2];
const copy1 = origin1.slice();
console.log(copy1); // [1, 2]
console.log(origin1 === copy1); // false

// 스프레드 문법
const origin2 = [1, 2];
const copy2 = [...origin2];
console.log(copy2); // [1, 2]
console.log(origin2 === copy2); // false
