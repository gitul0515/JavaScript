// 즉시 실행 함수는 한 번만 호출되며 재호출할 수 없다.
// 반드시 그룹 연산자 ()로 감싸야 한다.
(function () { // 함수 이름을 쓰지 않는 것이 일반적이다.
  const x = 2;
  const y = 4;
  console.log(x + y); // 6
}()); // 함수 실행을 위해 ()를 작성

// 즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있다.
const res = (function () {
  const x = 2;
  const y = 4;
  return x + y;
}());
console.log(res); // 6

// 즉시 실행 함수에도 인수를 전달할 수 있다.
const res1 = (function (x, y) {
  return x + y;
}(2, 4));
console.log(res1); // 6

// 즉시 실행 함수도 재귀적으로 호출할 수 있는가? 그렇다!
const res2 = (function foo(num) {
  let number = num;
  if (number < 10) {
    return foo(++number);
  }
  return number;
}(1));

console.log(res2); // 10
