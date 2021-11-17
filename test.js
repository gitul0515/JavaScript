// 얕은 복사
const array1 = [2, 1];
const array2 = [...array1];
const array3 = array1;

console.log(array1); // [2, 1]
console.log(array2); // [2, 1]
console.log(array3); // [2, 1]

console.log(array1 === array2); // false: array1과 array2는 다른 객체를 가리킨다
console.log(array1 === array3); // true: array1과 array3는 같은 객체를 가리킨다
