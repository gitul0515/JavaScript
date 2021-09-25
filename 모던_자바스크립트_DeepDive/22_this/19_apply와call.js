// apply와 call 메서드는 첫 번째 인수로 전달한
// 특정 객체를 호출한 함수의 this에 바인딩한다.
function getThisBinding() {
  return this;
}

// this로 사용할 객체
const thisArg = { a: 1 };

console.log(getThisBinding()); // window
console.log(getThisBinding.apply(thisArg)); // {a: 1}
console.log(getThisBinding.call(thisArg)); // {a: 1}
console.log('------------------------------');

// apply와 call 메서드를 통해
// 함수를 호출하면서 인수를 전달할 수 있다.
function getThisBinding2(...args) {
  console.log(args);
  return this;
}

// this로 사용할 객체
const thisArg2 = { a: 1 };

// apply 메서드는 호출할 함수의 인수를 배열로 전달한다.
console.log(getThisBinding2.apply(thisArg2, [1, 2, 3])); // [1, 2, 3]  { a: 1 }

// call 메서드는 호출할 함수의 인수를 쉼표로 구분하여 전달한다.
console.log(getThisBinding2.call(thisArg2, 1, 2, 3)); // [1, 2, 3]  { a: 1 }
