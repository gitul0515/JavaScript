// 배열 결합 메소드인 concat을 대체할 수 있다.
// concat
const arr1 = [1, 2].concat([3, 4]);
console.log(arr1); // [1, 2, 3, 4]

// 스프레드 문법
const arr2 = [...[1, 2], ...[3, 4]];
console.log(arr2); // [1, 2, 3, 4]
