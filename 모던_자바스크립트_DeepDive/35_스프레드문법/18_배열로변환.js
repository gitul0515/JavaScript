// 더 간단하게 이터러블을 배열로 변환할 수 있다.
// arguments 객체는 이터러블이다.
function sum() {
  // return [...arguments].reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1, 2, 3)); // 6

// 더 좋은 방법은 rest 파라미터를 사용하는 것이다.
function sum2(...rest) {
  return rest.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum2(1, 2, 3)); // 6

// 이터러블이 아닌 유사 배열 객체에는 스프레드문법을 쓸 수 없다.
const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
};
const array = [...arrayLike]; // TypeError: arrayLike is not iterable
console.log(array);

// 보충: 이터러블이 아닌 유사 배열 객체는
// Array.from 메서드를 쓰면 배열로 변경할 수 있다.
// const array = Array.from(arrayLike);
// console.log(array); // [1, 2, 3]
