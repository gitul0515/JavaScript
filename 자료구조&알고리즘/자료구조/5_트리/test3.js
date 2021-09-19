// 즉시 실행 함수도 재귀적으로 호출할 수 있는가? 그렇다!
const res = (function foo(num) {
  let number = num;
  if (number < 10) {
    return foo(++number);
  }
  return number;
}(1));

console.log(res);
