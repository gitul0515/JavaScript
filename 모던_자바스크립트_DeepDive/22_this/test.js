function getThisBinding() {
  return this;
}

// this로 사용할 객체
const obj = { a: 1 };

console.log(getThisBinding.bind(obj));
console.log(getThisBinding.bind(obj)());
